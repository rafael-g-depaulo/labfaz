
import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { nanoid } from "nanoid";
import Artist from "./Artist";
import Area from "./Area";
import Idiom from "./Idiom"

export enum Formation {
  NO = "não tem",
  INITIAL_SCHOOL = "ensino fundamental 1",
  MEDIUM_SCHOOL = "ensino fundamental 2",
  HIGH_SCHOOL = "ensino médio",
  TECH = "ensino médio tecnico",
  UNIVERSITY = "curso superior",
  POS ="pos"
}

@Entity()
export class Technical {

  @PrimaryColumn()
  id: string;

  @OneToOne(() => Artist, artist => artist.technical, {
    cascade: ["insert", "update", "remove"]
  })
  artist: Artist;

  @OneToMany(() => Area, area => area.technical, {
    cascade: ["insert", "update"]
  })
  area: Area[];

  @OneToMany(() => Idiom, idiom => idiom.technical, {
    cascade: ["insert", "update"]
  })
  idiom: Idiom[];

  @Column({
    type: "enum",
    enum: Formation,
    default: Formation.NO
  })
  formation: Formation;

  @Column({ default: false })
  is_drt: boolean;

  @Column({ default: false })
  is_ceac: boolean;

  @Column({ default: false })
  is_cnpj: boolean;

  @Column({ default: false })
  is_affiliated: boolean;

  @Column({ default: false })
  want_be_affiliated: boolean

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Technical;
