import {
  Component,
  Input,
  input,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from '../../types/tasks.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-card',
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent implements OnInit {
  @Input() task!: Task;
  @Input() count!: any;
  @Output() load = new EventEmitter<string>();

  theme = input.required<'dark' | 'light'>();
  ngOnInit() {
    this.load.emit(this.task.title);
  }
  incrementCount() {
    this.count.set(this.count() + 1);
  }
}
