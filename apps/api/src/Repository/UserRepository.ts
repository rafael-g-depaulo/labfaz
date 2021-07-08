import { EntityRepository, Repository } from "typeorm"
// import { sign } from "jsonwebtoken"
import { hash } from 'bcryptjs'
import { compare } from "bcryptjs"

import User from "Entities/User"
import authConfig from "Config/auth"


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

  generateToken(email: string) {
    const { secret, expiresIn } = authConfig.jwt

    const user = this.findOne({ where: { email } })

    const token = sign({id: user?.id}, secret, {
      expiresIn: expiresIn,
    })

    return token
  } 

}

export default UserRepository
