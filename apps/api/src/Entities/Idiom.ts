import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { nanoid } from "nanoid";
import Technical from "./Technical";

export interface IIdiom {
  name: string;
}

@Entity()
export class Idiom {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Technical, technical => technical.idiom)
  technical: Technical;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Idiom;
