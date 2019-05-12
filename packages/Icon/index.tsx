import * as React from 'react'
import classnames from 'classnames'
import * as cls from './styles.scss';

export type IconProps = JSX.IntrinsicElements['i'] & {
  mr?: boolean,
  ml?: boolean,
}

export const Icon = (props: IconProps) => {
  const { mr, ml, className, ...rest } = props

  return <i className={classnames('uikon', className, {
    [cls.mr]: mr,
    [cls.ml]: ml
  })} {...rest} />
}


Icon.displayName = 'Icon'

export default Icon
