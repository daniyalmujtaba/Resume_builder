import { NextFunction, Request, Response } from "express";
import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import firebaseAdmin from 'firebase-admin';
import config from "./configs/config";
import userRoutes from './routes/user';
  
const server = express();

const httpServer = http.createServer(server);

import  firebaseKey from './configs/serviceAccountKey.json';

const serviceAccountKey = firebaseKey as firebaseAdmin.ServiceAccount;

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccountKey)
});

mongoose.connect(config.mongo.url, config.mongo.options).then(()=>{
  console.log("mongoose connected");
}).catch((err:Error) =>{console.log(err)});


server.use(express.urlencoded({extended:true}));
server.use(express.json());


/* Routes */

server.use('/user', userRoutes);

/** Error handling */
server.use((req:Request, res:Response, next:NextFunction) => {
  const error = new Error('Not found');

  res.status(404).json({
      message: error.message
  });
});

/** Listen */
httpServer.listen(config.server.port);
export default server;
