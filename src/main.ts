import 'module-alias/register';
import 'reflect-metadata';
import express, { Express } from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import { router } from '@/api/router';
import { initDatabase } from '@/database';
import { logger } from '@/utils/logger';

config();

const bootstrap = async () => {
    const app: Express = express();

    app.use(helmet());
    app.use(express.json());
    app.use(router);

    await initDatabase();

    app.listen(process.env.APP_PORT || 3000, () => {
        logger.info(`Listening @ ${process.env.APP_PORT || 3000}`);
    });
};

bootstrap();
