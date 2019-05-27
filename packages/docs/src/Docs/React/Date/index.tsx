import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@duik/it'
import { H1, DatePicker } from 'components'
import { Icon } from '@duik/icon'



import { DocsContentPage, ExampleTable, PageContent, ImportPath } from '../../components'

import PropTable from './PropTable'
import CustomRendering from './CustomRendering';


export const ReactDocsButton = () => {

  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'appearence', label: 'Appearence' },
        { id: 'sizes', label: 'Sizes' },
        { id: 'states', label: 'States' },
        { id: 'custom-rendering', label: 'Custom DOM Rendering' },
        { id: 'with-icons', label: 'With Icons' },
        { id: 'props', label: 'Prop Table' },
        { id: 'migration', label: 'Migration from Dashboard UI Kit 3' },
      ]} />
      <H1>Button</H1>
      <ImportPath name="Button" />
      <br />
      <p>Use buttons in forms, as links with many varieties.</p>

      <h2 id="appearence">Appearence</h2>
      <p>You can control apperence by simply passing boolean props to render some predefined stylings or you can pass your className or style props as well.</p>

      <ExampleTable fixed data={[
        { content: <DatePicker></DatePicker> },
      ]} />
    </DocsContentPage>
  )
}

export default ReactDocsButton;