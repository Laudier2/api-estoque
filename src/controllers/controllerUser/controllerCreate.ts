import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import * as bcrypt from "bcrypt";

export class ControllerCreate {
  async handle(request: Request, response: Response) {
    const { name, email, password, phone, city, cep, street, state, number } = request.body;

    const cryptPass = await bcrypt.hash(password, 8)

    const user = await prismaClient.user.create({
        data: {
            name,
            email,
            phone,
            password: cryptPass,
            city,
            cep,
            street,
            state,
            number

        }
    })
    return response.status(201).json({ message: 'User create susserful ', user})
  }
}
