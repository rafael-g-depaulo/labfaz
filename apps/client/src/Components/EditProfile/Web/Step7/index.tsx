import { FC } from 'react'

import { CheckboxInput } from 'Components/Inputs/CheckboxInput'

import { certificationOptionsPage1, certificationOptionsPage2 } from 'Utils/selectOptionsData'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  InputCheckBoxContainer,
  LabelText,
} from './style'

export const Step7: FC = () => {
  return (
    <Container>
        <LeftSide>
          <LeftSideContent>
            <LabelText>Você possui certificacoes de treinamento?</LabelText>

            {certificationOptionsPage1.map((certificationOption, index) => (
              <InputCheckBoxContainer key={index}>
                <CheckboxInput
                  type="checkbox"
                  name="artist.technical.areas.certificate"
                  value={certificationOption.value}
                  label={certificationOption.label}
                />
              </InputCheckBoxContainer>
            ))}
          </LeftSideContent>
        </LeftSide>

        <RightSide>
          <RightSideContent>
            {certificationOptionsPage2.map((certificationOption, index) => (
              <InputCheckBoxContainer key={index}>
                <CheckboxInput
                  type="checkbox"
                  name="artist.technical.areas.certificate"
                  value={certificationOption.value}
                  label={certificationOption.label}
                />
              </InputCheckBoxContainer>
            ))}
          </RightSideContent>
        </RightSide>
    </Container>
  )
}
