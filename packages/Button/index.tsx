import * as React from 'react'
import classnames from 'classnames'
import { AnyTag, PropsWithTagProps } from '@duik/types'
import { LoaderDots } from '@duik/loader-dots'

import * as cls from './styles.scss'

export type ButtonPropsBase = {
  children?: React.ReactNode,
  className?: string,
  type?: string,
  // sizes
  xs?: boolean,
  sm?: boolean,
  lg?: boolean,
  // Appearence
  primary?: boolean,
  error?: boolean,
  danger?: boolean,
  success?: boolean,
  transparent?: boolean,
  clear?: boolean,
  isLoading?: boolean,
  // icon properties
  // DEPRECATED icon?: React.ReactNode,
  // DEPRECATED iconRight?: boolean,
  // DEPRECATED iconOnly?: boolean,
  noBorder?: boolean,
  dark?: boolean,
  secondary?: boolean,
  // display block
  isExpanded?: boolean,
  block?: boolean,
  square?: boolean,
}

export type ButtonProps<T extends AnyTag> = PropsWithTagProps<T, ButtonPropsBase & { Component: T }>


export const Button = <T extends AnyTag = 'button'>(props: ButtonProps<T>) => {
  const {
    primary,
    error,
    danger,
    success,
    secondary,
    dark,
    transparent,
    children,
    className,
    xs,
    sm,
    lg,
    clear,
    isLoading,
    type,
    noBorder,
    isExpanded,
    block,
    Component,
    square,
    ...rest
  } = props;


  const classes = classnames(
    cls['btn'],
    {
      [cls['btn-primary']]: primary,
      [cls['btn-error']]: error || danger,
      [cls['btn-success']]: success,
      [cls['btn-secondary']]: dark || secondary,
      [cls['bth-sm']]: xs | sm,
      [cls['btn-lg']]: lg,
      [cls.clear]: clear,
      [cls['btn-loading']]: isLoading,
      [cls.transparent]: transparent,
      [cls.noBorder]: noBorder,
      [cls['btn-block']]: isExpanded || block,
      [cls['btn-square']]: square
    },
    className,
  )

  return (

    <Component
      className={classes}
      {...rest}
      type={Component === 'button' ? type : undefined}
    >
      {children}
      <LoaderDots className={cls['btn-loader']} />
    </Component>
  )
}

Button.defaultProps = {
  Component: 'button'
}

export default Button;