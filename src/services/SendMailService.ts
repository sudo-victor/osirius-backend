import nodemailer, {Transporter} from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

class SendMailService {

  transporter:  Transporter<SMTPTransport.SentMessageInfo>

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b0377d51f275f4",
        pass: "1116e6070c0a0d"
      }
    });

  }

  async sendMail({ to, subject, html}: {to: string; subject: string; html: string;}) {
    await this.transporter.sendMail({
      from: process.env.MAIL,
      to: to,
      subject: subject,
      html: html
    })
  }

}

export { SendMailService };
