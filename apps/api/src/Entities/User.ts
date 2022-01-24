import { BaseEntity, BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"
import { IsEmail, IsUrl, IsUUID } from "class-validator"
import { nanoid } from "nanoid"
import { Roles } from "@starter-project/permissions";

// INFO: check https://github.com/ai/nanoid and https://zelark.github.io/nano-id-cc/ to understand what this is for
const idSize = 10

@Entity()
export class User extends BaseEntity {

  @PrimaryColumn()
  @IsUUID()
  id: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password_hash: string;

  @Column({ nullable: true })
  @IsUrl()
  profile_picture_url?: string
  
  @Column({
    type: "enum",
    enum: Roles,
    default: Roles.LOGGED_USER,
  })
  role: Roles;

  // add id to Animal
  @BeforeInsert()
  addId() {
    this.id = nanoid(idSize)
  }
}

export default User
