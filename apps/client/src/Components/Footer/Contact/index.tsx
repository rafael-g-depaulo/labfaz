import React, { FC } from 'react'
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'

import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz'
import { ContactContainer, Icon, Title, Subtitle } from './style'

interface ContactProps {
  data: SocialNetworksLabfaz
}

const Contact: FC<ContactProps> = ({ data }) => {
  const { ddd, phone, email} = data
  return (
    <ContactContainer id="contact-container">
      <Title>Fale com a gente</Title>
      <div>
        <Icon>
          <FaWhatsapp name="Whatsapp"/>
          <Subtitle>({ddd}) {phone}</Subtitle>
        </Icon>
        <Icon>
          <FaRegEnvelope name="Email"/>
          <Subtitle>{email}</Subtitle>
        </Icon>
      </div>
    </ContactContainer>
  )
}

export default Contact;
