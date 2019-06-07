import React from 'react';
import { DatepickerProps } from '@duik/datepicker';
import { Dropdown } from '@duik/dropdown';
import { SelectDateRenderValue } from './types';
export * from './types';
export declare type SelectDateProps<M extends boolean> = React.ComponentProps<typeof Dropdown> & DatepickerProps<M> & {
    placeholder?: React.ReactNode;
    label?: React.ReactNode;
    renderValue?: SelectDateRenderValue<M>;
};
export declare const SelectDate: {
    <M extends boolean = false>(props: SelectDateProps<M>): JSX.Element;
    displayName: string;
};
