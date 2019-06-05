import React from 'react'


import {
  DatePickerValue,
  DatePickerOnChange,
} from './types'

const getValue = <M extends boolean>(value?: DatePickerValue<M>, isRange?: M) => {
  if (!!isRange && !value) {
    return { from: undefined, to: undefined } as DatePickerValue<M>
  }

  return value
}

export const useDatePickerValue = <M extends boolean = false>(
  controlledValue?: DatePickerValue<M>,
  isRange?: M,
  onDateChange?: DatePickerOnChange<M>
) => {

  const defaultValue = getValue(controlledValue, isRange)

  const [innerValue, setInnerValue] = React.useState<DatePickerValue<M> | undefined>(defaultValue)

  const value = typeof controlledValue === 'undefined' ? innerValue : controlledValue;

  const setValue = (value: DatePickerValue<M>) => {
    setInnerValue(value)
    if (onDateChange) {
      onDateChange(value)
    }
  }

  return {
    value,
    setValue
  }
}