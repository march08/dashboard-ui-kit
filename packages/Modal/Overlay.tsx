import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import cls from './styles.scss';

export type OverlayControlProps = {
  isOpen?: boolean;
  portalEl?: HTMLElement;
};

export type OverlayProps = OverlayControlProps & {
  children?: React.ReactNode;
};

export const Overlay = (props: OverlayProps) => {
  const { isOpen, children, portalEl = document?.body } = props;

  if (portalEl) {
    return ReactDOM.createPortal(
      <CSSTransition in={isOpen} timeout={50} unmountOnExit>
        <div className={cls['overlay']}>{children}</div>
      </CSSTransition>,
      portalEl
    );
  }
  return null;
};

export default Overlay;
