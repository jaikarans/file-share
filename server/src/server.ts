import http from 'http'
import app from "./app";
import config from './config';
import makeDatabaseConnction from './db';

makeDatabaseConnction();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log('server is running on port 8080...')
});
