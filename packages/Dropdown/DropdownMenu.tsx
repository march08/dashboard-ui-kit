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

export class DropdownMenu extends React.PureComponent<DropdownMenuProps> {

  displayName = 'DropdownMenu'

  ref = React.createRef<HTMLDivElement>()

  componentDidUpdate() {
    console.log(this.ref.current)

    if (this.ref.current) {
      const rect = this.ref.current.getBoundingClientRect()
      console.log(rect)
      const windowHeight = window.innerHeight

      const elBottom = rect.height + rect.top
      const isBottomVisible = windowHeight > elBottom;

      console.log('isBottomVisible', isBottomVisible)
    }
  }

  render() {

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
    } = this.props

    return (
      <div
        ref={this.ref}
        className={classnames(cls['dropdown-menu'], className, {
          [cls['show']]: isOpen,
        })}
      >
        {children}
      </div>
    )
  }
}

export default DropdownMenu;
