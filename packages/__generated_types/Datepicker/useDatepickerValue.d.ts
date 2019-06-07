import { DatepickerOnChange } from './types';
export declare const useDatepickerValue: <M extends boolean = false>(controlledValue?: (M extends true ? import("./types").DatepickerRangeValue : import("./types").DatepickerSimpleValue) | undefined, isRange?: M | undefined, onDateChange?: DatepickerOnChange<M> | undefined) => {
    value: (M extends true ? import("./types").DatepickerRangeValue : import("./types").DatepickerSimpleValue) | undefined;
    setValue: (value: M extends true ? import("./types").DatepickerRangeValue : import("./types").DatepickerSimpleValue) => void;
};
