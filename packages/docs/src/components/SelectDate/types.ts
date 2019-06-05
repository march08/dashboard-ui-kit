import { DatePickerValue } from '../Date'

export type SelectDateRenderValue<M extends boolean> = (
  value?: DatePickerValue<M>,
  isRange?: M,
  placeholder?: React.ReactNode
) => React.ReactNode
