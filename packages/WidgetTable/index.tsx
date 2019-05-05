import createSimpleComponent from '@duik/create-simple-component';
import * as cls from './styles.scss';

export const WidgetTable: React.ComponentType<JSX.IntrinsicElements['div']> = createSimpleComponent<'div'>({
  displayName: 'WidgetTable',
  className: cls['widget-table'],
  Component: 'div',
})


export default WidgetTable
