import React from 'react';
import { Select } from '@duik/it';

export const ExampleSelectItemProps = () => {
  return (
    <Select
      options={[
        { label: 'Option 1', value: 1, props: { disabled: true } },
        { label: 'This is option 2', value: 2 },
        { label: 'Another option', value: 3 },
        { label: 'So many options', value: 4 },
      ]}
    />
  );
};

export const ExampleSelectItemPropsCode = `import React from 'react'
import { Select } from '@duik/it'

export const ExampleSelectItemProps = () => {
  return (
    <Select
      options={[
        { label: "Option 1", value: 1, props: { disabled: true } },
        { label: "This is option 2", value: 2 },
        { label: "Another option", value: 3 },
        { label: "So many options", value: 4 }
      ]}
    />
  );
};`;
