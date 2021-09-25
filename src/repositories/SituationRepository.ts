import {EntityRepository, Repository} from 'typeorm'
import SituationEntity from 'src/entities/SituationEntity';

@EntityRepository(SituationEntity)
class SituationRepository extends Repository<SituationEntity>{
    async findByDescription(description: string) {
        return await this.findOne({
            where: {
                description
            }
        })
    }
}


export default SituationRepository;