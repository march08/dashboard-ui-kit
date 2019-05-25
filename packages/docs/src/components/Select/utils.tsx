import React from 'react'
import { SelectOption } from './types'


export const getOptionLabel = (option?: SelectOption<any> | null) => {
  if (option) {
    return option.label || option.value
  }
  return null
}

export const getDisplayValue = (option?: SelectOption<any> | SelectOption<any>[] | null) => {
  if (Array.isArray(option)) {
    if (option.length > 1) {
      return (
        <>
          {getOptionLabel(option[0])} <span className="select-multi-count">+{option.length - 1}</span>
        </>
      )
    }
    return getOptionLabel(option[0])
  }

  return getOptionLabel(option)
}