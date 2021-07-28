import React, { FC } from 'react'

import { useFormikContext } from 'formik'

import { Container, Content, AvatarInput, Input } from './style'

interface FileProps {
  name: string
  size: number
  type: string
}

interface Step10Prosp {
  photo_url: FileProps
}

export const Step10: FC = () => {
  const { values } = useFormikContext<Step10Prosp>()

  return (
    <Container>
        <div className="centralContent">
          <Content>
            <AvatarInput>
              <img
                src={values.photo_url ? URL.createObjectURL(values.photo_url) : undefined}
                alt={values.photo_url ? 'User avatar' : ''}
              />
            </AvatarInput>
            <Input
              name="password"
              label="Escolha uma senha"
              placeholder="Digite uma senha"
            />
            <Input
              name="confirm_password"
              label="Confirmar Senha"
              placeholder="Digite novamente a senha"
            />
          </Content>
        </div>
    </Container>
  )
}
