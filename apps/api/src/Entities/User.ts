import { Column, Entity, PrimaryColumn, BeforeInsert, CreateDateColumn, OneToOne } from 'typeorm'
import { nanoid } from 'nanoid'

import Artist from './Artist'

// To work with admin bro classes must extend BaseEntity
@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Artist, (artist) => artist.user, {
    cascade: ["insert", "remove", "update"],
  })
  artist: Artist;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isVerified: boolean

  @Column({ default: false })
  banned: boolean

  @Column("boolean", { default: false })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }

  @Column('boolean', { default: false })
  active: boolean
}

export default User;
