import { Sequelize } from "sequelize-typescript";
import config from "./config/database";
import { User } from "./models/user.model";

const sequelize = new Sequelize({
  ...config,
  models: [User], // Add all models here
});

export default sequelize;
