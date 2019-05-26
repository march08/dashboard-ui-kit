import * as React from 'react'
import { Link } from 'react-router-dom'
import { H1, CodeExample } from 'components'

import { DocsContentPage, PageContent, ImportPath } from '../../components'

import PropTable from './PropTable'

import { ExampleSelectBasic, ExampleSelectBasicCode } from './ExampleSelectBasic'
import { ExampleSelectUsers, ExampleSelectUsersCode } from './ExampleSelectUsers'
import { ExampleSelectUsersSearch, ExampleSelectUsersSearchCode } from './ExampleSelectUsersSearch'
import { ExampleSelectMulti, ExampleSelectMultiCode } from './ExampleSelectMulti'
import { ExampleSelectItemProps, ExampleSelectItemPropsCode } from './ExampleSelectItemProps'


export const ReactDocsSelect = () => {

  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'basics', label: 'Basic Usage' },
        { id: 'labels', label: 'Styling' },
        { id: 'searchable', label: 'Enable Search Functionality' },
        { id: 'multi', label: 'Multi Select' },
        { id: 'option-props', label: 'Option Properties' },
        { id: 'activeOption', label: 'ActiveOption structure' },
        { id: 'props', label: 'Props' },
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



      <h2 id="multi">Multi Select</h2>
      <p>Multi select is possible as well. To ensure proper behaviour, we are passing <code>multiple</code> prop to the Select component as well as <code>activeOption</code> becomes an array prop instead of an object.</p>

      <CodeExample code={ExampleSelectMultiCode}>
        <ExampleSelectMulti />
      </CodeExample>


      <h2 id="option-props">Option props</h2>
      <p>You can easily pass props to the items in the option list as well. In the example, we still want to display an option but we don't want it to be selectable.</p>

      <CodeExample code={ExampleSelectItemPropsCode}>
        <ExampleSelectItemProps />
      </CodeExample>


      <h2 id="activeOption">Why activeOption has structure of an option instead of clean value?</h2>
      <p>You might have noticed that the activeOption, or if you would rather call it value, doesn't have a more traditional structure of just being plain string but there is a reason for this.</p>
      <p>If you would pass only pure value, the component would have to internally search for the label to be displayed. This wouldn't be a problem at all as you are passing list of options as well, however there are cases where you would want to filter out an option from the options list and the Select component won't be able to find the label for the given value anymore. Passing separate activeOption grants you the ability to do so.</p>

      <PropTable />
    </DocsContentPage>
  )
}

export default ReactDocsSelect;