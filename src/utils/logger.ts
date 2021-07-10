import winston from 'winston';
import { config } from 'dotenv';

config();

const consoleOptions: winston.transports.ConsoleTransportOptions = {
    handleExceptions: true,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
};

const logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: process.env.APP_NAME },
    exceptionHandlers: [new winston.transports.Console(consoleOptions)],
});

if (process.env.LOG_FILE !== '') {
    logger.add(new winston.transports.File({ filename: process.env.LOG_FILE }));
}

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console(consoleOptions));
}

export { logger };
