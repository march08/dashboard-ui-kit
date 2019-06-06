export declare type NavPanelProps = JSX.IntrinsicElements['nav'] & {
    positionRight?: boolean;
    onRight?: boolean;
    dark?: boolean;
};
declare function NavPanel({ children, className, positionRight, onRight, dark, ...rest }: NavPanelProps): JSX.Element;
declare namespace NavPanel {
    var defaultProps: {
        className: null;
        children: null;
        positionRight: boolean;
        onRight: boolean;
        dark: boolean;
    };
    var displayName: string;
}
export default NavPanel;
export default NavPanel;
