import React, { FC, useCallback, useState } from 'react'

import { Formik, Form, FormikHelpers } from 'formik'

import { Wrapper, FormButton, Span, Message } from './styles'
import { Modal } from './Modal'

import { InputPassword, InputTextContainer } from "Components/Login/style"

import { useResetPassword } from "Api/PasswordReset"

interface FormProps {
  password: string,
  passwordConfirmation: string
}

interface PasswordChangeProps {
  token: string
}

export const PasswordChange: FC<PasswordChangeProps> = ({ token }) => {

  const { mutate, isSuccess, isError } = useResetPassword(token)
  const [isVisible, setIsVisible] = useState(false)

  const handleSubmit = useCallback(({ password }: FormProps, { setSubmitting, setValues }: FormikHelpers<FormProps>)  => {    
    mutate({ password })
    setValues({
      password: "",
      passwordConfirmation: ""
    })
    setSubmitting(false)
  }, [mutate])

  const validateSubmit = useCallback((values: FormProps) => {
    const errors: { password?: string, passwordConfirmation?: string } = {}

    if (values.password !== values.passwordConfirmation) {
      errors.password = "As senhas devem ser iguais"
      errors.passwordConfirmation = "As senhas devem ser iguais"
    } 
    if (!values.password || !values.passwordConfirmation) {
      errors.password = "Required"
      errors.passwordConfirmation = "Required"
    }
    return errors
  }, [])

  
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
                {isError && <Message isError>Alguma coisa não está certa. Tente novamente.</Message>}
              <FormButton type="submit" disabled={isSubmitting}>
                ATUALIZAR SENHA
              </FormButton>
              <Span onClick={() => setIsVisible(!isVisible)}> Ainda está com problemas? </Span>
            </Form>
          </Wrapper>
          )
          }        
        </Formik>
        <Modal isVisible={isVisible} setFunction={setIsVisible} success={isSuccess} />
      </>
  )
}

export default PasswordChange
