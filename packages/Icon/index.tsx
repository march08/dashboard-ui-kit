import createSimpleComponent from '@duik/create-simple-component';
import './styles.scss';

export const Icon: React.ComponentType<JSX.IntrinsicElements['i']> = createSimpleComponent<'i'>({
  displayName: 'Icon',
  className: 'uikon',
  Component: 'i',
})


export default Icon
