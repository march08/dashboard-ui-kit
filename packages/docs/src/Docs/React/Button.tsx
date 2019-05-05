import * as React from 'react';
import { DynamicFields, Button, Widget } from '@duik/react'

import { PropTable, properties } from './components'


const itemProps = [
  properties.children(),
  properties.className(),
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
  properties.bool({
    prop: 'isExpanded | block',
    desc: 'Applies width: 100% and extra styling cases when used with icons etc.',
  }),
  properties.bool({
    prop: 'xs | sm',
    desc: 'Renders smaller button with height 30px',
  }),
  properties.bool({
    prop: 'lg',
    desc: 'Renders larger button with height 50px',
  }),
  properties.bool({
    prop: 'primary',
    desc: 'Has blue color',
  }),
  properties.bool({
    prop: 'error | danger',
    desc: 'Has red color',
  }),
  properties.bool({
    prop: 'success',
    desc: 'Has green color',
  }),
  properties.bool({
    prop: 'dark',
    desc: 'Has dark color',
  }),
  properties.bool({
    prop: 'clear',
    desc: 'White with light shadow.',
  }),
  properties.bool({
    prop: 'transparent',
    desc: 'Button background is transparent with borders.',
  }),
  properties.bool({
    prop: 'transparent',
    desc: 'Button background is transparent with borders.',
  }),
  properties.bool({
    prop: 'isLoading',
    desc: 'Will render loading state',
  }),
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
  properties.rest(),
]


export const ReactDocsButton = () => {

  return (

    <Widget margin>
      <DynamicFields />
      <Button onClick={() => { console.log('click') }}>Hello</Button>
      <Button primary>Hello</Button>
      <Button isLoading success>Hello</Button>
      <PropTable itemProps={itemProps} />
    </Widget >
  )
}

export default ReactDocsButton;
