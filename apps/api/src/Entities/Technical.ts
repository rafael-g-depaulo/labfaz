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
import { CNPJ, Formation } from "@labfaz/entities";

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

  @Column({ nullable: true, type: "text" })
  profession?: string;

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
