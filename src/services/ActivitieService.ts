import ActivitieRepository from "../repositories/ActivitieRepository";
import { getCustomRepository } from "typeorm";
import ClientService from "./ClientService";
import SituationService from "./SituationService";
import UserService from "./UserService";
import CustomError from "../exceptions/CustomError";
import EmployeeService from "./EmployeeService";

interface ICreateRequest {
  title: string;
  description: string;
  vehicle_model: string;
  vehicle_color: string;
  vehicle_board: string;
  prevision_date: Date;
  client_id: string;
  situation_id: string;
  user_id: string;
  employee_id: string;
}

interface IUpdateRequest {
  id: string;
  title: string;
  description: string;
  prevision_date: Date;
  situation_id: string;
}

class ActivitieService {
  activitieRepository: ActivitieRepository;

  constructor() {
    this.activitieRepository = getCustomRepository(ActivitieRepository);
  }

  async _findActivitie(id: string) {
    const activitie = await this.activitieRepository.findOne(id, {
      relations: ["client", "situation", "user", "employee"],
    });
    if (!activitie) {
      throw new CustomError("Atividade não encontrada");
    }

    return activitie;
  }

  async getAll() {
    return await this.activitieRepository.find({
      relations: ["client", "situation", "user", "employee"],
    });
  }

  async getOnly(id: string) {
    return await this._findActivitie(id);
  }

  async create(payload: ICreateRequest) {
    const clientService = new ClientService();
    const situationService = new SituationService();
    const userService = new UserService();
    const employeeService = new EmployeeService();

    const client = await clientService._findClient(payload.client_id);
    const situation = await situationService._findSituation(
      payload.situation_id
    );
    const user = await userService._findUser(payload.user_id);
    const employee = await employeeService._findEmployee(payload.employee_id);

    const activitie = this.activitieRepository.create({
      title: payload.title,
      description: payload.description,
      vehicle_model: payload.vehicle_model,
      vehicle_color: payload.vehicle_color,
      vehicle_board: payload.vehicle_board,
      prevision_date: payload.prevision_date,
      client,
      situation,
      user,
      employee,
    });

    await this.activitieRepository.save(activitie);

    return activitie;
  }

  async update(payload: IUpdateRequest) {
    const situationService = new SituationService();

    const situation = await situationService._findSituation(
      payload.situation_id
    );

    let activitie = await this._findActivitie(payload.id);

    activitie = {
      ...activitie,
      title: payload.title,
      description: payload.description,
      prevision_date: payload.prevision_date,
      situation,
    };

    await this.activitieRepository.save(activitie);

    return activitie;
  }

  async remove(id: string) {
    await this._findActivitie(id);

    await this.activitieRepository.delete(id);
  }
}

export default ActivitieService;
