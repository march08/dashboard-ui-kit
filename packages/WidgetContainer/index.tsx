import createSimpleComponent from '@duik/create-simple-component';
import cls from './styles.scss';

export const WidgetContainer = createSimpleComponent({
  displayName: 'WidgetContainer',
  className: cls['widget-container'],
  Component: 'div',
})


export default WidgetContainer
