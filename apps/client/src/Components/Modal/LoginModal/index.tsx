import React, { FC, useState } from 'react'

import { ModalDiv, ModalContent, Container, ModalLine, Button } from '../styles'
import { FormButton } from "Components/PasswordRecover/styles"
import { Title } from "Components/Typography/Title"
import SocialMediaIcons  from "Components/SocialMediaIcons"
import { TextInput } from "Components/Inputs/TextInput"
import { Formik, Form } from 'formik'

interface ModalProps {
  isVisible: boolean,
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: FC<ModalProps> = ({ isVisible, setFunction }) => {

  const [ message, setMessage ] = useState('')

  return (
    <Container isVisible={isVisible} >
      <ModalDiv>
        <Title
          level={3}
        > Reenviar email de confirmação </Title>
        <ModalLine />
        <ModalContent>
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={(values) => console.log(values)}
          >
            {
              () => (
                <Form>  
                  <TextInput 
                    name={'email'}
                    placeholder="seu email cadastrado"
                  />
      
                  <Button type="submit"  > Enviar email </Button>
                </Form>
              )
            }

          </Formik>
          <SocialMediaIcons />
            
          <FormButton onClick={() => setFunction(!isVisible)}> Voltar </FormButton>

        </ModalContent>
      </ModalDiv>
    </Container>
  )
}
