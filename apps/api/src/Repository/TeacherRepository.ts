import { EntityRepository, Repository } from "typeorm"
import { hash, compare } from "bcryptjs";

import Teacher from "Entities/Teacher"

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {

  findByEmail(email: string) {
    return this.findOne({
      where: { email },
    });
// import User from 'Entities/User'; 
  }


  async createTeacher(email: string, rawPassword: string) {
    const hashedPwd = await this.generateHash(rawPassword)

    const createTeacher = this.create({
      email,
      password: hashedPwd
    })

    await createTeacher.save()

    return createTeacher
  }


  generateHash(password: string) {
    return hash(password, 8);
  }


  compareHash(password: string, userPassword: string) {
    return compare(password, userPassword);
  }

}


export default TeacherRepository
