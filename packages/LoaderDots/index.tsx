import React from 'react'
import classnames from 'classnames'
import cls from './styles.scss'

export type LoaderDotsProps = JSX.IntrinsicElements['span']

export const LoaderDots = React.forwardRef<HTMLSpanElement, LoaderDotsProps>((props, ref) => {
  const { className, ...rest } = props
  return (
    <span ref={ref} className={classnames(cls['loader-dot'], className)} {...rest}>
      <span className={cls['loader-dot-1']} />
      <span className={cls['loader-dot-2']} />
      <span className={cls['loader-dot-3']} />
    </span>
  )
})


LoaderDots.displayName = "LoaderDots"

export default LoaderDots
