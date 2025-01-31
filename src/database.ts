import { Sequelize } from "sequelize-typescript";
import config from "./config/database";
import { User } from "./models/user.model";
import { UserDetail } from "./models/userDetail.model";
import { Post } from "./models/post.model";

const sequelize = new Sequelize({
  ...config,
  models: [User, UserDetail, Post], // Add all models here
});

export default sequelize;
