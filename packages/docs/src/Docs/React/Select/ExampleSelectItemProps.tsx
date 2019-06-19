import React from 'react';
import { Select, SelectOption } from '@duik/it';
import { string } from 'prop-types';

export const ExampleSelectItemProps = () => {
  const [activeOption, setActiveOption] = React.useState<
    SelectOption<number> | undefined
  >();

  const handleOptionClick = (option: SelectOption) => {
    setActiveOption(option);
  };
  return (
    <Select
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={[
        { label: 'Option 1', value: 1, props: { disabled: true } },
        { label: 'This is option 2', value: 2 },
        { label: 'Another option', value: 3 },
        { label: 'So many options', value: 4 }
      ]}
    />
  );
};

export const ExampleSelectItemPropsCode = `import React from 'react'
import { Select } from '@duik/it'

export const ExampleSelectItemProps = () => {
  const [activeOption, setActiveOption] = React.useState<
    SelectOption | undefined
  >();

  const handleOptionClick = (option: SelectOption) => {
    setActiveOption(option);
  };
  return (
    <Select
      activeOption={activeOption}
      onOptionClick={handleOptionClick}
      options={[
        { label: "Option 1", value: 1, props: { disabled: true } },
        { label: "This is option 2", value: 2 },
        { label: "Another option", value: 3 },
        { label: "So many options", value: 4 }
      ]}
    />
  );
};`;
