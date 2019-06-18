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

export const ReactDocsTopBar = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>TopBar</H1>
      <ImportPath name="TopBar" />

      <p id="basic-usage">
        Prestyled component for your apps top bar. Check the full usage on{" "}
        <Link to="/docs/react/building-top-bar">Building Top Bar</Link>
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

export default ReactDocsTopBar;
