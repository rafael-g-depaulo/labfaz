import { Form, Formik, FormikValues } from 'formik'

import TextInputGroup from './Text'
import EmailInputGroup from './Email'
import PasswordInputGroup from './Password'

const wrap = (ele: React.ReactNode, obj: FormikValues) => (
  <Formik onSubmit={() => {}} initialValues={obj}>
    <Form>{ele}</Form>
  </Formik>
)

export default {
  title: 'Molecules/Input Groups',
}

export const TextInput = () =>
  wrap(<TextInputGroup name="name" label="Insira nome aqui" placeholder="nome" />, { name: '' })

export const EmailInput = () =>
  wrap(<EmailInputGroup name="email" label="Email" placeholder="email" />, { password: '' })

export const PasswordInput = () =>
  wrap(<PasswordInputGroup name="password" label="Senha" placeholder="senha" />, { password: '' })
