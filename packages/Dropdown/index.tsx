import * as React from 'react';
import classnames from 'classnames';

import {
  OuterEventsHandler,
  OuterEventsHandlerProps
} from '@duik/outer-events-handler';
import { useOpenState, OpenStateControls } from '@duik/use-open-state';
import { AnyTag } from '@duik/core';

import DropdownMenu from './DropdownMenu';
import DropdownButton from './DropdownButton';

export * from './DropdownButton';
export * from './DropdownItem';
export * from './DropdownMenu';

import cls from './styles.scss';

export enum DropdownMenuPosition {
  'left-top' = 'left-top',
  'left-center' = 'left-center',
  'left-bottom' = 'left-bottom',
  'right-top' = 'right-top',
  'right-center' = 'right-center',
  'right-bottom' = 'right-bottom',
  'top-left' = 'top-left',
  'top-right' = 'top-right',
  'top-center' = 'top-center',
  'bottom-left' = 'bottom-left',
  'bottom-right' = 'bottom-right',
  'bottom-center' = 'bottom-center'
}

export type DropdownProps<
  BC extends AnyTag,
  MC extends AnyTag
> = OuterEventsHandlerProps & {
  ButtonComponent?: BC;
  buttonProps?: Omit<React.ComponentProps<BC>, keyof OpenStateControls>;
  MenuComponent?: MC;
  menuProps?: Omit<React.ComponentProps<MC>, keyof OpenStateControls>;
  menuPosition?: DropdownMenuPosition;
  buttonText?: React.ReactNode;
  openControls?: OpenStateControls;
  block?: boolean;
} & Children;

type Children =
  | { children?: (props: OpenStateControls) => React.ReactNode }
  | { children?: React.ReactNode };

export const Dropdown = <
  BC extends AnyTag = typeof DropdownButton,
  MC extends AnyTag = typeof DropdownMenu
>(
  props: DropdownProps<BC, MC>
) => {
  const {
    ButtonComponent = DropdownButton,
    buttonProps = {},
    MenuComponent = DropdownMenu,
    menuProps = {},
    children,
    menuPosition = DropdownMenuPosition['bottom-right'],
    buttonText,
    className,
    openControls: externalOpenControls,
    block,
    ...rest
  } = props;

  const openControls = externalOpenControls || useOpenState(false);

  return (
    <OuterEventsHandler
      className={classnames(cls['dropdown'], 'btn-group', className)}
      onOuterEvent={openControls.isOpen ? openControls.handleToggle : null}
      {...rest}
    >
      <ButtonComponent {...openControls} {...buttonProps} block={block}>
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
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
