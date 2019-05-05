import * as React from 'react';
import { DynamicFields, Button } from '@duik/react'

import { PropTable, properties } from './components'


const itemProps = [
  properties.children(),
  properties.className(),
  properties.className({
    prop: 'contentClassName',
    desc: 'classname for content wrapper inside button',
  }),
  properties.Component({
    defaultValue: '"button"',
  }),
  {
    prop: 'type',
    propType: 'String',
    required: false,
    defaultValue: '"button"',
    desc: 'Applicable for button',
  },
  {
    prop: 'isExpanded',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Applies width: 100% and extra styling cases when used with icons etc.',
  },
  {
    prop: 'xs',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders smaller button with height 30px',
  },
  {
    prop: 'lg',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders larger button with height 50px',
  },
  {
    prop: 'primary',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has blue color',
  },
  {
    prop: 'error',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has red color',
  },
  {
    prop: 'success',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has green color',
  },
  {
    prop: 'dark',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Has dark color',
  },
  {
    prop: 'clear',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'White with light shadow.',
  },
  {
    prop: 'transparent',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Button background is transparent with borders.',
  },
  {
    prop: 'isLoading',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Will render loading state',
  },
  // icon properties
  {
    prop: 'icon',
    propType: 'React.Node',
    required: false,
    defaultValue: 'null',
    desc: 'Renders icon on left side by default',
  },
  {
    prop: 'iconRight',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders icon on right side',
  },
  {
    prop: 'iconOnly',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'Renders a squared button with centered icon',
  },
  {
    prop: '...rest',
    propType: 'Object',
    required: false,
    desc: 'Other properties are passed down to the root element',
  },
]


export const ReactDocsButton = () => {

  return (

    <div className="App">
      <DynamicFields />
      <Button onClick={() => { console.log('click') }}>Hello</Button>
      <Button primary>Hello</Button>
      <Button isLoading success>Hello</Button>
      <PropTable itemProps={itemProps} />
    </div >
  )
}

export default ReactDocsButton;
