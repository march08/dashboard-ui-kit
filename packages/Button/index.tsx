import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { AnyTag, PropsWithTagProps } from '@duik/types'
import { LoaderDots } from '@duik/loader-dots'

import * as cls from './styles.scss'

const Test = () => (
  <>
    <Button>Hello</Button>
    <Button to="/" Component={Link} >Hello</Button>
  </>
)


export type ButtonPropsBase = {
  children?: React.ReactNode,
  className?: string,
  // contentClassName?: string, DEPRECATED
  href?: string,
  type?: string,
  /**
   * Sizes
   */

  /**
   * @deprecated use sm instead
   */
  xs?: boolean,
  sm?: boolean,
  lg?: boolean,

  /**
   * Appearence
   */
  primary?: boolean,
  error?: boolean,
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
  // display block
  isExpanded?: boolean,
  block?: boolean,
}

export type ButtonProps<T extends AnyTag> = PropsWithTagProps<T, ButtonPropsBase & { Component: T }>


export const Button = <T extends AnyTag = 'button'>(props: ButtonProps<T>) => {
  const {
    primary,
    error,
    success,
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
    ...rest
  } = props;


  const classes = classnames(
    cls['btn'],
    {
      [cls['btn-primary']]: primary,
      [cls['btn-error']]: error,
      [cls['btn-success']]: success,
      [cls.dark]: dark,
      [cls['bth-sm']]: xs | sm,
      [cls['btn-lg']]: lg,
      [cls.clear]: clear,
      [cls['btn-loading']]: isLoading,
      [cls.transparent]: transparent,
      [cls.noBorder]: noBorder,
      [cls['btn-block']]: isExpanded || block,
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
      {children}
      <LoaderDots className={cls['btn-loader']} />
    </Component>
  )
}

Button.defaultProps = {
  Component: 'button'
}

export default Button;