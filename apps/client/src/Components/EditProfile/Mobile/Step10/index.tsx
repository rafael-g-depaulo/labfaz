import { TextInput } from 'Components/Inputs/TextInput'
import { useFormikContext } from 'formik'
import React, { FC } from 'react'
import { OnlyNumbers } from 'Utils/inputRegex'

import {
  Container,
  ContentContainer,
  Content,
  InputTextContainer,
} from './style'

export const Step10: FC = () => {
  const { setFieldValue } = useFormikContext()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <div>
            <InputTextContainer>
              <TextInput
                name="artist.address.cep"
                label="CEP"
                placeholder="Digite seu cep"
                inputMask="99999-999"
                onChange={(ev: any) =>
                  setFieldValue('cep', OnlyNumbers(ev.target.value))
                }
                width={8.18}
                obrigatory
              />
            </InputTextContainer>

            <InputTextContainer>
              <TextInput
                name="artist.address.number"
                label="Numero"
                placeholder={`Número`}
                width={5.55}
                obrigatory
              />
            </InputTextContainer>
          </div>

          <InputTextContainer>
            <TextInput
              name="artist.address.complement"
              label="Endereco"
              placeholder="Digite seu logradouro"
              width={15}
              obrigatory
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.address.neighbourhood"
              label="Bairro"
              placeholder="Digite seu bairro"
              width={15}
              obrigatory
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.address.address"
              label="Complemento"
              placeholder="Digite seu complemento"
              width={15}
            />
          </InputTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}
