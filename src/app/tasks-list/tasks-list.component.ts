import { Component, signal, effect } from '@angular/core';
import tasks from './tasks';
import { Task } from './types/tasks.type';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './components/task-card/task-card.component';
@Component({
  selector: 'tasks-list',
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  count = signal(4);

  constructor() {
    effect(() => console.log('count is', this.count()));
  }

  get tasksList(): Task[] {
    return tasks;
  }

  updateCount(val: number) {
    this.count.set(val);
  }
  logData(val: string) {
    console.log(val);
  }
}
