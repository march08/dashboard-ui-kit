import { DatepickerValue } from "../Datepicker";

export type SelectDateRenderValue<M extends boolean> = (
  value?: DatepickerValue<M>,
  isRange?: M,
  placeholder?: React.ReactNode
) => React.ReactNode;
