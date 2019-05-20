import * as React from 'react'
import classnames from 'classnames'
import { AnyTag, PropsWithTagProps } from '@duik/core'

import './styles.scss'

type NavLinkBaseProps = {
  className?: string,
  children?: React.ReactNode,
  rightEl?: React.ReactNode,
  highlighted?: boolean,
  icon?: React.ReactNode,
  leftEl?: React.ReactNode,
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
  leftEl,
  icon,
  Component,
  pill,
  secondary,
  ...rest
}: NavLinkProps<T>) {
  return (
    <Component
      className={classnames('nav-link', className, {
        ['highlighted']: highlighted,
        ['nav-link-pill']: pill,
        ['nav-link-secondary']: secondary
      })}
      {...rest}
    >
      <span className={'nav-link-text'}>
        {
          leftEl || icon && (
            <span className='left-el-wrapper'>
              {leftEl || icon}
            </span>
          )
        }
        {children}
      </span>
      {rightEl && (
        <span className='right-el-wrapper'>
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
  leftEl: null,
  children: null,
  Component: 'a',
}

export default NavLink
