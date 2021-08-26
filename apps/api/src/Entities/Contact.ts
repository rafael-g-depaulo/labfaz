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

  @Column({ nullable: true, type: "text"})
  whatsapp: string | null;

  @Column({ nullable: true, type: "text"})
  twitter: string | null;

  @Column({ nullable: true, type: "text"})
  facebook: string | null;

  @Column({ nullable: true, type: "text"})
  instagram: string | null;

  @Column({ nullable: true, type: "text"})
  linkedin: string | null;

  @Column({ nullable: true, type: "text"})
  tiktok: string | null;

  @Column({ nullable: true, type: "text"})
  youtube: string | null;

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
