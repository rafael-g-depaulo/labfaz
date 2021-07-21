import React, { FC, useState } from 'react'

import { NewsletterContainer, Button, Input, Title, FormContainer } from './style'

const NewsLetter: FC = () => {
  const [email, setEmail] = useState("");

  const subscribeEmail = async () => {
    // const result = await subscribeUser(email)
    setEmail("")
  }

  return (
    <NewsletterContainer id="newsletter-container">
      <Title>Receba novidades e lançamentos</Title>
      <FormContainer>
        <Input type="text" placeholder="Seu e-mail" onChange={e => setEmail(e.target.value)} value={email} />
        <Button type="button" onClick={subscribeEmail}>Receber</Button>
      </FormContainer>
    </NewsletterContainer>
  )
}

export default NewsLetter;
