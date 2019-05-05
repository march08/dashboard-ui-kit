import createSimpleComponent from '@duik/create-simple-component';
import * as cls from './styles.scss';

export const WidgetTable: React.ComponentType<JSX.IntrinsicElements['table']> = createSimpleComponent<'table'>({
  displayName: 'WidgetTable',
  className: cls['widget-table'],
  Component: 'table',
})


export default WidgetTable
