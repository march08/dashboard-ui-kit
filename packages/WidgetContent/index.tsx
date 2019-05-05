import createSimpleComponent from '@duik/create-simple-component';
import * as cls from './styles.scss';

export const WidgetContent: React.ComponentType<JSX.IntrinsicElements['div']> = createSimpleComponent<'div'>({
  displayName: 'WidgetContent',
  className: cls['card-body'],
  Component: 'div',
})


export default WidgetContent
