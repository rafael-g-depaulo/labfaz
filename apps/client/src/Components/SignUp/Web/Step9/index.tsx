import { FC } from 'react'

import { useFormikContext } from 'formik'

import {
  Container,
  Content,
  AvatarInput,
  Input,
  PasswordInputContainer,
  InputCheckBoxContainer,
} from './style'
import { CheckboxInput } from 'Components/Inputs/CheckboxInput'

interface Step10Prosp {
  profilePicture: string

  use_terms: string
}

export const Step9: FC = () => {
  const { values, errors } = useFormikContext<Step10Prosp>()

  return (
    <Container>
      <div className="centralContent">
        <Content>
          <AvatarInput>
            <img
              src={
                values.profilePicture
                  ? URL.createObjectURL(values.profilePicture)
                  : undefined
              }
              alt={values.profilePicture ? 'User avatar' : ''}
            />
          </AvatarInput>
          <PasswordInputContainer>
            <Input
              name="password"
              label="Escolha uma senha"
              placeholder="Digite uma senha"
              obrigatory
            />
          </PasswordInputContainer>

          <PasswordInputContainer>
            <Input
              name="confirm_password"
              label="Confirmar Senha"
              placeholder="Digite novamente a senha"
              obrigatory
            />
          </PasswordInputContainer>

          <InputCheckBoxContainer>
            <CheckboxInput type="checkbox" name="use_terms" value="sim">
              Li e concordo com os{' '}
              <a href="/politica-de-privacidade.pdf" target="_blank" rel="noopener">
                Termos de Uso
              </a>{' '}
              e estou ciente e autorizo que os meus dado sejam usados única e
              exclusivamente para o projeto LabFaz.
            </CheckboxInput>
            {errors.use_terms && (
              <span className="errorMessage">{errors.use_terms}</span>
            )}
          </InputCheckBoxContainer>
        </Content>
      </div>
    </Container>
  )
}
