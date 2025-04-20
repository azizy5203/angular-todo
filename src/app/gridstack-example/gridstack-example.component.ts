import { Component } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import {
  GridstackComponent,
  GridstackItemComponent,
} from 'gridstack/dist/angular';
@Component({
  selector: 'gridstack-example',
  imports: [
    GridstackComponent,
    GridstackItemComponent,
    // FileUploaderFieldComponent,
  ],
  templateUrl: './gridstack-example.component.html',
  styleUrl: './gridstack-example.component.scss',
})
export class GridstackExampleComponent {
  public gridOptions: GridStackOptions = {
    margin: 10,
    column: 5,
    row: 2,
    alwaysShowResizeHandle: true,
    resizable: {
      // autoHide: false,
      handles: 'se, sw',
    },
    animate: true,
    handle: '.grid-stack-handle',
  };
  public items: GridStackWidget[] = [
    { x: 0, y: 0, id: '1', h: 2 }, // must have unique id used for trackBy
    { x: 1, y: 0, id: '2', w: 3 },
    { x: 4, y: 0, id: '3' },
    { x: 1, y: 1, id: '4' },
    { x: 2, y: 1, id: '5', w: 3 },
  ];
}
