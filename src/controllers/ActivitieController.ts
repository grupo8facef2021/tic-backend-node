import { Request, Response } from "express";
import ActivitieService from "../services/ActivitieService";

class ActivitieController {
  async getAll(request: Request, response: Response) {
    const activitieService = new ActivitieService();

    const activities = await activitieService.getAll();
    return response.json(activities);
  }

  async getOnly(request: Request, response: Response) {
    const activitieService = new ActivitieService();

    const { id } = request.params;

    const activitie = await activitieService.getOnly(id);
    return response.json(activitie);
  }

  async post(request: Request, response: Response) {
    const activitieService = new ActivitieService();

    const {user_id} = request
    
    const {
      title,
      description,
      vehicle_model,
      vehicle_color,
      vehicle_board,
      prevision_date,
      client_id,
      situation_id,
      employee_id,
    } = request.body;

    const activitie = await activitieService.create({
      title,
      description,
      vehicle_model,
      vehicle_color,
      vehicle_board,
      prevision_date,
      client_id,
      situation_id,
      user_id,
      employee_id,
    });

    return response.status(201).json(activitie);
  }

  async put(request: Request, response: Response) {
    const activitieService = new ActivitieService();

    const { id } = request.params;

    const { title, description, prevision_date, situation_id } = request.body;

    const activitie = await activitieService.update({
      id,
      title,
      description,
      prevision_date,
      situation_id,
    });

    return response.status(200).json(activitie);
  }

  async delete(request: Request, response: Response) {
    const activitieService = new ActivitieService();

    const { id } = request.params;

    await activitieService.remove(id);

    return response.status(204).end();
  }
}

export default ActivitieController;
