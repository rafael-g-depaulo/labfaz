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
import Artist from "./Artist";

export enum Residency {
  DF = "df",
  BORDER = "entorno",
  OUTSIDE = "fora df",
}

export interface IAddress {
  city: string;
  cep: string;
  neighbourhood: string;
  number: number;
  complement: string;
  residency: Residency;
  state: string;
}
@Entity()
export class Address {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Artist, (artist) => artist.address, {
    eager: false,
    cascade: ["insert", "update", "remove"],
  })
  @JoinColumn()
  artist: Artist;

  @Column({ nullable: true, type: "text" })
  city?: string;

  @Column({ nullable: true, type: "text" })
  cep?: string;

  @Column({ nullable: true, type: "text" })
  neighbourhood?: string;

  @Column({ nullable: true, type: "text" })
  number?: number;

  @Column({ nullable: true, type: "text" })
  complement?: string;

  @Column({
    type: "enum",
    enum: Residency,
    default: Residency.DF,
  })
  residency: Residency;

  @Column({
    nullable: true,
    type: "text",
  })
  state?: string;

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
