import { NextFunction, Request, Response } from "express";
import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import firebaseAdmin from 'firebase-admin';
import config from "./configs/config";
import userRoutes from './routes/user';
import resumeRoutes from './routes/resume';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const server = express();

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  })
});

mongoose.connect(config.mongo.url, config.mongo.options).then(()=>{
  console.log("mongoose connected");
}).catch((err:Error) =>{console.log(err)});


const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(cors(options));

/* Routes */

server.use('/user', userRoutes);
server.use('/resume', resumeRoutes);
/** Error handling */
server.use((req:Request, res:Response, next:NextFunction) => {
  const error = new Error('Not found');

  res.status(404).json({
      message: error.message
  });
});

/** Listen */
export default server;
