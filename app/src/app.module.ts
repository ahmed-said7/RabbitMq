import { Module } from '@nestjs/common';
// import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@mongo-one:27017/app'),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'EVENT_SERVICE',
      useValue: ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://otydfhoi:W8Q0pYTVqjjMda00hYgpLsouGboNCX6O@shark.rmq.cloudamqp.com/otydfhoi',
          ],
          queue: 'event_12', // Define your queue name
          // noAck: false,
          queueOptions: {
            durable: true,
          },
        },
      }),
    },
  ], // Include the listener service
})
export class AppModule {}
