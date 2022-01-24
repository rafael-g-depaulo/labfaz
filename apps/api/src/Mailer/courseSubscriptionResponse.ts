import { MailProvider, Addres } from "@labfaz/mail"
import { AutoEmail } from "Mailer"

export const sendAprovedEmail = async (userEmail: string, userName: string, courseName: string, courseLink: string, courseDates: Date[]) => {
  const mailer = new MailProvider()
  const from: Addres = {
    name: "LabFaz",
    email: "noreply@labfaz.com.br",
  }

  const padStart = (num: number) => `${num}`.padStart(2, '0')

  const html = `
    <div>
      <h2>Olá ${userName}, tudo bem? </h2>

      <p>Desde já agradecemos por você ter se inscrite nos Cursos do LabFaz!
      Isso significa muito pra nós! Aqui vão algumas informações importantíssimas sobre o funcionamento do Curso, Por favor, leia com atenção:</p>
      
      <p><strong>Por onde as aulas vão acontecer?</strong> As aulas acontecem sempre pelo Zoom, uma plataforma online de reuniões. Dessa forma, para assisti-las você precisará ter o aplicativo baixado no seu celular ou computador, além de conexão com internet.</p>

      <p><strong>Em quais dias teremos aulas?</strong> A(s) aula(s) do curso ${courseName} ocorrerá(ão) no(s) dia(s):</p>
      <ul>${courseDates
        .map(date =>
          // `<li>${date.getDate()}/${date.getMonth()}, às ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}</li>`
          `<li>${padStart(date.getDate())}/${padStart(date.getMonth()+1)}</li>`
        )
        .join("\n")
      }</ul>

      <h3>INFORMAÇÕES ÚTEIS E ORIENTAÇÕES DE BOAS PRÁTICAS PARA AS AULAS:</h3>
      <ul>
        <li>O <a href="${courseLink}">link das aulas</a> do curso "${courseName}" está em destaque aqui e também no final do email;</li>
        <li>Deixar o áudio mutado durante as aulas;</li>
        <li>Deixar a câmera aberta durante as aulas;</li>
        <li>Avisar no chat quando precisar se ausentar da aula;</li>
        <li>Avisar no chat caso tenha problemas com conexão, áudio ou outra ferramenta do Zoom;</li>
        <li>Escrever o nome no chat para se inscrever e fazer perguntas;</li>
        <li>Horário do intervalo: A definir;</li>
        <li>Se sua conexão sem fio estiver falhando, tente ficar mais próxime ao roteador;</li>
        <li>Se sua conexão for por 3G/4G, tente ficar em ambiente mais aberto;</li>
        <li>A chamada de presença será feita via Google forms, e o formulário será enviado no chat (bate-papo) da sala do zoom, durante a aula, ficando disponível por até 20 minutos após o término da aula. Alunes que não preencherem o formulário até o horário estipulado, não terão presença contabilizada.</li>
      </ul>

      <p>E por último, mas não menos importante:</p>
      <ul>
        <li>Fazemos uso de linguagem neutra, não racista e não violenta e;</li>
        <li>Respeitamos a fala de todes, especialmente mulheres e pessoas não bináries.</li>
      </ul>

      <strong>Link para as aulas do Curso: </strong> <a href="${courseLink}">${courseLink}</a>

      <p>Seja bem-vinde!</p>

      <p>Abraço,<br />LabFaz</p>
      ${AutoEmail}
    </div>
  `

  const emailInfo = {
    to: {
      name: userName,
      email: userEmail,
    },
    from: from,
    subject: `Resposta de inscrição - Curso ${courseName}`,
    html,
  }
  return mailer.sendEmail(emailInfo)
  // console.log("sending mail", emailInfo)
}

export const sendNotAprovedEmail = async (userEmail: string, userName: string, courseName: string) => {
  const mailer = new MailProvider()
  const from: Addres = {
    name: "LabFaz",
    email: "noreply@labfaz.com.br",
  }


  const html = `
    <div>
      <h2>Olá ${userName}, tudo bem? </h2>

      <p>Primeiramente, agradecemos pela sua inscrição e pelo interesse no projeto, isso significa muito pra nós! No entanto, não foi possível efetuar sua matrícula no curso solicitado pois as vagas já haviam se esgotado no momento de sua inscrição. Mas não desanime! Continue acompanhando o projeto, porque teremos atividades como Oficinas, Aulões, Bate-papos e outros Cursos que podem ser de seu interesse.</p>      
      
      <p>Vem muita novidade por aí!</p>

      <p>Qualquer dúvida, estamos à disposição!</p>

      <p>Abraço,<br />LabFaz</p>
    </div>
  `
  
  const emailInfo = {
    to: {
      name: userName,
      email: userEmail,
    },
    from: from,
    subject: `Resposta de inscrição - Curso ${courseName}`,
    html,
  }
  return mailer.sendEmail(emailInfo)
  // console.log("sending mail", emailInfo)
}
