import {
  Column,
  Entity,
  PrimaryColumn,
  BaseEntity,
  CreateDateColumn
} from "typeorm"

@Entity()
export class Admin extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string

  @Column()
  email: string

  @Column({ default: "admin" })
  admin: "admin" | "professor"

  @CreateDateColumn()
  created_at: Date
}

export default Admin
