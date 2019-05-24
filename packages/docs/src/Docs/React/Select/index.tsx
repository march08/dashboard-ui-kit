import * as React from 'react'
import { Link } from 'react-router-dom'
import { H1, Code, Select, SelectMenuPosition } from 'components'
import { Button, Dropdown, DropdownItem, DropdownMenuPosition, DropdownButtonProps } from '@duik/it'

import { Icon } from '@duik/icon'



import { DocsContentPage, ExampleTable, PageContent, ImportPath, CodeExample } from '../../components'

import PropTable from './PropTable'

import { ExampleSelectBasic, ExampleSelectBasicCode } from './ExampleSelectBasic'
import { ExampleSelectUsers, ExampleSelectUsersCode } from './ExampleSelectUsers'
import { ExampleSelectUsersSearch, ExampleSelectUsersSearchCode } from './ExampleSelectUsersSearch'


export const ReactDocsButton = () => {

  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'basics', label: 'Basic Usage' },
        { id: 'labels', label: 'Styling' },
        { id: 'searchable', label: 'Enable Search Functionality' },
        { id: 'menu-position', label: 'Positioning the dropdown menu' },
        { id: 'dropdown-content', label: 'Custom content in the dropdown' },
        { id: 'button', label: 'Custom button component' },
        { id: 'props-dropdown', label: 'Dropdown props' },
        { id: 'props-dropdown-item', label: 'DropdownItem props' },
      ]} />
      <H1>Select</H1>
      <ImportPath name="Select" />
      <p>Renders selects effortlesly. The core of the select is <Link to="/docs/react/dropdown">Dropdown</Link> component which gives you superb control over the UI. Check the examples below of the possibilities.</p>

      <h2 id="basics">Basic Usage</h2>
      <p>The Select doesn't store any values, instead, you should provide the value and options. This will give you a maximum control of what is displayed or not. You can store the value in your component state (or useState) or any other form controls, such as <a href="https://github.com/jaredpalmer/formik" target="_blank">Formik</a>.</p>
      <p>With that being sad, you should provide <code>activeOption</code> prop to display the selected value and <code>options</code> prop to display the content. These props however are not mandatory.</p>

      <CodeExample code={ExampleSelectBasicCode}>
        <ExampleSelectBasic />
      </CodeExample>
      <h2 id="labels">Style your options</h2>
      <p>Select is very friendly for your UI. Option label doesn't have to be only text, but it can be a react child as well.</p>


      <CodeExample code={ExampleSelectUsersCode}>
        <ExampleSelectUsers />
      </CodeExample>

      <h2 id="searchable">Searchable Select</h2>
      <p>Select offers UI for searchability, however, what happens whit the serached keyword or with the options, that's totally under your control and you should provide this behaviour, as the simple select without data context cannot really predict that. </p>

      <CodeExample code={ExampleSelectUsersSearchCode}>
        <ExampleSelectUsersSearch />
      </CodeExample>


      {/* <PropTable /> */}
    </DocsContentPage>
  )
}

export default ReactDocsButton;