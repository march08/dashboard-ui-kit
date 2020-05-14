import React from 'react';
import classnames from 'classnames';
import {
  OuterEventsHandler,
  OuterEventsHandlerProps,
} from '@duik/outer-events-handler';
import { Button } from '@duik/button';
import { Overlay, OverlayControlProps } from './Overlay';

import cls from './styles.scss';
import { ModalBody } from './ModalBody';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { ModalTitle } from './ModalTitle';
import { ModalBodySecondary } from './ModalBodySecondary';

export type ModalProps = Omit<OuterEventsHandlerProps, 'onOuterEvent'> &
  OverlayControlProps & {
    lg?: boolean;
    sm?: boolean;
    full?: boolean;
    handleClose?: () => void;
    hideCloseButton?: boolean;
    disablePortal?: boolean;
    closeOnOuterClick?: boolean;
  };

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    handleClose,
    sm,
    full,
    lg,
    children,
    className,
    hideCloseButton = false,
    portalEl,
    disablePortal,
    closeOnOuterClick,
    ...rest
  } = props;

  const el = (
    <OuterEventsHandler
      className={classnames(cls['modal'], className, {
        [cls['lg']]: lg,
        [cls['sm']]: sm,
        [cls['full']]: full,
      })}
      onOuterEvent={closeOnOuterClick ? handleClose : undefined}
      {...rest}
    >
      {handleClose && !hideCloseButton && (
        <Button
          onClick={handleClose}
          aria-label="Close"
          square
          clear
          className={cls['modal-btn-close']}
        >
          <span className={cls['modal-close-icon']} />
        </Button>
      )}
      {children}
    </OuterEventsHandler>
  );

  if (disablePortal) {
    return el;
  }
  return (
    <Overlay isOpen={isOpen} portalEl={portalEl}>
      {el}
    </Overlay>
  );
};

Modal.displayName = 'Modal';

Modal.Body = ModalBody;
Modal.BodySecondary = ModalBodySecondary;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;

export default Modal;
