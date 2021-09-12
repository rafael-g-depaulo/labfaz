import React, { FC, useState } from 'react'

import { Formik, Form, FormikHelpers } from 'formik'

import { Wrapper, FormButton, Span, Message } from './styles'
import { Modal } from './Modal'

import { InputPassword, InputTextContainer } from "Components/Login/style"

import { resetPassword } from "Api/PasswordReset"

interface FormProps {
  password: string,
  passwordConfirmation: string
}

interface PasswordChangeProps {
  token: string
}

export const PasswordChange: FC<PasswordChangeProps> = ({ token }) => {

  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = ({ password }: FormProps, { setSubmitting, setValues }: FormikHelpers<FormProps>)  => {    
    resetPassword(password, token)
    .then(() => {
        setMessage("Senha Alterada com sucesso!")
    })
    .catch(() => {
      setMessage("Alguma coisa não está certa. Tente novamente.")
      setError(true)
    })

    if(!message) {
      setMessage("O Token de expirou, peça uma nova senha")
      setError(true)
    }

    setValues({
      password: "",
      passwordConfirmation: ""
    })
    setSubmitting(false)
  }

  const validateSubmit = (values: FormProps) => {
    const errors: any = { }

    if(values.password !== values.passwordConfirmation){
      errors.password = "As senhas devem ser iguais"
      errors.passwordConfirmation = "As senhas devem ser iguais"
    } 

    if(!values.password || !values.passwordConfirmation) {
      errors.password = "Required"
      errors.passwordConfirmation = "Required"
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
              <InputTextContainer>
                <InputPassword 
                  label="Escolha uma nova senha" 
                  placeholder="Digite sua nova senha" 
                  name="password"
                  />
                <InputPassword
                  label="Confirmação de nova senha" 
                  placeholder="Confirme sua nova senha" 
                  name="passwordConfirmation"
                  />
                </InputTextContainer>
                {message && <Message isError={error}> {message} </Message>}
              <FormButton type="submit" disabled={isSubmitting}>
                ATUALIZAR SENHA
              </FormButton>
              <Span onClick={() => setIsVisible(!isVisible)}> Ainda está com problemas? </Span>
            </Form>
          </Wrapper>
          )
          }        
        </Formik>
        <Modal isVisible={isVisible} setFunction={setIsVisible} />
      </>
  )
}

export default PasswordChange
