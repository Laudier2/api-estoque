import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class controllerDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const user = await prisma.user.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", user});
  }
}

export class controllerDeleteRelation {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await prisma.relationsAdress.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", user});
  }
}
