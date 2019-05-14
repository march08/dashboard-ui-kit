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
import { Omit } from '@duik/core'

import * as cls from './styles.scss';

export type OuterEventsHandlerProps = Omit<JSX.IntrinsicElements['div'], 'ref'> & {
  onOuterEvent?: EventListenerOrEventListenerObject | null,
  triggerOnOuterScroll?: boolean,
  triggerOnWindowResize?: boolean,
  triggerOnOuterClick?: boolean,
  triggerOnEsc?: boolean,
};

export class OuterEventsHandler extends React.PureComponent<OuterEventsHandlerProps> {

  containerRef = React.createRef<HTMLDivElement>()

  static defaultProps = {
    children: null,
    triggerOnOuterScroll: false,
    triggerOnWindowResize: false,
    triggerOnOuterClick: true,
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
    if (typeof onOuterEvent !== 'function' && prevProps.onOuterEvent !== onOuterEvent) {
      this.removeListeners();
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
      e.preventDefault();
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
      e.preventDefault();
      onOuterEvent(e);
    }
  }

  bindListeners = (): void => {
    const {
      triggerOnOuterClick,
      triggerOnOuterScroll,
      triggerOnWindowResize,
      triggerOnEsc
    } = this.props;
    if (typeof document !== 'undefined') {
      if (triggerOnEsc) {
        document.addEventListener('keydown', this.handleEscKeydown, true);
      }
      if (triggerOnOuterClick) {
        document.addEventListener('click', this.handleOutsideClick, true);
      }
      if (triggerOnOuterScroll) {
        window.addEventListener('scroll', this.handleOuterActions, true);
      }
      if (triggerOnWindowResize) {
        window.addEventListener('resize', this.handleOuterActions, true);
      }
    }
  };

  removeListeners = (): void => {
    const {
      triggerOnOuterClick,
      triggerOnOuterScroll,
      triggerOnWindowResize,
      triggerOnEsc
    } = this.props;
    if (typeof document !== 'undefined') {
      if (triggerOnEsc) {
        document.removeEventListener('keydown', this.handleEscKeydown, true);
      }
      if (triggerOnOuterClick) {
        document.removeEventListener('click', this.handleOutsideClick, true);
      }
      if (triggerOnOuterScroll) {
        window.removeEventListener('scroll', this.handleOuterActions, true);
      }
      if (triggerOnWindowResize) {
        window.removeEventListener('resize', this.handleOuterActions, true);
      }
    }
  };

  render() {
    const {
      // just remove from ...rest
      onOuterEvent,
      triggerOnOuterScroll,
      triggerOnWindowResize,
      triggerOnOuterClick,
      triggerOnEsc,
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
