"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const config_1 = __importDefault(require("./config/config"));
const connectToMongo_1 = __importDefault(require("./config/connectToMongo"));
const initApp = () => __awaiter(void 0, void 0, void 0, function* () {
    const PORT = config_1.default.port;
    const app = (0, express_1.default)(); //Express is a minimalist, flexible Node.js Web application infrastructure
    const list = require("express-list-endpoints"); //Express endpoint parser to retrieve a list of the passed router with the set verbs
    app.use((0, helmet_1.default)()); //Helmet helps secure Express apps by setting HTTP response headers
    app.use((0, cors_1.default)()); //Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin
    app.use(express_1.default.json()); //It parses incoming requests with JSON payloads and is based on body-parser
    app.use(express_1.default.urlencoded({ extended: true })); //It parses incoming requests with URL-encoded payloads and is based on a body parser
    yield (0, connectToMongo_1.default)();
    //Router list
    app.use("/users", user_routes_1.default);
    //Show express-list-endpoints in the mainpage
    /*app.get("/", (req: Request, res: Response) => {
      res.send(list(app));
    });*/
    app.get("/", (req, res) => {
        res.send("Welcome to my server");
    });
    //The app.listen() function is used to bind and listen to the connections on the specified host and port.
    app.listen(PORT, () => {
        console.log(`Server started correctly on port ${PORT}`);
    });
    //return the app variable to use it on Vercel
    return app;
});
initApp();
module.exports = initApp;
