import React, { ReactNode } from 'react'
import classnames from 'classnames'

import cls from './styleguide.module.scss'

type ComponentTitleType = {
  className?: string,
  children: ReactNode,
}

const ComponentTitle = ({
  className,
  children,
  ...rest
}: ComponentTitleType) => (
  <div
    className={ classnames(cls.componentTitle) }
    { ...rest }
  >
    {children}
  </div>
)

ComponentTitle.defaultProps = {
  className: null,
}

export default ComponentTitle
