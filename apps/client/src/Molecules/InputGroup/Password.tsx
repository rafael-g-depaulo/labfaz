import { FC } from "react"

import InputGroup, { InputGroupProps } from "Atoms/Input/InputGroup"
import PasswordInput from "Atoms/Input/Password"
import Label from "Atoms/Input/Label"

export interface PasswordInputGroupProps extends InputGroupProps {
  id?: string
  name?: string
  label: string
  placeholder?: string
}

export const PasswordInputGroup: FC<PasswordInputGroupProps> = ({
  label,
  name = "password",
  id = name,
  placeholder = name,
  ...props
}) => {
  return (
    <InputGroup {...props}>
      <Label htmlFor={name}>{label}</Label>
      <PasswordInput
        name={name} 
        id={id}
        placeholder={placeholder}
      />
    </InputGroup>
  )
}

export default PasswordInputGroup
