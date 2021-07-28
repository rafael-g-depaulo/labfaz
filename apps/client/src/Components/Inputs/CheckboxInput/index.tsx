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
}

export const CheckboxInput: FC<InputProps> = ({
  label,
  type,
  placeholder,
  width,
  value,
  inputMask,
  text,
  height,
  ...props
}) => {
  const [, meta] = useField(props)

  return (
    <Container>
      <Input type="checkbox" id={value} {...props} value={value} />

      <label htmlFor={value}>{label}</label>

      {meta.error && <div>{meta.error.toString()}</div>}
    </Container>
  )
}
