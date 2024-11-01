import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('EVENT_SERVICE') private readonly client: ClientProxy) {}

  async emitEvent(data: any) {
    try {
      this.client.emit('consumer_event', { status: 'consumer - 3' }); // Emit an even
    } catch (error) {
      console.error('Error emitting event:', error);
    }
  }
}
