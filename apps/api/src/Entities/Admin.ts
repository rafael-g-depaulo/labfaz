import {
  Column,
  Entity,
  PrimaryColumn,
  BaseEntity,
  CreateDateColumn
} from "typeorm"

export interface IAdmin {

}

@Entity()
export class Admin extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ default: "admin" })
  admin: "admin" | "professor"

  @CreateDateColumn()
  created_at: Date
}

export default Admin
