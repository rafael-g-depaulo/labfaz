import { EntityRepository, Repository } from "typeorm"
import { hash, compare } from "bcryptjs";

import Admin from "Entities/Admin"

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {

<<<<<<< HEAD
<<<<<<< HEAD
  findByEmail(email: string) {
    return this.findOne({
      where: { email },
    });
// import User from 'Entities/User'; 
  }


  async createAdmin(email: string, rawPassword: string, role?: "admin" | "professor") {
    const hashedPwd = await this.generateHash(rawPassword)

    const createdAdmin = this.create({
      email,
      role,
      password: hashedPwd
    })

    await createdAdmin.save()

    return createdAdmin
  }


  generateHash(password: string) {
    return hash(password, 8);
  }


  compareHash(password: string, userPassword: string) {
    return compare(password, userPassword);
  }

}


export default AdminRepository
=======
  findByName(name: string) {
=======
  findByEmail(email: string) {
>>>>>>> 327eea4 (✨ feature admin creation)
    return this.findOne({
      where: { email },
    });
  }


  async createAdmin(email: string, rawPassword: string, role?: "admin" | "professor") {
    const hashedPwd = await this.generateHash(rawPassword)

    const createdAdmin = this.create({
      email,
      role,
      password: hashedPwd
    })

    await createdAdmin.save()

    return createdAdmin
  }


  generateHash(password: string) {
    return hash(password, 8);
  }


  compareHash(password: string, userPassword: string) {
    return compare(password, userPassword);
  }

}
<<<<<<< HEAD
>>>>>>> 0eef050 (✨ 🚧 feature add new admins)
=======


export default AdminRepository
>>>>>>> 327eea4 (✨ feature admin creation)
