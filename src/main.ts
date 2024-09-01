import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import { SessionStore } from '~middleware';
import { AppModule } from './app.module';

declare const module: any;

const { SERVER_PORT, SESSION_SECRET } = process.env;

const { sessionStore } = new SessionStore();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      store: sessionStore,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
      },
    }),
  );

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('PROJECTNAME')
    .setDescription('A server for PROJECTNAME')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(async () => {
      await app.close();
    });
  }
}
bootstrap().catch(console.error);
