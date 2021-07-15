import React, { FC } from 'react'
import { Formik, Form } from 'formik'

import { Title } from 'Components/Typography/Title'

import Icon from './Icon.svg'
import { 
  Container, 
  FormContainer, 
  LeftSide, 
  RightSide, 
  Button, 
  InputText, 
  NavLink, 
  InputCheckBox
} from "./style"
import { useHistory } from 'react-router-dom'

interface FormProps {
  name?: string
  password?: string
  stayConnected?: boolean
}

export const Login: FC = () => {
  const history = useHistory()

  function onSubmit(values: FormProps) {
    console.log(values)
    history.push('/login')
  }

  return (
    <Container>
      <Title level={1} children="Entrar"/>
      <FormContainer>
        <LeftSide>
          <img src={Icon} alt="Temp" />
        </LeftSide>
        <RightSide>
          <Formik 
            initialValues={{
              email: '',
              password: '',
              stayConnected: false
            }}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <InputText  
                  name="email" 
                  type="text" 
                  label="Email" 
                  placeholder="Digite seu email"
                />

                <InputText  
                  name="password" 
                  type="password" 
                  label="Senha" 
                  placeholder="Digite sua senha"
                />

                <InputCheckBox type="checkbox" name="stayConnected" label="Permanecer conectado" />  

                <Button type="submit">
                  ENTRAR
                </Button>

                <NavLink to="/">
                  Esqueceu sua senha?
                </NavLink>
             </Form>
            )}  
          </Formik>
        </RightSide>
      </FormContainer>
    </Container>
  )
}
