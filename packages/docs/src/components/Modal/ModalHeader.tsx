import { createSimpleComponent } from '@duik/create-simple-component';

import cls from './styles.module.scss';
export const ModalHeader = createSimpleComponent({
  Component: 'div',
  className: cls['modal-header'],
  displayName: 'ModalHeader'
});
