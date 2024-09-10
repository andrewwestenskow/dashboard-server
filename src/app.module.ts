import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '~modules/auth';
import { TasksModule } from '~modules/tasks/tasks.module';
import { PostgresConfigService } from '~services/postgres.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
    }),
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}
