import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appStyleText]',
})
export class StyleTextDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.cssText = `
      background-color: bisque;
      padding: 6px;
      border-radius: 10px;
      color: darkslategrey;
      text-align: center`;
  }
}
