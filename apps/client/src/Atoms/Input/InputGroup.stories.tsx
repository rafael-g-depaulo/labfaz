import { Form, Formik, FormikValues } from 'formik'
import InputGroup from './InputGroup'

import TextInput from './Text'
import Label from './Label'

const wrap = (ele: React.ReactNode, obj: FormikValues) => (
  <Formik onSubmit={() => {}} initialValues={obj}>
    <Form>{ele}</Form>
  </Formik>
)

export default {
  title: 'Atoms/Input Group',
}

export const WithTextInput = () =>
  wrap(
    <InputGroup>
      <Label htmlFor="name">Insert your name:</Label>
      <TextInput name="name" id="name" />
    </InputGroup>,
    { name: '' }
  )

WithTextInput.story = {
  name: 'with Text Input',
}
