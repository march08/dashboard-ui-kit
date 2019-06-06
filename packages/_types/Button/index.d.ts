import React from 'react';
import { AnyTag, PropsWithTagProps } from '@duik/core';
export declare type ButtonPropsBase = {
    children?: React.ReactNode;
    className?: string;
    type?: string;
    xs?: boolean;
    sm?: boolean;
    lg?: boolean;
    primary?: boolean;
    error?: boolean;
    danger?: boolean;
    success?: boolean;
    transparent?: boolean;
    clear?: boolean;
    isLoading?: boolean;
    loading?: boolean;
    noBorder?: boolean;
    dark?: boolean;
    secondary?: boolean;
    isExpanded?: boolean;
    block?: boolean;
    square?: boolean;
};
export declare type ButtonProps<T extends AnyTag> = PropsWithTagProps<T, ButtonPropsBase & {
    Component?: T;
}>;
export declare const Button: {
    <T extends AnyTag = "button">(props: PropsWithTagProps<T, ButtonPropsBase & {
        Component?: T | undefined;
    }>): JSX.Element;
    displayName: string;
};
export default Button;
