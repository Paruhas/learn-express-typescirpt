import express from "express";
import { connectDatabase } from "./utils/database";
import { UserService } from "./services/user.service";

const app = express();
const port = 3001;

app.get("/users", async (req, res) => {
  const service = new UserService();
  const users = await service.getUsers();
  res.json(users);
});

async function startServer() {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer();
