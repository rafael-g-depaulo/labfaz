import { MailProvider, Addres } from "@labfaz/mail"

export const LABFAZ = `<strong style="color: #ff287f">LABFAZ</strong>`
export const AutoEmail = `<small>Este e-mail foi gerado automaticamente, portanto, não responda</small>`
export const Title = (content: string) => `<h3>${content}</h3>`

export interface MailInfo {
  to: Addres
  from?: Addres
  subject: string
  html: string
  text?: string
}

const defaultFrom = {
  name: "LabFaz",
  email: "noreply@labfaz.com.br",
}

export const sendEmail = ({
  to,
  from = defaultFrom,
  subject,
  html,
  text,
}: MailInfo) => {
  const mailer = new MailProvider()
  return mailer.sendEmail({
    to, from,
    subject,
    html,
    text,
  })
}
