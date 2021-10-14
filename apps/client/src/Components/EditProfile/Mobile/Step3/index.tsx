import React, { FC } from 'react'

import { TextInput } from 'Components/Inputs/TextInput'
import { useFormikContext } from 'formik'
import { OnlyNumbers } from 'Utils/inputRegex'

import { Container, ContentContainer, Content, InputTextContainer } from './style'

export const Step3: FC = () => {
  const { setFieldValue } = useFormikContext()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <InputTextContainer>
            <TextInput
              name="artist.cpf"
              label="CPF"
              placeholder="Digite seu cpf"
              inputMask="999.999.999-99"
              onChange={(ev: any) =>
                setFieldValue('artist.cpf', ev.target.value)
              }
              // obrigatory
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.birthday"
              label="Data de nascimento"
              inputMask="99/99/9999"
              onChange={(ev: any) =>
                setFieldValue('artist.birthday', OnlyNumbers(ev.target.value))
              }
              placeholder="Digite sua data de nascimento"
              obrigatory
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.rg"
              label="RG"
              onChange={(ev: any) =>
                setFieldValue('artist.rg', OnlyNumbers(ev.target.value))
              }
              placeholder="Digite seu rg"
              // obrigatory
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.expedition_department"
              label="Orgão expedidor"
              placeholder="Digite o orgão expedidor"
              // obrigatory
            />
          </InputTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}
