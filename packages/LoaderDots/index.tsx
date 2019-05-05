import * as React from 'react'
import classnames from 'classnames'
import * as cls from './styles.scss'

export type LoaderDotsProps = JSX.IntrinsicElements['div']

export function LoaderDots({ className, ...rest }: LoaderDotsProps) {
  return (
    <div className={classnames(cls['loader-dot'], className)} {...rest}>
      <div className={cls['loader-dot-1']} />
      <div className={cls['loader-dot-2']} />
      <div className={cls['loader-dot-3']} />
    </div>
  )
}

export default LoaderDots
