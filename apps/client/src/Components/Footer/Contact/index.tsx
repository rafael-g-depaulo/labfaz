import { FC } from 'react'
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'

import { ContactContainer, Icon, Title, Subtitle } from './style'

interface ContactProps {
  phone: string,
  email: string
}

const Contact: FC<ContactProps> = ({ phone, email }) => {

  let phoneCorrect = ""

  if(phone.length === 12) {
    phoneCorrect = `(${phone.substring(0, 3)}) ${phone.substring(3, 8)}-${phone.substring(8, 12)}`
  } else if (phone.length === 11) {
    phoneCorrect = `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7, 11)}`
  } else if (phone.length === 9) {
    phoneCorrect = `${phone.substring(0, 5)}-${phone.substring(5, 9)}`
  } else if (phone.length === 8) {
    phoneCorrect = `9${phone.substring(0, 4)}-${phone.substring(4, 8)}`
  }
  
  return (
    <ContactContainer>
      <Title>Fale com a gente</Title>
      <div className="icons">
        <Icon>
          <FaWhatsapp name="Whatsapp"/>
          <Subtitle>{phoneCorrect}</Subtitle>
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
