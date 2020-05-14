import * as React from 'react';
import { Link } from 'react-router-dom';

import { PropTable, properties } from '../../components';

// leftEl,
// rightEl,

const itemProps = [
  properties.className(),
  properties.children({
    desc: (
      <>
        Children nodes, e.g. <Link to="/docs/react/tab-item">TabItem(s)</Link>
      </>
    ),
  }),
  properties.Component({
    defaultValue: '"a"',
  }),
  properties.children({
    prop: 'leftEl',
    desc: <>Renders node on the left side with some styling</>,
  }),
  properties.children({
    prop: 'rightEl',
    desc: <>Renders node on the right side with some styling</>,
  }),
  properties.rest({
    desc: <>Other properties are passed down to the wrapping element</>,
  }),
];

export const ReactDocsTabs = () => {
  return (
    <>
      <h2 id="props">Prop table</h2>
      <PropTable itemProps={itemProps} />
    </>
  );
};

export default ReactDocsTabs;
