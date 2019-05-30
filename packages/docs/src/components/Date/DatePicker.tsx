import React from 'react'

import { DateMonthView } from './DateMonthView'
import { DateMonthListView } from './DateMonthListView'
import { DateYearListView } from './DateYearListView'
import { DatePickerView, useDatePickerView } from './useDatePickerView'
import { defaultRenderTitle, defaultRenderMonthName, defaultRenderWeekdayShort } from './defaultRenders'
import { useVisibleDate } from './useVisibleDate'

import cls from './styles.module.scss'

export type DatePickerRangeValue = { from?: Date | null, to?: Date | null }
export type DatePickerSimpleValue = Date | null
export type DatePickerValue<M extends boolean> = M extends true ? DatePickerRangeValue : DatePickerSimpleValue

export type DatePickerProps<M extends boolean = false> = {
  renderTitle?: (visibleDate: Date, activeView: DatePickerView) => React.ReactNode,
  renderMonthName?: (monthNumber: number) => React.ReactNode,
  renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode,
  isRange?: M,
  value?: DatePickerValue<M>,
  onDateChange?: (value: DatePickerValue<M>) => void,
  minDate?: Date,
  maxDate?: Date,
  initialVisibleDate?: Date,
}


export function DatePicker<M extends boolean = false>(props: DatePickerProps<M>) {

  const {
    renderTitle = defaultRenderTitle,
    renderMonthName = defaultRenderMonthName,
    renderWeekdayShort = defaultRenderWeekdayShort,
    onDateChange,
    value,
    isRange,
    minDate,
    maxDate,
    initialVisibleDate = new Date()
  } = props

  const view = useDatePickerView()

  const {
    handleMonthSelect,
    handleYearSelect,
    handleNext,
    handlePrev,
    visibleDate
  } = useVisibleDate(initialVisibleDate, view)

  const [mouseOverDate, setMouseOverDate] = React.useState()

  const handleDateSelect = React.useCallback(
    (date: Date) => {
      if (isRange === true && onDateChange) {
        const { from, to } = value as DatePickerRangeValue
        const onChangeValue = onDateChange as (value: DatePickerRangeValue) => void
        if (!from || (to && from)) {
          setMouseOverDate(null)
          onChangeValue({ from: date, to: null })
        } else if (from) {
          if (from.getTime() <= date.getTime()) {
            onChangeValue({ from, to: date })
          } else {
            setMouseOverDate(null)
            onChangeValue({ from: date, to: null })
          }
        } else {
          setMouseOverDate(null)
          onChangeValue({ from: date, to: null })
        }
      } else if (onDateChange) {
        const onChangeValue = onDateChange as (value: DatePickerSimpleValue) => void
        onChangeValue(date)
      }
    },
    [value]
  )

  const dateValue = !value ? isRange && { from: null, to: null } || null : value

  const from = !isRange ? (dateValue as DatePickerSimpleValue) : (dateValue as DatePickerRangeValue).from
  const to = !isRange ? (dateValue as DatePickerSimpleValue) : (dateValue as DatePickerRangeValue).to

  const handleMouseOver = from && isRange && !to ? (date: Date) => {
    setMouseOverDate(date)
  } : undefined

  const onMouseLeave = from && isRange && !to ? () => {
    setMouseOverDate(undefined)
  } : undefined

  const dayProps = {
    handleDateSelect: handleDateSelect,
    selectedDateFrom: from,
    selectedDateTo: to,
    minDate,
    maxDate,
    handleMouseOver,
    onMouseLeave,
    mouseOverDate,
  }


  return (
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
          <DateYearListView
            handleYearSelect={handleYearSelect}
            visibleDate={visibleDate}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}
        {view.activeView === DatePickerView.monthList && (
          <DateMonthListView
            handleMonthSelect={handleMonthSelect}
            visibleDate={visibleDate}
            renderMonthName={renderMonthName}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}
        {view.activeView === DatePickerView.month && (
          <DateMonthView
            dayProps={dayProps}
            renderWeekdayShort={renderWeekdayShort}
            visibleDate={visibleDate} />
        )}
      </div>
    </div>
  )
}


DatePicker.displayName = "DatePicker"