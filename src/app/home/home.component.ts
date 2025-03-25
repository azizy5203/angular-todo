import { Component } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import { GridstackComponent, GridstackItemComponent } from 'gridstack/dist/angular';

@Component({
  selector: 'home',
  imports: [GridstackComponent,
    GridstackItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public gridOptions: GridStackOptions = {
    margin: 20,
    column: 5,
    row: 1,
    alwaysShowResizeHandle: true,
    resizable: {
      // autoHide: false,
      handles: 'se, sw'
    },
    animate: true, handle: ".grid-stack-item"
  };
  public items: GridStackWidget[] = [
    { x: 0, y: 0, id: '1' }, // must have unique id used for trackBy
    { x: 1, y: 0, id: '2' },
    { x: 0, y: 1, id: '3' },
  ];
}
