import React, { FC, useCallback, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { login } from 'Api/Session'
import { ErrorObject } from 'Api'


import { CheckboxInput } from 'Components/Input/CheckboxInput'
import { CurrentUserContext } from 'Context/CurrentUser'

import Icon from './Icon.svg'

import {
  Container,
  FormContainer,
  LeftSide,
  RightSide,
  Button,
  InputTextContainer,
  RegisterButton,
  InputText,
  NavLink,
  LoginTitle,
  LabfazText,
  ButtonContainer,
  CheckboxInputContainer
} from './style'


interface FormProps {
  name?: string
  password?: string
  stayConnected?: boolean
}

export interface LoginComponentProps {
  onSubmit: FormSubmitFn
}

export type FormSubmitFn = (values: FormProps) => any

export const Login: FC<LoginComponentProps> = () => {
  const { setToken, setUser } = useContext(CurrentUserContext)
  const [error, setError] = useState<ErrorObject | undefined>(undefined)
  const [toastMessage, setToastMessage] = useState(false)

  // const history = useHistory()

  const handleSubmit = useCallback(
    (values) => {
      login(values.email, values.password)
        .then(({ token, user }) => {
          setToken(token)
          setUser(user)
          
          localStorage.setItem('@Labfaz:User', JSON.stringify(user))
        })
        // .then(() => history.push('/home'))
        .catch((err) => [setError(err), setToastMessage(true)])
    },
    [setToken, setUser]
  )

  return (
    <Container openToastMessage={toastMessage}>
      <LoginTitle level={1} children="Seja bem vinde!" />
      <FormContainer>
        <LeftSide>
          <img src={Icon} alt="Temp" />
        </LeftSide>
        <RightSide>
          <Formik
            initialValues={{
              email: '',
              password: '',
              stayConnected: false,
            }}
            onSubmit={() => {}}
          >
            {(props) => (
              <Form
                onSubmit={(e) => [
                  handleSubmit(props.values),
                  e.preventDefault(),
                ]}
              >
                <InputTextContainer>
                  <InputText
                    name="email"
                    type="text"
                    label="E-mail"
                    placeholder="Digite seu email"
                  />

                  <InputText
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                  />
                </InputTextContainer>

                <CheckboxInputContainer>
                  <CheckboxInput
                    name="stayConnected"
                    label="Permanecer conectado"
                  />
                </CheckboxInputContainer>

                <ButtonContainer>
                  <Button type="submit">ENTRAR</Button>

                  <RegisterButton href="/SignUp">CADASTRE-SE</RegisterButton>
                </ButtonContainer>

                <NavLink to="/recover">Esqueceu sua senha?</NavLink>
              </Form>
            )}
          </Formik>
        </RightSide>
      </FormContainer>
      <LabfazText
        level={2}
        children="Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa"
      />
      {error && (
        <div className="errorMessage">
          <span>{error.message}</span>
          <button onClick={() => setToastMessage(false)}> X</button>
        </div>
      )}
    </Container>
  )
}
