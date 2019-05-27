import React from 'react'
import classnames from 'classnames'
import { Dropdown, DropdownItem, DropdownMenuPosition } from '@duik/dropdown'
import { TextField } from '@duik/text-field'
import { ContentTitle } from '@duik/content-title'


import { SelectOption, SelectOnOptionFn, SelectOptionProps } from './types'
import { getDisplayValue } from './utils'
import { SelectButton } from './SelectButton'
import cls from './styles.scss'
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
        className={classnames(cls["select"], className)}
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
                <div className={cls['select-search-box']}>
                  <TextField
                    {...inputSearchProps}
                    autoFocus
                    className={classnames(cls['select-search-input'], inputSearchProps.className)}
                    rightEl={
                      <div className={cls["select-search-wrapper"]}>
                        <div className={cls["select-search"]}>
                          <div className={cls["select-search-circle"]} />
                          <div className={cls["select-search-rectangle"]} />
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
                      <span className={cls['select-option-selected-mark']}></span>
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