import * as React from 'react';
export * from './AvatarImage';
export declare type AvatarPlaceholderProps = {
    content?: React.ReactNode;
    color?: 'green' | 'blue' | 'orange' | 'indigo' | 'red' | 'yellow';
};
export declare type AvatarProps = JSX.IntrinsicElements['span'] & {
    name?: React.ReactNode;
    imgUrl?: string | string[];
    avatarPlaceholder?: AvatarPlaceholderProps;
    textTop?: React.ReactNode;
    textBottom?: React.ReactNode;
    rightEl?: React.ReactNode;
    leftEl?: React.ReactNode;
    sm?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
    jumbo?: boolean;
};
export declare const Avatar: {
    ({ name, imgUrl, avatarPlaceholder, textTop, className, rightEl, leftEl, textBottom, sm, lg, xl, xxl, jumbo, ...rest }: AvatarProps): JSX.Element;
    displayName: string;
};
export default Avatar;
