import React, { FC } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from './style'

export const Mobile: FC = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  )
}

export default Mobile
