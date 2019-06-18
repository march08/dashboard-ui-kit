import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Widget, WidgetContent, Tabs, TabItem } from "@duik/it";
import { Icon } from "@duik/icon";
import { H1, CodeExample } from "components";
import { DocsContentPage, PageContent, ImportPath } from "../../components";

import PropTable from "./PropTable";

export const ReactDocsOuterEventsHandler = (props: RouteComponentProps) => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "compose", label: "Compose with e.g. NavLink" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>TabItem</H1>
      <ImportPath name="Tabs" subComponents={["TabItem"]} />

      <p>
        Prestyled tab item for your tab navigation. TabItem renders "a" by
        default with tabindex="0" You can check more examples (e.g. with
        react-router-dom) on{" "}
        <Link to="/docs/react/building-tab-navigation">
          Building Tab Navigation
        </Link>{" "}
        page.
      </p>

      <h2 id="basic-usage">Basic Usage Within Widget</h2>
      <CodeExample bgLight>
        <Widget>
          <Tabs>
            <TabItem leftEl={<Icon>gallery_grid_view</Icon>} className="active">
              Overview
            </TabItem>
            <TabItem rightEl={4}>Tests</TabItem>
            <TabItem rightEl={103}>History</TabItem>
          </Tabs>
          <WidgetContent>Widget Content</WidgetContent>
        </Widget>
      </CodeExample>

      <h2 id="compose">Compose with Component Property</h2>
      <p>
        By default, TabItem renders "a" tag, simply override this behaviour with
        "Component property" like so:
        <br />
        <code>{`<TabItem Component={NavLink} to="/docs/react/tab-item">React Router Link</TabItem>`}</code>
        .
      </p>

      <p>
        See react-router-dom usage{" "}
        <Link to="/docs/react/building-tab-navigation">here</Link> or explore
        more about "Component" property{" "}
        <Link to="/docs/react/component-property">here</Link>.
      </p>
      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
