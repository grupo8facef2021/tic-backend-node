import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("employees")
class EmployeeEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  status: number;
}

export default EmployeeEntity;
