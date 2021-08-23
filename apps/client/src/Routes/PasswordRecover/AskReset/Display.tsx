import React, { FC } from 'react'

import { Container, PageTitle } from '../styles'
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
        <PageTitle> Recuperação de senha </PageTitle>
        <WithImageContainerForm  image={image.image}> 
          <RecoverForm />
        </WithImageContainerForm>
      </Container>
      <Footer />
    </>
  )
}

export default Display;
