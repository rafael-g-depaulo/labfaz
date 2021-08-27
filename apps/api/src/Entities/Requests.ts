import {
  Column,
  PrimaryColumn,
  OneToOne,
  Entity,
  BaseEntity
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
  course: Course

  @OneToOne(() => User, user => user.id)
  student: User

}
