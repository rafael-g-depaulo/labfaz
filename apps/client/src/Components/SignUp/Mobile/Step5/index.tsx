import React, { FC } from 'react'

import { RadioInput } from 'Components/Inputs/RadioInput'

import {
  Container,
  ContentContainer,
  Content,
  InputRadioContainer,
} from './style'
import { useFormikContext } from 'formik'

interface Step5Props {
  artist: {
    sexual_orientation: string
  }
}

export const Step5: FC = () => {
  const { errors } = useFormikContext<Step5Props>()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <label htmlFor="gender" className="radioLabel">
            Qual a sua orientação sexual? <p className="obrigatory"> *</p>
            {errors.artist?.sexual_orientation && (
              <span className="errorMessage">{errors.artist.sexual_orientation}</span>
            )}
          </label>
          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.sexual_orientation"
              value="assexual"
              label="Assexual"
              information="Assexualidade é a falta total, parcial ou condicional de atração sexual a qualquer pessoa, com pouco ou inexistente interesse nas atividades sexuais humanas. Pode ser considerada uma orientação sexual ou a falta de uma"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.sexual_orientation"
              value="bissexual"
              label="Bissexual"
              information="Orientação sexual bissexual é atração romântica, atração sexual ou comportamento sexual voltado tanto a homens e como a mulheres, ou por mais de um sexo ou gênero."
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.sexual_orientation"
              value="heterossexual"
              label="Heterossexual"
              information="Orientação sexual heterossexual é atração romântica e/ou sexual entre pessoas do gênero oposto ao seu"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.sexual_orientation"
              value="pansexual"
              label="Pansexual"
              information="Pansexual é a denominação que abarca quem sente atração física, desejo sexual e amor independentemente de sexo ou identidade de gênero. Confundido com a bissexualidade, que é definida como a atração por mais de um gênero, em geral homem ou mulher"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.sexual_orientation"
              value="homossexualidade Lésbica"
              label="Homossexualidade Lésbica"
              information="é a denominação em que uma mulher sente-se atraída afetiva e/ou sexual com outra mulher"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.sexual_orientation"
              value="homossexualidade Gay"
              label="Homossexualidade Gay"
              information="é a denominação em que um homem sente-se atraído afetivo e/ou sexual por outra homem"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.sexual_orientation"
              value="prefiro não dizer"
              label="Prefiro não dizer"
            />
          </InputRadioContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}
