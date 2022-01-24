import { EntityRepository, Repository } from "typeorm"
import AnimalExample from "Entities/AnimalExample"

@EntityRepository(AnimalExample)
export class AnimalExampleRepository extends Repository<AnimalExample> {

  findByName(name: string) {
    return this.findOne({ name })
  }

  findByRank(rank: number) {
    return this.findOne({ rank })
  }

}

export default AnimalExampleRepository
