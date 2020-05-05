import React from 'react'
import classnames from 'classnames'

import cls from './styleguide.module.scss'

type StyleguideTopBarType = {
  className?: string,
  children: React.ReactNode
}

const StyleguideTopBar = ({
  className,
  children,
  ...rest
}: StyleguideTopBarType) => (
  <div
    className={ classnames(cls.topBar) }
    { ...rest }
  >
    {children}
  </div>
)

StyleguideTopBar.defaultProps = {
  className: null,
}

export default StyleguideTopBar
