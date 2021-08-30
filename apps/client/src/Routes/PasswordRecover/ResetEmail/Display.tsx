import React, { FC } from 'react'

import { Container, Span } from '../styles'
import WithImageContainerForm from 'Components/WithImageContainerForm'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import PasswordChange from "Components/PasswordRecover/passwordChange"

import { RecoverData } from "Api/RecoverPassImage"


interface DisplayProps {
  image: RecoverData,
  token: string
}

export const Display: FC<DisplayProps> = ({ image, token }) => {
  
  return (
    <>
      <Header />
      <Container>
        <WithImageContainerForm  image={image.image} title="Recuperação de senha" > 
          <PasswordChange token={token} />
        </WithImageContainerForm>
      </Container>
      <Span> Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa </Span>
      <Footer />
    </>
  )
}

export default Display;
