import React, { FC } from 'react'

import { Container, Span } from '../styles'
import WithImageContainerForm from 'Components/WithImageContainerForm'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import RecoverForm from "Components/PasswordRecover"

import { RecoverData } from "Api/RecoverPassImage"


interface DisplayProps {
  image: RecoverData
}

export const Display: FC<DisplayProps> = ({ image }) => {
  
  return (
    <>
      <Header />
      <Container>
        <WithImageContainerForm  image={image.image} title="Alteração de senha" > 
          <RecoverForm />
        </WithImageContainerForm>
      </Container>
      <Span> Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa </Span>
      <Footer />
    </>
  )
}

export default Display;
