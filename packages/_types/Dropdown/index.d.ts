/**
 * This is just a raw example code with outside click handler
 * This should have better styling, menu positioning etc.
 */
import * as React from 'react';
import { OuterEventsHandlerProps } from '@duik/outer-events-handler';
import { OpenStateControls } from '@duik/use-open-state';
import { AnyTag } from '@duik/core';
import DropdownButton from './DropdownButton';
export * from './DropdownButton';
export * from './DropdownItem';
export * from './DropdownMenu';
export declare enum DropdownMenuPosition {
    'top-left' = "top-left",
    'top-right' = "top-right",
    'top-center' = "top-center",
    'bottom-left' = "bottom-left",
    'bottom-right' = "bottom-right",
    'bottom-center' = "bottom-center"
}
export declare type DropdownProps<BC extends AnyTag, MC extends AnyTag> = OuterEventsHandlerProps & {
    ButtonComponent?: BC;
    buttonProps?: React.ComponentProps<BC>;
    MenuComponent?: MC;
    menuProps?: React.ComponentProps<MC>;
    menuPosition?: DropdownMenuPosition;
    buttonText?: React.ReactNode;
    openControls?: OpenStateControls;
} & Children;
declare type Children = {
    children?: (props: OpenStateControls) => React.ReactNode;
} | {
    children?: React.ReactNode;
};
/**
 * hooks instead? We need new react
 */
declare function Dropdown<BC extends AnyTag = DropdownButton, MC extends AnyTag = 'div'>(props: DropdownProps<BC, MC>): JSX.Element;
declare namespace Dropdown {
    var displayName: string;
}
export default Dropdown;
export default Dropdown;
