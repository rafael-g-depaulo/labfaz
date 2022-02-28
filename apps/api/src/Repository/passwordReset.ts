import { getClientUrl } from "@labfaz/server-conn-info"
import { Title, sendEmail, LABFAZ, AutoEmail } from "Mailer"

import User from "Entities/User"

export const sendPwdResetEmail = (user: User, token: string) => {
  
  const userName = user.artist.displayName
  const frontendLink = `${getClientUrl()}/password-reset/${token}`

  const subject = "Esqueceu a senha? A gente te ajuda! "
  const text = `Oi, ${userName}. Você voltará a acessar o app LABFAZ agora mesmo. Vamos te ajudar a trocar sua senha! É só entrar nesse link: ${frontendLink}`
  const html = `
  <div>
    ${Title(`Oi, ${userName}.`)}
    <p>Você voltará a acessar o app ${LABFAZ} agora mesmo.</p>

    <p><strong>Vamos te ajudar a trocar sua senha!</strong></p>

    <p>É só <a href="${frontendLink}">clicar AQUI</a>.</p>

    <p>Conta com a gente!</p>
    ${AutoEmail}
  </div>
  `

  return sendEmail({
    to: {
      name: userName,
      email: user.email,
    },
    subject,
    html,
    text,
  })
}
