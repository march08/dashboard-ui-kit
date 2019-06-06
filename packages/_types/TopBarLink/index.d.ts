import { AnyTag, PropsWithTagProps } from '@duik/core';
import './styles.scss';
export declare type TopBarLinkBaseProps = {};
export declare type TopBarLinkProps<T extends AnyTag> = PropsWithTagProps<T, TopBarLinkBaseProps & {
    Component?: T;
}>;
export declare const TopBarLink: {
    <T extends AnyTag = "a">(props: PropsWithTagProps<T, {
        Component?: T | undefined;
    }>): JSX.Element;
    defaultProps: {
        className: null;
        Component: string;
    };
    displayName: string;
};
export default TopBarLink;
