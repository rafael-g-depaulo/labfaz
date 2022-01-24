import { FC, useCallback } from "react"
import { Formik, Form } from "formik"

import { loginUserSchema, UserLogin } from "@starter-project/entities"
import { useLogin } from "Api/LoginUser"

import EmailInputGroup from "Molecules/InputGroup/Email"
import PasswordInputGroup from "Molecules/InputGroup/Password"
import { FormikOnSubmit } from "Utils/formik"
import { useCurrentUser } from "Context/LoggedUserToken"

export interface LoginFormProps {
  
}

const initialValues: UserLogin = {
  email: "",
  password: "",
}

export const LoginForm: FC<LoginFormProps> = () => {
  const { mutateAsync, error, data } = useLogin()
  const { login, token } = useCurrentUser()

  const onSubmit = useCallback<FormikOnSubmit<UserLogin>>((values) =>
    mutateAsync(values)
      .then(user => login(user.token))
  , [login, mutateAsync])

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginUserSchema}
    >
      {({ values, errors }) => (
        <Form>
          <EmailInputGroup
            label="Email:"         
          />

          <PasswordInputGroup
            label="Senha:"
          />

          <br />
          <button type="submit">submit</button>

          <pre>values: {JSON.stringify(values, null, 2)}</pre>
          <pre>errors: {JSON.stringify({ ...errors, api: error}, null, 2)}</pre>
          <pre>loggedIn? {`${!!token}`}</pre>
          <pre>JWT: {token}</pre>
          <pre>return data: {JSON.stringify(data, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
