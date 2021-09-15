import React, { FC } from 'react'

import { ButtonStyled } from './styles'

interface ButtonProps {
  requestStatus?: string,
  courseId: string
}

export const Button: FC<ButtonProps> = ({ requestStatus, courseId }) => {


  console.log(courseId)

  return (
    <ButtonStyled>
      {requestStatus || "INSCREVA-SE"}
    </ButtonStyled>
  )
}

export default Button
