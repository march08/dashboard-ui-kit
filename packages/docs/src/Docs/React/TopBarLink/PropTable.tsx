import * as React from 'react';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.children(),
  properties.className(),
  properties.Component({
    defaultValue: '"a"',
  }),
  properties.rest({
    desc: (
      <>
        Any props you would pass to <code>{`<a>`}</code> or a "Component" prop.
      </>
    ),
  }),
];

export const ReactDocsTopBarLink = () => {
  return (
    <>
      <h2 id="props">Prop table</h2>
      <PropTable itemProps={itemProps} />
    </>
  );
};

export default ReactDocsTopBarLink;
