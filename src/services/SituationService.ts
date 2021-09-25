import { getCustomRepository } from "typeorm";
import { hash, compare } from 'bcryptjs';
import CustomError from "src/exceptions/CustomError";
import SituationRepository from "src/repositories/SituationRepository";

interface ICreateRequest {
    description: string,
    color: string,
    status: number
}

interface IUpdateRequest{
    description: string,
    new_description: string
    color: string,
    new_color: string,
    status: number
}

class SituationService {

    situationRepository: SituationRepository
    
    constructor() {
        this.situationRepository = getCustomRepository(SituationRepository)
    }

    async _showSituation(id: string) {
        const situation = await this.situationRepository.findOne(id)
        if (!situation) {
            throw new CustomError("Situação não encontrada!", 404)
        }

        return situation
    }

    async getAll(){
        const situations = await this.situationRepository.find()

        return situations
    }

    async getOnly(id: string) {
        const situation = await this._showSituation(id)

        return situation
    }

    async create({description, color, status}: ICreateRequest) {
        const situationExists = await this.situationRepository.findByDescription(description)

        if (situationExists) {
            throw new CustomError("Situação já existe")
        }

    } 

    async update({ id, description, new_description, color, new_color, status }: IUpdateRequest) {
        let situation = await this._showSituation(id)

        const descriptionRight = await compare(description, situation.description)
        if (!descriptionRight) {
            throw new CustomError('Descrição Correta', 422)
        }



        await this.situationRepository.save(situation)

        return situation
    }
    
}

export default SituationService;