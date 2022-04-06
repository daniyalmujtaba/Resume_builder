var _a;
import express from 'express';
import mongoose from 'mongoose';
import firebaseAdmin from 'firebase-admin';
import config from "./configs/config";
import userRoutes from './routes/user';
import resumeRoutes from './routes/resume';
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
var server = express();
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: (_a = process.env.FIREBASE_PRIVATE_KEY) === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, '\n'),
    })
});
mongoose.connect(config.mongo.url, config.mongo.options).then(function () {
    console.log("mongoose connected");
}).catch(function (err) { console.log(err); });
var allowedOrigins = ['http://localhost:3000'];
var options = {
    origin: allowedOrigins
};
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors(options));
/* Routes */
server.use('/user', userRoutes);
server.use('/resume', resumeRoutes);
/** Error handling */
server.use(function (req, res, next) {
    var error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
/** Listen */
export default server;
