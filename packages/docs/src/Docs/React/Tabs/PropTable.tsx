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
  properties.bool({
    prop: 'sm',
    desc: (
      <>
        render <Link to="/docs/react/tab-item">TabItem(s)</Link> with 62px
        height instead of 70px
      </>
    ),
  }),
  properties.bool({
    prop: 'xs',
    desc: (
      <>
        render <Link to="/docs/react/tab-item">TabItem(s)</Link> with 50px
        height instead of 70px
      </>
    ),
  }),
  properties.rest({
    desc: <>Other properties are passed down to the wrapping nav element</>,
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
