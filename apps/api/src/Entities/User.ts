import { Column, Entity, PrimaryColumn, BeforeInsert, CreateDateColumn } from 'typeorm'
import { nanoid } from 'nanoid'

@Entity()
export class User {

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

  @Column('boolean', { default: false })
  active: boolean
}

export default User
