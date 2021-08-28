import {
  Column,
  PrimaryColumn,
  OneToOne,
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

  @OneToOne(() => Course)
  @JoinColumn()
  course: Course

  @OneToOne(() => User)
  @JoinColumn()
  student: User

}


export default Request
