import * as React from 'react';
import { Link } from 'react-router-dom';

import { PropTable, properties } from '../../components';

// highlighted,
// leftEl,
// pill,
// secondary,

const itemProps = [
  properties.children(),
  properties.className(),
  properties.bool({
    prop: 'pill',
    desc: (
      <>
        Renders with <Link to="#pill-style">pill style</Link>
      </>
    ),
  }),
  properties.bool({
    prop: 'secondary',
    desc: (
      <>
        Renders with <Link to="#secondary">secondary styling</Link>
      </>
    ),
  }),
  properties.bool({
    prop: 'highlighted',
    desc: 'Increases the font weight',
  }),
  properties.Component({
    prop: 'Component',
    propType: 'React.FunctionalComponent | JSX Element',
    defaultValue: '"a"',
  }),
  properties.children({
    prop: 'leftEl',
    desc: 'Left element to render, e.g. an icon',
  }),
  properties.children({
    prop: 'rightEl',
    desc: 'Right element to render, e.g. number of items',
  }),

  properties.rest({}),
];

export const PropTableNavLink = () => {
  return (
    <>
      <h2 id="props">NavLink Props</h2>
      <PropTable itemProps={itemProps} />{' '}
    </>
  );
};

export default PropTableNavLink;
