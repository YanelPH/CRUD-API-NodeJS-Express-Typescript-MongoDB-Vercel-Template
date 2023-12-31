import express from "express";
import helmet from "helmet";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import { Request, Response } from "express";
import config from "./config/config";
import connectDb from "./config/connectToMongo";

const PORT = config.port;
const app = express(); //Express is a minimalist, flexible Node.js Web application infrastructure
const list = require("express-list-endpoints"); //Express endpoint parser to retrieve a list of the passed router with the set verbs

app.use(helmet()); //Helmet helps secure Express apps by setting HTTP response headers
app.use(cors()); //Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin
app.use(express.json()); //It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.urlencoded({ extended: true })); //It parses incoming requests with URL-encoded payloads and is based on a body parser

(async () => {
  await connectDb();

  //The app.listen() function is used to bind and listen to the connections on the specified host and port.
  app.listen(PORT, () => {
    console.log(`Server started correctly on port ${PORT}`);
  });
})();
//Router list
app.use("/users", userRoutes);

//Show express-list-endpoints in the mainpage
app.get("/", (req: Request, res: Response) => {
  res.send(list(app));
});

//return the app variable to use it on Vercel

module.exports = app;
