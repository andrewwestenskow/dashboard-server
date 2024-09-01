import * as path from 'path';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: +process.env.POSTGRES_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: [path.join(__dirname, '/entities/*.ts')],
  migrations: [path.join(__dirname, '/migrations/*.ts')],
});
