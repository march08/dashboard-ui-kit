import * as React from "react";
import { NavLink, Link, RouteComponentProps } from "react-router-dom";
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

export const ReactDocsTopBarLink = (props: RouteComponentProps) => {
  const { match } = props;
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>TopBarLink</H1>
      <ImportPath name="TopBarLink" />

      <p id="basic-usage">
        Prestyled navigation for top bar. Check the full usage on{" "}
        <Link to="/docs/react/building-top-bar">Building Top Bar</Link>. For the
        best usage, wrap your TopBarTitle with{" "}
        <Link to="/docs/react/top-bar-link-container">TopBarLinkContainer</Link>
        .
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
                    <TopBarLink Component={NavLink} to={match.url}>
                      react-router Link
                    </TopBarLink>
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

export default ReactDocsTopBarLink;
