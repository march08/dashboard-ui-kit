import * as React from 'react'
import { Switch, Route, RouteComponentProps, NavLink } from 'react-router-dom'
import { Widget, WidgetContent } from '@duik/it'
import { H1, CodeExample, Tabs, TabItem } from 'components'
import { DocsContentPage, PageContent, ImportPath } from '../../components'

import PropTable from './PropTable'


export const ReactDocsOuterEventsHandler = (props: RouteComponentProps) => {
  const { match } = props
  console.log(match)
  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'rr', label: 'Example with react-router' },
        { id: 'props', label: 'Prop Table' },
        { id: 'migration', label: 'Migration from Dashboard UI Kit 3' },
      ]} />
      <H1>Tabs</H1>
      <ImportPath name="Tabs" subComponents={['TabItem']} />
      <h2 id="rr">Example with react-router</h2>


      <CodeExample code={`
<Widget>
<Tabs>
  <TabItem Component={NavLink} exact strict to={\`\${match.url}\`}>Overview</TabItem>
  <TabItem Component={NavLink} exact strict to={\`\${match.url}/tests\`}>Tests</TabItem>
    <TabItem Component={NavLink} exact strict to={\`\${match.url}/history\`}>History</TabItem>
</Tabs >
  <Switch>
    <Route exact strict path={match.url} children={<WidgetContent>Overview</WidgetContent>} />
    <Route exact strict path={\`\${match.url}/tests\`} children={<WidgetContent>Tests</WidgetContent>} />
    <Route exact strict path={\`\${match.url}/history\`} children={<WidgetContent>History</WidgetContent>} />
  </Switch>
</Widget >
  `} bgLight>
        <Widget>
          <Tabs>
            <TabItem Component={NavLink} exact strict to={`${match.url}`}>Overview</TabItem>
            <TabItem Component={NavLink} exact strict to={`${match.url}/tests`}>Tests</TabItem >
            <TabItem Component={NavLink} exact strict to={`${match.url}/history`}>History</TabItem>
          </Tabs >
          <Switch>
            <Route exact strict path={match.url} children={<WidgetContent>Overview</WidgetContent>} />
            <Route exact strict path={`${match.url}/tests`} children={<WidgetContent>Tests</WidgetContent>} />
            <Route exact strict path={`${match.url}/history`} children={<WidgetContent>History</WidgetContent>} />
          </Switch>
        </Widget >
      </CodeExample >

      <PropTable />
      <h2 id="migration">Migration from Dashboard UI Kit 3</h2>
      <p>"icon" and "iconPosition" properties are now removed in favor to "leftEl" and "rightEl"</p>

    </DocsContentPage >
  )
}

export default ReactDocsOuterEventsHandler;