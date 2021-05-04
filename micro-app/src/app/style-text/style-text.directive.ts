import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleText]',
})
export class StyleTextDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const domElement = this.elementRef.nativeElement;

    const allStyles = {
      'background-color': 'bisque',
      padding: '6px',
      'border-radius': '10px',
      color: 'darkslategrey',
      'text-align': 'center',
      marginTop: '5px',
    };

    Object.keys(allStyles).forEach((styleName) => {
      this.renderer.setStyle(domElement, styleName, allStyles[styleName]);
    });
  }
}
