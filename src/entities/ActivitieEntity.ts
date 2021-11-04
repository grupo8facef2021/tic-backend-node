import { JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { Column, Entity, PrimaryColumn } from "typeorm"
import ClientEntity from "./ClientEntity";
import SituationEntity from "./SituationEntity";
import UserEntity from "./UserEntity";

@Entity('activities')
class ActivitieEntity {

    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    vehicle_model: string

    @Column()
    vehicle_color: string

    @Column()
    vehicle_board: string

    @JoinColumn()
    clientId: string

    // @Column()
    // situation_id: string

    // @Column()
    // user_id: string

    @Column()
    prevision_date: Date

    @Column()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => ClientEntity)
    client: ClientEntity

    @ManyToOne(() => SituationEntity)
    situation: SituationEntity

    @ManyToOne(() => UserEntity)
    user: UserEntity
}

export default ActivitieEntity