import * as React from 'react';
import { Link } from 'react-router-dom';

import { PropTable, properties } from '../../components';

const itemProps = [
  properties.children({
    propType: 'React.ReactNode or React.FunctionalComponent',
    desc: (
      <>
        You can pass regular react node or a render prop which can accepts
        several handlers to control the UI state. Your functional component will
        receive <Link to="/docs/react/use-open-state">useOpenState</Link>{' '}
        controls as props.
      </>
    )
  }),
  properties.className({
    desc: (
      <>
        Passed to the wrapping element{' '}
        <Link to="/docs/react/outer-events-handler">OuterEventsHandler</Link>
      </>
    )
  }),
  {
    prop: 'buttonText',
    propType: 'React.ReactNode',
    defaultValue: '"Actions"',
    desc: 'Text or node you want to appear in the button.'
  },
  properties.Component({
    prop: 'ButtonComponent',
    propType: 'React.FunctionalComponent',
    defaultValue: 'DropdownButton',
    desc: (
      <>
        You can pass your custom button component. Your component will receive
        set of <Link to="/docs/react/use-open-state">useOpenState</Link>{' '}
        controls as props.
      </>
    )
  }),
  {
    prop: 'buttonProps',
    propType: 'Props of ButtonComponent',
    required: false,
    desc:
      'This comes handy if you want to pass some props to the button without defining a new ButtonComponent, such as className etc.'
  },
  {
    prop: 'menuPosition',
    propType: 'DropdownMenuPosition',
    required: false,
    defaultValue: '"bottom-right"',
    desc: (
      <>
        See <Link to="#menu-position">Menu Positioning</Link> for more details
      </>
    )
  },
  properties.Component({
    prop: 'MenuComponent',
    propType: 'React.FunctionalComponent',
    defaultValue: 'DropdownMenu',
    desc: (
      <>
        You can pass your custom menu component. Your component will receive set
        of <Link to="/docs/react/use-open-state">useOpenState</Link> controls as
        props.
      </>
    )
  }),
  {
    prop: 'menuProps',
    propType: 'Props of MenuComponent',
    required: false,
    desc:
      'This comes handy if you want to pass some props to the button without defining a new MenuComponent, such as className etc.'
  },

  properties.rest({
    desc: (
      <>
        Other properties are passed down to the wrapping element{' '}
        <Link to="/docs/react/outer-events-handler">OuterEventsHandler</Link>
      </>
    )
  })
];

export const PropTableDropdown = () => {
  return (
    <>
      <h2 id="props-dropdown">Dropdown Props</h2>
      <PropTable itemProps={itemProps} />

      <h2 id="props-dropdown-item">DropdownItem Props</h2>
      <p>
        DropdownItem is just a styled{' '}
        <Link to="/docs/react/button">Button</Link> component and it supports
        all the props that are accepted by the Button, including appearence,
        sizes, Component prop and others.
      </p>
    </>
  );
};

export default PropTableDropdown;
