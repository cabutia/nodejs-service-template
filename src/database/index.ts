import 'reflect-metadata';
import {
    ConnectionOptions,
    createConnection,
    getConnectionOptions,
} from 'typeorm';

export const initDatabase = async () => {
    const options: ConnectionOptions = await getConnectionOptions();
    await createConnection(options);
};
