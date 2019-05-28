import React from 'react'
import classnames from 'classnames'
import { Omit } from '@duik/core'

import cls from './styles.module.scss'

import { getMonthText, generateArrayOfLen } from './utils'


export type DateYearListViewProps = {
  handleYearSelect: (yearNumber: number) => void,
  visibleDate: Date
}


export const DateYearListView = (props: DateYearListViewProps) => {
  const { visibleDate, handleYearSelect } = props
  const currentYear = visibleDate.getFullYear()
  const startYear = currentYear - currentYear % 12
  return (
    <div className={cls['datepicker-year-list']}>
      {generateArrayOfLen(12, startYear).map(yearNumber => {

        const onClickMonth = () => { handleYearSelect(yearNumber) }
        return (
          <button
            key={yearNumber}
            onClick={onClickMonth}
            className={cls['datepicker-year-list-item']}
          >
            {yearNumber}
          </button>
        )
      })}
    </div>
  )
}