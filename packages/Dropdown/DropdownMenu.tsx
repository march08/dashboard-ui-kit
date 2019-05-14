/**
 * This is just a raw example code with outside click handler
 * This should have better styling, menu positioning etc.
 */

import * as React from 'react';
import classnames from 'classnames';
import { OpenStateControls } from '@duik/use-open-state'

import * as cls from './styles.scss';


export type DropdownMenuProps<P extends {} = {}> =
  & OpenStateControls
  & JSX.IntrinsicElements['div']
  & P


const DropdownMenu = (props: DropdownMenuProps) => {
  const {
    // remove this from ...rest
    handleClose,
    handleOpen,
    setOpenState,
    handleToggle,
    // using
    className,
    isOpen,
    children
  } = props

  return (
    <div
      className={classnames(cls['dropdown-menu'], className, {
        [cls['show']]: isOpen,
      })}
    >
      {children}
    </div>
  )
}

DropdownMenu.displayName = 'DropdownMenu'

export default DropdownMenu;
