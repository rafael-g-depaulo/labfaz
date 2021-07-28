import React, { FC } from 'react'
import { useField } from 'formik'

import { Container } from './style'

export interface InputProps {
  label?: string
  placeholder?: string
  name: string
  width?: number
  height?: number
  value?: string
  text?: string
  inputMask?: string
}

export const PasswordInput: FC<InputProps> = ({
  label,
  placeholder,
  width,
  value,
  inputMask,
  text,
  height,
  ...props
}) => {
  const [inputProps, meta] = useField(props)

  return (
    <Container {...props}>
      <label htmlFor={props.name}>{label}</label>

      <input
        id={props.name}
        style={{ width: `${width}rem`, height: `${height}rem` }}
        type="password"
        placeholder={placeholder}
        {...inputProps}
      />

      {meta.error && <div>{meta.error.toString()}</div>}
    </Container>
  )
}
