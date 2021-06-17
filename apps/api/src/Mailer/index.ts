import nodemailer from "nodemailer"

import Mail from "nodemailer/lib/mailer"

export interface Addres {
  name: string,
  email: string
}

export interface EmailInfo {
  to: Addres,
  from: Addres,
  subject?: string,
  html?: string
}

interface SendEmail {
  sendEmail: (data: EmailInfo) => Promise<void>
}


export class MailProvider implements SendEmail {
  private readonly transponder: Mail
  constructor () {
    this.transponder = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      requireTLS: true
    })
  }

  async sendEmail(data: EmailInfo): Promise<void> {
    await this.transponder.sendMail({
      to: {
        name: data.to.name,
        address: data.to.email
      },
      from: {
        name: data.from.name,
        address: data.from.email
      },
      subject: data.subject ? data.subject : "",
      html: data.html ? data.html : ""
    })
  }
}
