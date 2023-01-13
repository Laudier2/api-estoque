import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import * as bcrypt from "bcrypt";

export class ControllerCreate {
  async handle(request: Request, response: Response) {
    const { name, email, password, phone, city, cep, street, image, state, number, district, apartment_or_house } = request.body;

    const cryptPass = await bcrypt.hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        phone,
        image,
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
    return response.status(201).json({ message: 'User create susserful ', user})
  }
}

export class ControllerAdress2 {
  async handle(request: Request, response: Response) {
    const { city, cep, street, state, number, district, apartment_or_house, id_user } = request.body;

    const adress = await prismaClient.relationsAdress.create({
      data: {
        adress2: {
          create: {
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
    return response.status(201).json({ message: 'Adress2 create susserful ', adress})
  }
}
