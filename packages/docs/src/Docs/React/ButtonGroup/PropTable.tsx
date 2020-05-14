import * as React from 'react';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.children(),
  properties.className(),
  properties.bool({
    prop: 'vertical',
    desc: 'Renders buttons vertically',
  }),
  properties.bool({
    prop: 'sm',
    desc: 'Renders smaller button with height 30px',
  }),
  properties.bool({
    prop: 'lg',
    desc: 'Renders larger button with height 50px',
  }),
  properties.rest(),
];

export const ReactDocsButtonGroup = () => {
  return (
    <>
      <h2 id="props">Prop table</h2>
      <PropTable itemProps={itemProps} />
    </>
  );
};

export default ReactDocsButtonGroup;
