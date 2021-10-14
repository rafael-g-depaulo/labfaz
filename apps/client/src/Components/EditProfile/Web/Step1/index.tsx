import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { RadioInput } from 'Components/Inputs/RadioInput'
import { TextInput } from 'Components/Inputs/TextInput'
import { Text } from 'Components/Typography/Text'

import { OnlyNumbers } from 'Utils/inputRegex'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  InputRadioContainer,
  SelectContainer,
  InputText,
  LeftSelectContainer,
  InputTextContainer, 
} from './style'
import { SelectInput } from 'Components/Inputs/SelectInput'
import { CidadesDF, CidadesEntorno, Estados } from 'Utils/selectOptionsData'

export const Step1: FC = () => {
  const { values, setFieldValue } = useFormikContext<any>()

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <InputTextContainer>
            <InputText
              name="artist.name"
              label="Nome"
              placeholder="Digite seu nome"
              obrigatory
            />
          </InputTextContainer>

          <InputTextContainer>
            <InputText
              name="artist.social_name"
              label="Nome Social"
              placeholder="Digite seu nome social"
            >
              <Text>
                Nome social não é o apelido, é o nome pelo qual pessoas
                transexuais, travestis e não binárias desejam ser chamadas ou
                socialmente reconhecidas e tem a ver com o respeito às
                identidades de gênero.
              </Text>
            </InputText>
          </InputTextContainer>

          <InputTextContainer>
            <InputText
              name="artist.artistic_name"
              label="Nome Artistico"
              placeholder="Digite seu nome artistico"
            />
          </InputTextContainer>

          <div>
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
          </div>

          <div>
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
          </div>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <div className="genderContainer">
            <label htmlFor="residency" className="radioLabel">
              Você reside no Distrito Federal ou Entorno?
            </label>

            <InputRadioContainer>
              <RadioInput
                name="artist.address.residency"
                value="df"  
                label="Distrito Federal"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.address.residency"
                value="entorno"
                label="Entorno"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.address.residency"
                value="fora df"
                label="Resido fora do DF  e do Entorno"
              />
            </InputRadioContainer>

            {values.artist.address.residency ===
              'fora df' && (
              <LeftSelectContainer htmlFor="state">
                <SelectInput
                  name="artist.address.state"
                  label="Qual seu estado?"
                  options={Estados}
                  obrigatory
                />
              </LeftSelectContainer>
            )}
          </div>

          <div className="residencyContainer">
            {values.artist.address.residency === 'df' && (
              <SelectContainer htmlFor="main_name">
                <SelectInput
                  name="artist.address.city"
                  label="Qual sua cidade do DF?"
                  options={CidadesDF}
                  obrigatory
                />
              </SelectContainer>
            )}

            {values.artist.address.residency === 'entorno' && (
              <SelectContainer htmlFor="residency">
                <SelectInput
                  name="artist.address.city"
                  label="Qual cidade do Entorno?"
                  options={CidadesEntorno}
                  obrigatory
                />
              </SelectContainer>
            )}

            {values.artist.address.residency ===
              'fora df' && (
              <InputTextContainer>
                <TextInput
                  name="artist.address.city"
                  label="Cidade"
                  placeholder="Digite o nome de sua cidade"
                  obrigatory
                />
              </InputTextContainer>
            )}

            <InputTextContainer>
              <TextInput
                name="artist.address.cep"
                label="CEP"
                placeholder="Digite seu cep"
                inputMask="99999-999"
                // obrigatory
                onChange={(ev: any) =>
                  setFieldValue('cep', OnlyNumbers(ev.target.value))
                }
              />
            </InputTextContainer>
          </div>

          <div className="residencyContainer">
            <InputTextContainer>
              <TextInput
                name="artist.address.complement"
                label="Endereco"
                placeholder="Digite seu logradouro"
                // obrigatory
              />
            </InputTextContainer>

            <InputTextContainer>
              <TextInput
                name="artist.address.neighbourhood"
                label="Bairro"
                placeholder="Digite seu bairro"
                // obrigatory
              />
            </InputTextContainer>
          </div>

          <div className="residencyContainer">
            <InputTextContainer>
              <TextInput
                name="artist.address.number"
                label="Numero"
                placeholder="Digite seu número"
                onChange={(ev: any) =>
                  setFieldValue('artist.address.number', OnlyNumbers(ev.target.value))
                }
                // obrigatory
              />
            </InputTextContainer>

            <InputTextContainer>
              <TextInput
                name="artist.address.address"
                label="Complemento"
                placeholder="Digite seu complemento"
              />
            </InputTextContainer>
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  )
}
