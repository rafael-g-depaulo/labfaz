import React, { FC, useState } from 'react'

import { Formik, Form, FormikHelpers } from 'formik'

import { Wrapper, InputContainer, FormButton, Span } from './styles'
import { Input } from 'Components/Input'
import { Modal } from './Modal'

import { api } from "Api"

interface FormProps {
  password: string,
  passwordConfirmation: string
}

export const PasswordChange: FC = () => {

  const [isVisible, setIsVisible] = useState(false)


  const handleSubmit = (values: FormProps, { setSubmitting }: FormikHelpers<FormProps>)  => {    
    api.post("/sessions/reset-password", {
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        password: values.password,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlkxcFFXTzEyUWtIVUkzaTdaOEtEcCIsImlhdCI6MTYyOTUxMzcyOSwiZXhwIjoxNjI5NTE0MzI5fQ.06qqbTYGEKVoPlWSeO7M6lB_H8xLRVHm4SW1X734DuU"  
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    setSubmitting(false)
  }

  const validateSubmit = (values: FormProps) => {
    const errors: any = { }

    if(values.password !== values.passwordConfirmation){
      errors.password = "As senhas devem ser iguais"
      errors.passwordConfirmation = "As senhas devem ser iguais"
    } 
    return errors
  } 

  
  return (
    <>
      <Formik 
        initialValues={{
        password: '',
        passwordConfirmation: ""
          }}
          validate={validateSubmit}
          onSubmit={handleSubmit}
          >
          {({ isSubmitting }) => (
          <Wrapper isVisible={isVisible}>
            <Form>
              <InputContainer>
                <Input 
                  type="password" 
                  label="Escolha uma nova senha" 
                  placeholder="Digite sua nova senha" 
                  name="password"
                  />
              </InputContainer>
              <InputContainer>
                <Input 
                  type="password" 
                  label="Confirmação de nova senha" 
                  placeholder="Confirme sua nova senha" 
                  name="passwordConfirmation"
                  />
              </InputContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                ATUALIZAR SENHA
              </FormButton>
            </Form>
            <Span onClick={() => setIsVisible(!isVisible)}> Ainda está com problemas? </Span>
          </Wrapper>
          )
          }        
        </Formik>
        <Modal isVisible={isVisible} setFunction={setIsVisible} />
      </>
  )
}

export default PasswordChange
