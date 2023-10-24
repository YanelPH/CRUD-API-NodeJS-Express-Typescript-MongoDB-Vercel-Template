"use strict";
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
const initApp = () => {
    console.log("test");
    const PORT = config_1.default.port;
    const app = (0, express_1.default)(); //Express is a minimalist, flexible Node.js Web application infrastructure
    const list = require("express-list-endpoints"); //Express endpoint parser to retrieve a list of the passed router with the set verbs
    app.use((0, helmet_1.default)()); //Helmet helps secure Express apps by setting HTTP response headers
    app.use((0, cors_1.default)()); //Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin
    app.use(express_1.default.json()); //It parses incoming requests with JSON payloads and is based on body-parser
    app.use(express_1.default.urlencoded({ extended: true })); //It parses incoming requests with URL-encoded payloads and is based on a body parser
    (0, connectToMongo_1.default)();
    //Router list
    app.use("/users", user_routes_1.default);
    //Show express-list-endpoints in the mainpage
    app.get("/", (req, res) => {
        res.send(list(app));
    });
    //The app.listen() function is used to bind and listen to the connections on the specified host and port.
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
    //return the app variable to use it on Vercel
    return app;
};
initApp();
exports.default = initApp;
