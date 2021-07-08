import { EntityRepository, Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { compare } from "bcryptjs";

<<<<<<< HEAD
import User from "Entities/User";
import authConfig from "Config/auth";
=======
import User from "Entities/User"
import authConfig from "Config/auth"

>>>>>>> 8f032a4 (✨ Create login user logi with email sender)

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

<<<<<<< HEAD
  async generateToken(email: string) {
    const { secret, expiresIn } = authConfig.jwt;

    const user = await this.findOne({ where: { email } });
    if (!user) throw new Error("No user found");

    const token = sign({ id: user.id }, secret, { expiresIn });
    return token;
  }

  async generateResetPasswordToken(email: string) {
    const { secret, expiresIn } = authConfig.token;
=======
  generateToken(email: string) {
    const { secret, expiresIn } = authConfig.jwt

    const user = this.findOne({ where: { email } })

    const token = sign({id: user?.id}, secret, {
      expiresIn: expiresIn,
    })

    return token
  } 
>>>>>>> 8f032a4 (✨ Create login user logi with email sender)

    const user = await this.findOne({ where: { email } });
    if (!user) throw new Error("No user found");

    const token = sign({ id: user.id }, secret, { expiresIn });
    return token;
  }
}

export default UserRepository;
