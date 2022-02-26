/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = process.env.ENDPOINT_PREFIX || 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.ADMIN_PORT || 3003;
  await app.listen(port);
  Logger.log(`Main-App running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
