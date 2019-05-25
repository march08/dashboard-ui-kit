import * as React from 'react';
import { Widget } from '@duik/it/index'
import { Link } from 'react-router-dom'


import { PropTable, properties } from '../../components'


// & React.ComponentProps<typeof Dropdown>
// & SelectOptionProps<V>
// & {
//   placeholder?: React.ReactNode,
//   onOptionClick?: SelectOnOptionFn<V>,
//   name?: string,
//   inputSearchProps?: React.ComponentProps<typeof TextField>,
//   searchable?: boolean,
//   multiple?: boolean,
//   label?: React.ReactNode,
//   block?: boolean,
// }


const itemProps = [
  properties.className({
    desc: <>Passed to the wrapping element <Link to="/docs/react/dropdown">Dropdown</Link></>
  }),
  properties.bool({
    prop: 'searchable',
    desc: 'Will display search field.'
  }),
  {
    prop: 'inputSearchProps',
    propType: <>props of <Link to="/docs/react/text-field">TextField</Link></>,
    desc: <>Pass props such as value and onChange to have access to the input value. See <Link to="#searchable">example usage</Link> above.</>
  },
  properties.rest({
    desc: (
      <>Other properties are passed down to the wrapping element <Link to="/docs/react/dropdown">Dropdown</Link>, such as button props, menu position etc. or even deeper to <Link to="/docs/react/outer-events-handler">OuterEventsHandler</Link></>
    )
  }),
]


export const PropTableDropdown = () => {

  return (
    <>
      <h2 id="props-dropdown">Select Props</h2>
      <Widget>
        <PropTable itemProps={itemProps} />
      </Widget >
    </>
  )
}

export default PropTableDropdown;

