import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ControllerFind {
  async handle(request: Request, response: Response) {
    const { name, email, password, phone, street, city, number, cep, state } = request.body;

    const user = await prisma.user.findFirst({
      where: {
        name,
        email,
        password,
        phone,
        street,
        city,
        number,
        cep,
        state
      }
    })

    return user

  }
}
