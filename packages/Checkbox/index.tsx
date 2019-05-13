import * as React from 'react'
import classnames from 'classnames'
import * as cls from './styles.scss'
import { CheckboxIcon } from './check'


type CheckboxProps = JSX.IntrinsicElements['input'] & {
  className?: string,
  label?: React.ReactNode,
  description?: React.ReactNode,
  toggle?: boolean,
  radio?: boolean,
}

export const Checkbox = ({
  label,
  className,
  description,
  toggle,
  radio,
  name,
  ...rest
}: CheckboxProps) => (
    <label
      className={classnames(cls['form-check'], className, {
        [cls.toggle]: toggle,
        [cls.radio]: radio,
      })}
    >
      <input
        className={cls['form-check-input']}
        name={name}
        type={radio ? 'radio' : 'checkbox'}
        {...rest}
      />
      <div className={cls['form-check-label']}>
        {
          !toggle && !radio && (
            <CheckboxIcon />
          )
        }
        {label}
      </div>
      {
        description && (
          <p className={cls['form-check-description']}>
            {description}
          </p>
        )
      }
    </label>
  )

Checkbox.displayName = "Checkbox"

export default Checkbox
