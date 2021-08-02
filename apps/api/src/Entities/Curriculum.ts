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
import Area from "./Area";

@Entity()
export class Curriculum {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Area, area => area)
  area: Area;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Curriculum;
