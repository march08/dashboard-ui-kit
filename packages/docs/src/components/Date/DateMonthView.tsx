import React from 'react'
import classnames from 'classnames'
import { Omit } from '@duik/core'

import cls from './styles.module.scss'

import {
  getDaysInMonth,
  getMonthStartDay,
  generateArrayOfLen,
  isDateSelected,
  isDateSelectedLast,
  isDateSelectedFirst
} from './utils'

type DatePickerDayProps = {
  date: Date,
  handleDateSelect?: (date: Date) => void,
  isCurrentMonth?: boolean,
  selectedDateFrom?: Date | null,
  selectedDateTo?: Date | null,
  selectedDate?: Date | null,
}

const DatePickerDay = (props: DatePickerDayProps) => {
  const {
    date,
    isCurrentMonth,
    handleDateSelect,
    selectedDateFrom,
    selectedDateTo,
    selectedDate,
  } = props

  const handleClick = () => {
    if (handleDateSelect) {
      handleDateSelect(date)
    }
  }

  return (
    <button
      onClick={handleClick}
      key={date.toDateString()}
      className={classnames(cls['datepicker-day'], {
        [cls['datepicker-day-current-month']]: isCurrentMonth,
        [cls['datepicker-day-selected']]: isDateSelected(date, selectedDateFrom, selectedDateTo, selectedDate),
        [cls['datepicker-day-selected-first']]: isDateSelectedFirst(date, selectedDateFrom, selectedDate),
        [cls['datepicker-day-selected-last']]: isDateSelectedLast(date, selectedDateFrom, selectedDateTo, selectedDate)
      })}
    >
      <span className={cls['datepicker-day-content']}>
        {date.getDate()}
      </span>
    </button>
  )
}

export type DateMonthViewProps = {
  visibleDate: Date,
  /**
   * set to 1 if you want to start with sunday
   */
  weekdayOffset?: number,
  dayProps?: Omit<DatePickerDayProps, 'date'>
}


export const DateMonthView = (props: DateMonthViewProps) => {
  const {
    visibleDate,
    weekdayOffset = 0,
    dayProps
  } = props
  const startDay = getMonthStartDay(visibleDate)

  const currentYear = visibleDate.getFullYear()
  const currentMonth = visibleDate.getMonth()
  const currentDate = new Date(currentYear, currentMonth, 1)
  const currentMonthDays = getDaysInMonth(currentDate)

  const previousDate = new Date(currentYear, currentMonth - 1, 1)
  const previousMonth = previousDate.getMonth()
  const previousYear = previousDate.getFullYear()
  const previousMonthDays = getDaysInMonth(previousDate)

  const nextDate = new Date(currentYear, currentMonth + 1, 1)
  const nextMonth = nextDate.getMonth()
  const nextYear = nextDate.getFullYear()

  const lengthOfPreviousMonth = startDay + weekdayOffset

  return (
    <div className={cls['datepicker-month']}>
      {/* Previous month */}
      {generateArrayOfLen(lengthOfPreviousMonth, previousMonthDays - startDay + 1 - weekdayOffset).map(item => (
        <DatePickerDay
          key={item}
          date={new Date(previousYear, previousMonth, item)}
          {...dayProps}
        />
      ))}
      {/* This month */}
      {generateArrayOfLen(currentMonthDays).map(item => {
        return (
          <DatePickerDay
            key={item}
            isCurrentMonth
            date={new Date(currentYear, currentMonth, item)}
            {...dayProps}
          />
        )
      })}
      {/* Next month */}
      {generateArrayOfLen((7 - ((lengthOfPreviousMonth + currentMonthDays) % 7)) % 7, 1).map(item => (
        <DatePickerDay
          key={item}
          date={new Date(nextYear, nextMonth, item)}
          {...dayProps}
        />
      ))}
    </div>
  )
}