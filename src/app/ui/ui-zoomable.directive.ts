import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUiZoomable]'
})
export class UiZoomableDirective {

  @HostBinding('style.transition') transition = 'transform 0.5s ease';
  @HostBinding('style.transform') transform ='scale(1)';

  constructor() {
    // console.log(this)
  }

  @HostListener('mouseenter')
  zoomIn(){
    // console.log('zoomIn')
    this.transform ='scale(1.1)';
  }

  @HostListener('mouseleave')
  zoomOut(){
    // console.log('zoomOut')
    this.transform ='scale(1)';
  }

}
