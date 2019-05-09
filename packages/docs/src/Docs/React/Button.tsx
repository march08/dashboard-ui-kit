import * as React from 'react';
import { Link } from 'react-router-dom'
import {
  DynamicFields,
  Button,
  Widget,
  WidgetContent,
  ButtonGroup,
} from '@duik/react'

import { Icon } from '@duik/icon'



import { PropTable, properties, DocsContentPage } from './components'


const itemProps = [
  properties.children(),
  properties.className(),
  properties.Component({
    defaultValue: '"button"',
  }),
  {
    prop: 'type',
    propType: 'string',
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
    propType: 'DEPRECATED',
    required: false,
    defaultValue: 'null',
    desc: 'Pass your icon as children instead',
  },
  {
    prop: 'iconRight',
    propType: 'DEPRECATED',
    required: false,
    defaultValue: 'false',
    desc: 'Pass your icon as children instead',
  },
  {
    prop: 'iconOnly',
    propType: 'DEPRECATED',
    required: false,
    defaultValue: 'false',
    desc: 'Use "square" property to render squared shape instead',
  },
  properties.rest(),
]


export const ReactDocsButton = () => {

  return (
    <DocsContentPage>
      <h1>Button</h1>
      <p>Use buttons in forms, as links with many varieties.</p>
      <ol>
        <li><Link to="#props">Prop table</Link></li>
        <li><Link to="#example">Examples</Link></li>
      </ol>
      <Widget id="props">
        <WidgetContent>
          <h2>Button Props</h2>
        </WidgetContent>
        <PropTable itemProps={itemProps} />
      </Widget >
      <h2>Examples</h2>

      <DynamicFields />
      <Button onClick={() => { console.log('click') }}>Hello</Button>
      <Button primary>Hello</Button>
      <Button isLoading success>Hello</Button>
      <div className="btn-group">
        <Button primary>Hello</Button>
        <Button primary isLoading>Hello</Button>
      </div>
      <ButtonGroup>
        <Button primary>Hello</Button>
        <Button primary isLoading>Hello</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button primary>This is a button</Button>
        <Button primary isLoading>Hello</Button>
      </ButtonGroup>

      <div className="btn-group" id="example">
        <button className="btn btn-lg" type="button">
          Large split button
  </button>
        <button type="button" className="btn btn-lg dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          ...
  </div>
      </div>
      <h2>Button Colors</h2>
      <div>
        <Button primary>Primary</Button>
        <Button success>Success</Button>
        <Button error>Danger</Button>
        <Button dark>Dark</Button>
        <Button primary square><Icon>rocket</Icon></Button>
      </div>
      <h2>Migration from v1</h2>
      <p>Icon properties are removed in favor to use icons as children instead. "iconOnly" property rendered button in square shape. Use "square" property instead.</p>
    </DocsContentPage>
  )
}

export default ReactDocsButton;
