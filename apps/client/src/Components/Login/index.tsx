import React, { FC, useCallback, useContext, useState } from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { login } from 'Api/Session'
import { ErrorObject } from 'Api'

import { CheckboxInput } from 'Components/Inputs/CheckboxInput'
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
  CheckboxInputContainer,
  InputPassword,
  Img,
} from './style'
import { useLoginInfo } from 'Api/LoginAssets'

interface FormProps {
  email: string
  password: string
  stayConnected?: boolean
}

export interface LoginComponentProps {
  onSubmit: FormSubmitFn
  buttonType?: 'submit' | 'button' | 'reset'
}

export type FormSubmitFn = (values: FormProps) => any

export const Login: FC<LoginComponentProps> = ({ buttonType }) => {
  const { setToken, setUser } = useContext(CurrentUserContext)
  const [error, setError] = useState<ErrorObject | undefined>(undefined)
  const [toastMessage, setToastMessage] = useState(false)
  
  const { data: infoData } = useLoginInfo()

  const history = useHistory()

  const handleSubmit = useCallback(
    (values: FormProps) => {
      login(values.email, values.password)
        .then(({ token, user }) => {
          setToken(token)
          setUser(user)
        })
        .then(() => history.push('/home'))
        .catch((err) => [setError(err), setToastMessage(true)])
    },
    [setToken, setUser, history]
  )

  console.log(infoData)
  return (
    <Container>
      <FormContainer openToastMessage={toastMessage}>
        <LoginTitle level={1}>{infoData?.titulo ?? "Entrar"}</LoginTitle>
        <div className="formContainer">
          <LeftSide>
            <Img src={infoData?.imagem?.url ?? Icon} alt="" />
          </LeftSide>
          <RightSide>
            <Formik
              initialValues={{
                email: '',
                password: '',
                stayConnected: false,
              }}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .required('Campo obrigatório')
                  .email('Email inválido'),
                password: yup.string().required('Campo obrigatório'),
              })}
              onSubmit={(values: FormProps) => handleSubmit(values)}
            >
              {() => (
                <Form>
                  <InputTextContainer>
                    <InputText
                      name="email"
                      label="E-mail"
                      placeholder="Digite seu email"
                      obrigatory
                    />

                    <InputPassword
                      name="password"
                      label="Senha"
                      placeholder="Digite sua senha"
                      obrigatory
                    />
                  </InputTextContainer>

                  <CheckboxInputContainer>
                    <CheckboxInput
                      name="stayConnected"
                      label="Permanecer conectado"
                    />
                  </CheckboxInputContainer>

                  <ButtonContainer>
                    <Button type={buttonType ? buttonType : 'submit'}>
                      ENTRAR
                    </Button>

                    <RegisterButton href="/SignUp">CADASTRE-SE</RegisterButton>
                  </ButtonContainer>

                  <NavLink to="/recover">Esqueceu sua senha?</NavLink>
                </Form>
              )}
            </Formik>
          </RightSide>
        </div>
        {error && (
          <div className="errorMessage">
            <span>{error.message}</span>
            <button onClick={() => setToastMessage(false)}> X</button>
          </div>
        )}
      </FormContainer>
      <LabfazText
        level={2}
        children="Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa"
      />
    </Container>
  )
}
