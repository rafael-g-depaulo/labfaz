import React, { FC } from 'react'

import { ModalDiv, ModalContent, Container, ModalLine, FormButton } from '../styles'
import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"
import SocialMediaIcons  from "Components/SocialMediaIcons"

interface ModalProps {
  isVisible: boolean,
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
  title?: boolean,
  userEmail?: string
}

export const Modal: FC<ModalProps> = ({ isVisible, setFunction, title, userEmail }) => {


  return(
    <Container isVisible={isVisible}>
      <ModalDiv>
        <Title level={3}> {title ? "EMAIL ENVIADO" : "DESCULPE PELOS PROBLEMAS"}   </Title>
        <ModalLine />
        <ModalContent>
          <Text css={{
            marginTop: "61px",
          }}> {title ? `O email com as instruções para recuperar senha foram enviadas para ${userEmail}.\n \n
            Cheque sua caixa de mensgems ou em alguns minutos tente novamente` :
            "Tente entrar em contato com a nossa equipe, pelos meios de comunicaca e midias abaixo, para resolver o seu problema."
          } </Text>
          {!title ? (
            <>
            <Text> (99)9999-999 </Text>
            <Text> contato@labfaz.com.br </Text>
            <SocialMediaIcons />
            </>
          ): 
          ""}
          <FormButton onClick={() => setFunction(!isVisible)} > Voltar </FormButton>
        </ModalContent>
      </ModalDiv>
    </Container>
  )
}
