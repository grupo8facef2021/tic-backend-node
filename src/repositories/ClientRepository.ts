import ClientEntity from "../entities/ClientEntity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ClientEntity)
class ClientRepository extends Repository<ClientEntity>{
    async findByCpf(cpf: string){
        return await this.findOne({
            where: {
                cpf
            }
        }) 
    }
}

export default ClientRepository