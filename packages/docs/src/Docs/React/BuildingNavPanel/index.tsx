import * as React from "react";
import { Link } from "react-router-dom";
import { H1 } from "components";
import {
  NavLink,
  NavPanel,
  NavTitle,
  NavSection,
  NavSectionTitle
} from "@duik/it";
import { Icon } from "@duik/icon";
import { DocsContentPage, ExampleTable, PageContent } from "../../components";

export const ReactDocsNavLink = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "light", label: "Full Light Example" },
          { id: "dark", label: "Full Dark Example" }
        ]}
      />
      <H1>Building NavPanel</H1>

      <p>
        Building navigation (side) panels is a simple task, as the kit provides
        some handy components to make this work super easy. Nav panels come in
        light and dark mode, you can control this by simply adding "dark" prop
        to the NavPanel. See examples below or you can also discover the API for
        each component.
      </p>
      <ol>
        <li>
          <Link to="/docs/react/nav-panel">NavPanel</Link>
        </li>
        <li>
          <Link to="/docs/react/nav-title">NavTitle</Link>
        </li>
        <li>
          <Link to="/docs/react/nav-section">NavSection</Link>
        </li>
        <li>
          <Link to="/docs/react/nav-section-title">NavSectionTitle</Link>
        </li>
        <li>
          <Link to="/docs/react/nav-link">NavLink</Link>
        </li>
      </ol>

      <h2 id="light">Light version</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel>
                <NavTitle>My Navigation</NavTitle>
                <NavSection>
                  <NavSectionTitle>Default Link Styles</NavSectionTitle>
                  <NavLink>Nav Item</NavLink>
                  <NavLink className="active">Active Nav Item</NavLink>
                  <NavLink leftEl="🏀">With left el</NavLink>
                  <NavLink leftEl={<Icon>love</Icon>} rightEl="3">
                    With left and right el
                  </NavLink>
                </NavSection>
                <NavSection>
                  <NavSectionTitle>Pill Link Styles</NavSectionTitle>
                  <NavLink pill>Nav Item</NavLink>
                  <NavLink pill className="active">
                    Active Nav Item
                  </NavLink>
                  <NavLink pill leftEl="🏀">
                    With left el
                  </NavLink>
                  <NavLink pill leftEl={<Icon>love</Icon>} rightEl="3">
                    With left and right el
                  </NavLink>
                </NavSection>
              </NavPanel>
            )
          }
        ]}
      />

      <h2 id="dark">Dark version</h2>
      <p>
        As you can see, the only difference is that we passed "dark" prop to the
        NavPanel component. Simple as that!
      </p>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel dark>
                <NavTitle>My Navigation</NavTitle>
                <NavSection>
                  <NavSectionTitle>Default Link Styles</NavSectionTitle>
                  <NavLink>Nav Item</NavLink>
                  <NavLink className="active">Active Nav Item</NavLink>
                  <NavLink leftEl="🏀">With left el</NavLink>
                  <NavLink leftEl={<Icon>love</Icon>} rightEl="3">
                    With left and right el
                  </NavLink>
                </NavSection>
                <NavSection>
                  <NavSectionTitle>Pill Link Styles</NavSectionTitle>
                  <NavLink pill>Nav Item</NavLink>
                  <NavLink pill className="active">
                    Active Nav Item
                  </NavLink>
                  <NavLink pill leftEl="🏀">
                    With left el
                  </NavLink>
                  <NavLink pill leftEl={<Icon>love</Icon>} rightEl="3">
                    With left and right el
                  </NavLink>
                </NavSection>
              </NavPanel>
            )
          }
        ]}
      />
    </DocsContentPage>
  );
};

export default ReactDocsNavLink;
