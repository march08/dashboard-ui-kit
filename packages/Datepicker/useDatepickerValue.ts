import React from "react";

import { DatepickerValue, DatepickerOnChange } from "./types";

const getValue = <M extends boolean>(
  value?: DatepickerValue<M>,
  isRange?: M
) => {
  if (!!isRange && !value) {
    return { from: undefined, to: undefined } as DatepickerValue<M>;
  }

  return value;
};

export const useDatepickerValue = <M extends boolean = false>(
  controlledValue?: DatepickerValue<M>,
  isRange?: M,
  onDateChange?: DatepickerOnChange<M>
) => {
  const defaultValue = getValue(controlledValue, isRange);

  const [innerValue, setInnerValue] = React.useState<
    DatepickerValue<M> | undefined
  >(defaultValue);

  const value =
    typeof controlledValue === "undefined" ? innerValue : controlledValue;

  const setValue = (value: DatepickerValue<M>) => {
    setInnerValue(value);
    if (onDateChange) {
      onDateChange(value);
    }
  };

  return {
    value,
    setValue
  };
};
