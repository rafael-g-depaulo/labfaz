import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { RadioInput } from 'Components/Inputs/RadioInput'
import { SelectInput } from 'Components/Inputs/SelectInput'
import { TextInput } from 'Components/Inputs/TextInput'

import { OnlyNumbers } from 'Utils/inputRegex'
import { CidadesDF, CidadesEntorno, Estados } from 'Utils/selectOptionsData'


import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  InputRadioContainer,
  SelectContainer,
  LeftSelectContainer,
} from './style'

export const Step3: FC = () => {
  const { values, setFieldValue } = useFormikContext<any>()

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <label htmlFor="gender" className="radioLabel">
            Você reside no Distrito Federal ou Entorno?
          </label>

          <InputRadioContainer>
            <RadioInput
              name="residency"
              value="Distrito Federal"
              label="Distrito Federal"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput name="residency" value="Entorno" label="Entorno" />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="residency"
              value="Resido fora do DF  e do Entorno"
              label="Resido fora do DF  e do Entorno"
            />
          </InputRadioContainer>

          {values.residency === 'Resido fora do DF  e do Entorno' && (
            <LeftSelectContainer htmlFor="state">
              <label>Qual seu estado?</label>
              <SelectInput name="state" options={Estados} />
            </LeftSelectContainer>
          )}
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <div>
            {values.residency === 'Distrito Federal' && (
              <SelectContainer htmlFor="main_name">
                <label>Qual sua cidade do DF?</label>
                <SelectInput name="city" options={CidadesDF} />
              </SelectContainer>
            )}

            {values.residency === 'Entorno' && (
              <SelectContainer htmlFor="main_name">
                <label>Qual sua cidade do Entorno?</label>
                <SelectInput name="city" options={CidadesEntorno} />
              </SelectContainer>
            )}

            {values.residency === 'Resido fora do DF  e do Entorno' && (
              <TextInput
                name="city"
                label="Cidade"
                placeholder="Digite o nome de sua cidade"
              />
            )}

            <TextInput
              name="cep"
              label="CEP"
              placeholder="Digite seu cep"
              inputMask="99999-999"
              onChange={(ev: any) =>
                setFieldValue('cep', OnlyNumbers(ev.target.value))
              }
            />
          </div>

          <div>
            <TextInput
              name="address"
              label="Endereco"
              placeholder="Digite seu logradouro"
            />

            <TextInput
              name="neighbourhood"
              label="Bairro"
              placeholder="Digite seu bairro"
            />
          </div>

          <div>
            <TextInput
              name="number"
              label="Numero"
              placeholder="Digite seu número"
            />

            <TextInput
              name="complement"
              label="Complemento"
              placeholder="Digite seu complemento"
            />
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  )
}
