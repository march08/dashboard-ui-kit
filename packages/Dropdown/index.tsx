/**
 * This is just a raw example code with outside click handler
 * This should have better styling, menu positioning etc.
 */

import * as React from 'react';
import classnames from 'classnames';

import { OuterEventsHandler, OuterEventsHandlerProps } from '@duik/outer-events-handler'
import { useOpenState, OpenStateControls } from '@duik/use-open-state'
import { AnyTag } from '@duik/core'

import DropdownMenu from './DropdownMenu';
import DropdownButton from './DropdownButton';

export * from './DropdownButton'
export * from './DropdownItem'
export * from './DropdownMenu'


import * as cls from './styles.scss';


export enum DropdownMenuPosition {
  'top-left' = 'top-left',
  'top-right' = 'top-right',
  'top-center' = 'top-center',
  'bottom-left' = 'bottom-left',
  'bottom-right' = 'bottom-right',
  'bottom-center' = 'bottom-center',
}

export type DropdownProps<BC extends AnyTag, MC extends AnyTag> = OuterEventsHandlerProps & {
  ButtonComponent?: BC;
  buttonComponentProps?: React.ComponentProps<BC> & OpenStateControls;
  MenuComponent?: MC;
  menuComponentProps?: React.ComponentProps<MC> & OpenStateControls;
  menuPosition?: DropdownMenuPosition,
  buttonText?: React.ReactNode,
  block?: boolean,
} & Children;

type Children =
  | { children?: (props: OpenStateControls) => React.ReactNode }
  | { children?: React.ReactNode };

/**
 * hooks instead? We need new react
 */

export function Dropdown<
  BC extends AnyTag = 'button',
  MC extends AnyTag = 'div'
>(props: DropdownProps<BC, MC>) {

  const openControls = useOpenState(false);

  const {
    ButtonComponent = DropdownButton,
    buttonComponentProps = {},
    MenuComponent = DropdownMenu,
    menuComponentProps = {},
    children,
    menuPosition = DropdownMenuPosition["bottom-right"],
    buttonText,
    className,
    block,
    ...rest
  } = props;

  return (

    <OuterEventsHandler
      className={classnames(cls['dropdown'], className, {
        [cls.block]: block,
      })}
      onOuterEvent={openControls.isOpen ? openControls.handleToggle : null}
      {...rest}
    >
      <ButtonComponent
        {...openControls}
        {...buttonComponentProps}>
        {buttonText}
      </ButtonComponent>
      <MenuComponent
        {...menuComponentProps}
        className={classnames((menuComponentProps as any).className, {
          [cls[menuPosition]]: menuPosition,
        })}
        {...openControls}
      >
        {typeof children === 'function' ? children(openControls) : children}
      </MenuComponent>
    </OuterEventsHandler>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown;
