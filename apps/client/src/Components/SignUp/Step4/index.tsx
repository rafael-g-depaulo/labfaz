import React, { FC } from 'react'

import { CheckboxInput } from 'Components/Inputs/CheckboxInput'
import { RadioInput } from 'Components/Inputs/RadioInput'

import { formationOptions, idiomOptions } from 'Utils/selectOptionsData'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  LabelText,
  InputRadioContainer,
  InputCheckBoxContainer,
} from './style'

export const Step4: FC = () => {
  return (
    <Container>
        <LeftSide>
          <LeftSideContent>
            <LabelText>Você domina outro idioma além do português?</LabelText>
            {idiomOptions.map((idiomOption, index) => (
              <InputCheckBoxContainer key={index}>
                <CheckboxInput
                  type="checkbox"
                  name="idiom"
                  value={idiomOption.value}
                  label={idiomOption.label}
                />
              </InputCheckBoxContainer>
            ))}
          </LeftSideContent>
        </LeftSide>

        <RightSide>
          <RightSideContent>
            <LabelText>Formação escolar</LabelText>

            {formationOptions.map((formationOption, index) => (
              <InputRadioContainer key={index}>
                <RadioInput
                  type="radio"
                  name="formation"
                  value={formationOption.value}
                  label={formationOption.label}
                />
              </InputRadioContainer>
            ))}
          </RightSideContent>
        </RightSide>
    </Container>
  )
}
