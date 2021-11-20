import { Request, Response } from "express";
import ClientService from "../services/ClientService";

class ClientController {
  public async getAll(request: Request, response: Response) {
    const clientService = new ClientService();

    const clients = await clientService.getAll();

    return response.json(clients);
  }

  public async getOnly(request: Request, response: Response) {
    const clientService = new ClientService();

    const { id } = request.params;

    const client = await clientService.getOnly(id);

    return response.json(client);
  }

  public async post(request: Request, response: Response) {
    const clientService = new ClientService();

    const { name, cpf, phone, email, cep, street, neighborhood, number } =
      request.body;

    const client = await clientService.create({
      name,
      cpf,
      phone,
      email,
      cep,
      street,
      neighborhood,
      number,
    });

    return response.status(201).json(client);
  }

  public async update(request: Request, response: Response) {
    const clientService = new ClientService();

    const { id } = request.params;
    const { name, phone, email, cep, street, neighborhood, number } =
      request.body;

    const client = await clientService.update({
      id,
      name,
      phone,
      email,
      cep,
      street,
      neighborhood,
      number,
    });

    return response.json(client);
  }

  public async delete(request: Request, response: Response) {
    const clientService = new ClientService();

    const { id } = request.params;

    await clientService.remove(id);

    return response.status(204).end();
  }
}

export default ClientController;
