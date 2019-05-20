import * as React from 'react'
import cls from './docspage.module.scss'

type PageMockProps = JSX.IntrinsicElements['div']

export const PageMock = (props: PageMockProps) => {
  return (
    <div className={cls['page-mock']} {...props} />
  )
}

PageMock.displayName = "PageMock"