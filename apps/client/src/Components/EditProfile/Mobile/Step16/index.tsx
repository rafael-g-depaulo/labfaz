import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import {
  Container,
  ContentContainer,
  Content,
  AvatarInput,
  Input,
  Button,
  InputTextContainer,
} from './style'

interface Step16Props {
  profilePicture: any

  password: string
  confirm_password: string
  use_term: string
}

export const Step16: FC = () => {
  const { values } = useFormikContext<Step16Props>()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <AvatarInput>
            <img
              src={
                values.profilePicture?.name
                  ? URL.createObjectURL(values.profilePicture)
                  : values.profilePicture
              }
              alt={values.profilePicture ? 'User avatar' : ''}
            />
          </AvatarInput>

          <InputTextContainer>
            <Input
              name="old_password"
              label="Digite sua senha atual"
              placeholder="Digite uma senha"
            />
          </InputTextContainer>

          <InputTextContainer>
            <Input
              name="password"
              label="Escolha uma nova senha"
              placeholder="Digite uma senha"
            />
          </InputTextContainer>
          <InputTextContainer>
            <Input
              name="confirm_password"
              label="Confirme sua nova senha"
              placeholder="Digite novamente a senha"
            />
          </InputTextContainer>

          <Button type="submit">FINALIZAR EDIÇÃO</Button>
        </Content>
      </ContentContainer>
    </Container>
  )
}
