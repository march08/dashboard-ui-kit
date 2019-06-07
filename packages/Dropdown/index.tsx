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
import DropdownButton, { DropdownButtonProps } from './DropdownButton';

export * from './DropdownButton'
export * from './DropdownItem'
export * from './DropdownMenu'


import cls from './styles.scss';


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
  buttonProps?: React.ComponentProps<BC>;
  MenuComponent?: MC;
  menuProps?: React.ComponentProps<MC>;
  menuPosition?: DropdownMenuPosition,
  buttonText?: React.ReactNode,
  openControls?: OpenStateControls
} & Children;

type Children =
  | { children?: (props: OpenStateControls) => React.ReactNode }
  | { children?: React.ReactNode };

/**
 * hooks instead? We need new react
 */

export const Dropdown = <
  BC extends AnyTag = DropdownButton,
  MC extends AnyTag = 'div'
>(props: DropdownProps<BC, MC>) => {


  const {
    ButtonComponent = DropdownButton,
    buttonProps = {},
    MenuComponent = DropdownMenu,
    menuProps = {},
    children,
    menuPosition = DropdownMenuPosition["bottom-right"],
    buttonText,
    className,
    openControls: externalOpenControls,
    ...rest
  } = props;


  const openControls = externalOpenControls || useOpenState(false);

  return (

    <OuterEventsHandler
      className={classnames(cls['dropdown'], 'btn-group', className)}
      onOuterEvent={openControls.isOpen ? openControls.handleToggle : null}
      {...rest}
    >
      <ButtonComponent
        {...openControls}
        {...buttonProps}
      >
        {buttonText}
      </ButtonComponent>
      <MenuComponent
        {...menuProps}
        {...openControls}
        menuPosition={menuPosition}
      >
        {typeof children === 'function' ? children(openControls) : children}
      </MenuComponent>
    </OuterEventsHandler>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown;
