import { createSimpleComponent } from '@duik/create-simple-component';
import classnames from 'classnames';
import cls from './styles.scss';
export const ModalBodySecondary = createSimpleComponent({
  Component: 'div',
  className: classnames(cls['modal-body'], cls['modal-body-secondary']),
  displayName: 'ModalBodySecondary',
});
