import * as React from 'react'
import classnames from 'classnames'

import * as cls from './styles.scss'

export type NavPanelProps = JSX.IntrinsicElements['div'] & {
  positionRight?: boolean,
  onRight?: boolean,
  dark?: boolean
}

export const NavPanel = ({
  children,
  className,
  positionRight,
  onRight,
  dark,
  ...rest
}: NavPanelProps) => (
    <div
      className={classnames(cls['nav-panel'], className, {
        [cls['nav-panel-right']]: positionRight || onRight,
        [cls['dark']]: dark
      })}
      {...rest}
    >
      {children}
    </div>
  )

NavPanel.defaultProps = {
  className: null,
  children: null,
  positionRight: false,
  onRight: false,
  dark: false,
}

export default NavPanel
