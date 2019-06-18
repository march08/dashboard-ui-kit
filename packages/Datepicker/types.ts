export type DatepickerRangeValue = {
  from?: Date | null | undefined;
  to?: Date | null | undefined;
};

export type DatepickerSimpleValue = Date | null | undefined;

export type DatepickerValue<M extends boolean> = M extends true
  ? DatepickerRangeValue
  : DatepickerSimpleValue;

export type DatepickerOnChange<M extends boolean> = (
  value: DatepickerValue<M>
) => void;
