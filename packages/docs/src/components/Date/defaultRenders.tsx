import { DatePickerView } from './useDatePickerView'
import { getMonthText, getMonthTextByMonthNumber } from './utils'

export const defaultRenderTitle = (visibleDate: Date, activeView: DatePickerView) => {
  switch (activeView) {
    case DatePickerView.month: return `${getMonthText(visibleDate)} ${visibleDate.getFullYear()}`
    case DatePickerView.monthList: return visibleDate.getFullYear()
    default: return 'Select Year'
  }
}

export const defaultRenderMonthName = (monthNumber: number) => getMonthTextByMonthNumber(monthNumber)