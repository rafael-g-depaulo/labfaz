import { EntityRepository, Repository } from "typeorm"

import Admin from "Entities/Admin"

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {

  findByName(name: string) {
    return this.findOne({
      where: { name },
    });
  }


  async createAdmin(name: string, admin?: "admin" | "professor") {

    const createAdmin = this.create({
      name,
      admin
    })

    await createAdmin.save()

    return createAdmin
  }


}
