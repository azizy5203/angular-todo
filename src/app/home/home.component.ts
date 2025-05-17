import { Component, computed,inject } from '@angular/core';
import { CommonModule ,DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { AppButtonComponent } from '../components/app-button/app-button.component';
@Component({
  selector: 'home',
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    AppButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {


  private dataService = inject(DataService);


  results = computed(()=> this.dataService.data() * 2)

  addData() {
    this.dataService.increment();
  }

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
