import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FranchiseeService } from './franqueado/franqueado.service';
import { ProductService } from './produto/produto.service';
import { Product } from './produto/produto.entities';
const nodemailer = require("nodemailer");

@Injectable()
export class AppService {

  @Cron(CronExpression.EVERY_30_SECONDS)
  async sendMail() {

    let transporter = nodemailer.createTransport({
      host: "admin",
      port: 1234,
      secure: false,
      auth: {
        user: 'admin@gmail.com',
        pass: '12345',
      },
    });

    let info = await transporter.sendMail({
      from: 'admin@gmail.com',
      to: "franchisee@gmail.com",
      subject: "Franchisee Reports",
      text: "Franchisees' reports are listed below:",
      html: "<b> </b>",
    });

    console.log("Message sent: %s", info.messageId);
  }

}
