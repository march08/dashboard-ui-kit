/**
 * This is just a raw example code with outside click handler
 * This should have better styling, menu positioning etc.
 */
import * as React from 'react';
import { OpenStateControls } from '@duik/use-open-state';
import { DropdownMenuPosition } from './index';
export declare type DropdownMenuProps<P extends {} = {}> = OpenStateControls & JSX.IntrinsicElements['div'] & P & {
    menuPosition?: DropdownMenuPosition;
};
export declare class DropdownMenu extends React.PureComponent<DropdownMenuProps, {
    menuPosition: DropdownMenuPosition;
    repositioned: boolean;
}> {
    displayName: string;
    ref: React.RefObject<HTMLDivElement>;
    constructor(props: DropdownMenuProps);
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default DropdownMenu;
