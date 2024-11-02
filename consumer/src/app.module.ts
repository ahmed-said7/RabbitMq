import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@mongo-three:27017'),
    ClientsModule.register([
      {
        name: 'EVENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://otydfhoi:W8Q0pYTVqjjMda00hYgpLsouGboNCX6O@shark.rmq.cloudamqp.com/otydfhoi',
          ],
          queue: 'event_11',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
