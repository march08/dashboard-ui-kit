import * as React from "react";
import { Link } from "react-router-dom";
import { H1 } from "components";
import { TopBar, TopBarSection, TopBarTitle } from "@duik/it";
import {
  DocsContentPage,
  ExampleTable,
  ImportPath,
  PageContent
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsTopBarTitle = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>TopBarTitle</H1>
      <ImportPath name="TopBarTitle" />

      <p id="basic-usage">
        Prestyled title for top bar. Check the full usage on{" "}
        <Link to="/docs/react/building-top-bar">Building Top Bar</Link>. For the
        best usage, wrap your TopBarTitle with{" "}
        <Link to="/docs/react/top-bar-section">TopBarSection</Link>.
      </p>

      <ExampleTable
        data={[
          {
            content: (
              <TopBar>
                <TopBarSection>
                  <TopBarTitle>Title</TopBarTitle>
                </TopBarSection>
              </TopBar>
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsTopBarTitle;
