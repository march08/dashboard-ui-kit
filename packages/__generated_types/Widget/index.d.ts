export declare type WidgetProps = JSX.IntrinsicElements['div'] & {
    padding?: boolean;
    margin?: boolean;
};
export declare const Widget: {
    ({ children, className, padding, margin, ...rest }: WidgetProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        padding: boolean;
        margin: boolean;
    };
    displayName: string;
};
export default Widget;
