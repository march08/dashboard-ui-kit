import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/server";
import { html } from "js-beautify";
import { jsxToString, useLocalStorage } from "utils";
import { Code, CodeLang } from "components";
import cls from "./docspage.module.scss";

export type ExampleTableProps = {
  fixed?: boolean;
  data?: {
    content: React.ReactElement;
    code?: string;
  }[];
};

export const ExampleTable = (props: ExampleTableProps) => {
  const { data, fixed } = props;

  const [val, setVal] = useLocalStorage("active_code", "react");

  return (
    <div className={cls["example-table-container"]}>
      <table
        className={cls["example-table"]}
        style={{ tableLayout: fixed ? "fixed" : "inherit" }}
      >
        <tbody>
          {data &&
            data.map((item, index) => {
              const htmlCode = html(
                ReactDOM.renderToStaticMarkup(
                  <BrowserRouter>{item.content}</BrowserRouter>
                ),
                {
                  indent_size: 2,
                  inline: [],
                  wrap_line_length: 100
                }
              );

              const reacted = item.code || jsxToString(item.content);
              return (
                <tr key={index}>
                  <td>{item.content}</td>
                  <td>
                    <Code
                      style={{ display: val === "react" ? "block" : "none" }}
                    >
                      {reacted}
                    </Code>
                    <Code
                      style={{ display: val !== "react" ? "block" : "none" }}
                      language={CodeLang.markup}
                    >
                      {htmlCode}
                    </Code>

                    <div className={cls["code-switch"]}>
                      <span
                        onClick={() => setVal("react")}
                        role="button"
                        className={cls["code-switch-item"]}
                      >
                        React
                      </span>
                      <span
                        onClick={() => setVal("html")}
                        role="button"
                        className={cls["code-switch-item"]}
                      >
                        HTML Snippet
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
