import React from 'react'

export enum DatePickerView {
  month = 'MONTH',
  monthList = 'MONTH_LIST',
  yearList = 'YEAR_LIST'
}

export const useDatePickerView = (initialView: DatePickerView = DatePickerView.month) => {
  const [activeView, setView] = React.useState(initialView)

  const setNextView = () => {
    if (activeView === DatePickerView.yearList) {
      setView(DatePickerView.monthList)
    } else if (activeView === DatePickerView.monthList) {
      setView(DatePickerView.month)
    }
  }

  const setPrevView = () => {
    if (activeView === DatePickerView.monthList) {
      setView(DatePickerView.yearList)
    } else if (activeView === DatePickerView.month) {
      setView(DatePickerView.monthList)
    }
  }

  return {
    activeView,
    setNextView,
    setPrevView,
    setView
  }
}
