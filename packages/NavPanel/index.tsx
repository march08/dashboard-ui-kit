import * as React from 'react'
import classnames from 'classnames'

import cls from './styles.scss';

export type NavPanelProps = JSX.IntrinsicElements['nav'] & {
  positionRight?: boolean,
  onRight?: boolean,
  dark?: boolean
}

export function NavPanel({
  children,
  className,
  positionRight,
  onRight,
  dark,
  ...rest
}: NavPanelProps) {
  return (
    <nav
      className={classnames(cls['nav-panel'], className, {
        [cls['nav-panel-right']]: positionRight || onRight,
        [cls['nav-panel-dark']]: dark
      })}
      {...rest}
    >
      {children}
    </nav>
  )
}

NavPanel.defaultProps = {
  className: null,
  children: null,
  positionRight: false,
  onRight: false,
  dark: false,
}

NavPanel.displayName = "NavPanel"

export default NavPanel
