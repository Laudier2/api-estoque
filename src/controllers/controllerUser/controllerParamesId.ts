import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UserParamesId {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const user = await prismaClient.user.findUnique({
            where: {
                id: id
            }
        })

        return response.status(200).json(user)
    }
}