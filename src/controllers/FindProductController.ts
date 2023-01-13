import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {

    const product = await prismaClient.product.findMany({});

    return response.json(product);
  }
}

export class controllerProductCategory {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const Dell = await prismaClient.product.findMany({
      where: {
        id: id
      },
      include: {
          products_categories: {
            include: {
              categories: true
            }
          }
      }
    });
    
    return response.json(Dell);
  }
}

export class controllerProductId {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const Dell = await prismaClient.product.findUnique({
      where: {
        id: id
      },
      include: {
          products_categories: {
            include: {
              categories: true
            }
          }
      }
    });
    
    return response.json(Dell);
  }
}