import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle')
  color = 'blue';

  @Input()
  dStyles: { border?: string, fontWeight?: string, borderRadius?: string };

  @HostBinding('style.color')
  elColor = null;

  constructor(private elRef: ElementRef, private  r: Renderer2) {
  }

  @HostListener('click', ['$event.target'])
  onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter')
  onEnter(event: Event) {
    this.elColor = this.color;
    /* this.r.setStyle(this.elRef.nativeElement, 'color', this.color);
     this.r.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
     this.r.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
     this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);*/

  }

  @HostListener('mouseleave')
  onLeave(event: Event) {
    this.elColor = null;
    /* this.r.setStyle(this.elRef.nativeElement, 'color', null);
     this.r.setStyle(this.elRef.nativeElement, 'fontWeight', null);
     this.r.setStyle(this.elRef.nativeElement, 'borderRadius', null);
     this.r.setStyle(this.elRef.nativeElement, 'border', null);*/
  }
}
