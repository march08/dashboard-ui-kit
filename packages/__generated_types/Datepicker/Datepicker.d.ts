import React from 'react';
import { DatepickerView } from './useDatepickerView';
import { DatepickerValue, DatepickerOnChange } from './types';
export declare type DatepickerProps<M extends boolean = false> = {
    renderTitle?: (visibleDate: Date, activeView: DatepickerView) => React.ReactNode;
    renderMonthName?: (monthNumber: number) => React.ReactNode;
    renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode;
    isRange?: M;
    value?: DatepickerValue<M>;
    onDateChange?: DatepickerOnChange<M>;
    minDate?: Date;
    maxDate?: Date;
    initialVisibleDate?: Date;
    weekdayOffset?: number;
};
export declare const Datepicker: {
    <M extends boolean = false>(props: DatepickerProps<M>): JSX.Element;
    displayName: string;
};
