import React, { FC } from "react"
import styled from "styled-components"

import FullPage from "Components/FullPage"
import Footer from "Components/Footer"
import Header from "Components/Header"

const Container = styled(FullPage)`
  display: flex;
  flex-direction: column;

  --background-color: var(--background-black);
  background-color: var(--background-color);
`

const Content = styled.div`
  flex-grow: 1;
`

export const Wireframe: FC = ({
  children
}) => {
  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  )
}

export default Wireframe
