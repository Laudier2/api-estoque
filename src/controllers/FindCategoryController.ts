import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export class FindCategoryController {
  async handle(request: Request, response: Response) {
  
    const category = await prisma.category.findMany({})

    return response.status(200).json(category);
  }
}
