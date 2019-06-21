import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import cls from './styles.module.scss';

const portalEl = document.body;

export type OverlayControlProps = {
  isOpen?: boolean;
};

export type OverlayProps = OverlayControlProps & {
  children?: React.ReactNode;
};

export const Overlay = (props: OverlayProps) => {
  const { isOpen, children } = props;

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
