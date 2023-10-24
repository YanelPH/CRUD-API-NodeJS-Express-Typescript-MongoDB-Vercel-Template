import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/config";

//Function to connect to your mongoDB cluster
const connectDb = () => {
  mongoose
    .connect(config.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log("Connection to MongoDB successful !");
    });
};

export default connectDb;
