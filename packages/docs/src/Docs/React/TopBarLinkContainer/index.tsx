import * as React from "react";
import { Link } from "react-router-dom";
import { H1 } from "components";
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  TopBarLinkContainer,
  TopBarLink
} from "@duik/it";
import {
  DocsContentPage,
  ExampleTable,
  ImportPath,
  PageContent
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsTopBarLinkContainer = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>TopBarLinkContainer</H1>
      <ImportPath name="TopBarLinkContainer" />

      <p id="basic-usage">
        Recommended way how to wrap your top bar links. Check the full usage on{" "}
        <Link to="/docs/react/building-top-bar">Building Top Bar</Link>.
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
                  <TopBarLinkContainer>
                    <TopBarLink href="#">Link 1</TopBarLink>
                    <TopBarLink href="#">Link 2</TopBarLink>
                  </TopBarLinkContainer>
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

export default ReactDocsTopBarLinkContainer;
