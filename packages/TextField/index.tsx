import * as React from 'react'
import classnames from 'classnames'
import './styles.scss'

export type TextFieldProps = JSX.IntrinsicElements['input'] & {
  wrapperProps?: JSX.IntrinsicElements['div'],
  label?: React.ReactNode,
  clear?: boolean,
  errorMessage?: React.ReactNode,
  successMessage?: React.ReactNode,
  leftEl?: React.ReactNode,
  rightEl?: React.ReactNode,
}

export const TextField = (props: TextFieldProps) => {

  const {
    className,
    wrapperProps,
    label,
    clear,
    errorMessage,
    successMessage,
    leftEl,
    rightEl,
    id,
    ...rest
  } = props

  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      <div
        {...wrapperProps}
        className={classnames(wrapperProps && wrapperProps.className, 'input-group', {
          ['is-invalid']: errorMessage,
          ['is-valid']: successMessage,
          ['input-group-clear']: clear,
        })}
      >
        {leftEl && (
          <div className={'input-group-prepend'}>
            {leftEl}
          </div>
        )}
        <input
          className={classnames(className, 'form-control')}
          type="text"
          id={id}
          {...rest}
        />
        {rightEl && (
          <div className={'input-group-append'}>
            {rightEl}
          </div>
        )}
      </div>
      {errorMessage ? (
        <div className={'invalid-feedback'}>
          {errorMessage}
        </div>
      ) : null}
      {successMessage ? (
        <div className={'valid-feedback'}>
          {successMessage}
        </div>
      ) : null}
    </>
  )
}

export default TextField
