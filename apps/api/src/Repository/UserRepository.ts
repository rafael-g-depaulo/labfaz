import { EntityRepository, Repository } from "typeorm";
import { sign, verify } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";

import User from "Entities/User";
import authConfig from "Config/auth";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string) {
    return this.findOne({
      where: { email },
    });
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

    const token = sign({ id: user?.id }, secret, { expiresIn });
    return token;
  }

  async generateEmailToken(email: string) {
    const { secret, expiresIn } = authConfig.token;

    const user = await this.findOne({ where: { email } });
    if (!user) throw new Error("No user found");

    const token = sign({ id: user?.id }, secret, { expiresIn });
    return token;
  }
}

export default UserRepository;
