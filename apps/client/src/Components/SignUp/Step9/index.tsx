import React, { FC } from 'react'

import { RadioInput } from 'Components/Inputs/RadioInput'

import { Container, Content, InputRadioContainer } from './style'

export const Step9: FC = () => {
  return (
    <Container>
      <div className="centralContent">
        <Content>
          <div>
            <label htmlFor="is_afiliated" className="radioLabel">
              Você é filiado a Associação das Trabalhadoras e Trabalhadores do
              Backstage Brasília?
            </label>

            <InputRadioContainer>
              <RadioInput
                id="yes_is_afiliated"
                type="radio"
                name="is_afiliated"
                value="sim"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="no_is_afiliated"
                type="radio"
                name="is_afiliated"
                value="nao"
                label="Não"
              />
            </InputRadioContainer>
          </div>

          <div>
            <label htmlFor="want_be_afiliated " className="radioLabel">
              Gostaria de conhecer e se associar à Associação das Trabalhadoras
              e Trabalhadores do Backstage Brasília?
            </label>

            <InputRadioContainer>
              <RadioInput
                id="yes_want_be_afiliated"
                type="radio"
                name="want_be_afiliated"
                value="sim"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="no_want_be_afiliated"
                type="radio"
                name="want_be_afiliated"
                value="nao"
                label="Não"
              />
            </InputRadioContainer>
          </div>

          <div>
            <label htmlFor="authorization_data" className="radioLabel">
              Estou ciente e autorizo que os meus dado sejam usados única e
              exclusivamente para o projeto LabFaz
            </label>

            <InputRadioContainer>
              <RadioInput
                id="yes_authorization_data"
                type="radio"
                name="authorization_data"
                value="sim"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="no_authorization_data"
                type="radio"
                name="authorization_data"
                value="nao"
                label="Não"
              />
            </InputRadioContainer>
          </div>
        </Content>
      </div>
    </Container>
  )
}
