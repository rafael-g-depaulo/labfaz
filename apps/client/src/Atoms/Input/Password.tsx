import { FC, InputHTMLAttributes } from "react"
import { Field } from "formik"

import { StyledTextInput } from "./Text"

type InputProps = InputHTMLAttributes<HTMLInputElement>
export interface TextInputProps extends InputProps {
  name: string
}

export const TextInput: FC<TextInputProps> = ({
  name,
  ...props
}) => {
  return (
    <Field
      // establish defaults
      type="password"
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
