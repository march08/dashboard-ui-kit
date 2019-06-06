import * as React from 'react';
import './styles.scss';
/**
 * string or react component
 */
export declare type AnyTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
/**
 * Get props of string or react component
 */
export declare type TagProps<T extends AnyTag> = React.ComponentProps<T>;
/**
 * Merge props with tag props
 */
export declare type PropsWithTagProps<T extends AnyTag, Props = {}> = React.ComponentProps<T> & Props;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare const _default: () => void;
export default _default;
