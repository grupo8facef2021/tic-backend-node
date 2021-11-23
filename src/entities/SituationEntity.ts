import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("situations")
class SituationEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  color: number;

  @Column()
  status: number;
}

export default SituationEntity;
