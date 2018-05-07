import { Injectable } from '@angular/core';
import{Task} from './task';

@Injectable()
export class TaskDataService {

  lastId: number = 0;
  tasks: Task[] = [];

  constructor() { }

  addTask(task: Task): TaskDataService {
    if(!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  deleteTaskById(id: number): TaskDataService {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
