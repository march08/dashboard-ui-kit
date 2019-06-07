import * as React from 'react';
import { AnyTag, PropsWithTagProps } from '@duik/core';
export declare type TabItemPropsBase = {
    rightEl?: React.ReactNode;
    leftEl?: React.ReactNode;
    active?: Boolean;
};
export declare type TabItemProps<T extends AnyTag> = PropsWithTagProps<T, TabItemPropsBase & {
    Component?: T;
}>;
export declare const TabItem: {
    <T extends AnyTag = "a">(props: PropsWithTagProps<T, TabItemPropsBase & {
        Component?: T | undefined;
    }>): JSX.Element;
    displayName: string;
};
export default TabItem;
