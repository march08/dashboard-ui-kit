import * as React from "react";
import { Link } from "react-router-dom";
import { H1 } from "components";
import { NavSection, NavPanel, NavSectionTitle, NavLink } from "@duik/it";
import {
  DocsContentPage,
  ExampleTable,
  ImportPath,
  PageContent
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsNavSection = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "with", label: "With Section" },
          { id: "without", label: "Without Section" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>NavSection</H1>
      <ImportPath name="NavSection" />

      <p>
        NavSection adds some extra whitespacing to add some visual order to your
        coded application. It is a simple div with some css properties. Don't
        miss full example of how to build a navigation with nav elements{" "}
        <Link to="/docs/react/building-nav-panel">here</Link>.
      </p>

      <h2 id="with">With NavSection</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel dark>
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

      <h2 id="without">Without NavSection</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel dark>
                <NavSectionTitle>Section title 1</NavSectionTitle>
                <NavLink>Item 1</NavLink>
                <NavLink>Item 2</NavLink>
                <NavSectionTitle>Section title 2</NavSectionTitle>
                <NavLink>Item 1</NavLink>
                <NavLink>Item 2</NavLink>
              </NavPanel>
            )
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsNavSection;
