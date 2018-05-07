import { Component } from '@angular/core';
import {Task} from './task';
import {TaskDataService} from './taskData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskDataService]
})
export class AppComponent {

  newTask: Task = new Task();

  constructor(private taskDataService: TaskDataService ){}


  addTask() {
    this.taskDataService.addTask(this.newTask);
    this.newTask = new Task();
    console.log(JSON.stringify(this.tasks));
  }

  removeTask(task) {
    this.taskDataService.deleteTaskById(task.id);
  }

  get tasks() {
    return this.taskDataService.getAllTasks();
  }
}
