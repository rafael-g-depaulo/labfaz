import {
  Column,
  Entity,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { nanoid } from "nanoid";
import Artist from "./Artist";

export enum Residency {
  DF = "df",
  BORDER = "entorno",
  OUTSIDE = "fora df"
}

@Entity()
export class Address {

  @PrimaryColumn()
  id: string;

  @OneToOne(() => Artist, artist => artist.address, {
    cascade: ["insert", "update", "remove"]
  })
  artist: Artist;

  @Column()
  city: string;

  @Column()
  cep: string;

  @Column()
  neighbourhood: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column({
    type: "enum",
    enum: Residency,
    default: Residency.DF
  })
  residency: Residency;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Address;
