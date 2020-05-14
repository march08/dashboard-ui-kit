import * as React from 'react';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.children(),
  properties.className(),
  properties.Component({
    defaultValue: '"button"',
  }),
  {
    prop: 'type',
    propType: 'string',
    required: false,
    defaultValue: '"button"',
    desc: 'Applicable for button or input, otherwise button will be omitted.',
  },
  properties.bool({
    prop: 'isExpanded | block',
    desc:
      'Applies width: 100% and extra styling cases when used with icons etc.',
  }),
  properties.bool({
    prop: 'xs | sm',
    desc: 'Renders smaller button with height 30px',
  }),
  properties.bool({
    prop: 'lg',
    desc: 'Renders larger button with height 50px',
  }),
  properties.bool({
    prop: 'primary',
    desc: 'Has blue color',
  }),
  properties.bool({
    prop: 'error | danger',
    desc: 'Has red color',
  }),
  properties.bool({
    prop: 'success',
    desc: 'Has green color',
  }),
  properties.bool({
    prop: 'dark',
    desc: 'Has dark color',
  }),
  properties.bool({
    prop: 'clear',
    desc: 'White with light shadow.',
  }),
  properties.bool({
    prop: 'transparent',
    desc: 'Button background is transparent with borders.',
  }),
  properties.bool({
    prop: 'isLoading | loading',
    desc: 'Will render loading state',
  }),
  // icon properties
  {
    prop: 'icon',
    propType: 'DEPRECATED',
    required: false,
    defaultValue: 'null',
    desc: 'Pass your icon as children instead',
  },
  {
    prop: 'iconRight',
    propType: 'DEPRECATED',
    required: false,
    defaultValue: 'false',
    desc: 'Pass your icon as children instead',
  },
  {
    prop: 'iconOnly',
    propType: 'DEPRECATED',
    required: false,
    defaultValue: 'false',
    desc: 'Use "square" property to render squared shape instead',
  },
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
