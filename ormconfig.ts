import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

export const ormconfig: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: 'projektnotatki.postgres.database.azure.com',
  port: 5432,
  username: 'kumos@projektnotatki',
  password: 'BGT%6yhn',
  database: 'postgres',
  synchronize: false,
  cache: false,
  logger: 'debug',
  migrations: ['dist/migrations/**/*.js'],
  entities: [join(__dirname, '**', '*.entity.js')],
  migrationsTableName: 'migrations',
};
