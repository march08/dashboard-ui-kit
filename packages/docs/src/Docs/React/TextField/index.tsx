import * as React from 'react'
import { TextField } from '@duik/it'
import { Icon } from '@duik/icon'
import { Link } from 'react-router-dom'
import { DocsContentPage, ExampleTable, PageContent, ImportPath } from '../../components'

import PropTable from './PropTable'


export const ReactDocsOuterEventsHandler = () => {

  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'basic-usage', label: 'Basic Usage' },
        { id: 'props', label: 'Prop Table' },
        { id: 'migration', label: 'Migration from Dashboard UI Kit 3' },
      ]} />
      <h1>TextField</h1>
      <ImportPath name="TextField" />
      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable data={[
        {
          content: (<TextField defaultValue="Default text" />)
        },
        {
          content: (<TextField label="Label" placeholder="Write Something" />)
        },
        {
          content: (<TextField label="Label" errorMessage="There is a problem" placeholder="Write Something" />)
        },
        {
          content: (<TextField label="Label" successMessage="It's ok!" placeholder="Write Something" />)
        },
        {
          content: (<TextField label="Label" leftEl={<Icon>search_left</Icon>} placeholder="Write Something" />)
        },
        {
          content: (<TextField label="Label" rightEl={<Icon>search_left</Icon>} placeholder="Write Something" />)
        },
        {
          content: (<TextField disabled label="Label" rightEl={<Icon>search_left</Icon>} placeholder="Write Something" />)
        },
        {
          content: (<TextField readOnly label="Label" placeholder="Write Something" />)
        },
        {
          content: (<TextField clear placeholder="Write Something" />)
        },
        {
          content: (<TextField clear leftEl={<Icon>search_left</Icon>} placeholder="Write Something" />)
        },
        {
          content: (<TextField clear rightEl={<Icon>search_left</Icon>} placeholder="Write Something" />)
        },
      ]} />
      <PropTable />
      <h2 id="migration">Migration from Dashboard UI Kit 3</h2>
      <p>"icon" and "iconPosition" properties are now removed in favor to "leftEl" and "rightEl"</p>

    </DocsContentPage>
  )
}

export default ReactDocsOuterEventsHandler;