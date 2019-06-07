import { DropdownItem } from '@duik/dropdown';
export declare type SelectOption<V extends number | string = any> = {
    label?: React.ReactNode;
    value: V;
    props?: React.ComponentProps<typeof DropdownItem>;
};
export declare type SelectOnOptionFn<V extends number | string> = (option: SelectOption<V>, name?: string) => void;
export declare type SelectOptionProps<V extends number | string> = {
    options: SelectOption<V>[];
    activeOption?: SelectOption<V> | SelectOption<V>[] | null;
};
