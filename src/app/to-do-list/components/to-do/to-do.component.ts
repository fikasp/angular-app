import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  taskName = 'Przykładowe zadanie'
  taskDate = new Date().toDateString()

  config: { [key: string]: string } | null  = null;

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: true,
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
        footer: '© ARWcode',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks()
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks()
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks()
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task)
    this.sortTasks()
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
    a.done === b.done ? 0 : a.done ? 1 : -1)
  }

}
