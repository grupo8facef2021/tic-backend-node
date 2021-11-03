import { Request, Response } from 'express'
import ClientService from "../services/ClientService"

class ClientController {
    public async getAll(request: Request, response: Response) {
        const clientService = new ClientService()

        const clients = await clientService.getAll()

        return response.json(clients)
    }

    public async post(request: Request, response: Response) {
        const clientService = new ClientService()

        const { name, cpf, phone, email, cep, street, neighborhood, number } = request.body

        const client = await clientService.create({name, cpf, phone, email, cep, street, neighborhood, number})

        return response.json(client)
    }
}

export default ClientController