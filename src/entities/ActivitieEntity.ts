import { JoinColumn, ManyToOne, OneToOne, UpdateDateColumn } from "typeorm";
import { Column, Entity, PrimaryColumn } from "typeorm"
import ClientEntity from "./ClientEntity";
import EmployeeEntity from "./EmployeeEntity";
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

    @Column()
    prevision_date: Date

    @Column()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToOne(() => ClientEntity)
    @JoinColumn({ name: 'client_id' })
    client: ClientEntity

    @OneToOne(() => SituationEntity)
    @JoinColumn({ name: 'situation_id' })
    situation: SituationEntity

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity

    @OneToOne(() => EmployeeEntity)
    @JoinColumn({ name: 'employee_id' })
    employee: EmployeeEntity
}

export default ActivitieEntity