import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { nanoid } from "nanoid";

@Entity()
export class Course extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column('simple-array', { array: true })
  teacher: string[]

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

  @Column({ default: false, nullable: true })
  has_subscription: boolean

  @Column()
  subscription_start_date: Date

  @Column()
  subscription_finish_date: Date

  @Column()
  activity_date: Date

  // @Column({  })
  // class_dates: Date[]

  @Column()
  link: string

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Course
