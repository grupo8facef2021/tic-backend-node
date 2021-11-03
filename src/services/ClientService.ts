import ClientRepository from "../repositories/ClientRepository"
import { getCustomRepository } from "typeorm"
import CustomError from "../exceptions/CustomError"
import { response } from "express"

interface ICreateRequest {
    name: string,
    cpf: string,
    phone: string,
    email: string,
    cep: string,
    street: string,
    neighborhood: string,
    number: number

}

class ClientService {
    clientRepository: ClientRepository

    constructor() {
        this.clientRepository = getCustomRepository(ClientRepository)
    }


    async getAll() {
        const clients = await this.clientRepository.find()
        return clients
    }

    async getOnly(id: string) {
        const client = await this.clientRepository.findOne(id)

        if (!client) {
            throw new CustomError('Cliente não encontrado', 404)
        }
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

    update() {

    }

    remove() {

    }
}

export default ClientService