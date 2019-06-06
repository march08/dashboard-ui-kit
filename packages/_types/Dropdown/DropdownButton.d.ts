/**
 * This is just a raw example code with outside click handler
 * This should have better styling, menu positioning etc.
 */
import { ButtonPropsBase } from '@duik/Button';
import { OpenStateControls } from '@duik/use-open-state';
export declare type DropdownButtonProps<P extends {} = {}> = OpenStateControls & ButtonPropsBase & JSX.IntrinsicElements['button'] & P;
export declare const DropdownButton: {
    (props: DropdownButtonProps<{}>): JSX.Element;
    defaultProps: {
        children: string;
    };
    displayName: string;
};
export default DropdownButton;
