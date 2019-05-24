import React from 'react'
import classnames from 'classnames'
import { Dropdown, DropdownItem, DropdownMenuPosition, TextField } from '@duik/it'

import './styles.scss'

export type SelectMenuPosition = DropdownMenuPosition

export type SelectOption<V extends number | string = any> = {
  label?: React.ReactNode,
  value: V,
  props?: React.ComponentProps<typeof DropdownItem>
}

export type SelectOnOptionFn<V extends number | string> = (option: SelectOption<V>, name?: string) => void

export type SelectProps<V extends number | string> = React.ComponentProps<typeof Dropdown> & {
  options: SelectOption<V>[],
  activeOption?: SelectOption<V> | null,
  placeholder?: React.ReactNode,
  onOptionClick?: SelectOnOptionFn<V>,
  name?: string,
  inputSearchProps?: React.ComponentProps<typeof TextField>,
  searchable?: boolean,
}

const getDisplayValue = (option?: SelectOption<any> | null) => {
  if (option) {
    return option.label || option.value
  }
  return null
}

export function Select<V extends number | string>(props: SelectProps<V>) {
  const {
    options,
    activeOption,
    placeholder = 'Select Option',
    onOptionClick,
    name,
    inputSearchProps = {},
    searchable = false,
    buttonProps,
    ...rest
  } = props

  return (
    <Dropdown
      buttonText={getDisplayValue(activeOption) || placeholder}
      buttonProps={{
        ...buttonProps,
        options,
        activeOption
      }}
      {...rest}
    >
      {({ handleClose, isOpen }) => {
        const handleOptionClick = (option: SelectOption<V>) => () => {
          if (onOptionClick) {
            onOptionClick(option, name)
          }
          handleClose()
        }

        return (
          <>
            {searchable && isOpen && (
              <div className="select-search-box">
                <TextField
                  {...inputSearchProps}
                  autoFocus
                  className={classnames("select-search-input", inputSearchProps.className)}
                  rightEl={
                    <div className="select-search-wrapper">
                      <div className="select-search">
                        <div className="select-search-circle" />
                        <div className="select-search-rectangle" />
                      </div>
                    </div>}
                />
              </div>
            )}
            {options.map(option => (
              <DropdownItem
                onClick={handleOptionClick(option)}
                key={option.value}
                {...option.props}
              >
                {getDisplayValue(option)}
              </DropdownItem>
            ))}
          </>
        )
      }}
    </Dropdown>
  )
}