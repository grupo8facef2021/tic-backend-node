import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("clients")
class ClientEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  cep: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  number: string;

  @Column()
  status: number;

  @Column()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClientEntity;
