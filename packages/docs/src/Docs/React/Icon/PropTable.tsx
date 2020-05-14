import * as React from 'react';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.className(),
  {
    prop: 'children',
    propType: 'string',
    required: false,
    defaultValue: null,
    desc: 'Icon name, see list below',
  },
  {
    prop: 'mr',
    propType: 'boolean',
    required: false,
    defaultValue: null,
    desc:
      'Adds right margin, useful when icon is next to the text, e.g. in button',
  },
  {
    prop: 'ml',
    propType: 'boolean',
    required: false,
    defaultValue: null,
    desc: 'Adds left margin',
  },
  properties.rest({
    desc: 'Other properties are passed to the i element',
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
