import { nanoid } from 'nanoid'
import {
  Column,
  PrimaryColumn,
  ManyToOne,
  Entity,
  BaseEntity,
  OneToOne,
  JoinColumn,
  BeforeInsert
} from 'typeorm'
import Course from "./Courses"
import User from "./User"

@Entity()
export class Request extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({ default: "pending" })
  status: "pending" | "accepted" | "denied"

  @OneToOne(() => Course, course => course.id)
  @JoinColumn()
  course: Course

  @ManyToOne(() => User, user => user.course)
  student: User

  @BeforeInsert()
  addId() {
    this.id = nanoid()
  }

}


export default Request
