import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategoryPut {
  async handle(request: Request, response: Response) {
    const { id, name, price, bar_code, color, size, quantity, description, image, slug, id_category } = request.body;

    const product = await prismaClient.product.update({
      where: {
        id
      },
      data: {
        name,
        price,
        bar_code,
        color,
        size,
        quantity,
        description,
        image,
        slug
      }
    });

    return response.json(product);
  }
}
