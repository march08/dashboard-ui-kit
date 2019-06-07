import React from 'react';
export declare type AlertProps = JSX.IntrinsicElements['div'] & {
    primary?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    leftEl?: React.ReactNode;
    rightEl?: React.ReactNode;
};
export declare const Alert: {
    (props: AlertProps): JSX.Element;
    displayName: string;
};
export default Alert;
