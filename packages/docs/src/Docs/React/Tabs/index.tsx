import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Widget, WidgetContent, Tabs, TabItem } from "@duik/it";
import { H1, CodeExample } from "components";
import { DocsContentPage, PageContent, ImportPath } from "../../components";

import PropTable from "./PropTable";

export const ReactDocsOuterEventsHandler = (props: RouteComponentProps) => {
  return (
    <DocsContentPage>
      <PageContent
        data={[
          { id: "basic-usage", label: "Basic Usage" },
          { id: "size", label: "Sizing of tabs" },
          { id: "props", label: "Prop Table" }
        ]}
      />
      <H1>Tabs</H1>
      <ImportPath name="Tabs" subComponents={["TabItem"]} />

      <p>
        A simple container to evenly distribute the TabItems with ability to
        control the size. You can check more examples (e.g. with
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
            <TabItem className="active">Overview</TabItem>
            <TabItem>Tests</TabItem>
            <TabItem>History</TabItem>
          </Tabs>
          <WidgetContent>Widget Content</WidgetContent>
        </Widget>
      </CodeExample>

      <h2 id="size">Controling size</h2>
      <h3>Small</h3>
      <CodeExample bgLight>
        <Widget>
          <Tabs sm>
            <TabItem className="active">Overview</TabItem>
            <TabItem>Tests</TabItem>
            <TabItem>History</TabItem>
          </Tabs>
          <WidgetContent>Widget Content</WidgetContent>
        </Widget>
      </CodeExample>

      <h3>Extra Small</h3>
      <CodeExample bgLight>
        <Widget>
          <Tabs xs>
            <TabItem className="active">Overview</TabItem>
            <TabItem>Tests</TabItem>
            <TabItem>History</TabItem>
          </Tabs>
          <WidgetContent>Widget Content</WidgetContent>
        </Widget>
      </CodeExample>

      <PropTable />
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
