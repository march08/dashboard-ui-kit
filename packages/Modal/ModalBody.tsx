import { createSimpleComponent } from '@duik/create-simple-component';

import cls from './styles.scss';
export const ModalBody = createSimpleComponent({
  Component: 'div',
  className: cls['modal-body'],
  displayName: 'ModalBody',
});
