import React, { FC } from 'react'
import SquareLoader from 'react-spinners/SquareLoader'

import { Container, Color } from './style'


export const Loading: FC = () => {
  return (
    <Container>
      <SquareLoader color ="#FC0061" css={Color}/>
    </Container>
  )
}

export default Loading
