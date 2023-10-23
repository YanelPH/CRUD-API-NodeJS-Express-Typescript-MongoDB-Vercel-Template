import express from "express";
import helmet from "helmet";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import { Request, Response } from "express";
import config from "./config/config";
const initApp = () => {
  const app = express();
  const PORT = config.port;
  const list = require("express-list-endpoints");
  app.use(helmet());
  app.use(cors());
  //parse body params req body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/users", userRoutes);

  app.get("/", (req: Request, res: Response) => {
    res.send(list(app));
  });

  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
  });
  return app;
};

export default initApp;
