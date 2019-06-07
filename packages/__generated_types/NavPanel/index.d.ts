export declare type NavPanelProps = JSX.IntrinsicElements['nav'] & {
    positionRight?: boolean;
    onRight?: boolean;
    dark?: boolean;
};
export declare const NavPanel: {
    (props: NavPanelProps): JSX.Element;
    defaultProps: {
        className: null;
        children: null;
        positionRight: boolean;
        onRight: boolean;
        dark: boolean;
    };
    displayName: string;
};
export default NavPanel;
