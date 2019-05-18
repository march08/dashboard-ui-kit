import * as React from 'react';
import { Widget } from '@duik/it/index'


import { PropTable, properties } from '../../components'

// leftEl,
// rightEl,

const itemProps = [
  properties.className(),
  {
    prop: 'label',
    propType: 'string',
    desc: 'Label text. Ideally you should pass "id" as well, TextField will automatically connect the label with "for"'
  },
  properties.bool({
    prop: 'clear',
    desc: 'Renders without borders.'
  }),
  {
    prop: 'errorMessage',
    propType: 'React.ReactNode',
    desc: 'Displays error message and renders input in error state.'
  },
  {
    prop: 'successMessage',
    propType: 'React.ReactNode',
    desc: 'Displays success message and renders input in success state.'
  },
  properties.rest({
    desc: (
      <>Other properties are passed down to the wrapping textarea element</>
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
