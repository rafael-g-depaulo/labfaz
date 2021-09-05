import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { nanoid } from "nanoid";
import Artist from "./Artist";
import Area from "./Area";
import Idiom from "./Idiom";

import { IArea } from "Entities/Area";
import { IIdiom } from "Entities/Idiom";

export interface ITechnical {
  formation: Formation;
  is_drt: boolean;
  drt_number: string;
  is_ceac: boolean;
  ceac_number: string;
  is_cnpj: boolean;
  cnpj: string;
  name_enterprise: string;
  areas: IArea[];
  idiom: IIdiom[];
}

export enum Formation {
  NO = "não tem",
  INITIAL_SCHOOL = "ensino fundamental 1",
  MEDIUM_SCHOOL = "ensino fundamental 2",
  HIGH_SCHOOL = "ensino médio",
  TECH = "ensino médio tecnico",
  UNIVERSITY = "curso superior",
  POS = "pos",
}

export enum CNPJ {
  MEI = "MEI",
  MICRO = "Microempresa",
  PEQ = "Pequena empresa",
  EIRELLI = "Eireli",
  OSC = "OSC",
  OUTRO = "Outro",
  NONE = "Nenhum",
}

@Entity()
export class Technical {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Artist, (artist) => artist.technical, {
    eager: false,
    cascade: ["insert", "update", "remove"],
  })
  @JoinColumn()
  artist: Artist;

  @OneToMany(() => Area, (area) => area.technical, {
    eager: true,
    cascade: ["insert", "update"],
  })
  area: Area[];

  @OneToMany(() => Idiom, (idiom) => idiom.technical, {
    eager: true,
    cascade: ["insert", "update"],
  })
  idiom: Idiom[];

  @Column({
    type: "enum",
    enum: Formation,
    default: Formation.NO,
  })
  formation: Formation;

  @Column({ default: false })
  is_drt: boolean;

  @Column({ nullable: true, type: "text" })
  drt: string;

  @Column({ default: false })
  is_ceac: boolean;

  @Column({ nullable: true, type: "text" })
  ceac: string;

  @Column({ default: false })
  is_cnpj: boolean;

  @Column({ nullable: true, type: "text" })
  cnpj: string;

  @Column({ nullable: true, type: "text" })
  name_enterprise: string;

  @Column({ type: "enum", enum: CNPJ, default: CNPJ.NONE })
  cnpj_type: CNPJ;

  @Column()
  profission: string;

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
