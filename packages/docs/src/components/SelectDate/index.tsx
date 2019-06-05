import React from 'react'
import classnames from 'classnames'
import { DatePicker, DatePickerProps, DatePickerValue, DatePickerRangeValue, useDatePickerValue } from '../Date'
import { Dropdown, useOpenState, ContentTitle } from '@duik/it'
import cls from './styles.module.scss'

import { defaultRenderValue } from './defaultRenders'
import { SelectDateRenderValue } from './types'

export * from './types'

export type SelectDateProps<M extends boolean> =
  & React.ComponentProps<typeof Dropdown>
  & DatePickerProps<M>
  & {
    placeholder?: React.ReactNode,
    label?: React.ReactNode,
    renderValue?: SelectDateRenderValue<M>
  }

export const SelectDate = <
  M extends boolean = false
>(props: SelectDateProps<M>) => {

  const openControls = useOpenState()

  const {
    // Datepicker Props
    renderTitle,
    renderMonthName,
    renderWeekdayShort,
    isRange,
    value: valueProp,
    onDateChange: onDateChangeProp,
    minDate,
    maxDate,
    initialVisibleDate,
    weekdayOffset,
    //other
    placeholder = 'Select Date',
    label,
    renderValue = defaultRenderValue,
    // rest is dropdown props
    ...dropdownProps
  } = props


  const {
    setValue,
    value,
  } = useDatePickerValue(valueProp, isRange, onDateChangeProp)

  const onDateChange = (value: DatePickerValue<M>) => {
    setValue(value)
    if (!isRange) {
      openControls.handleClose()
    } else {
      if (value && (value as DatePickerRangeValue).to) {
        openControls.handleClose()
      }
    }
  }


  const datepickerProps = {
    renderTitle,
    renderMonthName,
    renderWeekdayShort,
    isRange,
    value,
    onDateChange: onDateChange,
    minDate,
    maxDate,
    initialVisibleDate,
    weekdayOffset,
  }

  const {
    menuProps = {}
  } = dropdownProps

  const menuMergedProps = {
    ...menuProps,
    className: classnames(cls['select-date-dropdown'], (menuProps as any).className)
  } as any; // __TODO fix typing

  return (
    <>
      {label && (
        <ContentTitle>{label}</ContentTitle>
      )}
      <Dropdown
        className={cls['select-date']}
        openControls={openControls}
        buttonText={renderValue(value, isRange, placeholder)}
        menuProps={menuMergedProps}
        {...dropdownProps}
      >
        <DatePicker {...datepickerProps} />
      </Dropdown>
    </>
  )
}