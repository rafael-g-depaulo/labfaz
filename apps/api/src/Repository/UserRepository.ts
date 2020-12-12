import { EntityRepository, Repository } from "typeorm"
import { sign } from "jsonwebtoken"
import { hash } from 'bcryptjs'
import { compare } from "bcryptjs"

import User from "Entities/User"
import authConfig from "config/auth"


@EntityRepository(User)
export class UserRepository extends Repository<User> {

  findByEmail(email: string) {

    return this.findOne({
      where: { email }
    })
  }

  findById(id: string) {

    return this.findOne({
      where: { id }
    })
  }

  generateHash(password: string) {

    return hash(password, 8)
  }

  compareHash(password: string, userPassword: string) {

    return compare(password, userPassword)
  }

  // userToken(email: string) {
  //   const { secret, expiresIn } = authConfig.jwt

  //   const user = this.findOne({ where: { email } })

  //   const token = sign({}, secret, {
  //     subject: user.,
  //   })
  // }

}

export default UserRepository
