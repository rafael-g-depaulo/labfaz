import React, { FC } from 'react'

import { ModalDiv, ModalContent, Container, ModalLine } from '../styles'
import { FormButton } from "Components/PasswordRecover/styles"
import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"
import SocialMediaIcons  from "Components/SocialMediaIcons"
import { useHistory } from 'react-router-dom';

interface ModalProps {
  isVisible: boolean,
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
  title?: boolean,
  userEmail?: string,
  success: boolean
}

export const Modal: FC<ModalProps> = ({ isVisible, setFunction, title, userEmail, success = true }) => {
  const history = useHistory();

  if(success) {
    return (
      <Container isVisible={isVisible}>
      <ModalDiv>
        <Title level={3}> SENHA ALTERADA COM SUCESSO </Title>
        <ModalLine />
        <ModalContent>
          <Text css={{
            marginTop: "61px",
          }}> Parabéns o sua senha foi alterada com sucesso! Volte para a tela de login para logar com a sua nova senha. </Text>
            <>
            <Text> (99)9999-999 </Text>
            <Text> contato@labfaz.com.br </Text>
            <SocialMediaIcons />
            </>
          <FormButton onClick={() => history.push("/login")} > Ir para Login </FormButton>
        </ModalContent>
      </ModalDiv>
    </Container>

    )
  }


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
