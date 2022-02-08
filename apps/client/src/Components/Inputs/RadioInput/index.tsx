import { FC } from 'react'
import { IoMdInformationCircle } from 'react-icons/io'

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
  paddingLeft?: number
  information?: string
}

export const RadioInput: FC<InputProps> = ({
  label,
  type,
  placeholder,
  width,
  paddingLeft,
  value,
  inputMask,
  text,
  height,
  information,
  children,
  id,
  ...props
}) => {
  return (
    <Container paddingLeft={paddingLeft ? paddingLeft : 3}>
      <Input type="radio" id={id ? id : value} {...props} value={value} />

      <div className="radio_input"></div>

      <div className="informationContainer">
        <label htmlFor={id ? id : value}>{label}</label>


        {information && (
          <div className="svgContainer">
            <IoMdInformationCircle />
          {information && <span className="information">{information}</span>}
          </div>
        )}
      </div>
    </Container>
  )
}
