import { createConnection } from "typeorm";
import app from "./app"
import logger from "./logging/Logger"

require('dotenv').config();

const port = Number(process.env.APP_PORT) || 3003;

export const connectDB = async () => {
    await createConnection();
};

const startServer = async () => {
    app.listen(port, () => logger.info(`sec21::backend is up and running on port: ${port}`));
};

(async () => {
    await connectDB();
    await startServer();
})();

/*
createConnection().then(async () => {
    // create express app
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

    app.listen(port, () => logger.info(`sec21::backend is up and running on port: ${port}`));

}).catch(error => logger.error(`TypeORM connection error: ${error}`));
*/