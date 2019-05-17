import * as React from 'react';
import { Widget } from '@duik/it/index'


import { PropTable, properties } from '../../components'


// triggerOnOuterScroll: boolean;
// triggerOnWindowResize: boolean;
// triggerOnOuterClick: boolean;
// triggerOnEsc: boolean;

const itemProps = [
  properties.className(),
  properties.children(),
  {
    prop: 'onOuterEvent',
    propType: '(e: Event) => void',
    desc: 'Function which will be triggered when event occurs.'
  },
  properties.bool({
    prop: 'triggerOnOuterScroll',
    desc: 'If true, onOuterEvent will be triggered on window scroll event.'
  }),
  properties.bool({
    prop: 'triggerOnWindowResize',
    desc: 'If true, onOuterEvent will be triggered on window resize event.'
  }),
  properties.bool({
    prop: 'triggerOnOuterClick',
    desc: 'If true, onOuterEvent will be triggered on document click event.',
    defaultValue: 'true',
  }),
  properties.bool({
    prop: 'triggerOnEsc',
    desc: 'If true, onOuterEvent will be triggered on document keydown event.',
    defaultValue: 'true',
  }),
  properties.rest({
    desc: (
      <>Other properties are passed down to the wrapping div element</>
    )
  }),
]


export const ReactDocsButton = () => {

  return (
    <>
      <h2 id="props">Prop table</h2>
      <Widget>
        <PropTable itemProps={itemProps} />
      </Widget >
    </>
  )
}

export default ReactDocsButton;
