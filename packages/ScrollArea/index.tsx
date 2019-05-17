import createSimpleComponent from '@duik/create-simple-component';
import cls from './styles.scss';

export const ScrollArea = createSimpleComponent({
  displayName: 'ScrollArea',
  className: cls['scroll-area'],
  Component: 'div',
})


export default ScrollArea
