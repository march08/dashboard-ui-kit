import React from "react";
import classnames from "classnames";
import cls from "./styles.module.scss";
import { Button } from "@duik/it";
import { jsxToString } from "utils";

import { Code } from "components";

type CodeExampleProps = {
  children: React.ReactNode;
  code?: string;
  bgLight?: boolean;
};

export const CodeExample = (props: CodeExampleProps) => {
  const { bgLight } = props;
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={cls["example-table-container"]}>
      <div
        className={classnames(cls["code-example-render"], {
          [cls.bgLight]: bgLight
        })}
      >
        {props.children}
      </div>
      <div className={cls["code-example-code"]}>
        <div className={cls["show-hide"]}>
          <Button onClick={() => setVisible(!visible)} xs transparent>
            {visible ? "Hide" : "Show code"}
          </Button>
        </div>
        {visible && <Code>{props.code || jsxToString(props.children)}</Code>}
      </div>
    </div>
  );
};
