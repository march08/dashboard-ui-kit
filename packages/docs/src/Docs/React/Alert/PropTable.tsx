import * as React from 'react';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.children(),
  properties.className(),
  properties.bool({
    prop: 'primary',
    desc: 'Has blue color',
  }),
  properties.bool({
    prop: 'danger',
    desc: 'Has red color',
  }),
  properties.bool({
    prop: 'success',
    desc: 'Has green color',
  }),
  properties.bool({
    prop: 'warning',
    desc: 'Has orange color',
  }),
  properties.children({
    prop: 'leftEl',
    desc: 'Renders node on the left side e.g. some icon',
  }),
  properties.children({
    prop: 'rightEl',
    desc: 'Renders node on the right side, e.g. close button',
  }),
  properties.rest(),
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
