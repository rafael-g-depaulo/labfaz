import { Column, Entity, PrimaryColumn, BeforeInsert, CreateDateColumn, BaseEntity } from 'typeorm'
import { nanoid } from 'nanoid'

@Entity()
export class User extends BaseEntity {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @BeforeInsert()
  addId() {
    this.id = nanoid()
  }
}

export default User
