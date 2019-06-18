import React from "react";

export enum DatepickerView {
  month = "MONTH",
  monthList = "MONTH_LIST",
  yearList = "YEAR_LIST"
}

export const useDatepickerView = (
  initialView: DatepickerView = DatepickerView.month
) => {
  const [activeView, setView] = React.useState(initialView);

  const setNextView = () => {
    if (activeView === DatepickerView.yearList) {
      setView(DatepickerView.monthList);
    } else if (activeView === DatepickerView.monthList) {
      setView(DatepickerView.month);
    }
  };

  const setPrevView = () => {
    if (activeView === DatepickerView.monthList) {
      setView(DatepickerView.yearList);
    } else if (activeView === DatepickerView.month) {
      setView(DatepickerView.monthList);
    }
  };

  return {
    activeView,
    setNextView,
    setPrevView,
    setView
  };
};
