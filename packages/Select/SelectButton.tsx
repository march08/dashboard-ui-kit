import React from 'react';
import { DropdownButton } from '@duik/dropdown';
import { SelectOptionProps } from './types';
import { getDisplayValue } from './utils';

export type SelectButtonProps<
  V extends number | string,
  M extends boolean = false
> = React.ComponentProps<typeof DropdownButton> &
  SelectOptionProps<V, M> & {
    placeholder?: React.ReactNode;
  };

export const SelectButton = <V extends number | string, M extends boolean>(
  props: SelectButtonProps<V, M>
) => {
  const { children, placeholder, activeOption, options, ...rest } = props;
  return (
    <DropdownButton {...rest}>
      {children || getDisplayValue(activeOption) || placeholder}
    </DropdownButton>
  );
};
