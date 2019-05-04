
import * as React from 'react'

import * as cls from './styles.module.scss'

export interface TDynamicFieldsProps {
 name?: string,
 placeholder?: React.ReactNode
}

export const DynamicFields: React.SFC<TDynamicFieldsProps> = ({
  name,
  placeholder
}) => {

  const [ state, setState ] = React.useState(1)

  return <button className={cls.dynamicFields} onClick={() => setState(state + 1)}>Hello,qweqwe {state}</button>;
}

DynamicFields.defaultProps = {
 name: "Guest Useqwer", // This value is adopted when name prop is omitted.
}

export default DynamicFields
