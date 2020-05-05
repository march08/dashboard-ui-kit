import React from 'react'
import classnames from 'classnames'

import cls from './styleguide.module.scss'

type StyleguideContentType = {
  className?: string,
  Component?: React.ComponentType,
  children: React.ReactNode
}

const StyleguideContent = ({
  className,
  Component,
  children,
  ...rest
}: StyleguideContentType) => (
  <div
    className={ classnames(cls.content) }
    { ...rest }
  >
    {children}
  </div>
)

StyleguideContent.defaultProps = {
  className: null,
}

export default StyleguideContent
