import * as express from "express";
import { Request, Response, NextFunction } from "express";

const bodyParser = require('body-parser')
require('dotenv').config();

// backend
import { appRoutes } from "./routes";
// logging
import logger from "./logging/Logger"
import morganConfig from './logging/MorganConfig'

const app = express();
// add logger middleware
app.use(bodyParser.json());
app.use(morganConfig);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

// register all application routes
appRoutes.forEach(route => {
    logger.info(`register endpoint: ${route.method.toUpperCase()} ${route.path}`);
    app[route.method]("/api" + route.path, (request: Request, response: Response, next: NextFunction) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});

export default app;
