import * as React from "react";
import { H1 } from "components";
import { Link } from "react-router-dom";
import {
  NavSection,
  NavPanel,
  NavSectionTitle,
  NavLink,
  NavTitle
} from "@duik/it";
import {
  DocsContentPage,
  ExampleTable,
  ImportPath,
  PageContent
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsNavTitle = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "example", label: "Example usage" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>NavTitle</H1>
      <ImportPath name="NavTitle" />

      <p>
        Styled typo for main navigation title in the NavPanel. Don't miss full
        example of how to build a navigation with nav elements{" "}
        <Link to="/docs/react/building-nav-panel">here</Link>.
      </p>

      <h2 id="example">Example</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel dark>
                <NavTitle>My Navigation</NavTitle>
                <NavSection>
                  <NavSectionTitle>Section title 1</NavSectionTitle>
                  <NavLink>Item 1</NavLink>
                  <NavLink>Item 2</NavLink>
                </NavSection>
                <NavSection>
                  <NavSectionTitle>Section title 2</NavSectionTitle>
                  <NavLink>Item 1</NavLink>
                  <NavLink>Item 2</NavLink>
                </NavSection>
              </NavPanel>
            )
          }
        ]}
      />
      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsNavTitle;
