import * as React from 'react';
export declare type TextFieldProps = JSX.IntrinsicElements['input'] & {
    wrapperProps?: JSX.IntrinsicElements['div'];
    label?: React.ReactNode;
    clear?: boolean;
    errorMessage?: React.ReactNode;
    successMessage?: React.ReactNode;
    leftEl?: React.ReactNode;
    rightEl?: React.ReactNode;
};
export declare const TextField: {
    (props: TextFieldProps): JSX.Element;
    displayName: string;
};
export default TextField;
