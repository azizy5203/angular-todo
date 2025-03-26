import { Component } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import { GridstackComponent, GridstackItemComponent } from 'gridstack/dist/angular';
import { FileUploaderFieldComponent } from "../../components/forms/file-uploader-field/file-uploader-field.component";

@Component({
  selector: 'home',
  imports: [GridstackComponent,
    GridstackItemComponent, FileUploaderFieldComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public gridOptions: GridStackOptions = {
    margin: 10,
    column: 5,
    row: 2,
    alwaysShowResizeHandle: true,
    resizable: {
      // autoHide: false,
      handles: 'se, sw'
    },
    animate: true, handle: ".grid-stack-item"
  };
  public items: GridStackWidget[] = [
    { x: 0, y: 0, id: '1',h:2 }, // must have unique id used for trackBy
    { x: 1, y: 0, id: '2',w:3 },
    { x: 4, y: 0, id: '3' },
    { x: 1, y: 1, id: '4' },
    { x: 2, y: 1, id: '5',w:3 },
  ];
}
