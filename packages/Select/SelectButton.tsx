import React from "react";
import { DropdownButton } from "@duik/dropdown";
import { SelectOptionProps } from "./types";
import { getDisplayValue } from "./utils";

export type SelectButtonProps<V extends number | string> = React.ComponentProps<
  typeof DropdownButton
> &
  SelectOptionProps<V> & {
    placeholder?: React.ReactNode;
  };

export const SelectButton = <V extends number | string>(
  props: SelectButtonProps<V>
) => {
  const { children, placeholder, activeOption, options, ...rest } = props;
  return (
    <DropdownButton {...rest}>
      {children || getDisplayValue(activeOption) || placeholder}
    </DropdownButton>
  );
};
