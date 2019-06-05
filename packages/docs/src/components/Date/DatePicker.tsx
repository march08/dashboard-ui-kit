import React from 'react'

import { DateMonthView } from './DateMonthView'
import { DateMonthListView } from './DateMonthListView'
import { DateYearListView } from './DateYearListView'
import { DatePickerView, useDatePickerView } from './useDatePickerView'
import { defaultRenderTitle, defaultRenderMonthName, defaultRenderWeekdayShort } from './defaultRenders'
import { useVisibleDate } from './useVisibleDate'

import cls from './styles.module.scss'

import {
  DatePickerRangeValue,
  DatePickerSimpleValue,
  DatePickerValue,
  DatePickerOnChange,
} from './types'

import { useDatePickerValue } from './useDatePickerValue'

export type DatePickerProps<M extends boolean = false> = {
  renderTitle?: (visibleDate: Date, activeView: DatePickerView) => React.ReactNode,
  renderMonthName?: (monthNumber: number) => React.ReactNode,
  renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode,
  isRange?: M,
  value?: DatePickerValue<M>,
  onDateChange?: DatePickerOnChange<M>,
  minDate?: Date,
  maxDate?: Date,
  initialVisibleDate?: Date,
  weekdayOffset?: number,
}

const getInitVisibleDate = <M extends boolean>(initDate?: Date, isRange?: M, value?: DatePickerValue<M> | null) => {
  if (initDate) {
    return initDate
  }

  if (isRange && !!value && !!(value as DatePickerRangeValue).from) {
    return (value as DatePickerRangeValue).from
  }

  if (!isRange && !!value) {
    return value as Date
  }

  return new Date()
}

export function DatePicker<M extends boolean = false>(props: DatePickerProps<M>) {

  const view = useDatePickerView()
  const [mouseOverDate, setMouseOverDate] = React.useState()


  const {
    renderTitle = defaultRenderTitle,
    renderMonthName = defaultRenderMonthName,
    renderWeekdayShort = defaultRenderWeekdayShort,
    onDateChange: onChangeProp,
    value: controlledValue,
    isRange,
    minDate,
    maxDate,
    weekdayOffset,
    initialVisibleDate
  } = props


  const {
    value,
    setValue,
  } = useDatePickerValue<M>(
    controlledValue,
    isRange,
    onChangeProp,
  )


  const initVisibleDate = getInitVisibleDate(initialVisibleDate, isRange, value)

  const {
    handleMonthSelect,
    handleYearSelect,
    handleNext,
    handlePrev,
    visibleDate
  } = useVisibleDate(initVisibleDate as Date, view)

  const handleDateSelect = React.useCallback(
    (date: Date) => {
      if (isRange === true) {
        const { from, to } = value as DatePickerRangeValue
        const onChangeValue = setValue as DatePickerOnChange<true>
        if (from && !to && from.getTime() <= date.getTime()) {
          onChangeValue({ from, to: date })
        } else {
          setMouseOverDate(null)
          onChangeValue({ from: date, to: null })
        }
      } else {
        const onChangeValue = setValue as DatePickerOnChange<false>
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
            visibleDate={visibleDate}
            weekdayOffset={weekdayOffset}
          />
        )}
      </div>
    </div>
  )
}


DatePicker.displayName = "DatePicker"