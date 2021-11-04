import ActivitieRepository from "../repositories/ActivitieRepository"
import { getCustomRepository } from "typeorm"
import ClientService from "./ClientService"
import SituationService from "./SituationService"
import UserService from "./UserService"

interface ICreateRequest {
    title: string,
    description: string,
    vehicle_model: string,
    vehicle_color: string,
    vehicle_board: string,
    prevision_date: Date,
    client_id: string,
    situation_id: string,
    user_id: string
}

interface IUpdateRequest {

}

class ActivitieService {

    activitieRepository: ActivitieRepository

    constructor() {
        this.activitieRepository = getCustomRepository(ActivitieRepository)
    }

    async getAll() {

    }

    async getOnly(id: string) {

    }

    async create(payload: ICreateRequest) {
        const clientService = new ClientService()
        const situationService = new SituationService()
        const userService = new UserService()

        const client = await clientService._findClient(payload.client_id)
        const situation = await situationService._findSituation(payload.situation_id)
        const user = await userService._findUser(payload.user_id)

        const activitie = this.activitieRepository.create({
            title: payload.title,
            description: payload.description,
            vehicle_model: payload.vehicle_model,
            vehicle_color: payload.vehicle_color,
            vehicle_board: payload.vehicle_board,
            prevision_date: payload.prevision_date,
            client,
            situation,
            user
        })

        await this.activitieRepository.save(activitie)

        return activitie
    }

    async update({ }: IUpdateRequest) {

    }

    async remove(id: string) {

    }
}

export default ActivitieService