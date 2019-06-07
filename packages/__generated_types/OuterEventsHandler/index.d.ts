import * as React from 'react';
import { Omit } from '@duik/core';
export declare type OuterEventsHandlerProps = Omit<JSX.IntrinsicElements['div'], 'ref'> & {
    onOuterEvent?: EventListenerOrEventListenerObject | null;
    triggerOnOuterScroll?: boolean;
    triggerOnWindowResize?: boolean;
    triggerOnOuterClick?: boolean;
    triggerOnOuterFucus?: boolean;
    triggerOnEsc?: boolean;
};
export declare class OuterEventsHandler extends React.PureComponent<OuterEventsHandlerProps> {
    containerRef: React.RefObject<HTMLDivElement>;
    static defaultProps: {
        children: null;
        triggerOnOuterScroll: boolean;
        triggerOnWindowResize: boolean;
        triggerOnOuterClick: boolean;
        triggerOnOuterFucus: boolean;
        triggerOnEsc: boolean;
        className: null;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: OuterEventsHandlerProps): void;
    componentWillUnmount(): void;
    handleOuterActions: (e: Event) => void;
    handleOutsideClick: (e: Event) => void;
    handleEscKeydown: (e: KeyboardEvent) => void;
    handleFocus: (e: FocusEvent) => void;
    bindListeners: () => void;
    removeListeners: () => void;
    render(): JSX.Element;
}
export default OuterEventsHandler;
