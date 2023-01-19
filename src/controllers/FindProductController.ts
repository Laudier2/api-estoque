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

    const User = await prismaClient.product.findMany({
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
    
    return response.json(User);
  }
}

export class controllerProductId {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const userExists = await prismaClient.product.findUnique({
      where: {
        id: id
      }
    })

    if(!userExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não estar vinculado a nem uma produto, tente outro!`
      })
    } 

    const User = await prismaClient.product.findUnique({
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
    
    return response.status(200).json(User);
  }
}