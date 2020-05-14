import * as React from 'react';

import { PropTable, properties } from '../../components';

// lg?: boolean;
// sm?: boolean;
// full?: boolean;
// handleClose?: () => void;
// hideCloseButton?: boolean;
// disablePortal?: boolean;
// closeOnOuterClick?: boolean;

const itemProps = [
  properties.className(),
  properties.bool({
    prop: 'sm',
    desc: 'Renders smaller modal of width up to 560px (default 760px)',
  }),
  properties.bool({
    prop: 'lg',
    desc: 'Renders larger modal of width up to 1200px (default 760px)',
  }),
  properties.bool({
    prop: 'full',
    desc:
      'Renders modal that will  fill the width of the screen (default 760px)',
  }),
  properties.bool({
    prop: 'isOpen',
    desc: 'Boolean property whether is the modal opened or not',
  }),
  properties.bool({
    prop: 'jumbo',
    desc: 'Renders larger avatar with height 120px',
  }),
  {
    prop: 'handleClose',
    propType: '() => void',
    required: false,
    defaultValue: 'undefined',
    desc:
      'Provide a handler when it is required to close the window, e.g. on close button.',
  },
  properties.bool({
    prop: 'hideCloseButton',
    desc: 'Hides the close button',
  }),
  properties.bool({
    prop: 'closeOnOuterClick',
    desc: 'handleClose will be triggered when user clicks outside the modal',
  }),

  {
    prop: 'portalEl',
    propType: 'HTMLElement',
    required: false,
    defaultValue: 'document.body',
    desc:
      'By default modal will be rendered in <body>, you can provide a different dom element to be rendered in.',
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
