import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ControllerFind {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const user = await prisma.user.findMany({
      where: {
        id
      },
      include: {
        RelationsAdress: {
          include: {
            adress2: true
          }

        }
      }
    })

    return response.status(200).json(user)

  }
}
