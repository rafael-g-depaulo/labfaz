import React, { FC } from 'react'

import { Container } from "./style"

export interface InputProps {
  label: string
  placeholder: string
  name: string
  htmlFor: string
}

export const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  htmlFor
}) => {
  return (
    <>
      <Container>
        <label htmlFor={htmlFor}>{label}</label>
        <input type="text" placeholder={placeholder} name={name} />
      </Container>
    </>
  )
}
