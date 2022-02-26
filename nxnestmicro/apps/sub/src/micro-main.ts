/**
 * This is not a production server yet!nil
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:15672'],
        queue: 'main_queue',
        queueOptions: {
          durable: true,
        },
      },
    }
  );
  await app.listen().then(() => {
    console.log('Main-App Microservice is listening');
    Logger.log(`Main-App Microservice is running on: http://localhost:15672`);
  });
}

bootstrap();
