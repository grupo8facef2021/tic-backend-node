import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('clients')
class ClientEntity {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    cpf: string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    cep: string

    @Column()
    street: string

    @Column()
    neighborhood: string;

    @Column()
    number: number

    @Column()
    status: number
}

export default ClientEntity