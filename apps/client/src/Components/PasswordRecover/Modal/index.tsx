import React, { FC } from 'react'

import { ModalDiv, Blur, Button } from '../styles'
import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"
import SocialMediaIcons  from "Components/SocialMediaIcons"

interface ModalProps {
  isVisible: boolean,
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: FC<ModalProps> = ({ isVisible, setFunction }) => {


  return(
    <Blur
      isVisible={isVisible}
      >
      <ModalDiv>
        <Title level={3}> Pedimos desculpas pelos problemas </Title>
        <Text> O email com as instrucoes para recuperar sua senha foram enviados. Cheque sua caixa de mensagens ou em alguns minutos tente novamente. </Text>
        <Text> (99)9999-999 </Text>
        <Text> contato@labfaz.com.br </Text>
        <SocialMediaIcons />
        <Button onClick={() => setFunction(!isVisible)} > Voltar </Button>
      </ModalDiv>
    </Blur>
  )
}
