import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @EventPattern('hello_event')
  async handleUserEvent(@Payload() data: any) {
    console.log('Received event:', data);
    // Here you can add your logic to handle the event
    // For example, you can save the data to a database or perform any other required operation
  }
}
