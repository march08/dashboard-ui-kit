import * as React from 'react';
import './styles.scss';
export declare type AvatarImageProps = AvatarImageSingleProps | AvatarImageMultiProps;
export declare type AvatarImageSingleProps = JSX.IntrinsicElements['img'] & {
    name?: React.ReactNode;
    imgUrl: string;
};
export declare type AvatarImageMultiProps = JSX.IntrinsicElements['div'] & {
    name?: React.ReactNode;
    imgUrl: string[];
    imgProps?: JSX.IntrinsicElements['img'];
};
export declare const AvatarImageMulti: {
    (props: AvatarImageMultiProps): JSX.Element;
    displayName: string;
};
export declare const AvatarImageSingle: {
    (props: AvatarImageSingleProps): JSX.Element;
    defaultProps: {
        name: null;
    };
    displayName: string;
};
