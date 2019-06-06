import React from 'react';
import { DropdownButton } from '@duik/dropdown';
import { SelectOptionProps } from './types';
export declare type SelectButtonProps<V extends number | string> = React.ComponentProps<typeof DropdownButton> & SelectOptionProps<V> & {
    placeholder?: React.ReactNode;
};
export declare function SelectButton<V extends number | string>(props: SelectButtonProps<V>): JSX.Element;
