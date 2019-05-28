import React from 'react'

import cls from './styles.module.scss'

import { generateArrayOfLen, isMonthDisabled } from './utils'


export type DateMonthListViewProps = {
  handleMonthSelect: (monthNumber: number) => void,
  renderMonthName: (monthNumber: number) => React.ReactNode,
  minDate?: Date,
  maxDate?: Date,
  visibleDate: Date,
}


export const DateMonthListView = (props: DateMonthListViewProps) => {
  const {
    handleMonthSelect,
    renderMonthName,
    minDate,
    maxDate,
    visibleDate
  } = props

  console.log('asdasd', minDate)

  const visibleYear = visibleDate.getFullYear()

  return (
    <div className={cls['datepicker-month-list']}>
      {generateArrayOfLen(12, 0).map(monthNumber => {

        const onClickMonth = () => { handleMonthSelect(monthNumber) }
        return (
          <button
            key={monthNumber}
            onClick={onClickMonth}
            className={cls['datepicker-month-list-item']}
            disabled={isMonthDisabled(new Date(visibleYear, monthNumber, 1), minDate, maxDate)}
          >
            {renderMonthName(monthNumber)}
          </button>
        )
      })}
    </div>
  )
}

DateMonthListView.displayName = "DateMonthListView"