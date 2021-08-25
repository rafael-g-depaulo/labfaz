import {
  Column,
  Entity,
  PrimaryColumn,
  BaseEntity,
<<<<<<< HEAD
  CreateDateColumn,
  BeforeInsert
} from "typeorm"
import { nanoid } from "nanoid";
=======
  CreateDateColumn
} from "typeorm"

export interface IAdmin {

}

>>>>>>> a9fccd8 (✨ feature admin Entity)
@Entity()
export class Admin extends BaseEntity {
  @PrimaryColumn()
  id: string;

<<<<<<< HEAD
<<<<<<< HEAD
  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: "admin" })
  role: "admin" | "professor"

  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
=======
=======
  @Column()
  name: string

>>>>>>> 0eef050 (✨ 🚧 feature add new admins)
  @Column({ default: "admin" })
  admin: "admin" | "professor"

  @CreateDateColumn()
  created_at: Date
>>>>>>> a9fccd8 (✨ feature admin Entity)
}

export default Admin
