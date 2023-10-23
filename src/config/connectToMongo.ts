import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/config";

const connectDb = () => {
  mongoose
    .connect(config.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log("Connexion à MongoDB réussie !");
    });
};

export default connectDb;
