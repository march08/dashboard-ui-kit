import React from 'react';
import { Select, SelectOption } from '@duik/it';

export const ExampleSelectControlledValue = () => {
  const [activeOption, setActiveOption] = React.useState<SelectOption | undefined>();

  const handleOptionClick = (option: SelectOption, name?: string) => {
    setActiveOption(option);
  };
  return (
    <Select
      label="Basic options"
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: <strong>Highlighted Option</strong>, value: 3 },
        { label: <strong>Highlighted Long Long Option</strong>, value: 4 }
      ]}
    />
  );
};

export const ExampleSelectControlledValueCode = `import React from 'react'
import { Select } from '@duik/it'

export const ExampleSelectControlledValue = () => {
  const [activeOption, setActiveOption] = React.useState()

  /* 
   * onOptionClick passes 2 params, option and name
   * we don't need the "name", but it cannot be passed to
   * the useState setter (setActiveOption), thus the setter cannot be used directly
   */
  const handleOptionClick = (option, name ) => {
    setActiveOption(option)
  }
  return (
    <Select
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: <strong>Highlighted Option</strong>, value: 3 },
        { label: <strong>Highlighted Long Long Option</strong>, value: 4 },
      ]}
    />
  )
}`;
