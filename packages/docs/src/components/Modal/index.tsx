import React from 'react';
import classnames from 'classnames';
import {
  OuterEventsHandlerProps,
  OuterEventsHandler,
  Button
} from '@duik/it';
import { Overlay, OverlayControlProps } from '../Overlay';

import cls from './styles.module.scss';

export * from './ModalBody';
export * from './ModalBodySecondary';
export * from './ModalHeader';
export * from './ModalFooter';

export type ModalProps = Omit<OuterEventsHandlerProps, 'onOuterEvent'> &
  OverlayControlProps & {
    lg?: boolean;
    sm?: boolean;
    handleClose?: () => void;
    hideCloseButton?: boolean;
  };

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    handleClose,
    sm,
    lg,
    children,
    className,
    hideCloseButton = false,
    ...rest
  } = props;
  return (
    <Overlay isOpen={isOpen}>
      <OuterEventsHandler
        className={classnames(cls['modal'], className, {
          [cls['lg']]: lg,
          [cls['sm']]: sm
        })}
        {...rest}
      >
        {handleClose && !hideCloseButton && (
          <Button
            onClick={handleClose}
            square
            clear
            className={cls['modal-btn-close']}
          >
            <span className={cls['modal-close-icon']} />
          </Button>
        )}
        {children}
      </OuterEventsHandler>
    </Overlay>
  );
};

Modal.displayName = 'Modal';
