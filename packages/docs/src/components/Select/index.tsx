import React from 'react'
import classnames from 'classnames'
import { Dropdown, DropdownItem, DropdownMenuPosition, TextField, ContentTitle } from '@duik/it'

import { SelectOption, SelectOnOptionFn, SelectOptionProps } from './types'
import { getDisplayValue } from './utils'
import { SelectButton } from './SelectButton'
import './styles.scss'
export * from './types'

export type SelectMenuPosition = DropdownMenuPosition

export type SelectProps<V extends number | string> =
  & React.ComponentProps<typeof Dropdown>
  & SelectOptionProps<V>
  & {
    placeholder?: React.ReactNode,
    onOptionClick?: SelectOnOptionFn<V>,
    name?: string,
    inputSearchProps?: React.ComponentProps<typeof TextField>,
    searchable?: boolean,
    multiple?: boolean,
    label?: React.ReactNode,
    block?: boolean,
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
    multiple,
    className,
    label,
    block,
    ...rest
  } = props

  return (
    <>

      {label && (
        <ContentTitle>
          {label}
        </ContentTitle>
      )}
      <Dropdown
        className={classnames("select", className)}
        ButtonComponent={SelectButton}
        buttonProps={{
          ...buttonProps,
          options,
          activeOption,
          placeholder,
          block
        }}
        {...rest}
      >
        {({ handleClose, isOpen }) => {
          const handleOptionClick = (option: SelectOption<V>) => () => {
            if (onOptionClick) {
              onOptionClick(option, name)
            }
            if (!multiple) {
              handleClose()
            }
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
                  {
                    multiple
                    && Array.isArray(activeOption)
                    && activeOption.find(item => item.value === option.value)
                    && (
                      <span className="select-option-selected-mark"></span>
                    )}
                </DropdownItem>
              ))}
            </>
          )
        }}
      </Dropdown>
    </>
  )
}