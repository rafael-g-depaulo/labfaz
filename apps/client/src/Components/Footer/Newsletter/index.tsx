import React, { FC, useState } from 'react'

import { NewsletterContainer } from './style'

const NewsLetter: FC = () => {
  const [email, setEmail] = useState("");

  const subscribeEmail = async () => {
    // const result = await subscribeUser(email)
    setEmail("")
  }

  return (
    <NewsletterContainer id="newsletter-container">
      <span>Receba novidades e lancamentos</span>
      {email}
      <div>
        <input type="text" placeholder="Seu e-mail" onChange={e => setEmail(e.target.value)} value={email} />
        <button type="button" onClick={subscribeEmail}>Receber</button>
      </div>
    </NewsletterContainer>
  )
}

export default NewsLetter;
