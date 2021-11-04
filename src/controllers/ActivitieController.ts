import { Request, Response } from "express";
import ActivitieService from "../services/ActivitieService";

class ActivitieController {
    async post(request: Request, response: Response) {
        const activitieService = new ActivitieService()

        const {
            title,
            description,
            vehicle_model,
            vehicle_color,
            vehicle_board,
            prevision_date,
            client_id,
            situation_id,
            user_id
        } = request.body

        const activitie = await activitieService.create({
            title,
            description,
            vehicle_model,
            vehicle_color,
            vehicle_board,
            prevision_date,
            client_id,
            situation_id,
            user_id
        })

        return response.status(201).json(activitie)
    }
}

export default ActivitieController