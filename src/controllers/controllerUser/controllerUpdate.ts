import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient()

export class controllerUpdate {
  async handle(request: Request, response: Response) {
    const { id, name, email, password, phone } = request.body;

    const cryptPass = await bcrypt.hash(password, 8)

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email,
        name,
        phone,
        password: cryptPass,
      },
    })
    
    return response.status(201).json({ message: `${user}`})
  }
}
