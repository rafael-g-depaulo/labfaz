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
  profilePicture: any
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
    { value: 'nome', label: values.artist?.name },
    { value: 'nome social', label: values.artist?.social_name },
    { value: 'nome artistico', label: values.artist?.artistic_name },
  ]

  return (
    <Container>
      <ContentContainer>
        <Content>
          <AvatarInput>
            <img
              src={
                values.profilePicture?.name
                  ? URL.createObjectURL(values.profilePicture)
                  : values.profilePicture
              }
              alt={values.profilePicture ? 'User avatar' : ''}
            />
          </AvatarInput>

          <FileInputContainer>
            <FileInput
              name="profilePicture"
              value="profilePicture"
              label="Clique para enviar foto"
            />
          </FileInputContainer>

          <SelectContainer htmlFor="main_name">
            <SelectInput
              label="Nome principal"
              name="artist.show_name"
              options={options}
              obrigatory
            />
          </SelectContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}
