import * as React from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@duik/it";
import { H1 } from "components";
import { DocsContentPage, ExampleTable, ImportPath } from "../../components";

import PropTable from "./PropTable";

export const ReactDocsScrollArea = () => {
  return (
    <DocsContentPage>
      <H1>ScrollArea</H1>
      <ImportPath name="ScrollArea" />

      <p>
        A shorthand for <code>overflow-y: auto</code> with some extra properties
        to make sure that your scroll area will work inside flexboxes. You can
        check example usage on the{" "}
        <Link to="/docs/react/building-layout#full-example">
          Building Layout
        </Link>{" "}
        page.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <div style={{ height: 400 }}>
                <ScrollArea>
                  <div style={{ background: "red", height: 300 }}></div>
                  <div style={{ background: "blue", height: 300 }}></div>
                </ScrollArea>
              </div>
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsScrollArea;
