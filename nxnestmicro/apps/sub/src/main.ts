/**
 * This is not a production server yet!nil
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = process.env.ENDPOINT_PREFIX || 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.SUB_PORT || 3033;
  await app.listen(port);
  Logger.log(`Sub-App is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
