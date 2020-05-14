import { createSimpleComponent } from '@duik/create-simple-component';

import cls from './styles.scss';
export const ModalHeader = createSimpleComponent({
  Component: 'div',
  className: cls['modal-header'],
  displayName: 'ModalHeader',
});
