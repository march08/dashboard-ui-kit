import React from "react";
import { useDatepickerView, DatepickerView } from "./useDatepickerView";
export const useVisibleDate = (
  initDate: Date = new Date(),
  view: ReturnType<typeof useDatepickerView>
) => {
  const [visibleDate, setVisibleDate] = React.useState(initDate);

  const handleMonthSelect = (monthNumber: number) => {
    const nextVisibleDate = new Date(visibleDate);
    nextVisibleDate.setMonth(monthNumber);
    setVisibleDate(nextVisibleDate);
    view.setNextView();
  };

  const handleYearSelect = (yearNumber: number) => {
    const nextVisibleDate = new Date(visibleDate);
    nextVisibleDate.setFullYear(yearNumber);
    setVisibleDate(nextVisibleDate);
    view.setNextView();
  };

  const handlePrev = () => {
    if (view.activeView === DatepickerView.month) {
      const nextVisibleDate = new Date(visibleDate);
      nextVisibleDate.setMonth(visibleDate.getMonth() - 1);
      setVisibleDate(nextVisibleDate);
    }
    if (view.activeView === DatepickerView.monthList) {
      const nextVisibleDate = new Date(visibleDate);
      nextVisibleDate.setFullYear(visibleDate.getFullYear() - 1);
      setVisibleDate(nextVisibleDate);
    }
    if (view.activeView === DatepickerView.yearList) {
      const nextVisibleDate = new Date(visibleDate);
      nextVisibleDate.setFullYear(visibleDate.getFullYear() - 12);
      setVisibleDate(nextVisibleDate);
    }
  };
  const handleNext = () => {
    if (view.activeView === DatepickerView.month) {
      const nextVisibleDate = new Date(visibleDate);
      nextVisibleDate.setMonth(visibleDate.getMonth() + 1);
      setVisibleDate(nextVisibleDate);
    }
    if (view.activeView === DatepickerView.monthList) {
      const nextVisibleDate = new Date(visibleDate);
      nextVisibleDate.setFullYear(visibleDate.getFullYear() + 1);
      setVisibleDate(nextVisibleDate);
    }
    if (view.activeView === DatepickerView.yearList) {
      const nextVisibleDate = new Date(visibleDate);
      nextVisibleDate.setFullYear(visibleDate.getFullYear() + 12);
      setVisibleDate(nextVisibleDate);
    }
  };

  return {
    handleMonthSelect,
    handleYearSelect,
    handlePrev,
    handleNext,
    visibleDate,
    setVisibleDate
  };
};
