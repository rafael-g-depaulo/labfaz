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
  InputRadioContainer,
  InputText,
} from './style'


interface Step1Props {
  name: string
  social_name: string
  artistic_name: string
  birthday: string
  cpf: string
  rg: string
  expedition_department: string
  gender: string
  OutroGenero: string
  race: string
  is_trans: string
}

export const Step1: FC = () => {
  const { values, setFieldValue } = useFormikContext<Step1Props>()

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <InputText name="name" label="Nome" placeholder="Digite seu nome" />

          <InputText
            name="social_name"
            label="Nome Social"
            placeholder="Digite seu nome social"
          />

          <InputText
            name="artistic_name"
            label="Nome Artistico"
            placeholder="Digite seu nome artistico"
          />

          <div>
            <TextInput
              name="cpf"
              label="CPF"
              placeholder="Digite seu cpf"
              inputMask="999.999.999-99"
              onChange={(ev: any) =>
                setFieldValue('cpf', OnlyNumbers(ev.target.value))
              }
            />

            <TextInput
              name="birthday"
              label="Data de nascimento"
              inputMask="99/99/9999"
              onChange={(ev: any) =>
                setFieldValue('birthday', OnlyNumbers(ev.target.value))
              }
              placeholder="Digite sua data de nascimento"
            />
          </div>

          <div>
            <TextInput
              name="rg"
              label="RG"
              inputMask="9.999.999"
              onChange={(ev: any) =>
                setFieldValue('rg', OnlyNumbers(ev.target.value))
              }
              placeholder="Digite seu rg"
            />

            <TextInput
              name="expedition_department"
              label="Orgão expedidor"
              placeholder="Digite o orgão expedidor"
            />
          </div>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <label htmlFor="gender" className="radioLabel">
            Gênero
          </label>
          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="gender"
              value="masculino"
              label="Masculino"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="gender"
              value="feminino"
              label="Feminino"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="gender"
              value="outro"
              label="Outro"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="gender"
              value="Prefiro não responder"
              label="Prefiro não responder"
            />
          </InputRadioContainer>

          {values.gender === 'outro' && (
            <div className="otherGender">
              <TextInput
                name="OutroGenero"
                label="Qual outro gênero?"
                placeholder="Digite seu gênero"
              />
            </div>
          )}

          <div className="radioContainer">
            <div>
              <label htmlFor="race" className="radioLabel">
                Etnia
              </label>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="race"
                  value="branca"
                  label="Branca"
                />
              </InputRadioContainer>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="race"
                  value="preta"
                  label="Preta"
                />
              </InputRadioContainer>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="race"
                  value="parda"
                  label="Parda"
                />
              </InputRadioContainer>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="race"
                  value="amarela"
                  label="Amarela"
                />
              </InputRadioContainer>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="race"
                  value="indigena"
                  label="Indígena"
                />
              </InputRadioContainer>
            </div>

            <div>
              <label htmlFor="is_trans" className="radioLabel">
                Você é trans?
              </label>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="is_trans"
                  value="Sim"
                  label="Sim"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="is_trans"
                  value="Não"
                  label="Não"
                />
              </InputRadioContainer>
            </div>
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  )
}
