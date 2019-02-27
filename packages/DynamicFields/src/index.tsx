
import * as React from 'react'


interface DynamicFieldsProps {
 name?: string, // Change the required prop to an optional prop.
}
const DynamicFields: React.SFC<DynamicFieldsProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
DynamicFields.defaultProps = {
 name: "Guest User", // This value is adopted when name prop is omitted.
}

export default DynamicFields
