import React, { FC } from 'react'
import { useFormikContext } from 'formik'
import { IoIosArrowDown } from 'react-icons/io'

import { RadioInput } from 'Components/Inputs/RadioInput'
import { TextInput } from 'Components/Inputs/TextInput'
import { OnlyNumbers } from 'Utils/inputRegex'

import {
  Container,
  ContentContainer,
  Content,
  InputRadioContainer,
  LabelText,
  TextContainer,
  CnpjContainer,
  CpnjContent,
  InputText,
} from './style'

interface Step15Props {
  artist: {
    technical: {
      is_cnpj: string
    }
  }
}

export const Step15: FC = () => {
  const { values, setFieldValue, errors } = useFormikContext<Step15Props>()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <LabelText>
            Você possui CNPJ? <p className="obrigatory"> *</p>
            {errors.artist?.technical?.is_cnpj && (
              <span className="errorMessage">
                {errors.artist.technical.is_cnpj}
              </span>
            )}
          </LabelText>

          <InputRadioContainer>
            <RadioInput
              id="yes_is_cnpj"
              type="radio"
              name="artist.technical.is_cnpj"
              value="true"
              label="Sim"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              id="not_is_cnpj"
              type="radio"
              name="artist.technical.is_cnpj"
              value="false"
              label="Não"
            />
          </InputRadioContainer>

          {values.artist.technical.is_cnpj === 'true' && (
            <>
              <TextContainer>
                <TextInput
                  name="artist.technical.name_enterprise"
                  placeholder="Digite o nome da sua empresa"
                  label="Nome da empresa"
                />
              </TextContainer>
              <TextContainer>
                <InputText
                  name="artist.technical.cnpj"
                  placeholder="Digite seu CNPJ"
                  label="Número do CNPJ"
                  inputMask="99.999.999/9999-99"
                  onChange={(ev: any) =>
                    setFieldValue('cnpj_number', OnlyNumbers(ev.target.value))
                  }
                />
              </TextContainer>
            </>
          )}
        </Content>

        {values.artist.technical.is_cnpj === 'true' && (
          <a href="#scroll">
            <IoIosArrowDown />
          </a>
        )}
      </ContentContainer>

      {values.artist.technical.is_cnpj === 'true' && (
        <CnpjContainer>
          <ContentContainer>
            <CpnjContent>
              <LabelText>Seu CNPJ se enquadra em:</LabelText>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="MEI"
                  label="MEI"
                  id="scroll"
                />
              </InputRadioContainer>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Microempresa"
                  label="Microempresa"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Pequena empresa"
                  label="Pequena empresa"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Eireli"
                  label="Eireli"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="OSC"
                  label="OSC"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Outro"
                  label="Outro"
                />
              </InputRadioContainer>
            </CpnjContent>
          </ContentContainer>
        </CnpjContainer>
      )}
    </Container>
  )
}
