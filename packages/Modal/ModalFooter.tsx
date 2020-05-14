import { createSimpleComponent } from '@duik/create-simple-component';

import cls from './styles.scss';
export const ModalFooter = createSimpleComponent({
  Component: 'div',
  className: cls['modal-footer'],
  displayName: 'ModalFooter',
});
