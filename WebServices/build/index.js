import server from './server';
import http from 'http';
import config from "./configs/config";
var httpServer = http.createServer(server);
httpServer.listen(config.server.port);
