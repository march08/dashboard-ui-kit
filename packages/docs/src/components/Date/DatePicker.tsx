import React from 'react'

import { DateMonthView } from './DateMonthView'
import { DateMonthListView } from './DateMonthListView'
import { DateYearListView } from './DateYearListView'
import { DatePickerView, useDatePickerView } from './useDatePickerView'
import { defaultRenderTitle, defaultRenderMonthName } from './defaultRenders'
import { useVisibleDate } from './useVisibleDate'

import cls from './styles.module.scss'

export type DatePickerRangeValue = { from?: Date | null, to?: Date | null }
export type DatePickerSimpleValue = Date | null
export type DatePickerValue<M extends boolean> = M extends true ? DatePickerRangeValue : DatePickerSimpleValue

export type DatePickerProps<M extends boolean = false> = {
  renderTitle?: (visibleDate: Date, activeView: DatePickerView) => React.ReactNode,
  renderMonthName?: (monthNumber: number) => React.ReactNode,
  isRange?: M,
  value?: DatePickerValue<M>,
  onChange?: (value: DatePickerValue<M>) => void
}


export function DatePicker<M extends boolean = false>(props: DatePickerProps<M>) {

  const {
    renderTitle = defaultRenderTitle,
    renderMonthName = defaultRenderMonthName,
    onChange,
    value,
    isRange
  } = props

  const view = useDatePickerView()

  const {
    handleMonthSelect,
    handleYearSelect,
    handleNext,
    handlePrev,
    visibleDate
  } = useVisibleDate(new Date(), view)

  const handleDateSelect = (date: Date) => {
    if (isRange === true && onChange) {
      const { from, to } = value as DatePickerRangeValue
      const onChangeValue = onChange as (value: DatePickerRangeValue) => void
      if (!from || (to && from)) {
        onChangeValue({ from: date, to: null })
      } else if (from) {
        if (from.getTime() <= date.getTime()) {
          onChangeValue({ from, to: date })
        } else {
          onChangeValue({ from: date, to: null })
        }
      } else {
        onChangeValue({ from: date, to: null })
      }
    } else if (onChange) {
      const onChangeValue = onChange as (value: DatePickerSimpleValue) => void
      onChangeValue(date)
    }
  }

  const dateValue = !value ? isRange && { from: null, to: null } || null : value

  const dayProps = {
    handleDateSelect: handleDateSelect,
    selectedDateFrom: !isRange ? (dateValue as DatePickerSimpleValue) : (dateValue as DatePickerRangeValue).from,
    selectedDateTo: !isRange ? (dateValue as DatePickerSimpleValue) : (dateValue as DatePickerRangeValue).to,
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
            <DateYearListView handleYearSelect={handleYearSelect} visibleDate={visibleDate} />
          )}
          {view.activeView === DatePickerView.monthList && (
            <DateMonthListView handleMonthSelect={handleMonthSelect} renderMonthName={renderMonthName} />
          )}
          {view.activeView === DatePickerView.month && (
            <DateMonthView dayProps={dayProps} visibleDate={visibleDate} />
          )}
        </div>

      </div>

    </div>
  )
}


DatePicker.displayName = "DatePicker"