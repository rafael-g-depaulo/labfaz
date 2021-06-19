# `@labfaz/mail`

Basic config for mail service to this app.

# Set up

First you must have a 2-step verification on your gmail account. Then generate a password for in the (google account settings)[https://myaccount.google.com/u/1/security], "App password". Once the password is generated put it in the .env file as 'APPPASS'.

## Usage


```typescript
// in an app using the mailer service
import { MailProvider, EmailInfo } from '@labfaz/mail'

// Creater a mailer provider
const mail = new MailProvider()

// Set up the email data info
const data = {
  to: {
    name: "Jhon Doe",
    email: "JhonDoe@gmail.com"
  },
  from: {
    name: "labfaz",
    email: "labfazmail@labfaz.com.br"
  },
  subject: "some text",
  html: '<h1> Hello World </h1>'
}

// Send the mail

mail.sendEmail(data)
```
