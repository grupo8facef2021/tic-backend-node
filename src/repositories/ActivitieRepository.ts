import { EntityRepository, Repository } from "typeorm";
import ActivitieEntity from "../entities/ActivitieEntity";

@EntityRepository(ActivitieEntity)
class ActivitieRepository extends Repository<ActivitieEntity> {}

export default ActivitieRepository;
