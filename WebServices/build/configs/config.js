import dotenv from "dotenv";
dotenv.config();
var MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    // poolSize: 50,
    autoIndex: false,
    retryWrites: false
};
var MONGO_USERNAME = process.env.MONGO_USERNAME || 'daniyal';
var MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'Dani%400001';
var MONGO_HOST = process.env.MONGO_URL || "cluster0.f8mos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: "mongodb+srv://".concat(MONGO_USERNAME, ":").concat(MONGO_PASSWORD, "@").concat(MONGO_HOST)
};
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.PORT || 4000;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    mongo: MONGO,
    server: SERVER
};
export default config;
