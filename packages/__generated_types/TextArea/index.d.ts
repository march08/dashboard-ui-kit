import * as React from 'react';
import './styles.scss';
export declare type TextAreaProps = JSX.IntrinsicElements['textarea'] & {
    label?: React.ReactNode;
    clear?: boolean;
    errorMessage?: React.ReactNode;
    successMessage?: React.ReactNode;
    leftEl?: React.ReactNode;
    rightEl?: React.ReactNode;
};
export declare const TextArea: {
    (props: TextAreaProps): JSX.Element;
    displayName: string;
};
export default TextArea;
