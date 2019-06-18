import * as React from "react";
import {
  Switch,
  Route,
  RouteComponentProps,
  NavLink,
  Link
} from "react-router-dom";
import { Widget, WidgetContent, Tabs, TabItem } from "@duik/it";
import { Icon } from "@duik/icon";
import { H1, CodeExample } from "components";
import { DocsContentPage } from "../../components";

import PropTable from "./PropTable";

export const ReactDocsOuterEventsHandler = (props: RouteComponentProps) => {
  const { match } = props;
  return (
    <DocsContentPage>
      <H1>Building Tab Navigation</H1>

      <p>
        Easily build tabs with only two components. Easily control the size,
        content and more.{" "}
      </p>

      <ol>
        <li>
          <Link to="/docs/react/tabs">Tabs (container)</Link>
        </li>
        <li>
          <Link to="/docs/react/tab-item">TabItem</Link>
        </li>
      </ol>

      <h2>Basic Usage</h2>
      <p>
        By default, wrapping Tabs component renders <code>nav</code> element and
        TabItem renders <code>a</code> element. NavItem has tabindex="0"
        property by default. Add class "active" to render active state.{" "}
      </p>

      <CodeExample
        code={`<Tabs>
  <TabItem className="active">Overview</TabItem>
  <TabItem>Tests</TabItem >
  <TabItem>History</TabItem>
</Tabs >`}
        bgLight
      >
        <Tabs>
          <TabItem className="active">Overview</TabItem>
          <TabItem>Tests</TabItem>
          <TabItem>History</TabItem>
        </Tabs>
      </CodeExample>

      <h2 id="rr">Example with Widget (recommended) and react-router-dom</h2>
      <p>"active" class is added by NavLink from react-router-dom.</p>

      <CodeExample
        code={`const WidgetWithTabs = (props) => {
  // router props
  const { match } = props
  return (
    <Widget>
      <Tabs>
        <TabItem leftEl={<Icon>gallery_grid_view</Icon>} Component={NavLink} exact strict to={\`\${match.url}\`}>Overview</TabItem>
        <TabItem rightEl={4} Component={NavLink} exact strict to={\`\${match.url}/tests\`}>Tests</TabItem>
        <TabItem rightEl={10} Component={NavLink} exact strict to={\`\${match.url}/history\`}>History</TabItem>
      </Tabs >
      <Switch>
        <Route exact strict path={match.url} children={<WidgetContent>Overview</WidgetContent>} />
        <Route exact strict path={\`\${match.url}/tests\`} children={<WidgetContent>Tests</WidgetContent>} />
        <Route exact strict path={\`\${match.url}/history\`} children={<WidgetContent>History</WidgetContent>} />
      </Switch>
    </Widget >
  )
}`}
        bgLight
      >
        <Widget>
          <Tabs>
            <TabItem
              leftEl={<Icon>gallery_grid_view</Icon>}
              Component={NavLink}
              exact
              strict
              to={`${match.url}`}
            >
              Overview
            </TabItem>
            <TabItem
              rightEl={4}
              Component={NavLink}
              exact
              strict
              to={`${match.url}/tests`}
            >
              Tests
            </TabItem>
            <TabItem
              rightEl={10}
              Component={NavLink}
              exact
              strict
              to={`${match.url}/history`}
            >
              History
            </TabItem>
          </Tabs>
          <Switch>
            <Route
              exact
              strict
              path={match.url}
              children={<WidgetContent>Overview</WidgetContent>}
            />
            <Route
              exact
              strict
              path={`${match.url}/tests`}
              children={<WidgetContent>Tests</WidgetContent>}
            />
            <Route
              exact
              strict
              path={`${match.url}/history`}
              children={<WidgetContent>History</WidgetContent>}
            />
          </Switch>
        </Widget>
      </CodeExample>

      <PropTable />
      <h2 id="migration">Migration from Dashboard UI Kit 3</h2>
      <p>
        "icon" and "iconPosition" properties are now removed in favor to
        "leftEl" and "rightEl"
      </p>
    </DocsContentPage>
  );
};

export default ReactDocsOuterEventsHandler;
