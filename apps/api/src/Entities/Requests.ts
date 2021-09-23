import { nanoid } from 'nanoid'
import {
  Column,
  PrimaryColumn,
  ManyToOne,
  Entity,
  BaseEntity,
  BeforeInsert,
  UpdateDateColumn
} from 'typeorm'
import Course from "./Courses"
import User from "./User"

@Entity()
export class Request extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({ default: "pending" })
  status: "pending" | "accepted" | "denied"

  @ManyToOne(() => Course, course => course.requests, { eager: true })
  course: Course

  @ManyToOne(() => User, user => user.courses, { eager: true })
  student: User

  @UpdateDateColumn()
  updated: Date

  @Column({ nullable: true, default: ""})
  conector: string

  @BeforeInsert()
  addId() {
    this.id = nanoid()
  }

}


export default Request
