import { Component } from '@angular/core';
import { CommonModule ,DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'home',
  imports: [
    CommonModule,
    FormsModule,
    DatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  dialogOpen = false;
  formValues={
    name: '',
    email: '',
    password: '',
  }
  userDate = new Date();

  openDialog() {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }
}
