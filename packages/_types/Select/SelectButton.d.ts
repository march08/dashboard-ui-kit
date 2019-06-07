import React from 'react';
import { DropdownButton } from '@duik/dropdown';
import { SelectOptionProps } from './types';
export declare type SelectButtonProps<V extends number | string> = React.ComponentProps<typeof DropdownButton> & SelectOptionProps<V> & {
    placeholder?: React.ReactNode;
};
export declare const SelectButton: <V extends React.ReactText>(props: SelectButtonProps<V>) => JSX.Element;
