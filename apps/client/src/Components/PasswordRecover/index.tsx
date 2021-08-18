import React, { FC } from 'react'

import { Formik, Form } from 'formik'

import { Wrapper, InputContainer, FormButton } from './styles'
import { Input } from 'Components/Input'
import { Text } from 'Components/Typography/Text'

interface FormProps {
  email: string
}

export const RecoverForm: FC = () => {
  const handleSubmit = (values: FormProps) => {
    console.log(values)
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
    <Formik 
      initialValues={{
      email: ''
        }}
      onSubmit={handleSubmit}
      validate={validateSubmit}
        >
        {() => (
        <Wrapper>
          <Form>
            <InputContainer>
              <Input label="Email" placeholder="Digite seu email" htmlFor="Email" name="Email" />
              <Text> Enviaremos um email com as instruções para recuperar a sua senha </Text> 
            </InputContainer>
            <FormButton type="submit">
              RECUPERAR SENHA
            </FormButton>
            <Text> Ainda está com problemas ? </Text> 
          </Form>
        </Wrapper>
        )
        }

        
      </Formik>
  )
}

export default RecoverForm
