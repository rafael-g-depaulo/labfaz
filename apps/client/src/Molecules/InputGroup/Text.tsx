import { FC } from "react"

import InputGroup, { InputGroupProps } from "Atoms/Input/InputGroup"
import TextInput from "Atoms/Input/Text"
import Label from "Atoms/Input/Label"

export interface TextInputGroupProps extends InputGroupProps {
  id?: string
  name: string
  label: string
  placeholder?: string
}

export const TextInputGroup: FC<TextInputGroupProps> = ({
  label,
  name,
  id = name,
  placeholder,
  ...props
}) => {
  return (
    <InputGroup {...props}>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </InputGroup>
  )
}

export default TextInputGroup
