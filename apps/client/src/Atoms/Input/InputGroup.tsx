import { FC } from "react"
import styled from "styled-components"

export interface InputGroupProps {
  
}

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16rem;
`

export const InputGroup: FC<InputGroupProps> = ({
  children
}) => {
  return (
    <StyledInputGroup
      children={children}
    />
  )
}

export default InputGroup
