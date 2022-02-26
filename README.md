# Nx-Nest-Micro Service Demo

This project is using [Nx](https://nx.dev) and [Nest](https://nestjs.com/).

## Main Features

- Mono-repo architecture - NRWL/NX based implementation.
- 2 Stub Nest JS projects - Admin and Sub, with REST api endpoints - Microservice capabilities added.
- 1 Library project - Allowing abstraction of common modules/components/functionality to be used as shared feature.
- RabbitMQ event published(emitted/subscribed) - high (controller) level communication - using NestJS ClientProxy.
- NestJS - TypeORM integrations - fully customizable db integrations - show cased - MongoDB(and mongoose)/MySQL connection as POC.
- Switch between Express/Fastify as needed.
  Open for further scaling/improvement, us as is and extend further or implement your own flavor like this.

## How to start

> clone this repository and run following command

> `npm start`

That's it

### Screenshots

> Micro Service In Action

![Micro Service In Action](https://github.com/nbaua/nx-nest-microservice/blob/main/screenshot/RabbitMQ_Event.PNG?raw=true 'Rabbit MQ Console Preview')

> Running The Projects

![Running The Projects](https://github.com/nbaua/nx-nest-microservice/blob/main/screenshot/Project_Startup.PNG?raw=true 'Both Main and Sub Projects Running')
