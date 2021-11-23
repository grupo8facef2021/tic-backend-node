import { getCustomRepository } from "typeorm";
import CustomError from "../exceptions/CustomError";
import SituationRepository from "../repositories/SituationRepository";

interface ICreateRequest {
  description: string;
  color: number;
}

interface IUpdateRequest {
  id: string;
  description: string;
  color: number;
}

class SituationService {
  situationRepository: SituationRepository;

  constructor() {
    this.situationRepository = getCustomRepository(SituationRepository);
  }

  async _findSituation(id: string) {
    const situation = await this.situationRepository.findOne(id);
    if (!situation) {
      throw new CustomError("Situação não encontrada!", 404);
    }

    return situation;
  }

  async getAll() {
    const situations = await this.situationRepository.find();

    return situations;
  }

  async getOnly(id: string) {
    const situation = await this._findSituation(id);

    return situation;
  }

  async create({ description, color }: ICreateRequest) {
    const situationExists = await this.situationRepository.findByDescription(
      description
    );

    if (situationExists) {
      throw new CustomError("Situação já existente!");
    }

    const situation = this.situationRepository.create({ description, color });

    await this.situationRepository.save(situation);
    return situation;
  }

  async update({ id, description, color }: IUpdateRequest) {
    let situation = await this._findSituation(id);

    situation = { ...situation, description, color };
    await this.situationRepository.save(situation);

    return situation;
  }

  async remove(id: string) {
    await this._findSituation(id);

    await this.situationRepository.delete(id);
  }
}

export default SituationService;
