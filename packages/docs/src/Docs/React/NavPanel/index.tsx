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

export const ReactDocsNavPanel = () => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "default-style", label: "Default NavPanel" },
          { id: "dark-style", label: "Dark NavPanel" },
          { id: "on-right", label: "NavPanel Position" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>NavPanel</H1>
      <ImportPath name="NavPanel" />

      <p>
        NavPanel is a <code>nav</code> container to keep you navigation items.
        The simplest way to implement it in your UI is to use flex containers,
        which you can check{" "}
        <Link to="/docs/react/building-layout">here (Building Layout)</Link>.
        Don't miss full example of how to build a navigation with nav elements{" "}
        <Link to="/docs/react/building-nav-panel">here</Link>.
      </p>

      <h2 id="default-style">Default Nav Panel Style</h2>
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
          },
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

      <h2 id="dark-style">Dark Style</h2>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel dark>
                <NavLink>Nav Item</NavLink>
                <NavLink className="active">Active Nav Item</NavLink>
                <NavLink leftEl="🚝">With left el</NavLink>
                <NavLink leftEl={<Icon>love</Icon>} rightEl="3">
                  With left and right el
                </NavLink>
              </NavPanel>
            )
          },
          {
            content: (
              <NavPanel dark>
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
      <h2 id="on-right">On right</h2>
      <p>
        By default, border is rendered on the right side of the container. If
        you are placing nav panel on the left side, add "onRight" property to
        render the border on the left.
      </p>
      <ExampleTable
        data={[
          {
            content: (
              <NavPanel onRight>
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

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsNavPanel;
