import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  create(createTaskInput: CreateTaskInput): Promise<Task> {
    const task = this.tasksRepository.create(createTaskInput);
    return this.tasksRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: string): Promise<Task> {
    return this.tasksRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, updateTaskInput: UpdateTaskInput): Promise<Task> {
    await this.tasksRepository.update(id, updateTaskInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Task> {
    const task = await this.findOne(id);
    await this.tasksRepository.remove(task);
    return task;
  }
}
