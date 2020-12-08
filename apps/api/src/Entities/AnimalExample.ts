import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"
import { nanoid } from "nanoid"

// INFO: check https://github.com/ai/nanoid and https://zelark.github.io/nano-id-cc/ to understand what this is for
const idSize = 10

@Entity()
export class AnimalExample {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  rank: number;

  // add id to Animal
  @BeforeInsert()
  addId() {
    this.id = nanoid(idSize)
  }
}

export default AnimalExample
