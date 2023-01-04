import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      bar_code,
      size,
      color,
      description,
      imagem,
      quantity,
      slug
    } = request.body;

    const product = await prisma.products.create ({
      data: {
        name,
        price,
        bar_code,
        size,
        color,
        description,
        imagem,
        quantity,
        slug
      },
    });

    return response.json(product);
  }
}
