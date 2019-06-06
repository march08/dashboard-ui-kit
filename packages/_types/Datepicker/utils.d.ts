export declare const getDaysInMonth: (date: Date) => number;
/**
 * 0 - 6
 * @param date
 */
export declare const getMonthStartDay: (date: Date) => number;
export declare const generateArrayOfLen: (len: number, startNumber?: number) => number[];
export declare const isDateSelected: (date?: import("./types").DatepickerSimpleValue, selectedDateFrom?: import("./types").DatepickerSimpleValue, selectedDateTo?: import("./types").DatepickerSimpleValue, selectedDate?: import("./types").DatepickerSimpleValue) => boolean;
export declare const isDateInRange: (date?: import("./types").DatepickerSimpleValue, from?: import("./types").DatepickerSimpleValue, to?: import("./types").DatepickerSimpleValue) => boolean;
export declare const isDateSelectedFirst: (date?: import("./types").DatepickerSimpleValue, selectedDateFrom?: import("./types").DatepickerSimpleValue, selectedDate?: import("./types").DatepickerSimpleValue) => boolean;
export declare const isDateSelectedLast: (date?: import("./types").DatepickerSimpleValue, selectedDateFrom?: import("./types").DatepickerSimpleValue, selectedDateTo?: import("./types").DatepickerSimpleValue, selectedDate?: import("./types").DatepickerSimpleValue) => boolean;
export declare const isDayDisabled: (date: Date, minDate?: Date | undefined, maxDate?: Date | undefined) => boolean;
export declare const isMonthDisabled: (date: Date, minDate?: Date | undefined, maxDate?: Date | undefined) => boolean;
export declare const isYearDisabled: (date: Date, minDate?: Date | undefined, maxDate?: Date | undefined) => boolean;
