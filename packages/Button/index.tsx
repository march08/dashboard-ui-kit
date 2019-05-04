import * as React from 'react'
import classnames from 'classnames'
import { AnyTag, PropsWithTagProps } from '@duik/types'

import * as cls from './styles.module.scss'


export type ButtonProps<T extends AnyTag> = PropsWithTagProps<T, {
  children?: React.ReactNode,
  className?: string,
  contentClassName?: string,
  href?: string,
  type?: string,
  xs?: boolean,
  lg?: boolean,
  primary?: boolean,
  error?: boolean,
  success?: boolean,
  transparent?: boolean,
  clear?: boolean,
  isLoading?: boolean,
  // icon properties
  icon?: React.ReactNode,
  iconRight?: boolean,
  iconOnly?: boolean,
  noBorder?: boolean,
  dark?: boolean,
  isExpanded?: boolean,
  Component?: T,
}>

export function Button<T extends AnyTag = 'button'>(props: ButtonProps<T>) {
  const {
    primary,
    error,
    success,
    dark,
    transparent,
    children,
    className,
    contentClassName,
    xs,
    lg,
    clear,
    isLoading,
    type,
    icon,
    iconRight,
    iconOnly,
    noBorder,
    isExpanded,
    Component,
    ...rest
  } = props


  const classes = classnames(
    cls.base,
    {
      [cls.primary]: primary,
      [cls.error]: error,
      [cls.success]: success,
      [cls.dark]: dark,
      [cls.xs]: xs,
      [cls.lg]: lg,
      [cls.clear]: clear,
      [cls.isLoading]: isLoading,
      [cls.hasIcon]: icon,
      [cls.iconRight]: iconRight,
      [cls.iconOnly]: iconOnly,
      [cls.transparent]: transparent,
      [cls.noBorder]: noBorder,
      [cls.isExpanded]: isExpanded,
    },
    className,
  )

  // put props together so we don't have to repeat it
  const btnProps = {
    className: classes,
    ...rest,
  }

  return (

    <Component
      {...btnProps}
      type={Component === 'button' ? type : null}
    >
      {
        icon && (
          <span className={cls.iconWrapper}>
            {icon}
          </span>
        )
      }
      <span className={classnames(cls.content, contentClassName)}>
        {children}
      </span>
    </Component>
  )
}

Button.defaultProps = {
  Component: 'button'
}

export default Button;