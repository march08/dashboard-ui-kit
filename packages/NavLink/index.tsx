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
  // styles
  pill?: boolean,
  secondary?: boolean
}


export type NavLinkProps<T extends AnyTag> = PropsWithTagProps<T, NavLinkBaseProps & { Component?: T }>

export function NavLink<T extends AnyTag>({
  rightEl,
  children,
  className,
  highlighted,
  icon,
  Component,
  pill,
  secondary,
  ...rest
}: NavLinkProps<T>) {
  return (
    <Component
      className={classnames(cls['nav-link'], className, {
        [cls.highlighted]: highlighted,
        ['nav-link-pill']: pill,
        ['nav-link-secondary']: secondary
      })}
      tabIndex="0"
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
