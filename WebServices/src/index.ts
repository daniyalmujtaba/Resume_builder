import server from './server';
import http from 'http';
import config from "./configs/config";


const httpServer = http.createServer(server);

httpServer.listen(config.server.port);