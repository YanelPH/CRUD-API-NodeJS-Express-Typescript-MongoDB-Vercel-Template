"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const ENV = process.env;
const config = {
    port: ENV.PORT,
    mongoUrl: ENV.MONGO_URL,
};
exports.default = config;
