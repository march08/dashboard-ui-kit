import * as React from 'react';
import { AnyTag, PropsWithTagProps } from '@duik/core';
import './styles.scss';
declare type NavLinkBaseProps = {
    className?: string;
    children?: React.ReactNode;
    rightEl?: React.ReactNode;
    highlighted?: boolean;
    icon?: React.ReactNode;
    leftEl?: React.ReactNode;
    pill?: boolean;
    secondary?: boolean;
};
export declare type NavLinkProps<T extends AnyTag> = PropsWithTagProps<T, NavLinkBaseProps & {
    Component?: T;
}>;
declare function NavLink<T extends AnyTag>({ rightEl, children, className, highlighted, leftEl, icon, Component, pill, secondary, ...rest }: NavLinkProps<T>): JSX.Element;
declare namespace NavLink {
    var displayName: string;
    var defaultProps: {
        className: null;
        rightEl: null;
        highlighted: boolean;
        leftEl: null;
        children: null;
        Component: string;
    };
}
export default NavLink;
export default NavLink;
