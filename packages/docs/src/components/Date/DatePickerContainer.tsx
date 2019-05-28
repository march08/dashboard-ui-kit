import createSimpleComponent from '@duik/create-simple-component';
import cls from './styles.module.scss';

export const DatePickerContainer = createSimpleComponent({
  displayName: 'DatePickerContainer',
  className: cls['datepicker-container'],
  Component: 'div',
})


export default DatePickerContainer
