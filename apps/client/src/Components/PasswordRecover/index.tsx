import React, { FC, useState } from 'react'

import { Formik, Form, FormikHelpers } from 'formik'

import { Wrapper, InputContainer, FormButton, Span, Message } from './styles'
import { Input } from 'Components/Input'
import { Text } from 'Components/Typography/Text'
import { Modal } from './Modal'

import { askResetPassword } from 'Api/PasswordReset'  
interface FormProps {
  email: string,
}

export const AskReset: FC = () => {


  const [emailStatus, setEmailStatus] = useState("");

  const [isVisible, setIsVisible] = useState(false)

  const [isError, setIsError] = useState(false)
  const Title = "EMAIL ENVIADO!"
  const [email, setEmail] = useState("mail@mail.com")

  const handleSubmit = (values:FormProps, { setSubmitting, setValues }: FormikHelpers<FormProps>)  => {    

    askResetPassword(values.email)
      .then(() => {
        setEmail(values.email)
        setIsVisible(true)        
        setValues({
          email: ""
        })
        setIsError(false)
      })
      .catch(() => {
        setEmailStatus("Email incorreto.")
        setIsError(true)
      })
    setSubmitting(false)
  }

  const validateSubmit = (values: FormProps) => {
    const errors: any = { }

    if(!values.email){
      errors.email = "Required"
    } else if(
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }
    return errors
  } 

  
  return (
    <>
      <Formik 
        initialValues={{
        email: ''
          }}
          validate={validateSubmit}
          onSubmit={handleSubmit}
          >
          {({ isSubmitting }) => (
          <Wrapper isVisible={isVisible}>
            <Form>
              <InputContainer>
                <Input 
                  type="text" 
                  label="Email" 
                  placeholder="Digite seu email" 
                  name="email"
                  />
                  {emailStatus ? (<Message isError={isError} > {emailStatus} </Message>) : <Text> Enviaremos um email com as instruções para recuperar a sua senha </Text> }
                {/* <Text> {emailStatus ? emailStatus : "Enviaremos um email com as instruções para recuperar a sua senha"} </Text>  */}
              </InputContainer>
              <FormButton type="submit" disabled={isSubmitting}>
                RECUPERAR SENHA
              </FormButton>
            </Form>
            <Span onClick={() => setIsVisible(!isVisible)}> Ainda está com problemas? </Span>
          </Wrapper>
          )
          }        
        </Formik>
        <Modal 
          isVisible={isVisible} 
          setFunction={setIsVisible}
          title={Title}
          userEmail={email}
          />
      </>
  )
}

export default AskReset
