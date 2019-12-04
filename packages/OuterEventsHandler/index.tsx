/*
 *
 * handles outside click events
 * e.g. we create custom Dropdown for select
 * we wrap the list with this component and add onOuterEvent
 * passing a close function
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { Omit } from '@duik/core';

import cls from './styles.scss';

export type OuterEventsHandlerProps = Omit<
  JSX.IntrinsicElements['div'],
  'ref'
> & {
  onOuterEvent?: EventListenerOrEventListenerObject | null;
  triggerOnOuterScroll?: boolean;
  triggerOnWindowResize?: boolean;
  triggerOnOuterClick?: boolean;
  triggerOnOuterFucus?: boolean;
  triggerOnEsc?: boolean;
};

export class OuterEventsHandler extends React.PureComponent<
  OuterEventsHandlerProps
> {
  containerRef = React.createRef<HTMLDivElement>();

  static defaultProps = {
    children: null,
    triggerOnOuterScroll: false,
    triggerOnWindowResize: false,
    triggerOnOuterClick: true,
    triggerOnOuterFucus: true,
    triggerOnEsc: true,
    className: null,
  };

  componentDidMount() {
    const { onOuterEvent } = this.props;
    if (onOuterEvent) {
      this.bindListeners();
    }
  }

  componentDidUpdate(prevProps: OuterEventsHandlerProps) {
    const { onOuterEvent } = this.props;
    if (typeof onOuterEvent === 'function') {
      this.bindListeners();
    } else if (typeof onOuterEvent !== 'function') {
      this.removeListeners();
    }
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  handleOuterActions = (e: Event): void => {
    const { onOuterEvent } = this.props;
    if (typeof onOuterEvent === 'function') {
      onOuterEvent(e);
    }
  };

  handleOutsideClick = (e: Event): void => {
    const { onOuterEvent } = this.props;
    if (typeof onOuterEvent !== 'function') {
      return;
    }

    const containerEl = this.containerRef.current;

    const isDescendantOfRoot =
      !!e.target && containerEl && containerEl.contains(e.target as Node);

    if (!isDescendantOfRoot) {
      onOuterEvent(e);
    }
  };

  handleEscKeydown = (e: KeyboardEvent): void => {
    const { onOuterEvent } = this.props;
    if (e.key === 'Escape' && typeof onOuterEvent === 'function') {
      onOuterEvent(e);
    }
  };

  handleFocus = (e: FocusEvent): void => {
    if (!document || !window) {
      return;
    }
    const { onOuterEvent } = this.props;
    const containerEl = this.containerRef.current;

    const isDescendantOfRoot =
      !!document.activeElement &&
      containerEl &&
      containerEl.contains(document.activeElement);

    if (
      !!document.activeElement &&
      !isDescendantOfRoot &&
      typeof onOuterEvent === 'function'
    ) {
      onOuterEvent(e);
    }
  };

  bindListeners = (): void => {
    if (!document || !window) {
      // SSR
      return;
    }
    const {
      triggerOnOuterClick,
      triggerOnOuterFucus,
      triggerOnOuterScroll,
      triggerOnWindowResize,
      triggerOnEsc,
    } = this.props;

    if (triggerOnOuterFucus) {
      document.body.addEventListener('focus', this.handleFocus, true);
    }
    if (triggerOnOuterClick) {
      document.body.addEventListener('click', this.handleOutsideClick, true);
    }
    if (triggerOnEsc) {
      document.addEventListener('keydown', this.handleEscKeydown, true);
    }
    if (triggerOnOuterScroll) {
      window.addEventListener('scroll', this.handleOuterActions, true);
    }
    if (triggerOnWindowResize) {
      window.addEventListener('resize', this.handleOuterActions, true);
    }
  };

  removeListeners = (): void => {
    if (!document || !window) {
      // SSR
      return;
    }
    document.body.removeEventListener('focus', this.handleFocus, true);
    document.body.removeEventListener('click', this.handleOutsideClick, true);
    document.removeEventListener('keydown', this.handleEscKeydown, true);
    window.removeEventListener('scroll', this.handleOuterActions, true);
    window.removeEventListener('resize', this.handleOuterActions, true);
  };

  render() {
    const {
      // just remove from ...rest
      onOuterEvent,
      triggerOnOuterScroll,
      triggerOnWindowResize,
      triggerOnOuterClick,
      triggerOnEsc,
      triggerOnOuterFucus,
      children,
      className,
      ...rest
    } = this.props;

    return (
      <div
        className={classnames(cls['outer-events-handler'], className)}
        ref={this.containerRef}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default OuterEventsHandler;
