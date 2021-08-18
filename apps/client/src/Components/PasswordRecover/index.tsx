import React, { FC, useState } from 'react'

import { Formik, Form, FormikHelpers } from 'formik'

import { Wrapper, InputContainer, FormButton, Span } from './styles'
import { Input } from 'Components/Input'
import { Text } from 'Components/Typography/Text'
import { Modal } from './Modal'

interface FormProps {
  email: string,
}

export const RecoverForm: FC = () => {

  const [emailSent, setEmailSent] = useState(false);

  const [isVisible, setIsVisible] = useState(false)

  const handleSubmit = (values:FormProps, { setSubmitting }: FormikHelpers<FormProps>)  => {    
    console.log(values.email)
    setEmailSent(true)
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
                <Text> {emailSent ? "O email com as instrucoes para recuperar sua senha foram enviados. Pode demorar alguns minutos para chegar, fique de olho na sua caixa de mensagens." : "Enviaremos um email com as instruções para recuperar a sua senha"} </Text> 
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
        <Modal isVisible={isVisible} setFunction={setIsVisible} />
      </>
  )
}

export default RecoverForm
