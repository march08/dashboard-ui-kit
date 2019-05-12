import * as React from 'react'
import classnames from 'classnames'
import * as cls from './styles.scss'

export type LoaderDotsProps = JSX.IntrinsicElements['div']

export function LoaderDots({ className, ...rest }: LoaderDotsProps) {
  return (
    <span className={classnames(cls['loader-dot'], className)} {...rest}>
      <span className={cls['loader-dot-1']} />
      <span className={cls['loader-dot-2']} />
      <span className={cls['loader-dot-3']} />
    </span>
  )
}


LoaderDots.displayName = "LoaderDots"

export default LoaderDots
