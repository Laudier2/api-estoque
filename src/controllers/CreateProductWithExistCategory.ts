import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategory {
  async handle(request: Request, response: Response) {
    const { name, price, bar_code, color, size, quantity, description, imagem, slug, id_category } = request.body;

    const product = await prismaClient.products_categories.create({
      data: {
        products: {
          create: {
            name,
            price,
            bar_code,
            color,
            size,
            quantity,
            description,
            imagem,
            slug
          },
        },
        categories : {
          connect: {
            id: id_category,
          },
        },
      },
    });

    return response.json(product);
  }
}
