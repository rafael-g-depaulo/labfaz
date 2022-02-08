import { FC, useState } from 'react'

import { ModalDiv, ModalContent, Container, ModalLine, Button } from '../styles'
import { FormButton } from "Components/PasswordRecover/styles"
import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"
import { TextInput } from "Components/Inputs/TextInput"
import { Formik, Form } from 'formik'

import { ResendEmail } from "Api/ResendEmail"

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
            onSubmit={(values) => ResendEmail(values.email)
              .then(() => setMessage("Email enviado com sucesso!"))
              .catch(() => setMessage("Email não encontrado"))
            }
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
          {/* <SocialMediaIcons /> */}
          {message && <Text> {message} </Text> }
          <FormButton onClick={() => setFunction(!isVisible)}> Voltar </FormButton>
        </ModalContent>
      </ModalDiv>
    </Container>
  )
}
