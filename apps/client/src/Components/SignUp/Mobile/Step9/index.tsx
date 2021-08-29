import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { SelectInput } from 'Components/Inputs/SelectInput'
import { RadioInput } from 'Components/Inputs/RadioInput'

import { CidadesDF, CidadesEntorno, Estados } from 'Utils/selectOptionsData'

import {
  Container,
  ContentContainer,
  Content,
  InputRadioContainer,
  SelectContainer,
  InputTextContainer,
} from './style'
import { TextInput } from 'Components/Inputs/TextInput'

export const Step9: FC = () => {
  const { values } = useFormikContext<any>()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <label htmlFor="gender" className="radioLabel">
            Você reside no Distrito Federal ou Entorno?
          </label>

          <InputRadioContainer>
            <RadioInput
              name="artist.address.residency"
              value="Distrito Federal"
              label="Distrito Federal"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.address.residency"
              value="Entorno"
              label="Entorno"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.address.residency"
              value="Resido fora do DF  e do Entorno"
              label="Resido fora do DF  e do Entorno"
            />
          </InputRadioContainer>

          {values.artist.address.residency === 'Resido fora do DF  e do Entorno' && (
            <SelectContainer htmlFor="state">
              <SelectInput
                name="artist.state"
                label="Qual seu estado?"
                options={Estados}
              />
            </SelectContainer>
          )}

          {values.artist.address.residency === 'Distrito Federal' && (
            <SelectContainer htmlFor="state">
              <SelectInput
                name="artist.address.city"
                label="Cidade"
                options={CidadesDF}
                obrigatory
              />
            </SelectContainer>
          )}

          {values.artist.address.residency === 'Entorno' && (
            <SelectContainer htmlFor="state">
              <SelectInput
                name="artist.address.city"
                label="Cidade"
                options={CidadesEntorno}
              />
            </SelectContainer>
          )}

          {values.artist.address.residency === 'Resido fora do DF  e do Entorno' && (
            <InputTextContainer>
              <TextInput
                name="artist.address.city"
                label="Cidade"
                placeholder="Digite o nome de sua cidade"
              />
            </InputTextContainer>
          )}
        </Content>
      </ContentContainer>
    </Container>
  )
}
