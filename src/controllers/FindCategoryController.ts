import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const category = await prismaClient.categories.findMany ({});

    return response.json(category);
  }
}
