import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  InputRadioContainer,
  InformartionText,
  InputText,
} from './style'
import { RadioInput } from 'Components/Inputs/RadioInput'

interface ErrorProps {
  artist: {
    gender: string
    sexual_orientation: string
    gender_specific: string
    race: string
  }
}

export const Step2: FC = () => {
  const { values, errors } = useFormikContext<ErrorProps>()

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <div className="raceContainer">
            <div>
              <label htmlFor="gender">
                Etnia <p className="obrigatory"> *</p>
                {errors.artist?.race && (
                  <span className="errorMessage"> Campo obrigatório</span>
                )}
              </label>
              <InputRadioContainer>
                <RadioInput name="artist.race" value="branca" label="Branca" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput name="artist.race" value="preta" label="Preta" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput name="artist.race" value="parda" label="Parda" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.race"
                  value="amarela"
                  label="Amarela"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.race"
                  value="indigena"
                  label="Indígena"
                />
              </InputRadioContainer>
            </div>
            <div className="genderContainer">
              <label htmlFor="gender">
                Gênero <p className="obrigatory"> *</p>
                {errors.artist?.gender && (
                  <span className="errorMessage">Campo obrigatório</span>
                )}
              </label>
              <InputRadioContainer>
                <RadioInput
                  name="artist.gender"
                  value="masculino"
                  label="Masculino"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.gender"
                  value="feminino"
                  label="Feminino"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput name="artist.gender" value="outro" label="Outro" />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  name="artist.gender"
                  value="Prefiro não responder"
                  label="Prefiro não responder"
                />
              </InputRadioContainer>

              {values.artist.gender === 'outro' && (
                <div className="textInputContainer">
                  <InputText
                    label="Qual outro gênero?"
                    placeholder="Digite seu gênero"
                    name="artist.other_gender"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="genderIdentityContainer">
            <label htmlFor="gender_identity">
              Identidade de Genero <p className="obrigatory"> *</p>
              {errors.artist?.gender_specific && (
                <span className="errorMessage">Campo obrigatório</span>
              )}
            </label>
            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="cisgênero"
                label="Cisgênero(a)"
                information='Pessoa cisgênero consiste no/a indivíduo/a que se identifica com
                o seu "gênero de nascença". Por exemplo: um indivíduo que possui
                características biológicas típicas do gênero masculino e que se
                identifica (socialmente e psicologicamente) como um homem. Desta
                forma, pode-se dizer que trata-se de um homem cisgênero.'
              />
              <InformartionText>
                Pessoa cisgênero consiste no/a indivíduo/a que se identifica com
                o seu "gênero de nascença". Por exemplo: um indivíduo que possui
                características biológicas típicas do gênero masculino e que se
                identifica (socialmente e psicologicamente) como um homem. Desta
                forma, pode-se dizer que trata-se de um homem cisgênero.
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="transgênero"
                label="Transexual/Transgênero(a)"
                information="pessoa transexual/transgênero é o(a) indivíduo(a) que se
                identifica com um gênero diferente daquele que lhe foi atribuído
                biologicamente no nascimento. Por exemplo: uma pessoa que nasce
                com características masculinas (do ponto de vista biológico),
                mas que se sente do gênero feminino; ou o indivíduo que possui
                características físicas femininas, mas que se identifica como um
                homem."
              />
              <InformartionText>
                pessoa transexual/transgênero é o(a) indivíduo(a) que se
                identifica com um gênero diferente daquele que lhe foi atribuído
                biologicamente no nascimento. Por exemplo: uma pessoa que nasce
                com características masculinas (do ponto de vista biológico),
                mas que se sente do gênero feminino; ou o indivíduo que possui
                características físicas femininas, mas que se identifica como um
                homem.
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="não-binário"
                label="Não-binário(a)"
                information="pessoa transexual/transgênero é o(a) indivíduo(a) que se
                identifica com um gênero diferente daquele que lhe foi atribuído
                biologicamente no nascimento. Por exemplo: uma pessoa que nasce
                com características masculinas (do ponto de vista biológico),
                mas que se sente do gênero feminino; ou o indivíduo que possui
                características físicas femininas, mas que se identifica como um
                homem."
              />
              <InformartionText>
                pessoa transexual/transgênero é o(a) indivíduo(a) que se
                identifica com um gênero diferente daquele que lhe foi atribuído
                biologicamente no nascimento. Por exemplo: uma pessoa que nasce
                com características masculinas (do ponto de vista biológico),
                mas que se sente do gênero feminino; ou o indivíduo que possui
                características físicas femininas, mas que se identifica como um
                homem.
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.gender_specific"
                value="prefiro não responder"
                label="Prefiro não responder"
              />
            </InputRadioContainer>
          </div>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <div className="sexual_orientation">
            <label htmlFor="artist.sexual_orientation">
              Qual a sua orientação sexual? <p className="obrigatory"> *</p>
              {errors.artist?.sexual_orientation && (
                <span className="errorMessage">Campo obrigatório</span>
              )}
            </label>
            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="assexual"
                label="Assexual"
                information="Assexualidade é a falta total, parcial ou condicional de atração sexual a qualquer pessoa, com pouco ou inexistente interesse nas atividades sexuais humanas. Pode ser considerada uma orientação sexual ou a falta de uma"
              />
              <InformartionText>
                Assexualidade é a falta total, parcial ou condicional de atração
                sexual a qualquer pessoa, com pouco ou inexistente interesse nas
                atividades sexuais humanas. Pode ser considerada uma orientação
                sexual ou a falta de uma
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="bissexual"
                label="Bissexual"
                information="Orientação sexual bissexual é atração romântica, atração sexual ou comportamento sexual voltado tanto a homens e como a mulheres, ou por mais de um sexo ou gênero."
              />
              <InformartionText>
                Orientação sexual bissexual é atração romântica, atração sexual
                ou comportamento sexual voltado tanto a homens e como a
                mulheres, ou por mais de um sexo ou gênero.
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="heterosexual"
                label="Heterossexual"
                information="Orientação sexual heterossexual é atração romântica e/ou sexual entre pessoas do gênero oposto ao seu"
              />
              <InformartionText>
                Orientação sexual heterossexual é atração romântica e/ou sexual
                entre pessoas do gênero oposto ao seu
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="pansexual"
                label="Pansexual"
                information="Pansexual é a denominação que abarca quem sente atração física, desejo sexual e amor independentemente de sexo ou identidade de gênero. Confundido com a bissexualidade, que é definida como a atração por mais de um gênero, em geral homem ou mulher"
              />
              <InformartionText>
                Pansexual é a denominação que abarca quem sente atração física,
                desejo sexual e amor independentemente de sexo ou identidade de
                gênero. Confundido com a bissexualidade, que é definida como a
                atração por mais de um gênero, em geral homem ou mulher
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="lésbica"
                label="Homossexualidade Lésbica"
                information="é a denominação em que uma mulher sente-se atraída afetiva e/ou sexual com outra mulher"
              />
              <InformartionText>
                é a denominação em que uma mulher sente-se atraída afetiva e/ou
                sexual com outra mulher
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="gay"
                label="Homossexualidade Gay"
                information="é a denominação em que um homem sente-se atraído afetivo e/ou sexual por outra homem"
              />
              <InformartionText>
                é a denominação em que um homem sente-se atraído afetivo e/ou
                sexual por outra homem
              </InformartionText>
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                name="artist.sexual_orientation"
                value="prefiro não dizer"
                label="Prefiro não dizer"
              />
            </InputRadioContainer>
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  )
}
