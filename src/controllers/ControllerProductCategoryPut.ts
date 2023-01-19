import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategoryPut {
  async handle(request: Request, response: Response) {
    const { id, name, price, bar_code, color, size, quantity, description, image, slug, id_category } = request.body;

    const userExists = await prismaClient.product.findUnique({
      where: {
        id: id
      }
    })

    if(!userExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não estar cadastrado, tente outro!`
      })
    } 

   
    if(
      typeof price === 'number' || 
      typeof bar_code === 'number' || 
      typeof color === 'number' || 
      typeof size === 'number' ||
      typeof name === 'number' || 
      typeof quantity === 'number' ||
      typeof description === 'number' ||
      typeof slug === 'number' ||
      typeof image === 'number'
    ){
      return response.status(500).json({
        msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
      })
    }  

    if(
        typeof price === 'undefined' || 
        typeof size === 'undefined' || 
        typeof description === 'undefined' || 
        typeof color === 'undefined' ||
        typeof name === 'undefined' || 
        typeof bar_code === 'undefined' ||
        typeof quantity === 'undefined' ||
        typeof slug === 'undefined' ||
        typeof image === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    } 

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
