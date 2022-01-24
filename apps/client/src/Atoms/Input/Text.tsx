import { FC, InputHTMLAttributes } from "react"
import styled from "styled-components"
import { Field } from "formik"

import { getColor } from "GlobalStyles/cssVar"

type InputProps = InputHTMLAttributes<HTMLInputElement>
export interface TextInputProps extends InputProps {
  name: string
}

export const StyledTextInput = styled.input<TextInputProps>`
  border-radius: 4px;
  color: ${getColor("secondary")};
`

export const TextInput: FC<TextInputProps> = ({
  name,
  ...props
}) => {
  return (
    <Field
      // establish defaults
      type="input"
      id={name}
      // override defaults with given props
      name={name}
      {...props}
      // use StyledTextInput for presentation
      as={StyledTextInput}
    />
  )
}

export default TextInput
