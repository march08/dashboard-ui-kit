import * as React from 'react'
import { AnyTag } from '@duik/core'
import classnames from 'classnames'
import { Button, ButtonProps } from '@duik/button'
import * as cls from './styles.scss'


export const DropdownItem = <T extends AnyTag = 'button'>(props: ButtonProps<T>) => {
  const { className, ...rest } = props

  return (
    <Button className={classnames(cls['dropdown-item'], className)} {...rest} />
  )
}


DropdownItem.displayName = 'DropdownItem'