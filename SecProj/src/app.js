import http from 'http'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import config from './config';
import routes from './routes';

const app = express();

app.server = http.createServer(app);

app.use('/v1', routes);
app.server.listen(config.port)

console.log("starting on port " + app.server.address().port)


export default app
