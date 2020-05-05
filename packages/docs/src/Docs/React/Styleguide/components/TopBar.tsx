import React from 'react'
import classnames from 'classnames'

import cls from './styleguide.module.scss'

import Content from './Content'

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
    <Content className={ cls.barContent }>
      {children}
    </Content>
  </div>
)

StyleguideTopBar.defaultProps = {
  className: null,
}

export default StyleguideTopBar
