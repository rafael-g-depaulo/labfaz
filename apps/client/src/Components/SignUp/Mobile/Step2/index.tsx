import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { FileInput } from 'Components/Inputs/FileInput'
import { SelectInput } from 'Components/Inputs/SelectInput'

import {
  Container,
  ContentContainer,
  Content,
  AvatarInput,
  SelectContainer,
  FileInputContainer,
} from './style'

interface FileProps {
  name: string
  size: number
  type: string
}

interface Step2Props {
  artist: {
    name: string
    social_name: string
    artistic_name: string
    photo_url: FileProps
  }
}

export const Step2: FC = () => {
  const { values } = useFormikContext<Step2Props>()

  const options = [
    { value: values?.artist?.name, label: values.artist?.name },
    { value: values?.artist?.social_name, label: values.artist?.social_name },
    { value: values?.artist?.artistic_name, label: values.artist?.artistic_name },
  ]

  return (
    <Container>
      <ContentContainer>
        <Content>
          <AvatarInput>
            <img
              src={
                values.artist.photo_url
                  ? URL.createObjectURL(values.artist.photo_url)
                  : undefined
              }
              alt={values.artist.photo_url ? 'User avatar' : ''}
            />
          </AvatarInput>

          <FileInputContainer>
            <FileInput
              name="artist.photo_url"
              value="artist.photo_url"
              label="Clique para enviar foto"
            />
          </FileInputContainer>

          <SelectContainer htmlFor="main_name">
            <SelectInput
              label="Nome principal"
              name="artist.main_name"
              options={options}
              obrigatory
            />
          </SelectContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}
