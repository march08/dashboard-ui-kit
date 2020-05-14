import * as React from 'react';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.className(),
  {
    prop: 'label',
    propType: 'React.ReactNode',
    required: false,
    defaultValue: null,
    desc: 'Label text or node',
  },
  {
    prop: 'description',
    propType: 'React.ReactNode',
    required: false,
    defaultValue: null,
    desc: 'Label text or node',
  },
  properties.rest({
    desc: 'Other properties are passed to the input element',
  }),
];

export const ReactDocsButton = () => {
  return (
    <>
      <h2 id="props">Prop table</h2>
      <PropTable itemProps={itemProps} />
    </>
  );
};

export default ReactDocsButton;
