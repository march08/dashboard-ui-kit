import * as React from 'react'
import { Link } from 'react-router-dom'
import { Radio } from '@duik/it'
import { DocsContentPage, ExampleTable, PageContent, ImportPath } from '../../components'

import PropTable from './PropTable'


export const ReactDocsScrollArea = () => {

  return (
    <DocsContentPage>
      <h1>ScrollArea</h1>
      <ImportPath name="ScrollArea" />

      <p>
        A shorthand for <code>overflow-y: auto</code>  with some extra properties to make sure that your scroll area will work inside flexboxes. You can check example usage on the <Link to="/docs/react/building-layout#full-example">Building Layout</Link> page.
      </p>

      <PropTable />
    </DocsContentPage>
  )
}

export default ReactDocsScrollArea;