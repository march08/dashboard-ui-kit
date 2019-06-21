import React from 'react';
import { Select, SelectOption } from '@duik/it';

export const ExampleSelectMulti = () => {
  const [values, setValue] = React.useState<SelectOption[]>([]);

  const handleOptionClick = (option: SelectOption) => {
    if (values.find(v => v.value === option.value)) {
      // value is selected, now we want to remove it
      setValue(values.filter(v => v.value !== option.value));
    } else {
      // adding new value
      setValue([...values, option]);
    }
  };

  return (
    <Select
      activeOption={values}
      multiple
      onOptionClick={handleOptionClick}
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'This is option 2', value: 2 },
        { label: 'Another option', value: 3 },
        { label: 'So many options', value: 4 }
      ]}
    />
  );
};

export const ExampleSelectMultiCode = `import React from 'react'
import { Select } from '@duik/it'


export const ExampleSelectMulti = () => {
  const [values, setValue] = React.useState([])

  const handleOptionClick = (option) => {

    if (values.find(v => v.value === option.value)) {
      // value is selected, now we want to remove it
      setValue(values.filter(v => v.value !== option.value))
    } else {
      // adding new value
      setValue([...values, option])
    }
  }
  return (
    <Select
      activeOption={values}
      multiple
      onOptionClick={handleOptionClick}
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'This is option 2', value: 2 },
        { label: 'Another option', value: 3 },
        { label: 'So many options', value: 4 },
      ]}
    />
  )
}`;
