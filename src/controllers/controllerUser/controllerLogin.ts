import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const prisma = new PrismaClient()

export class ControllerLogin {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await prisma.user.findUnique({
       where: {
          email
       }
    })

    const message = { errr: "E-mail ou senha invalida"}

    if(!user){
       return console.log(message.errr)
    } 

    const verifyPass = await bcrypt.compare(password, user.password)

    if(!verifyPass){
      return message.errr;
    }

    const token = jwt.sign({ id: user.id }, process.env.APP_KEY ?? '', {
      expiresIn: '8h'
    })

    const { password: _, ...userLogin } = user
    const msg = { msg: "O token é valido por até 8 horas!" }

    return response.json({
      user: userLogin,
      token: token,
      msg: msg,
    })

  }
}
