import {
  Column,
  Entity,
  PrimaryColumn,
  BaseEntity,
  CreateDateColumn,
  BeforeInsert,
  OneToMany
} from "typeorm"
import { nanoid } from "nanoid";

export interface IAdmin {

}

import Course from "./Courses";
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

  @OneToMany(() => Course, course => course.id)
  coursers: Course[]

  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }

  @Column()
  name: string

}

export default Admin
