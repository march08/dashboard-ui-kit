import * as React from "react";
import { Link } from "react-router-dom";
import { NavLink, NavPanel } from "@duik/it";
import { Icon } from "@duik/icon";
import { H1 } from "components";
import {
  DocsContentPage,
  ExampleTable,
  ImportPath,
  PageContent
} from "../../components";

import PropTable from "./PropTable";

export const ReactDocsNavLink = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "default-style", label: "Default NavLink style" },
          { id: "pill-style", label: "Pill Style" },
          { id: "secondary", label: "Secondary Nav Items" },
          { id: "compose", label: "Compose with other components" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>NavLink</H1>
      <ImportPath name="NavLink" />

      <p>
        Single component that will provide you several different styles of
        rendering. For a full example, see how to build{" "}
        <Link to="/docs/react/building-nav-panel">Navigation Panel</Link>. Same
        as <Link to="/docs/react/button">Buttons</Link>, you can compose the
        component with different base, e.g. <code>Link</code> from{" "}
        <code>react-router-dom</code>
      </p>

      <h2 id="default-style">Default nav link style</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel>
                <NavLink>Nav Item</NavLink>
                <NavLink className="active">Active Nav Item</NavLink>
                <NavLink leftEl="🚝">With left el</NavLink>
                <NavLink leftEl={<Icon>love</Icon>} rightEl="3">
                  With left and right el
                </NavLink>
              </NavPanel>
            )
          }
        ]}
      />

      <h2 id="pill-style">Pill style</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel>
                <NavLink pill>Nav Item</NavLink>
                <NavLink pill className="active">
                  Active Nav Item
                </NavLink>
                <NavLink pill leftEl="🚝">
                  With left el
                </NavLink>
                <NavLink pill leftEl={<Icon>love</Icon>} rightEl="3">
                  With left and right el
                </NavLink>
              </NavPanel>
            )
          }
        ]}
      />

      <h2 id="secondary">Secondary (nested) Link</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel>
                <NavLink>Nav Item</NavLink>
                <NavLink className="active" secondary>
                  Active Nav Item
                </NavLink>
                <NavLink secondary leftEl="🚝">
                  With left el
                </NavLink>
                <NavLink secondary leftEl={<Icon>love</Icon>} rightEl="3">
                  With left and right el
                </NavLink>
              </NavPanel>
            )
          }
        ]}
      />
      <h2 id="compose">With Link from react-router-dom</h2>
      <p>
        Same as <Link to="/docs/react/button">Buttons</Link>, you can pass
        Component property to <code>NavLink</code> if you want to render for
        example <code>Link</code> from react-router-dom.
      </p>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel>
                <NavLink Component={Link} to="#">
                  Nav Item
                </NavLink>
              </NavPanel>
            ),
            code: `import { Link } from 'react-router-dom'
          
<NavPanel>
  <NavLink Component={Link} to="#">
    Nav Item
  </NavLink>
</NavPanel>`
          }
        ]}
      />

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsNavLink;
