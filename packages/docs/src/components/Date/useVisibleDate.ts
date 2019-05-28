import React from 'react'
import { useDatePickerView, DatePickerView } from './useDatePickerView'
export const useVisibleDate = (initDate: Date = new Date(), view: ReturnType<typeof useDatePickerView>) => {

  const [visibleDate, setVisibleDate] = React.useState(initDate)


  const handleMonthSelect = (monthNumber: number) => {
    const nextVisibleDate = new Date(visibleDate)
    nextVisibleDate.setMonth(monthNumber)
    setVisibleDate(nextVisibleDate)
    view.setNextView()
  }

  const handleYearSelect = (yearNumber: number) => {
    const nextVisibleDate = new Date(visibleDate)
    nextVisibleDate.setFullYear(yearNumber)
    setVisibleDate(nextVisibleDate)
    view.setNextView()
  }

  const handlePrev = () => {
    if (view.activeView === DatePickerView.month) {
      const nextVisibleDate = new Date(visibleDate)
      nextVisibleDate.setMonth(visibleDate.getMonth() - 1)
      setVisibleDate(nextVisibleDate)
    }
    if (view.activeView === DatePickerView.monthList) {
      const nextVisibleDate = new Date(visibleDate)
      nextVisibleDate.setFullYear(visibleDate.getFullYear() - 1)
      setVisibleDate(nextVisibleDate)
    }
    if (view.activeView === DatePickerView.yearList) {
      const nextVisibleDate = new Date(visibleDate)
      nextVisibleDate.setFullYear(visibleDate.getFullYear() - 12)
      setVisibleDate(nextVisibleDate)
    }
  }
  const handleNext = () => {
    if (view.activeView === DatePickerView.month) {
      const nextVisibleDate = new Date(visibleDate)
      nextVisibleDate.setMonth(visibleDate.getMonth() + 1)
      setVisibleDate(nextVisibleDate)
    }
    if (view.activeView === DatePickerView.monthList) {
      const nextVisibleDate = new Date(visibleDate)
      nextVisibleDate.setFullYear(visibleDate.getFullYear() + 1)
      setVisibleDate(nextVisibleDate)
    }
    if (view.activeView === DatePickerView.yearList) {
      const nextVisibleDate = new Date(visibleDate)
      nextVisibleDate.setFullYear(visibleDate.getFullYear() + 12)
      setVisibleDate(nextVisibleDate)
    }
  }

  return {
    handleMonthSelect,
    handleYearSelect,
    handlePrev,
    handleNext,
    visibleDate,
    setVisibleDate
  }

}