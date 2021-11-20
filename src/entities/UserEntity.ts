import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("users")
class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  old_password: string;

  @Column()
  level: number;

  @Column()
  status: number;
}

export default UserEntity;
