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

export type SentMessageInfo = any;

interface SendEmail {
  sendEmail: (data: EmailInfo) => Promise<SentMessageInfo>
}


export class MailProvider implements SendEmail {
  private readonly transponder: Mail
  constructor () {
    this.transponder = nodemailer.createTransport({
      host: `smtp.${process.env.HOST}.email`,
      service: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APPPASS
      },
      requireTLS: true,
    })
  }

  async sendEmail(data: EmailInfo): Promise<SentMessageInfo> {
    return await this.transponder.sendMail({
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
