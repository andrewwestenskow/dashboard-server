import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from '~entities/user.entity';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'postgres',
      port: +process.env.POSTGRES_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [User],
    };
  }
}
