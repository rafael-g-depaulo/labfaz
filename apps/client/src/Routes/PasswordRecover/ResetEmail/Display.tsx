import React, { FC } from 'react'

import { Container, PageTitle } from '../styles'
import WithImageContainerForm from 'Components/WithImageContainerForm'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import PasswordChange from "Components/PasswordRecover/passwordChange"

import { RecoverData } from "Api/RecoverPassImage"


interface DisplayProps {
  image: RecoverData
}

export const Display: FC<DisplayProps> = ({ image }) => {
  
  return (
    <>
      <Header />
      <Container>
        <PageTitle> Recuperação de senha </PageTitle>
        <WithImageContainerForm  image={image.image}> 
          <PasswordChange />
        </WithImageContainerForm>
      </Container>
      <Footer />
    </>
  )
}

export default Display;
