import * as React from 'react';

import { PropTable, properties } from '../../components';

// highlighted,
// leftEl,
// pill,
// secondary,

const itemProps = [
  properties.children(),
  properties.className(),
  {
    prop: 'fill',
    propType: 'number',
    desc: 'Range from 0 to 1',
  },
  {
    prop: 'fills',
    propType: 'number[]',
    desc:
      'Array of numbers with range from 0 to 1. Fills are rendered with priority over "fill" property.',
  },
  properties.bool({
    prop: 'lg',
    desc: 'Renders thicker bar (8px instead of 4px)',
  }),
  properties.rest({}),
];

export const PropTableProgress = () => {
  return (
    <>
      <h2 id="props">NavLink Props</h2>
      <PropTable itemProps={itemProps} />{' '}
    </>
  );
};

export default PropTableProgress;
