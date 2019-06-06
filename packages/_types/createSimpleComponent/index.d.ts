import * as React from 'react';
import { AnyTag, PropsWithTagProps } from '@duik/core';
declare type Props = {
    displayName: string;
    className?: string;
};
export declare type CreateSimpleComponentProps = {
    defaultProps?: Props;
} & Props;
export declare type ComponentProps = React.PropsWithChildren<{
    className?: string;
}>;
export declare function createSimpleComponent<T extends AnyTag>(options: {
    Component?: T;
} & PropsWithTagProps<T, CreateSimpleComponentProps>): {
    <Tag extends AnyTag>(props: PropsWithTagProps<Tag, {}>): JSX.Element;
    defaultProps: any;
    displayName: any;
};
export default createSimpleComponent;
