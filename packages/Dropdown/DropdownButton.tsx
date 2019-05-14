/**
 * This is just a raw example code with outside click handler
 * This should have better styling, menu positioning etc.
 */

import * as React from 'react'
import classnames from 'classnames'
import { Button, ButtonPropsBase } from '@duik/Button'

import { OpenStateControls } from '@duik/use-open-state'
import * as cls from './styles.scss'

export type DropdownButtonProps<P extends {} = {}> =
  & OpenStateControls
  & ButtonPropsBase
  & JSX.IntrinsicElements['button']
  & P

const DropdownButton = (props: DropdownButtonProps) => {
  const {
    // remove this from ...rest
    handleClose,
    handleOpen,
    setOpenState,
    // using
    handleToggle,
    isOpen,
    children,
    className,
    ...rest
  } = props
  return (
    <Button className={classnames(cls['dropdown-toggle'], className)} onClick={handleToggle} {...rest}>
      {children}
    </Button>
  )
}


DropdownButton.defaultProps = {
  children: 'Action',
};


DropdownButton.displayName = 'DropdownButton'

export default DropdownButton;
