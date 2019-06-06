import './styles.scss';
export declare type TopBarTitleProps = JSX.IntrinsicElements['h2'] & {
    large?: Boolean;
};
export declare const TopBarTitle: {
    ({ children, className, large, ...rest }: TopBarTitleProps): JSX.Element;
    displayName: string;
    defaultProps: {
        className: null;
        children: null;
        large: boolean;
    };
};
export default TopBarTitle;
