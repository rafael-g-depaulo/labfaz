import { getClientUrl } from "@labfaz/server-conn-info"

import User from "Entities/User"
import { AutoEmail, LABFAZ, Title, sendEmail } from "Mailer"

export const sendConfirmationEmail = (user: User) => {
  const link = `${getClientUrl()}/confirmar-email/${user.id}`
  const userName = user.artist.displayName

  const subject = `A gente só precisa confirmar seu e-mail!`
  const text = `Oi, ${userName}. Você se cadastrou no app do LABFAZ e a gente está aqui para confirmar seu e-mail. Basta ir em ${link}. Rápido e fácil`
  const html = `
    <div>
      ${Title(`Oi, ${userName}`)}
      
      <p>Você se cadastrou no app do ${LABFAZ} e a gente está aqui para confirmar seu e-mail.

      <p>Basta <a href='${link}'>clicar AQUI</a></p>

      <p>Rápido e fácil!</p>

      <p>Bem vinde ao ${LABFAZ}!</p>
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
