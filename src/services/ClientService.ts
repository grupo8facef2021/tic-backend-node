import ClientRepository from "../repositories/ClientRepository"
import { getCustomRepository } from "typeorm"
import CustomError from "../exceptions/CustomError"

interface ICreateRequest {
    name: string,
    cpf: string,
    phone: string,
    email: string,
    cep: string,
    street: string,
    neighborhood: string,
    number: string
}

interface IUpdateRequest {
    id: string,
    name: string,
    phone: string,
    email: string,
    cep: string,
    street: string,
    neighborhood: string,
    number: string
}

class ClientService {
    clientRepository: ClientRepository

    constructor() {
        this.clientRepository = getCustomRepository(ClientRepository)
    }

    async _findClient(id: string){
        const client = await this.clientRepository.findOne(id)
        if (!client) {
            throw new CustomError('Cliente não encontrado', 404)
        }

        return client
    }

    async getAll() {
        const clients = await this.clientRepository.find()
        return clients
    }

    async getOnly(id: string) {
        return await this._findClient(id)
    }

    async create({ name, cpf, phone, email, cep, street, neighborhood, number }: ICreateRequest) {
        const client = await this.clientRepository.findByCpf(cpf)

        if(client){
            throw new CustomError('Cliente já cadastrado com esse CPF')
        }

        const newClient = this.clientRepository.create({name, cpf, phone, email, cep, street, neighborhood, number})

        await this.clientRepository.save(newClient)

        return newClient
    }

    async update({id, name, phone, email, cep, street, neighborhood, number}: IUpdateRequest) {
        let client = await this._findClient(id)

        client = {...client, name, phone, email, cep, street, neighborhood, number}

        await this.clientRepository.save(client)
        
        return client
    }

    async remove(id: string) {
        await this._findClient(id)

        await this.clientRepository.delete(id)
    }
}

export default ClientService