import { EntityRepository, Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";

import User from "Entities/User"
import authConfig from "Config/auth"


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string) {
    return this.findOne({
      where: { email },
    });
  }

  findByIdWithAll(id: string) {
    return this.findOne({
      where: { id },
      relations: [
        "artist",
        "contact",
        "address",
        "technical",
        "idiom",
        "area",
        "curriculum",
        "certificate",
      ],
    });
  }

  async createUser(email: string, rawPassword: string) {
    const hashedPwd = await this.generateHash(rawPassword)
    const createdUser = this.create({
      email,
      password: hashedPwd,
      active: false,
      isVerified: false,
      banned: false
    })

    await createdUser.save()

    return createdUser
  }

  findById(id: string) {
    return this.findOne({
      where: { id },
    });
  }

  generateHash(password: string) {
    return hash(password, 8);
  }

  compareHash(password: string, userPassword: string) {
    return compare(password, userPassword);
  }

  async generateToken(email: string) {
    const { secret, expiresIn } = authConfig.jwt;

    const user = await this.findOne({ where: { email } });
    if (!user) throw new Error("No user found");

    const token = sign({ id: user.id }, secret, { expiresIn });
    return token;
  }

  async generateResetPasswordToken(email: string) {
    const { secret, expiresIn } = authConfig.token;

    const user = await this.findOne({ where: { email } });
    if (!user) throw new Error("No user found");

    const token = sign({ id: user.id }, secret, { expiresIn });
    return token;
  }


}

export default UserRepository;
