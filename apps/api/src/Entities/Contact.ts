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

export interface IContact {
  whatsapp: string;
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
  youtube: string;
}
@Entity()
export class Contact {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Artist, (artist) => artist.contact, {
    cascade: ["insert", "update", "remove"],
  })
  @JoinColumn()
  artist: Artist;

  @Column()
  whatsapp: string;

  @Column()
  twitter: string;

  @Column()
  facebook: string;

  @Column()
  instagram: string;

  @Column()
  linkedin: string;

  @Column()
  tiktok: string;

  @Column()
  youtube: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  addId() {
    this.id = nanoid();
  }
}

export default Contact;
