import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  BaseEntity,
} from "typeorm"
import { nanoid } from "nanoid"

import { Roles } from "@labfaz/permissions"

import Artist from "./Artist"
import Request from "./Requests"

export interface IUser {
  email: string
  password: string
}

// INFO: check https://github.com/ai/nanoid and https://zelark.github.io/nano-id-cc/ to understand what this is for
const idSize = 10

// To work with admin bro classes must extend BaseEntity
@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({
    type: "enum",
    enum: Roles,
    default: Roles.LOGGED_USER,
  })
  role: Roles

  @OneToOne(() => Artist, (artist) => artist.user, {
    eager: true,
    cascade: ["remove", "update"],
  })
  artist: Artist

  @OneToMany(() => Request, request => request.course)
  courses: Request[]

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: false })
  isVerified: boolean

  @Column({ default: false })
  banned: boolean

  @Column("boolean", { default: false })
  active: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  addId() {
    this.id = nanoid(idSize)
  }
}

export default User
