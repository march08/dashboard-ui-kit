import { DatepickerView } from "./useDatepickerView";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const getMonthText = (date: Date) => {
  const monthNumber = date.getMonth();
  return months[monthNumber];
};

export const getMonthTextByMonthNumber = (monthNumber: number) => {
  return months[monthNumber];
};

const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const defaultRenderTitle = (
  visibleDate: Date,
  activeView: DatepickerView
) => {
  switch (activeView) {
    case DatepickerView.month:
      return `${getMonthText(visibleDate)} ${visibleDate.getFullYear()}`;
    case DatepickerView.monthList:
      return visibleDate.getFullYear();
    default:
      return "Select Year";
  }
};

export const defaultRenderMonthName = (monthNumber: number) =>
  getMonthTextByMonthNumber(monthNumber);

export const defaultRenderWeekdayShort = (weekdayNumber: number) => {
  return weekdaysShort[weekdayNumber];
};
