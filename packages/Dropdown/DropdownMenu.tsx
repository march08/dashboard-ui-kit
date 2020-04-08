import * as React from 'react';
import classnames from 'classnames';
import { OpenStateControls } from '@duik/use-open-state';
import { DropdownMenuPosition } from './index';
import { DropdownItem } from './DropdownItem'

import cls from './styles.scss';

export type DropdownMenuProps<P extends {} = {}> = OpenStateControls &
  JSX.IntrinsicElements['div'] &
  P & {
    menuPosition?: DropdownMenuPosition;
  };

export class DropdownMenu extends React.PureComponent<
  DropdownMenuProps,
  {
    menuPosition: DropdownMenuPosition;
    repositioned: boolean;
  }
> {

  static Item = DropdownItem

  displayName = 'DropdownMenu';

  ref = React.createRef<HTMLDivElement>();

  constructor(props: DropdownMenuProps) {
    super(props);

    // set default
    this.state = {
      menuPosition: props.menuPosition || DropdownMenuPosition['bottom-left'],
      repositioned: false,
    };
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.resetRepositionState, true);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('scroll', this.resetRepositionState, true);
    }
  }

  componentDidUpdate() {
    if (!this.props.isOpen || this.state.repositioned || !window) {
      return;
    }

    // perform reposition if necessary
    if (this.ref.current) {
      const rect = this.ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const bottom = windowHeight > rect.height + rect.top;
      const top = rect.top > 0;
      const left = rect.left > 0;
      const right = rect.right < windowWidth;

      // we don't need to reposition
      if (bottom && top && left && right) {
        return;
      }

      // this is very naive implementation that doesn't take in account the initial position
      let nextMenuPosition = this.state.menuPosition as string;

      if (!bottom) {
        nextMenuPosition = nextMenuPosition.replace('bottom', 'top');
      } else if (!top) {
        nextMenuPosition = nextMenuPosition.replace('top', 'bottom');
      }
      if (!left) {
        nextMenuPosition = nextMenuPosition.replace('left', 'right');
        nextMenuPosition = nextMenuPosition.replace('center', 'right');
      } else if (!right) {
        nextMenuPosition = nextMenuPosition.replace('right', 'left');
        nextMenuPosition = nextMenuPosition.replace('center', 'left');
      }

      this.setState({
        menuPosition: nextMenuPosition as DropdownMenuPosition,
        // reposition only once
        repositioned: true,
      });
    }
  }

  resetRepositionState = () => {
    const { menuPosition } = this.props;
    this.setState({
      menuPosition: menuPosition || DropdownMenuPosition['bottom-left'],
      repositioned: false,
    });
  };

  render() {
    const {
      // remove this from ...rest
      handleClose,
      handleOpen,
      setOpenState,
      handleToggle,
      menuPosition,
      // using
      className,
      isOpen,
      children,
    } = this.props;

    return (
      <div
        ref={this.ref}
        className={classnames(cls['dropdown-menu'], className, {
          [cls['show']]: isOpen,
          [cls[this.state.menuPosition]]: this.state.menuPosition,
        })}
      >
        {children}
      </div>
    );
  }
}

export const Dropdown = DropdownMenu

export default DropdownMenu;
