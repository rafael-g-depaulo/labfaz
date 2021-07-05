import React, { FC } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from './style'

export const Web: FC = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  )
}

export default Web
