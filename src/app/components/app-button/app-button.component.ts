import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss',
})
export class AppButtonComponent {
  @HostListener('click')
  handleButtonClick() {
    alert('Button clicked!');
  }
}
