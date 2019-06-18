import React from "react";
import { DatepickerValue, DatepickerRangeValue } from "../Datepicker";

export const defaultRenderValue = <M extends boolean>(
  value?: DatepickerValue<M>,
  isRange?: M,
  placeholder?: React.ReactNode
) => {
  if (!value) {
    return placeholder;
  }

  if (isRange) {
    const dateRange = value as DatepickerRangeValue;
    if (!dateRange.to && !dateRange.from) {
      return placeholder;
    }
    return (
      <>
        {(dateRange.from && (
          <strong>{dateRange.from.toLocaleDateString()}</strong>
        )) ||
          placeholder}
        &nbsp;&nbsp;═&nbsp;&nbsp;
        {(dateRange.to && (
          <strong>{dateRange.to.toLocaleDateString()}</strong>
        )) ||
          placeholder}{" "}
      </>
    );
  }

  return <strong>{(value as Date).toLocaleDateString() || "-"}</strong>;
};
