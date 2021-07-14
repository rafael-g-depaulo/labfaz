import { InternalLinkButton } from 'Components/Buttons/InternalLinkButton'
import { Input } from 'Components/Input'
import { Title } from 'Components/Typography/Title'
import React, { FC } from 'react'

import { Container, FormContainer, LeftSide, RightSide, Button, InputText, Form } from "./style"

export const Login: FC = ({
}) => {
  return (
    <>
      <Container>
        <Title level={1} children="Entrar"/>
        <FormContainer>
          <LeftSide />
          <RightSide>
            <Form >
              <InputText htmlFor="email" placeholder="Digite seu email" name="email" label="Email"/>
              <InputText htmlFor="Password" placeholder="Digite sua senha" name="password" label="Senha"/>
              <div className="checkboxContainer">
                <input type="checkbox" />
                <label htmlFor="">Permanecer conectado</label>
              </div>
              <Button href="/#">
                Entrar
              </Button>
            </Form>
          </RightSide>
        </FormContainer>
      </Container>
    </>
  )
}
