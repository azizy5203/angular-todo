import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from './components/tab-item/tab-item.component';
@Component({
  selector: 'tabs',
  imports: [CommonModule, TabItemComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  selectedTab: string = 'tab1';
  count: number = 0;

  increaseCount() {
    this.count++;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
