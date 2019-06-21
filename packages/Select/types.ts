import { DropdownItem } from '@duik/dropdown';

export type SelectActiveOption<
  V extends number | string,
  M extends boolean = false
> = M extends true ? SelectOption<V>[] : SelectOption<V> | null;

export type SelectOption<V extends number | string = any> = {
  label?: React.ReactNode;
  value: V;
  props?: React.ComponentProps<typeof DropdownItem>;
};

export type SelectOnOptionFn<V extends number | string> = (
  option: SelectOption<V>,
  name?: string
) => void;

export type SelectOptionProps<
  Value extends number | string,
  Multiple extends boolean = false
> = {
  options: SelectOption<Value>[];
  activeOption?: SelectActiveOption<Value, Multiple>;
  multiple?: Multiple;
  defaultOption?: SelectActiveOption<Value, Multiple>;
};
