import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategory {
  async handle(request: Request, response: Response) {
    const { name, price, bar_code, color, size, quantity, description, image, slug, id_category } = request.body;

    const product = await prismaClient.product_Category.create({
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
            image,
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
