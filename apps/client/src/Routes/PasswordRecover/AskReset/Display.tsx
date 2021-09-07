import React, { FC } from 'react'

import { Container, Span } from '../styles'
import WithImageContainerForm from 'Components/WithImageContainerForm'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import RecoverForm from "Components/PasswordRecover"

import { RecoverData } from "Api/RecoverPassImage"
import FullPage from 'Components/FullPage'


interface DisplayProps {
  image: RecoverData
}

export const Display: FC<DisplayProps> = ({ image }) => {
  
  return (
    <FullPage>
      <Header />
      <Container>
        <WithImageContainerForm  image={image.image} title="Alteração de senha" > 
          <RecoverForm />
        </WithImageContainerForm>
      </Container>
      <Span> Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa </Span>
      <Footer />
    </FullPage>
  )
}

export default Display;
