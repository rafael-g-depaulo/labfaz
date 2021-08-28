import {
  Column,
  Entity,
  PrimaryColumn,
  BaseEntity,
  CreateDateColumn,
  BeforeInsert
} from "typeorm"
import { nanoid } from "nanoid";

 

export interface IAdmin {

}

@Entity()
export class Admin extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: "admin" })
  role: "admin" | "professor"

  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Admin
