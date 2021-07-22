import React, { FC } from 'react'

import { NewsletterContainer, Button, Input, Title, FormContainer } from './style'

const NewsLetter: FC = () => {
  // Implementar logica de email no backend

  return (
    <NewsletterContainer id="newsletter-container">
      <Title>Receba novidades e lançamentos</Title>
      <FormContainer>
        <Input
          type="text"
          placeholder="Seu e-mail"
          data-testid="input"
        />
        <Button
          type="button"
          data-testid="button"
        >Receber</Button>
      </FormContainer>
    </NewsletterContainer>
  )
}

export default NewsLetter;
