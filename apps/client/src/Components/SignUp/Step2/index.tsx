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
} from './style'


interface FileProps {
  name: string
  size: number
  type: string
}

interface Step2Props {
  name: string
  social_name: string
  artistic_name: string
  photo_url: FileProps
}


export const Step2: FC = () => {
  const { values, setFieldValue } = useFormikContext<Step2Props>()
  

  const options = [
    { value: values?.name, label: values.name },
    { value: values?.social_name, label: values.social_name },
    { value: values?.artistic_name, label: values.artistic_name},
  ]

  return (
    <Container>
        <LeftSide>
          <LeftSideContent>
            <AvatarInput>
              <img
                src={values.photo_url ? URL.createObjectURL(values.photo_url) : undefined}
                alt={values.photo_url ? 'User avatar' : ''}
              />
            </AvatarInput>

            <FileInput
              name="photo"
              value="photo_url"
              label="Clique para enviar foto"
            />
            
            <SelectContainer htmlFor="main_name" >
              <SelectInput name="main_name" options={options} />
            </SelectContainer>
          </LeftSideContent>
        </LeftSide>

        <RightSide>
          <RightSideContent>
            <div>
              <FormInputText
                name="email"
                label="Email"
                placeholder="email@seuemail.com"
              />

              <FormInputText
                name="whatsapp"
                label="Celular com WhatsApp"
                placeholder="(61) 9 9999-9999"
                inputMask="(99) 9 9999-9999"
                onChange={(ev: any) =>
                  setFieldValue('whatsapp', OnlyNumbers(ev.target.value))
                }
              />
            </div>

            <div>
              <FormInputText
                name="facebook"
                label="Facebook"
                placeholder="@seufacebook"
              />

              <FormInputText
                name="instagram"
                label="Instagram"
                placeholder="@seuinstagram"
              />
            </div>

            <div>
              <FormInputText
                name="twitter"
                label="Twitter"
                placeholder="@seutwitter"
              />

              <FormInputText
                name="linkedin"
                label="LinkedIn"
                placeholder="@seulinkedin"
              />
            </div>

            <div>
              <FormInputText
                name="tiktok"
                label="TikTok"
                placeholder="@seutiktok"
              />

              <FormInputText
                name="youtube"
                label="YouTube"
                placeholder="@seuyoutube"
              />
            </div>
          </RightSideContent>
        </RightSide>
    </Container>
  )
}
