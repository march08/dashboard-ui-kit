import * as React from 'react';
import classnames from 'classnames';
import cls from './styles.scss';
import { CheckboxIcon } from './Check';

export type InputBaseProps = JSX.IntrinsicElements['input'] & {
  label?: React.ReactNode;
  description?: React.ReactNode;
};

export const BaseInput = ({
  label,
  className,
  description,
  toggle,
  name,
  type,
  ...rest
}: InputBaseProps & {
  toggle?: boolean;
}) => {
  const isRadio = type === 'radio';
  return (
    <label
      className={classnames(cls['form-check'], 'form-group', className, {
        [cls.toggle]: toggle,
        [cls.radio]: isRadio,
      })}
    >
      <input
        className={cls['form-check-input']}
        name={name}
        type={isRadio ? 'radio' : 'checkbox'}
        {...rest}
      />
      <span className={cls['form-check-label']}>
        {!toggle && !isRadio && <CheckboxIcon />}
        {label}
      </span>
      {description && (
        <p className={cls['form-check-description']}>{description}</p>
      )}
    </label>
  );
};

BaseInput.displayName = 'BaseInput';

export default BaseInput;
