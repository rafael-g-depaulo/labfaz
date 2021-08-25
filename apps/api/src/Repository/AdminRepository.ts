import { EntityRepository, Repository } from "typeorm"

import Admin from "Entities/Admin"
import User from "Entities/User"

@EntityRepository(Admin)
export class AdminRepository extends Repository<User> {}
