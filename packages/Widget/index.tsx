import * as React from 'react'
import classnames from 'classnames'

import * as cls from './styles.scss'

// @flow

export type WidgetProps = JSX.IntrinsicElements['div'] & {
  padding?: boolean,
  margin?: boolean
}

export const Widget = ({
  children,
  className,
  padding,
  margin,
  ...rest
}: WidgetProps) => (
    <div
      className={classnames(cls['card'], className, {
        [cls['card-padding']]: padding,
        [cls['card-margin']]: margin,
      })}
      {...rest}
    >
      {children}
    </div>
  )

Widget.defaultProps = {
  className: null,
  children: null,
  padding: false,
  margin: false,
}

export default Widget
