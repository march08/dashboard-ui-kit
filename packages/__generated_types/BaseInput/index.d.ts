import * as React from 'react';
export declare type InputBaseProps = JSX.IntrinsicElements['input'] & {
    label?: React.ReactNode;
    description?: React.ReactNode;
};
export declare const BaseInput: {
    ({ label, className, description, toggle, name, type, ...rest }: React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
        label?: React.ReactNode;
        description?: React.ReactNode;
    } & {
        toggle?: boolean | undefined;
    }): JSX.Element;
    displayName: string;
};
export default BaseInput;
