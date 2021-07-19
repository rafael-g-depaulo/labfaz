import React, { FC } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import { ContactContainer } from './style'

interface ContactProps {
  email: string
  phoneNumber: string
}

const Contact: FC<ContactProps> = ({ email, phoneNumber }) => {
  return (
    <ContactContainer id="contact-container">
      <span>Fale com a gente</span>
      <ul>
        <li>
          <FaWhatsapp />
          <span>{phoneNumber}</span>
        </li>
        <li>
          <FiMail />
          <span>{email}</span>
        </li>
      </ul>
    </ContactContainer>
  )
}

export default Contact;
