import React, { FC } from 'react'
import { useField } from 'formik'
import InputMask from 'react-input-mask'

import { Container, Input } from './style'

export interface InputProps {
  label?: string
  placeholder?: string
  name: string
  width?: number
  height?: number
  inputMask?: string
  onChange?: (ev: any) => void
}

export const TextInput: FC<InputProps> = ({
  label,
  placeholder,
  width,
  inputMask,
  height,
  ...props
}) => {
  const [inputProps, meta] = useField(props)

  return (
    <Container {...props}>
      <label htmlFor={props.name}>{label}</label>

      <Input>
        {() => (
          <InputMask
            mask={inputMask ? inputMask : ''}
            id={props.name}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            type="text"
            placeholder={placeholder}
            {...inputProps}
          />
        )}
      </Input>

      {meta.error && <div>{meta.error.toString()}</div>}
    </Container>
  )
}
