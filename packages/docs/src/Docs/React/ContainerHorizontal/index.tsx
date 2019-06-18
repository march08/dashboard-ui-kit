import * as React from "react";
import { Link } from "react-router-dom";
import { ContainerHorizontal } from "@duik/it";
import { H1 } from "components";
import { DocsContentPage, ExampleTable, ImportPath } from "../../components";

import PropTable from "./PropTable";

export const ReactDocsContainerHorizontal = () => {
  return (
    <DocsContentPage>
      <H1>ContainerHorizontal</H1>
      <ImportPath name="ContainerHorizontal" />

      <p>
        This container is a simple{" "}
        <a
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          rel="noopener noreferrer"
          target="_blank"
        >
          flexbox
        </a>{" "}
        container with flex-direction: row. It works in a similar way as a{" "}
        <code>{"<View />"}</code> from react-native component library - it
        distributes the children elements but in a horizontal direction. The
        primary intention of this component is to build a layout for your
        application with a very simple set of CSS properties. It automaticaly
        tries to set its height to 100%.{" "}
        <Link to="/docs/react/container-vertical">ContainerVertical</Link> is
        it's vertical variant. See a full usage on this{" "}
        <Link to="/docs/react/building-layout">page</Link>.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <div style={{ height: 300 }}>
                <ContainerHorizontal>
                  <div style={{ background: "red", flexGrow: 1 }}></div>
                  <div style={{ background: "blue", flexGrow: 1 }}></div>
                </ContainerHorizontal>
              </div>
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsContainerHorizontal;
