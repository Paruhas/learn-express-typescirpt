import { User } from "../models/user.model";
import { UserDetail } from "../models/userDetail.model";

export class UserService {
  async createUser(name: string, email: string) {
    return await User.create({ name, email });
  }

  async getUsers() {
    return await User.findAll({
      include: { model: UserDetail },
    });
  }
}
