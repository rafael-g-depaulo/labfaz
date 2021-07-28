import React, { FC } from 'react'
import { useField } from 'formik'

import { Container, Input } from './style'

export interface InputProps {
  label?: string
  placeholder?: string
  name: string
  type?: string
  width?: number
  height?: number
  value?: string
  text?: string
  inputMask?: string
  id?: string
}

export const RadioInput: FC<InputProps> = ({
  label,
  type,
  placeholder,
  width,
  value,
  inputMask,
  text,
  height,
  id,
  ...props
}) => {
  const [, meta] = useField(props)

  return (
    <Container>
      <Input type="radio" id={id ? id : value} {...props} value={value} />

      <label htmlFor={id ? id : value}>{label}</label>

      {meta.error && <div>{meta.error.toString()}</div>}
    </Container>
  )
}
