import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  config: { [key: string]: string } | null  = null;

  taskName: string = "";
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
  ];

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: '© ARW',
        date: new Date().toDateString(),
      };
    }, 500);
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: '2020-02-02',
      done: false,
    };
    this.tasks.push(task);
  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }

}
