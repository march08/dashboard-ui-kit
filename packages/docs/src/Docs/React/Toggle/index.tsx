import * as React from 'react'
import { Toggle } from '@duik/it'
import { DocsContentPage, ExampleTable, PageContent, ImportPath } from '../../components'

import PropTable from './PropTable'


export const ReactDocsButton = () => {

  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'basic-usage', label: 'Basic Usage' },
        { id: 'props', label: 'Prop Table' },
      ]} />
      <h1>Toggle</h1>
      <ImportPath name="Toggle" />
      <p>Umm. toggles?</p>

      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable fixed data={[
        { content: <Toggle defaultChecked /> },
        { content: <Toggle label="Check me" /> },
        { content: <Toggle label="Toggle" description="With Description" /> },
        { content: <Toggle disabled label="Toggle" description="With Description" /> },
      ]} />


      <PropTable />
    </DocsContentPage>
  )
}

export default ReactDocsButton;