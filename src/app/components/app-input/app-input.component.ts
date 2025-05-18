import { Component, ContentChild, ElementRef, AfterContentInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.scss',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'hoster',
    '[attr.data-testid]': 'label'
  }
})
export class AppInputComponent implements AfterContentInit {
  @Input() label!: string;
  @Input() id: string = `input-${Math.random().toString(36).substr(2, 9)}`;

  @ContentChild('input', { read: ElementRef }) inputRef?: ElementRef;
  @ContentChild('textarea', { read: ElementRef }) textareaRef?: ElementRef;

  ngAfterContentInit() {
    if (this.inputRef) {
      this.inputRef.nativeElement.id = this.id;
    }
    if (this.textareaRef) {
      this.textareaRef.nativeElement.id = this.id;
    }
  }
}
