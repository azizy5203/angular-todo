import { Component, ContentChild, ElementRef, AfterContentInit, Input, ViewEncapsulation, HostBinding, inject, HostListener, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.scss',

})
export class AppInputComponent {
  @Input() label!: string;
  @Input() id: string = `input-${Math.random().toString(36).substr(2, 9)}`;

  private el  = inject(ElementRef);

  @HostListener('click') onClick() {
    console.log('clicked',this.el.nativeElement);
    this.label = 'clicked';
  }

  @HostBinding("class") className: string = 'hosterddddddddddddddd';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes',changes);
  }
}
