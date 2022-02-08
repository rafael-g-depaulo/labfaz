import { FC, useCallback, useContext, useState } from 'react'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { login } from 'Api/Session'
import { ErrorObject } from '@labfaz/server-conn-info'

import useQueries from 'Hooks/useUrlQueries'

import { CheckboxInput } from 'Components/Inputs/CheckboxInput'
import { CurrentUserContext } from 'Context/LoggedUserToken'

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
  // LoginTitle,
  LabfazText,
  ButtonContainer,
  CheckboxInputContainer,
  InputPassword,
  Img,
} from './style'
import { useLoginInfo } from 'Api/LoginAssets'
import { showForgotPassword } from 'FeatureFlags'
import { navLinks } from 'Utils/navLinks'
import { Modal } from 'Components/Modal/LoginModal'

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
  const { login: setToken } = useContext(CurrentUserContext)
  const [error, setError] = useState<ErrorObject | undefined>(undefined)
  const [toastMessage, setToastMessage] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const { data: infoData } = useLoginInfo()

  const navigate = useNavigate()
  const queries = useQueries()
  const redirect_to = queries.get("redirect_to")

  const handleSubmit = useCallback(
    (values: FormProps) => {
      login(values.email, values.password)
        .then(({ token }) => {
          setToken(token)
          navigate(`/${redirect_to ?? "home"}`)
        })
        .catch((err) => [setError(err), setToastMessage(true)])
    },
    [setToken, redirect_to, navigate]
  )

  return (
    <Container>
      <FormContainer openToastMessage={toastMessage}>
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
                    />

                    <InputPassword
                      name="password"
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
                    <Button type={buttonType ? buttonType : 'submit'}>
                      ENTRAR
                    </Button>

                    <RegisterButton href={navLinks.cadastro.path}>CADASTRE-SE</RegisterButton>
                  </ButtonContainer>

                  { showForgotPassword && <NavLink to={navLinks.forgotPass.path}>{navLinks.forgotPass.label}</NavLink> }
                  {error && error.message==="Email confimation needed" && <span onClick={() => setIsVisible(true)}> Reenviar email de confirmação ? </span> }
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
      <Modal isVisible={isVisible} setFunction={setIsVisible} />
      <LabfazText
        level={2}
        children="Laboratorio dos Fazeres e Saberes Tecnicos da Economia Criativa"
      />
    </Container>
  )
}
