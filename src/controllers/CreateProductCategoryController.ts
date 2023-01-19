import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductCategoryController {
  async handle(request: Request, response: Response) {
    const { id_product, id_category } = request.body;
   
    if(
      typeof id_category === 'number' || 
      typeof id_product === 'number'
    ){
      return response.status(500).json({
        msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
      })
    }  

    if(
        typeof id_category === 'undefined' || 
        typeof id_product === 'undefined' 
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente`
      })
    } 

    const productCategory = await prismaClient.product_Category.create({
      data: {
        id_category,
        id_product,
      },
    });

    return response.json(productCategory);
  }
}
