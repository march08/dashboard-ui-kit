import * as React from 'react';
import { Widget } from '@duik/it/index';
import { Link } from 'react-router-dom';

import { PropTable, properties } from '../../components';

const optionProps = [
  {
    prop: 'value',
    propType: 'string | number',
    desc: 'Option value',
    required: true,
  },
  properties.children({
    prop: 'label',
    propType: 'React.ReactNode',
    desc:
      'Display value to be rendered on the select button or select option. Value will be used as fallback if not provided.',
  }),
  {
    prop: 'props',
    propType: 'props of option component (Button)',
    desc:
      'You can pass props to the option component as well, such as "disabled"',
  },
];

const itemProps = [
  properties.className({
    desc: (
      <>
        Passed to the wrapping element{' '}
        <Link to="/docs/react/dropdown">Dropdown</Link>
      </>
    ),
  }),
  properties.children({
    prop: 'label',
    desc: 'Displays label node',
  }),
  properties.children({
    prop: 'placeholder',
    desc: 'Displays placeholder node if there is no activeOption',
    defaultValue: '"Select Option"',
  }),
  properties.bool({
    prop: 'activeOption',
    propType: (
      <>
        <Link to="#select-option">SelectOption</Link> |{' '}
        <Link to="#select-option">SelectOption</Link>[]
      </>
    ),
    desc: 'Active option(s) to be displayed. Single or Array.',
  }),
  properties.bool({
    prop: 'options',
    propType: (
      <>
        <Link to="#select-option">SelectOption</Link>[]
      </>
    ),
    desc: 'Array of options to be displayed in the options list',
  }),
  properties.bool({
    prop: 'multiple',
    desc: 'Enables behaviour for multiple select.',
  }),
  properties.bool({
    prop: 'searchable',
    desc: 'Will display search field.',
  }),
  {
    prop: 'name',
    propType: 'string',
    desc:
      'If you need to know on what select the onOptionClick has been triggered, pass a name value.',
  },
  {
    prop: 'onOptionClick',
    propType: (
      <span style={{ whiteSpace: 'nowrap' }}>
        (option: SelectOption, name?: string)
        <br />
        &nbsp;&nbsp;=&gt; void
      </span>
    ),
    desc: 'Handler when option is clicked.',
  },
  {
    prop: 'inputSearchProps',
    defaultValue: '{}',
    propType: (
      <>
        props of <Link to="/docs/react/text-field">TextField</Link>
      </>
    ),
    desc: (
      <>
        Pass props such as value and onChange to have access to the input value.
        See <Link to="#searchable">example usage</Link> above.
      </>
    ),
  },
  properties.bool({
    prop: 'block',
    desc: 'Expands the select button.',
  }),
  properties.formGroup(),
  properties.rest({
    desc: (
      <>
        Other properties are passed down to the wrapping element{' '}
        <Link to="/docs/react/dropdown">Dropdown</Link>, such as button props,
        menu position etc. or even deeper to{' '}
        <Link to="/docs/react/outer-events-handler">OuterEventsHandler</Link>
      </>
    ),
  }),
];

export const PropTableDropdown = () => {
  return (
    <>
      <h2 id="select-option">option: SelectOption</h2>
      <Widget>
        <PropTable itemProps={optionProps} />
      </Widget>
      <h2 id="props">Select Props</h2>
      <PropTable itemProps={itemProps} />
    </>
  );
};

export default PropTableDropdown;
