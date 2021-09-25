import { Request, Response } from "express";
import SituationService from '../services/SituationService'

class SituationController {
    public async getAll(request: Request, response: Response) {
        const situationService  = new SituationService()
        const situations = await situationService.getAll()

        return response.json(situations)
    }

    public async getOnly(request: Request, response: Response) {
        const situationService = new SituationService()
        const { id } = request.params
        const situation = await situationService.getOnly(id)

        return response.json(situation)
    }

    public async put(request: Request, response: Response){
        const situationService = new SituationService()
        const { id } = request.params
        const { description, new_description, color, new_color, status } = request.body
        const situation = await situationService.update({ id, description, new_description, color, new_color, status })

        return response.json(situation)
    }

    public async post(request: Request, response: Response){
        const situationService = new SituationService()
        const { description, color, status } = request.params
        const situation = await situationService.create({description, color, status})

        return response.status(201).json(situation)
    }

    public async delete(request: Request, response: Response){
        const situationService = new SituationService()
        const { id } = request.params

        await situationService.remove(id)

        return response.status(204).end()
    }
}

export default SituationController;