import React, { FC } from 'react'

import { Formik, Form } from 'formik'

import { Wrapper, InputContainer } from './styles'
import { Input } from 'Components/Input'
import { Text } from 'Components/Typography/Text'
import { InternalLinkButton as Button } from "Components/Buttons/InternalLinkButton"

interface FormProps {
  email: string
}

export const RecoverForm: FC = () => {
  const handleSubmit = (values: FormProps) => {
    console.log(values)
  }
  
  return (
    <Formik 
    initialValues={{
      email: ''
        }}
        onSubmit={handleSubmit}
        >
        {() => (
        <Wrapper>
          <Form>
            <InputContainer>
              <Input label="Email" placeholder="Digite seu email" htmlFor="Email" name="Email" />
              <Text> Enviaremos um email com as instruções para recuperar a sua senha </Text> 
            </InputContainer>
            <Button href="#">
              RECUPERAR SENHA
            </Button>
            <Text> Ainda está com problemas ? </Text> 
          </Form>
        </Wrapper>
        )

        }

        
      </Formik>
  )
}

export default RecoverForm
