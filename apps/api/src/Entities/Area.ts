
import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { nanoid } from "nanoid";
import Technical from "./Technical"
import Certificate from "./Certificate";
import Curriculum from "./Curriculum";

export enum TechFormation {
  AUTO = "autodidata",
  ESPEC = "curso especializado",
  TECH = "tecnico",
  TECHLOG = "tecnologica",
  UNIVERSITY = "universitaria",
}

@Entity()
export class Area {

  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Technical, technical => technical.area)
  technical: Technical;
  
  @OneToMany(() => Certificate, certificate => certificate.area, {
    cascade: ["insert", "update", "remove"]
  })
  certificate: Certificate[];

  @OneToMany(() => Curriculum, curriculum => curriculum.area, {
    cascade: ["insert", "update", "remove"]
  })
  curriculum: Curriculum[];

  @Column({
    type: "enum",
    enum: TechFormation,
    default: TechFormation.AUTO
  })
  technical_formation: TechFormation;

  @Column()
  name: string;

  @Column()
  started_year: string;

  @Column({ type: "text"})
  describe: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Area;
