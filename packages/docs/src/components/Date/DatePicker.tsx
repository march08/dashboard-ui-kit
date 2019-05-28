import React from 'react'

import { DateMonthView } from './DateMonthView'
import { DateMonthListView } from './DateMonthListView'
import { DateYearListView } from './DateYearListView'
import { DatePickerView, useDatePickerView } from './useDatePickerView'
import { defaultRenderTitle, defaultRenderMonthName } from './defaultRenders'
import cls from './styles.module.scss'

export type DatePickerProps = {
  renderTitle?: (visibleDate: Date, activeView: DatePickerView) => React.ReactNode,
  renderMonthName?: (monthNumber: number) => React.ReactNode
}


export const DatePicker = (props: DatePickerProps) => {

  const {
    renderTitle = defaultRenderTitle,
    renderMonthName = defaultRenderMonthName
  } = props

  const [selectedDateFrom, setSelectedFromDate] = React.useState()
  const [selectedDateTo, setSelectedToDate] = React.useState()
  const [visibleDate, setVisibleDate] = React.useState(new Date())
  const view = useDatePickerView()

  const handleDateSelect = (date: Date) => {

    if (!selectedDateFrom || (selectedDateTo && selectedDateFrom)) {
      setSelectedFromDate(date)
      setSelectedToDate(null)
    } else if (selectedDateFrom) {
      if (selectedDateFrom.getTime() <= date.getTime()) {
        setSelectedToDate(date)
      } else {
        setSelectedFromDate(date)
        setSelectedToDate(null)
      }
    } else {
      setSelectedFromDate(date)
      setSelectedToDate(null)
    }

    // setSelectedFromDate(date)
    // setSelectedToDate(date)
  }

  console.log('selectedDate', selectedDateFrom)

  const dayProps = {
    handleDateSelect: handleDateSelect,
    selectedDateFrom,
    selectedDateTo
  }

  const prevDate = new Date()
  prevDate.setMonth(visibleDate.getMonth() - 1)
  const nextDate = new Date()
  nextDate.setMonth(visibleDate.getMonth() + 1)

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

  return (
    <div>

      <div className={cls['datepicker']}>
        <div className={cls['datepicker-header']}>
          <button onClick={handlePrev} className={cls['datepicker-nav-btn']}>←</button>
          <button className={cls['datepicker-title-btn']} type="button" onClick={view.setPrevView}>
            {renderTitle(visibleDate, view.activeView)}
          </button>
          <button onClick={handleNext} className={cls['datepicker-nav-btn']}>→</button>
        </div>

        <div className={cls['datepicker-view-container']}>

          {view.activeView === DatePickerView.yearList && (
            <>
              <DateYearListView handleYearSelect={handleYearSelect} visibleDate={visibleDate} />
              <DateYearListView handleYearSelect={handleYearSelect} visibleDate={nextDate} />
            </>
          )}

          {view.activeView === DatePickerView.monthList && (
            <DateMonthListView handleMonthSelect={handleMonthSelect} renderMonthName={renderMonthName} />
          )}

          {view.activeView === DatePickerView.month && (
            <>
              <DateMonthView dayProps={dayProps} visibleDate={visibleDate} />
              <DateMonthView dayProps={dayProps} visibleDate={nextDate} />
            </>
          )}
        </div>

      </div>

    </div>
  )
}