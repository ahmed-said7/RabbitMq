import { Controller, Get, Inject } from '@nestjs/common';
// import { AppService } from './app.service';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('EVENT_SERVICE') private readonly client: ClientProxy) {}
  @EventPattern('user_event')
  async handleUserEvent(@Payload() data: any) {
    try {
      console.log('Received user_event:', data);
      // const channel = context.getChannelRef();
      // const originalMsg = context.getMessage();

      // Process your data here
      // Ensure no errors are thrown that prevent acknowledgment

      // channel.ack(originalMsg); // Acknowledge the message
    } catch (error) {
      console.error('Error handling user_event:', error);
      // Optionally, you can also negatively acknowledge the message
      // context.getChannelRef().nack(context.getMessage(), false, false); // Reject the message without requeueing
    }
  }
  @Get()
  get() {
    this.client.emit('hello_event', { data: 'ahmed hello' });
    return 'Hello World!';
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
