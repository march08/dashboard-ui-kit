import * as React from 'react'
import classnames from 'classnames'
import { AnyTag, PropsWithTagProps } from '@duik/core'

import cls from './styles.scss'

type NavLinkBaseProps = {
  className?: string,
  children?: React.ReactNode,
  rightEl?: React.ReactNode,
  highlighted?: boolean,
  icon?: React.ReactNode,
  dark?: boolean
}


export type NavLinkProps<T extends AnyTag> = PropsWithTagProps<T, NavLinkBaseProps & { Component?: T }>

export function NavLink<T extends AnyTag>({
  rightEl,
  children,
  className,
  highlighted,
  icon,
  Component,
  dark,
  ...rest
}: NavLinkProps<T>) {
  return (
    <Component
      className={classnames(cls['nav-link'], className, {
        [cls.highlighted]: highlighted,
        [cls['nav-link-dark']]: dark
      })}
      {...rest}
    >
      <span className={cls.text}>
        {
          icon && (
            <span className={cls['left-el-wrapper']}>
              {icon}
            </span>
          )
        }
        {children}
      </span>
      {rightEl && (
        <span className={cls['right-el-wrapper']}>
          {rightEl}
        </span>
      )}
    </Component>
  )
}

NavLink.defaultProps = {
  className: null,
  rightEl: null,
  highlighted: false,
  icon: null,
  children: null,
  Component: 'a',
}

export default NavLink
