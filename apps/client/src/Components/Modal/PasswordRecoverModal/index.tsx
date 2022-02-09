import { FC } from 'react'

import { ModalDiv, ModalContent, Container, ModalLine } from '../styles'
import { FormButton } from "Components/PasswordRecover/styles"
import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"
import SocialMediaIcons  from "Components/SocialMediaIcons"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const StyledText = styled(Text)`
  margin-top: 61px;
`

interface ModalProps {
  isVisible: boolean,
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
  title?: boolean,
  userEmail?: string,
  success: boolean
}

export const Modal: FC<ModalProps> = ({ isVisible, setFunction, title, userEmail, success = true }) => {
  const navigate = useNavigate();

  if(success) {
    return (
      <Container isVisible={isVisible}>
      <ModalDiv>
        <Title level={3}> SENHA ALTERADA COM SUCESSO </Title>
        <ModalLine />
        <ModalContent>
          <StyledText> Parabéns o sua senha foi alterada com sucesso! Volte para a tela de login para logar com a sua nova senha. </StyledText>
            <>
            <Text> (99)9999-999 </Text>
            <Text> contato@labfaz.com.br </Text>
            <SocialMediaIcons />
            </>
          <FormButton onClick={() => navigate("/login")} > Ir para Login </FormButton>
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
          <StyledText> {title ? `O email com as instruções para recuperar senha foram enviadas para ${userEmail}.\n \n
            Cheque sua caixa de mensgems ou em alguns minutos tente novamente` :
            "Tente entrar em contato com a nossa equipe, pelos meios de comunicaca e midias abaixo, para resolver o seu problema."
          } </StyledText>
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
