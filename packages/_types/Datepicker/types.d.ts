export declare type DatepickerRangeValue = {
    from?: Date | null | undefined;
    to?: Date | null | undefined;
};
export declare type DatepickerSimpleValue = Date | null | undefined;
export declare type DatepickerValue<M extends boolean> = (M extends true ? DatepickerRangeValue : DatepickerSimpleValue);
export declare type DatepickerOnChange<M extends boolean> = (value: DatepickerValue<M>) => void;
