import React from 'react'
import classnames from 'classnames'
import { Omit } from '@duik/core'

import cls from './styles.module.scss'

import { getMonthText, generateArrayOfLen } from './utils'


export type DateMonthListViewProps = {
  handleMonthSelect: (monthNumber: number) => void,
  renderMonthName: (monthNumber: number) => React.ReactNode
}


export const DateMonthListView = (props: DateMonthListViewProps) => {
  const { handleMonthSelect, renderMonthName } = props
  return (
    <div className={cls['datepicker-month-list']}>
      {generateArrayOfLen(12, 0).map(monthNumber => {

        const onClickMonth = () => { handleMonthSelect(monthNumber) }
        return (
          <button
            onClick={onClickMonth}
            className={cls['datepicker-month-list-item']}
          >
            {renderMonthName(monthNumber)}
          </button>
        )
      })}
    </div>
  )
}