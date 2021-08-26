import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { nanoid } from "nanoid";
import Admin from "./Admin"

@Entity()
export class Course extends BaseEntity {
  @PrimaryColumn()
  id: string

  @OneToMany(() => Admin, (admin) => admin.email)
  professor: Admin

  @Column()
  type: "curso" | "live" | "oficina" | "roda de conversa"

  @Column()
  tags: string[]

  @Column()
  detail: string[]

  @Column()
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
