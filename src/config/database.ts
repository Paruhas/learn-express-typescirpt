import { Options } from "sequelize";

const config: Options = {
  database: "test-express-ts",
  username: "postgres",
  password: "admin1234",
  host: "localhost",
  port: 5432,
  dialect: "postgres", // or 'mysql'
  logging: console.log,
};

export default config;
