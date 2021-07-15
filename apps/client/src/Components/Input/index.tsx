import React, { FC } from 'react'
import { useField } from 'formik'

import { Container } from "./style"

export interface InputProps {
  label?: string
  placeholder?: string
  name: string
  type: string
  width?: number
}

export const Input: FC<InputProps> = ({
  label,
  type,
  placeholder,
  width,
  ...props
}) => {

  const [inputProps, meta] = useField(props)

  return (
    <Container {...props}>

      {type === 'checkbox' ? (
        <>
          <input 
            id={props.name} 
            style={{ width: `${width}rem`}} 
            type={type} 
            placeholder={placeholder} 
            {...inputProps} 
          />

          {meta.error && (
            <div>
              {meta.error.toString()}
            </div>
          )}

          <label htmlFor={props.name} >{label}</label>
        </>
      ): (
        <>
          <label htmlFor={props.name} >{label}</label>

          <input 
            id={props.name} 
            style={{ width: `${width}rem`}} 
            type={type} 
            placeholder={placeholder} 
            {...inputProps} 
          /> 
          
          {meta.error && (
            <div>
              {meta.error.toString()}
            </div>
          )}
          
        </>
      )}
    </Container>
  )
}
