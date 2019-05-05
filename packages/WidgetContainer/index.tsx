import createSimpleComponent from '@duik/create-simple-component';
import * as cls from './styles.scss';

export const WidgetContainer: React.ComponentType<JSX.IntrinsicElements['div']> = createSimpleComponent<'div'>({
  displayName: 'WidgetContainer',
  className: cls['widget-container'],
  Component: 'div',
})


export default WidgetContainer
