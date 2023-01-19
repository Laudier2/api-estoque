import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class Errors {
  async handle(request: Request, response: Response) {
    const { name, email, password, phone, city, cep, street, image, state, number1, district, apartment_or_house } = request.body;

    const userExists = await prismaClient.user.findUnique({
      where: {
        email: email
      }
    })

    if(userExists){
      return response.status(400).json({
        msg: `O email ${email} já existe!  E lembre-se que todos os campos tem que ser string ok!`
      })
    } 

   
    if(typeof number1 === "number" || typeof phone === "number" || typeof cep === "number" || typeof password === "number"){
      return response.status(500).json({
        msg: `Algum campo esta faltando! E lembre-se que todos os campos tem que ser string ok!`
      })
    }  

    if(
        typeof number1 === 'undefined' || 
        typeof phone === 'undefined' || 
        typeof cep === 'undefined' || 
        typeof password === 'undefined' ||
        typeof name === 'undefined' || 
        typeof email === 'undefined' ||
        typeof state === 'undefined' ||
        typeof street === 'undefined' ||
        typeof apartment_or_house === 'undefined' ||
        typeof district === 'undefined' ||
        typeof city === 'undefined' ||
        typeof image === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando! E lembre-se que todos os campos tem que ser string ok!`
      })
    }    
    
  }
}
