"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
//Function to connect to your mongoDB cluster
const connectDb = () => {
    mongoose_1.default
        .connect(config_1.default.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        console.log("Connection to MongoDB successful !");
    });
};
exports.default = connectDb;
