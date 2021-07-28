import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { RadioInput } from 'Components/Inputs/RadioInput'
import { TextInput } from 'Components/Inputs/TextInput'

import { OnlyNumbers } from 'Utils/inputRegex'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  InputText,
  CnpjText,
  InputRadioContainer,
  TextInputContainer
} from './style'


interface Step8Props {
  is_drt: string
  drt_number: string
  is_ceac: string
  ceac_number: string
  is_cnpj: string
  company_name: string
  cnpj_number: string
}

export const Step8: FC = () => {
  const { values, setFieldValue } = useFormikContext<Step8Props>()

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <div className="container">
            <label htmlFor="is_drt" className="radioLabel">
              Você possui Certificação/DRT?
            </label>

            <InputRadioContainer>
              <RadioInput
                id="yes_is_drt"
                type="radio"
                name="is_drt"
                value="sim"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_drt"
                type="radio"
                name="is_drt"
                value="nao"
                label="Não"

              />
            </InputRadioContainer>

            {values.is_drt === 'sim' && (
              <InputText
                name="drt_number"
                placeholder="Digite seu DRT"
                label="Número do DRT"
              />
            )}
          </div>

          <div className="container">
            <label htmlFor="is_ceac" className="radioLabel">
              Você possui CEAC?
            </label>

            <InputRadioContainer>
              <RadioInput
                id="yes_is_ceac"
                type="radio"
                name="is_ceac"
                value="sim"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_ceac"
                type="radio"
                name="is_ceac"
                value="nao"
                label="Não"
              />
            </InputRadioContainer>

            {values.is_ceac === 'sim' && (
              <InputText
                name="ceac_number"
                placeholder="Digite seu CEAC"
                label="Número do CEAC"
              />
            )}
          </div>

          <div className="container">
            <label htmlFor="is_cnpj" className="radioLabel">
              Você possui CNPJ?
            </label>

            <InputRadioContainer>
              <RadioInput
                id="yes_is_cnpj"
                type="radio"
                name="is_cnpj"
                value="sim"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_cnpj"
                type="radio"
                name="is_cnpj"
                value="nao"
                label="Não"
              />
            </InputRadioContainer>

            {values.is_cnpj === 'sim' && (
              <>
                <InputText
                  name="company_name"
                  placeholder="Digite o nome da sua empresa"
                  label="Nome da empresa"
                />

                <CnpjText
                  name="cnpj_number"
                  placeholder="Digite seu CNPJ"
                  label="Número do CNPJ"
                  inputMask="99.999.999/9999-99"
                  onChange={(ev: any) =>
                    setFieldValue('cnpj_number', OnlyNumbers(ev.target.value))
                  }
                />
              </>
            )}
          </div>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          {values.is_cnpj === 'sim' && (
            <>
              <label htmlFor="cnpj_category" className="radioLabel">
                Seu CNPJ se enquadra em:
              </label>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="cnpj_category"
                  value="mei"
                  label="MEI"
                />
              </InputRadioContainer>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="cnpj_category"
                  value="microemresa"
                  label="Microempresa"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="cnpj_category"
                  value="pequena_empresa"
                  label="Pequena empresa"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="cnpj_category"
                  value="eireli"
                  label="Eireli"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="cnpj_category"
                  value="osc"
                  label="OSC"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="cnpj_category"
                  value="outro"
                  label="Outro"
                />
              </InputRadioContainer>

              <TextInputContainer>
                <TextInput
                  name="company_name"
                  placeholder="Descreva a area de atuacao da sua empresa"
                  label="Em qual area sua empresa atua?"
                />
              </TextInputContainer>
            </>
          )}
        </RightSideContent>
      </RightSide>
    </Container>
  )
}
