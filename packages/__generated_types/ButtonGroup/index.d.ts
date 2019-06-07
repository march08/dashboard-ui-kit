export declare type ButtonGroupProps = JSX.IntrinsicElements['div'] & {
    vertical?: boolean;
    sm?: boolean;
    lg?: boolean;
};
export declare const ButtonGroup: {
    ({ children, className, vertical, sm, lg, ...rest }: ButtonGroupProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        vertical: boolean;
    };
    displayName: string;
};
export default ButtonGroup;
