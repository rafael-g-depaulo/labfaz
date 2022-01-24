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
import Technical from "./Technical";

import { IAddress } from "Entities/Address";
import { IContact } from "Entities/Contact";
import { ITechnical } from "Entities/Technical";

export enum GenderSpecific {
  CIS = "cisgênero",
  TRANS = "transgênero",
  NBIN = "não-binário",
  NONE = "prefiro não responder",
}

export enum Race {
  NONE = "nenhuma",
  WHITE = "branca",
  BLACK = "preta",
  BROWN = "parda",
  YELLOW = "amarela",
  NATIVE = "indigena",
}

export enum SexualOrientation {
  ASS = "assexual",
  BIS = "bissexual",
  HET = "heterosexual",
  PAN = "pansexual",
  LES = "lésbica",
  GAY = "gay",
  NONE = "prefiro não dizer",
}

export enum ShowName {
  NAME = "nome",
  SOCIAL = "nome social",
  ARTISTIC = "nome artistico",
}
export interface IArtist {
  photo_url: string;
  name: string;
  social_name: string;
  artistic_name: string;
  gender: string;
  cpf: string;
  birthday: Date;
  rg: string;
  expedition_department: string;
  gender_specifics: GenderSpecific;
  race: Race;
  show_name: ShowName;
  address: IAddress;
  contact: IContact;
  technical: ITechnical;
}

@Entity()
export class Artist {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => User, (user) => user.artist, {
    cascade: ["insert", "update"],
    eager: false,
  })
  @JoinColumn()
  user: User;

  @OneToOne(() => Contact, (contact) => contact.artist, {
    cascade: ["insert", "update"],
    eager: true,
  })
  contact: Contact;

  @OneToOne(() => Address, (address) => address.artist, {
    cascade: ["insert", "update"],
    eager: true,
  })
  address: Address;

  @OneToOne(() => Technical, (technical) => technical.artist, {
    cascade: ["insert", "update"],
    eager: true,
  })
  technical: Technical;

  @Column()
  photo_url: string;

  @Column({ nullable: true })
  curriculum?: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  social_name?: string;

  @Column({ nullable: true })
  artistic_name?: string;

  @Column()
  gender: string;

  @Column({ nullable: true, type: "text" })
  cpf?: string;

  @Column()
  birthday: Date;

  @Column({ nullable: true, type: "text" })
  rg?: string;

  @Column({ nullable: true, type: "text" })
  expedition_department?: string;

  @Column({
    type: "enum",
    enum: GenderSpecific,
    default: GenderSpecific.NONE,
  })
  gender_specifics: GenderSpecific;

  @Column({
    type: "enum",
    enum: SexualOrientation,
    default: SexualOrientation.NONE,
  })
  sexual_orientation: SexualOrientation;

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

  // helper methods
  get displayName() {
    if (this.show_name === ShowName.ARTISTIC)
      return this.artistic_name ?? this.name;
    if (this.show_name === ShowName.SOCIAL)
      return this.social_name ?? this.name;
    if (this.show_name === ShowName.NAME) return this.name;
    return this.name;
  }
}

export default Artist;
