import React from 'react'
import classnames from 'classnames'
import { DatePicker, DatePickerProps, DatePickerValue, DatePickerRangeValue, DatePickerSimpleValue } from '../Date'
import { Dropdown, useOpenState, ContentTitle, AnyTag, DropdownProps, DropdownButton, DropdownMenu } from '@duik/it'
import cls from './styles.module.scss'

export type SelectDateProps<BC extends AnyTag, MC extends AnyTag, M extends boolean> =
  & DropdownProps<BC, MC>
  & DatePickerProps<M>
  & {
    placeholder?: React.ReactNode,
    label?: React.ReactNode,
  }

const renderValue = <M extends boolean = false>(date?: DatePickerValue<M>, isRange?: boolean, placeholder?: React.ReactNode, ) => {
  if (!date) {
    return placeholder
  }

  if (isRange) {
    const dateRange = date as DatePickerRangeValue
    if (!dateRange.to && !dateRange.from) {
      return placeholder
    }
    return (
      <>{dateRange.from && <strong>{dateRange.from.toLocaleDateString()}</strong> || placeholder}&nbsp;&nbsp;═&nbsp;&nbsp;{dateRange.to && <strong>{dateRange.to.toLocaleDateString()}</strong> || placeholder} </>
    )
  }

  return <strong>{(date as Date).toLocaleDateString() || '-'}</strong>
}

export const SelectDate = <
  BC extends AnyTag = DropdownButton,
  MC extends AnyTag = DropdownMenu,
  M extends boolean = false
>(props: SelectDateProps<BC, MC, M>) => {

  const openControls = useOpenState()

  const {
    // Datepicker Props
    renderTitle,
    renderMonthName,
    renderWeekdayShort,
    isRange,
    value,
    onChange,
    minDate,
    maxDate,
    initialVisibleDate,
    //other
    placeholder = 'Select Date',
    label,
    // rest is dropdown props
    ...dropdownProps
  } = props

  const onChangeSelect = (value: DatePickerValue<M>) => {
    if (onChange) {
      onChange(value)
    }
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
    onChange: onChangeSelect,
    minDate,
    maxDate,
    initialVisibleDate,
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