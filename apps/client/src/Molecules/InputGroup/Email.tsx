import { FC } from "react"

import InputGroup, { InputGroupProps } from "Atoms/Input/InputGroup"
import TextInput from "Atoms/Input/Text"
import Label from "Atoms/Input/Label"

export interface EmailInputGroupProps extends InputGroupProps {
  id?: string
  name?: string
  label?: string
  placeholder?: string
}

export const EmailInputGroup: FC<EmailInputGroupProps> = ({
  label,
  name = "email",
  id = name,
  placeholder,
  ...props
}) => {

  return (
    <InputGroup {...props}>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        id={id}
        name={name}
        type="email"
        autoComplete="email"
        placeholder={placeholder}
      />
    </InputGroup>
  )
}

export default EmailInputGroup
