import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // {
  // transport: Transport.RMQ,
  // options: {
  //   urls: [
  //     'amqps://otydfhoi:W8Q0pYTVqjjMda00hYgpLsouGboNCX6O@shark.rmq.cloudamqp.com/otydfhoi',
  //   ],
  //   queue: 'event_11',
  //   // noAck: false,
  //   queueOptions: {
  //     durable: true,
  //   },
  // },
  // }
  // // Start the microservice (for emitting events)
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://otydfhoi:W8Q0pYTVqjjMda00hYgpLsouGboNCX6O@shark.rmq.cloudamqp.com/otydfhoi',
      ],
      queue: 'event_11',
      // noAck: false,
      queueOptions: {
        durable: true,
      },
    },
  });
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [
  //       // 'http://localhost:15672',
  //       'amqps://otydfhoi:W8Q0pYTVqjjMda00hYgpLsouGboNCX6O@shark.rmq.cloudamqp.com/otydfhoi',
  //     ],
  //     queue: 'event_13',
  //     // noAck: false,
  //     queueOptions: {
  //       durable: true,
  //     },
  //   },
  // });
  // app.connectMicroservice({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [
  //       'amqps://otydfhoi:W8Q0pYTVqjjMda00hYgpLsouGboNCX6O@shark.rmq.cloudamqp.com/otydfhoi',
  //     ],
  //     queue: 'event_12',
  //     // noAck: false,
  //     queueOptions: {
  //       durable: true,
  //     },
  //   },
  // });

  await app.startAllMicroservices(); // Start the microservice
  await app.listen(3000); // Start the main application server
  // app.listen(); // Start the main application server
}

bootstrap();
