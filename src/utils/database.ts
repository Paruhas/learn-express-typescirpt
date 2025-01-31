import sequelize from "../database";

export async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // Set force: true to drop tables and recreate
    console.log("Database connection established");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
