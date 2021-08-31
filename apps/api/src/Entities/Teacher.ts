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
import Course from "./Courses";
@Entity()
export class Teacher extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: "professor" })
  role: "professor"

  @OneToMany(() => Course, course => course.id)
  coursers: Course[]

  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Teacher
