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

export const ReactDocsTopBarSection = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>TopBarSection</H1>
      <ImportPath name="TopBarSection" />

      <p id="basic-usage">
        Predefined section component to match the designs, e.g centers the
        content vertically. Check the full usage on{" "}
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
                <TopBarSection>
                  <TopBarTitle>Something else</TopBarTitle>
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

export default ReactDocsTopBarSection;
