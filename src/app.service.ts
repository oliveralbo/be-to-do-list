import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Ticmas ToDoList NESTJS backend runnig ok';
  }
}
