import { FC } from 'react'
import SquareLoader from 'react-spinners/SquareLoader'

import { Container } from './style'


export const Loading: FC = () => {
  return (
    <Container>
      {/* <SquareLoader color ="#FC0061" css={Color}/> */}
      <SquareLoader color ="#FC0061" />
    </Container>
  )
}

export default Loading
