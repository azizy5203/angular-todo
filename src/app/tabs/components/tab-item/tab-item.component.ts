import { Component } from '@angular/core';

@Component({
  selector: 'tab-item',
  imports: [],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.scss',
})
export class TabItemComponent {
  counter: number = 0;
  increadsed() {
    this.counter++;
  }
}
