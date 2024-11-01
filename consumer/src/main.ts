import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { } from '@nestjs/microservices';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Start the microservice (for emitting events)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        // 'http://localhost:15672',
        'amqps://otydfhoi:W8Q0pYTVqjjMda00hYgpLsouGboNCX6O@shark.rmq.cloudamqp.com/otydfhoi',
      ],
      queue: 'event_12',
      // noAck: false,
      queueOptions: {
        durable: true,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001); // Start the main application server
}

bootstrap();
