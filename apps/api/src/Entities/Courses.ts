import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { nanoid } from "nanoid";
import Admin from "./Admin"

@Entity()
export class Course extends BaseEntity {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => Admin, (admin) => admin.email)
  teacher: Admin

  @Column()
  type: "curso" | "live" | "oficina" | "roda de conversa"

  @Column('simple-array', { array: true })
  tags: string[]

  @Column('simple-array', { array: true })
  detail: string[]

  @Column('simple-array', { array: true })
  fonte: string[]

  @Column()
  short_description: string

  // retorna texto em md
  @Column()
  about: string
  
  // retorna texto em md
  @Column({ nullable: true })
  requirements: string

  @Column({default: false})
  available: boolean

  @Column()
  banner: string

  @Column({ default: false })
  has_subscription: boolean

  @Column()
  subscription_date: Date

  @Column()
  activity_date: Date

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Course
