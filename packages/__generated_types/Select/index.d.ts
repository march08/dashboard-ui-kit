import React from 'react';
import { Dropdown, DropdownMenuPosition } from '@duik/dropdown';
import { TextField } from '@duik/text-field';
import { SelectOnOptionFn, SelectOptionProps } from './types';
export * from './types';
export declare type SelectMenuPosition = DropdownMenuPosition;
export declare type SelectProps<V extends number | string> = React.ComponentProps<typeof Dropdown> & SelectOptionProps<V> & {
    placeholder?: React.ReactNode;
    onOptionClick?: SelectOnOptionFn<V>;
    name?: string;
    inputSearchProps?: React.ComponentProps<typeof TextField>;
    searchable?: boolean;
    multiple?: boolean;
    label?: React.ReactNode;
    block?: boolean;
};
export declare const Select: <V extends React.ReactText>(props: SelectProps<V>) => JSX.Element;
