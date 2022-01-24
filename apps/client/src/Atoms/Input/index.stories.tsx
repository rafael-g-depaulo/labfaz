import { Form, Formik, FormikValues } from 'formik'

import TextInput from './Text'
import PasswordInput from './Password'

const wrap = (ele: React.ReactNode, obj: FormikValues) => (
  <Formik onSubmit={() => {}} initialValues={obj}>
    <Form>{ele}</Form>
  </Formik>
)

export default {
  title: 'Atoms/Text Inputs',
}

export const Text = () =>
  wrap(<TextInput name="simpleText" placeholder="simpleText" />, { simpleText: '' })

Text.story = {
  name: 'text',
}

export const Password = () =>
  wrap(<PasswordInput name="password" placeholder="password here" />, { simpleText: '' })

Password.story = {
  name: 'password',
}
