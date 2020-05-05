import React, { ReactNode } from 'react'
import classnames from 'classnames'

import cls from './styleguide.module.scss'

type ColorSchemeType = {
  className?: string,
  name?: string,
  children?: ReactNode,
  color: string,
  isSpreaded?: boolean
}

const ColorScheme = ({
  className,
  name,
  children,
  color,
  isSpreaded,
  ...rest
}: ColorSchemeType) => (
  <div className={ cls.colorSchemeWrapper }>
    <div
      className={ classnames(cls.colorScheme, {
        [cls.isSpreaded]: isSpreaded,
      }) }
      { ...rest }
    >
      <div
        style={ {
          backgroundColor: color,
        } }
      />
      <div
        style={ {
          backgroundColor: color,
        } }
      />
      <div
        style={ {
          backgroundColor: color,
        } }
      />
      <div
        style={ {
          backgroundColor: color,
        } }
      />
    </div>
    <span className={ cls.colorName }>
      {name}
    </span>
    <span className={ cls.colorCode }>
      {color}
    </span>
  </div>
)

ColorScheme.defaultProps = {
  className: null,
  name: '-',
  isSpreaded: true,
}

export default ColorScheme
