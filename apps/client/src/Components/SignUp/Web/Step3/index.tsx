import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { SelectInput } from 'Components/Inputs/SelectInput'
import { FileInput } from 'Components/Inputs/FileInput'

import { OnlyNumbers } from 'Utils/inputRegex'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  FormInputText,
  AvatarInput,
  SelectContainer,
  PrivacityText,
  InputTextContainer,
} from './style'

export const Step3: FC = () => {
  const { values, setFieldValue } = useFormikContext<any>()

  const options = [
    { value: values?.artist.name, label: values.artist.name },
    { value: values?.artist.social_name, label: values.artist.social_name },
    { value: values?.artist.artistic_name, label: values.artist.artistic_name },
  ]

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <AvatarInput>
            <img
              src={
                values.profilePicture
                  ? URL.createObjectURL(values.profilePicture)
                  : undefined
              }
              alt={values.profilePicture ? 'User avatar' : ''}
            />
          </AvatarInput>

          <FileInput
            name="profilePicture"
            value="profilePicture"
            label="Clique para enviar foto"
          />

          <SelectContainer htmlFor="main_name">
            <SelectInput
              name="artist.show_name"
              label="Nome principal"
              options={options}
              obrigatory
            />
          </SelectContainer>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <div>
            <InputTextContainer>
              <FormInputText
                name="email"
                label="Email"
                placeholder="email@seuemail.com"
                obrigatory
              />

              <FormInputText
                name="artist.contact.whatsapp"
                label="Celular com WhatsApp"
                placeholder="(61) 9 9999-9999"
                inputMask="(99) 9 9999-9999"
                onChange={(ev: any) =>
                  setFieldValue('whatsapp', OnlyNumbers(ev.target.value))
                }
              />
            </InputTextContainer>
          </div>

          <div>
            <InputTextContainer>
              <FormInputText
                name="artist.contact.facebook"
                label="Facebook"
                placeholder="@seufacebook"
              />

              <FormInputText
                name="artist.contact.instagram"
                label="Instagram"
                placeholder="@seuinstagram"
              />
            </InputTextContainer>
          </div>

          <div>
            <InputTextContainer>
              <FormInputText
                name="artist.contact.twitter"
                label="Twitter"
                placeholder="@seutwitter"
              />

              <FormInputText
                name="artist.contact.linkedin"
                label="LinkedIn"
                placeholder="@seulinkedin"
              />
            </InputTextContainer>
          </div>

          <div>
            <FormInputText
              name="artist.contact.tiktok"
              label="TikTok"
              placeholder="@seutiktok"
            />

            <FormInputText
              name="artist.contact.youtube"
              label="YouTube"
              placeholder="@seuyoutube"
            />
          </div>

          <div>
            <PrivacityText>
              Paragrafo informando sobre a privacidade dos dados inseridos nessa
              etapa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor,dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor.
            </PrivacityText>
          </div>
        </RightSideContent>
      </RightSide>
    </Container>
  )
}
