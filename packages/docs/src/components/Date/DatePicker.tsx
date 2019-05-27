import React from 'react'

import { DateMonthView } from './DateMonthView'

export type DatePickerProps = {}

export const DatePicker = (props: DatePickerProps) => {

  const [selectedDateFrom, setSelectedFromDate] = React.useState()
  const [selectedDateTo, setSelectedToDate] = React.useState()

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

  const visibleDate = new Date()
  const prevDate = new Date()
  prevDate.setMonth(visibleDate.getMonth() - 1)
  const nextDate = new Date()
  nextDate.setMonth(visibleDate.getMonth() + 1)

  return (
    <div style={{ display: 'flex' }}>

      <DateMonthView dayProps={dayProps} visibleDate={visibleDate} />
      &nbsp;
      <DateMonthView dayProps={dayProps} visibleDate={nextDate} />
    </div>
  )
}