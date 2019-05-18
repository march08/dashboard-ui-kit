import * as React from 'react'
import classnames from 'classnames'
import './styles.scss'

export type TextAreaProps = JSX.IntrinsicElements['textarea'] & {
  label?: React.ReactNode,
  clear?: boolean,
  errorMessage?: React.ReactNode,
  successMessage?: React.ReactNode,
  leftEl?: React.ReactNode,
  rightEl?: React.ReactNode,
}

export const TextArea = (props: TextAreaProps) => {

  const {
    className,
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
      <textarea
        className={classnames('form-control', {
          ['is-invalid']: errorMessage,
          ['is-valid']: successMessage,
          ['clear']: clear,
        })}
        {...rest}
      />
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

export default TextArea
