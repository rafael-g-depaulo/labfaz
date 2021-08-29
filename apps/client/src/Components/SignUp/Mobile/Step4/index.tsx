import React, { FC } from 'react'

import { TextInput } from 'Components/Inputs/TextInput'
import { useFormikContext } from 'formik'
import { RadioInput } from 'Components/Inputs/RadioInput'

import {
  Container,
  ContentContainer,
  Content,
  InputRadioContainer,
} from './style'

interface Step4Props {
  artist: {
    gender: string
    gender_identity: string
  }
}

export const Step4: FC = () => {
  const { values, errors } = useFormikContext<Step4Props>()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <label htmlFor="gender" className="radioLabel">
            Gênero <p className="obrigatory"> *</p>
            {errors.artist?.gender && (
              <span className="errorMessage">{errors.artist.gender}</span>
            )}
          </label>
          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender"
              value="masculino"
              label="Masculino"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender"
              value="feminino"
              label="Feminino"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender"
              value="outro"
              label="Outro"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender"
              value="Prefiro não responder"
              label="Prefiro não responder"
            />
          </InputRadioContainer>

          {values.artist?.gender === 'outro' && (
            <div className="otherGender">
              <TextInput
                name="artist.other_gender"
                label="Qual outro?"
                placeholder="Digite qual outro gênero"
              />
            </div>
          )}

          <label
            htmlFor="gender"
            className="radioLabel"
            style={{ marginTop: '1.54rem' }}
          >
            Identidade de Genero <p className="obrigatory"> *</p>
            {errors.artist?.gender_identity && (
              <span className="errorMessage">
                {errors.artist.gender_identity}
              </span>
            )}
          </label>
          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender_identity"
              value="cisgênero(a)"
              label="Cisgênero(a)"
              information='Pessoa cisgênero consiste no/a indivíduo/a que se identifica com o seu "gênero de nascença". Por exemplo: um indivíduo que possui características biológicas típicas do gênero masculino e que se identifica (socialmente e psicologicamente) como um homem. Desta forma, pode-se dizer que trata-se de um homem cisgênero.'
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender_identity"
              value="transexual/Transgênero(a)"
              label="Transexual/Transgênero(a)"
              information="pessoa transexual/transgênero é o(a) indivíduo(a) que se identifica com um gênero diferente daquele que lhe foi atribuído biologicamente no nascimento. Por exemplo: uma pessoa que nasce com características masculinas (do ponto de vista biológico), mas que se sente do gênero feminino; ou o indivíduo que possui características físicas femininas, mas que se identifica como um homem."
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender_identity"
              value="não-binário(a)"
              label="Não-binário(a)"
              information="pessoa transexual/transgênero é o(a) indivíduo(a) que se identifica com um gênero diferente daquele que lhe foi atribuído biologicamente no nascimento. Por exemplo: uma pessoa que nasce com características masculinas (do ponto de vista biológico), mas que se sente do gênero feminino; ou o indivíduo que possui características físicas femininas, mas que se identifica como um homem."
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.gender_identity"
              value="prefiro não responder"
              label="Prefiro não responder"
            />
          </InputRadioContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}
