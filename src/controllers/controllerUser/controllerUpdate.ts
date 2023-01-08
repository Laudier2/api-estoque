import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient()

export class controllerUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id, 
      name, 
      email, 
      password, 
      phone, 
      district, apartment_or_house, 
      street, 
      city, 
      cep, 
      number, 
      state 
    } = request.body;

    const cryptPass = await bcrypt.hash(password, 8)

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email,
        name,
        phone,
        password: cryptPass,
        district, 
        apartment_or_house, 
        street, 
        city, 
        cep, 
        number, 
        state 
      }
    })
    
    return response.status(201).json(user)
  }
}

export class controllerUpdateAdress {
  
  async handle(request: Request, response: Response) {
    const { 
      id,
      district, 
      apartment_or_house, 
      street, 
      city, 
      cep, 
      number, 
      state,
      id_user
    } = request.body;

    const adress2 = await prisma.relationsAdress.update({
      where: {
        id: id,
      },
      data: {
        adress2: {
          update: {
            district, 
            apartment_or_house, 
            street, 
            city, 
            cep, 
            number, 
            state 
          }
        },
        user: {
          connect: {
            id: id_user
          }
        }
      }      
    })
    
    return response.status(201).json({ message: `${adress2}`})
  }
}