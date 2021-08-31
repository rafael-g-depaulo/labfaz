import {
  Column,
  PrimaryColumn,
  OneToOne,
  ManyToOne,
  Entity,
  BaseEntity,
  JoinColumn
} from 'typeorm'
import Course from "./Courses"
import User from "./User"

@Entity()
export class Request extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column()
  status: "pending" | "accepted" | "denied"

  @OneToOne(() => Course, course => course.id)
  @JoinColumn()
  course: Course

  @ManyToOne(() => User, user => user.course)
  student: User

}


export default Request
