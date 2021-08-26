import {
  Column,
  Entity,
  PrimaryColumn,
  BaseEntity,
<<<<<<< HEAD
<<<<<<< HEAD
  CreateDateColumn,
  BeforeInsert
} from "typeorm"
import { nanoid } from "nanoid";
=======
  CreateDateColumn
} from "typeorm"

<<<<<<< HEAD
export interface IAdmin {

}

>>>>>>> a9fccd8 (✨ feature admin Entity)
=======
>>>>>>> aac21ac (✨ feature ban and verify)
=======
  CreateDateColumn,
  BeforeInsert
} from "typeorm"
import { nanoid } from "nanoid";
>>>>>>> 327eea4 (✨ feature admin creation)
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
  email: string

<<<<<<< HEAD
>>>>>>> 0eef050 (✨ 🚧 feature add new admins)
=======
  @Column()
  password: string

>>>>>>> aac21ac (✨ feature ban and verify)
  @Column({ default: "admin" })
  role: "admin" | "professor"

  @CreateDateColumn()
  created_at: Date
<<<<<<< HEAD
>>>>>>> a9fccd8 (✨ feature admin Entity)
=======

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
>>>>>>> 327eea4 (✨ feature admin creation)
}

export default Admin
