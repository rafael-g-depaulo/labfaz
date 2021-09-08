import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
  OneToMany
} from "typeorm";
import { nanoid } from "nanoid";
import Request from "./Requests";

export enum ActivityType {
  CURSO = 'Curso',
  LIVE = 'Live',
  OFICINA = 'Oficina',
  RODA_DE_CONVERSA = 'Roda de conversa'
}

@Entity()
export class Course extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column('text', { array: true, default: {} })
  teacher: string[]

  @Column({
  type: "enum",
  enum: ActivityType,
  default: ActivityType.CURSO,}
  )
  type: ActivityType

  @Column('text', { array: true, default: {} })
  tags: string[]

  @Column('text', { array: true, default: {} })
  detail: string[]

  @Column('text', { array: true, default: {} })
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

  @Column({ nullable: true })
  subscription_start_date?: Date

  @Column({ nullable: true })
  subscription_finish_date?: Date

  @Column('date', { array: true, default: {} })
  class_dates: Date[]

  @Column()
  link: string

  @OneToMany(() => Request, request => request.course)
  requests: Request[]

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Course
