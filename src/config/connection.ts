import { createConnection, ConnectionOptions } from 'typeorm';
import * as config from '../../ormconfig';

// @ts-ignore
const connectionConfig: ConnectionOptions = config;
export default createConnection(connectionConfig);
