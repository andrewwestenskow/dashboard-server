import { Controller, Get, UseGuards } from '@nestjs/common';
import { SuccessResponse } from '~responses/success.response';
import { TasksService } from './tasks.service';

@Controller('tasks')
@UseGuards()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('')
  async getUpcomingTasks() {
    return new SuccessResponse('Hello there');
  }
}
