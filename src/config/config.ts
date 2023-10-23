require("dotenv").config();

const ENV = process.env;

const config = {
  port: ENV.PORT as string,
  mongoUrl: ENV.MONGO_URL as string,
};

export default config;
