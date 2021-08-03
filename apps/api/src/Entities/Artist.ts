import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { nanoid } from "nanoid";
import User from "./User";
import Contact from "./Contact";
import Address from "./Address";
import Technical from "./Technical"

export enum Race {
  NONE = "nenhuma",
  WHITE = "branca",
  BLACK = "preta",
  BROWN = "parda",
  YELLOW = "amarela",
  NATIVE = "indigena",
}

export enum ShowName {
  NAME = "nome",
  SOCIAL = "nome social",
  ARTISTIC = "nome artistico",
}

@Entity()
export class Artist {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => User, (user) => user.artist, {
    cascade: ["insert","update"],
  })
  @JoinColumn()
  user: User;

  @OneToOne(() => Contact, contact => contact.artist, {
    cascade: ["insert","update"]
  })
  contact: Contact;

  @OneToOne(() => Address, address => address.artist, {
    cascade: ["insert", "update"]
  })
  address: Address;

  @OneToOne(() => Technical, technical => technical.artist, {
    cascade: ["insert", "update"]
  })
  technical: Technical;

  @Column()
  photo_url: string;

  @Column()
  name: string;

  @Column()
  social_name: string;

  @Column()
  artistic_name: string;

  @Column()
  gender: string;

  @Column()
  cpf: string;

  @Column()
  birthday: Date;

  @Column()
  rg: string;

  @Column()
  expedition_department: string;

  @Column()
  is_trans: boolean;

  @Column({
    type: "enum",
    enum: Race,
    default: Race.NONE,
  })
  race: Race;

  @Column({
    type: "enum",
    enum: ShowName,
    default: ShowName.NAME,
  })
  show_name: ShowName;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Artist;
