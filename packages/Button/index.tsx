import React from 'react';
import classnames from 'classnames';
import { AnyTag, PropsWithTagProps } from '@duik/core';
import { LoaderDots } from '@duik/loader-dots';

import cls from './styles.scss';

export type ButtonPropsBase = {
  children?: React.ReactNode;
  className?: string;
  type?: string;
  // sizes
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  // Appearence
  primary?: boolean;
  error?: boolean;
  danger?: boolean;
  success?: boolean;
  transparent?: boolean;
  clear?: boolean;
  isLoading?: boolean;
  loading?: boolean;
  noBorder?: boolean;
  dark?: boolean;
  secondary?: boolean;
  // display block
  isExpanded?: boolean;
  block?: boolean;
  square?: boolean;
};
export type ButtonProps<T extends AnyTag> = PropsWithTagProps<
  T,
  ButtonPropsBase & { Component?: T }
>;
export type ButtonRefObject = React.RefObject<HTMLButtonElement>;

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
    loading,
    type = 'button',
    noBorder,
    isExpanded,
    block,
    Component = 'button',
    square,
    ...rest
  } = props;

  const loadingState = isLoading || loading;

  const classes = classnames(
    cls['btn'],
    {
      [cls['btn-primary']]: primary,
      [cls['btn-error']]: error || danger,
      [cls['btn-success']]: success,
      [cls['btn-secondary']]: dark || secondary,
      [cls['btn-sm']]: xs | sm,
      [cls['btn-lg']]: lg,
      [cls['btn-clear']]: clear,
      [cls['btn-loading']]: loadingState,
      [cls['btn-transparent']]: transparent,
      [cls.noBorder]: noBorder,
      [cls['btn-block']]: isExpanded || block,
      [cls['btn-square']]: square,
    },
    className
  );

  if (Component === 'input') {
    return <Component className={classes} {...rest} type={type} />;
  }

  return (
    <Component
      className={classes}
      {...rest}
      type={Component === 'button' ? type : undefined}
      role="button"
    >
      {children}
      {(loadingState && <LoaderDots className={cls['btn-loader']} />) || null}
    </Component>
  );
};

Button.displayName = 'Button';

export default Button;
