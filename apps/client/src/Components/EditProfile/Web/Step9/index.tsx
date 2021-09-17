import React, { FC } from 'react'

import { useFormikContext } from 'formik'

import {
  Container,
  Content,
  AvatarInput,
  Input,
  PasswordInputContainer,
} from './style'

interface Step10Prosp {
  profilePicture: string

  use_terms: string
}

export const Step9: FC = () => {
  const { values } = useFormikContext<Step10Prosp>()

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
              name="old_password"
              label="Digite sua senha atual"
              placeholder="Digite uma senha"
            />
          </PasswordInputContainer>

          <PasswordInputContainer>
            <Input
              name="password"
              label="Escolha uma nova senha"
              placeholder="Digite uma senha"
            />
          </PasswordInputContainer>

          <PasswordInputContainer>
            <Input
              name="confirm_password"
              label="Confirme sua nova senha"
              placeholder="Digite novamente a senha"
            />
          </PasswordInputContainer>
        </Content>
      </div>
    </Container>
  )
}
