import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUiZoomable]'
})
export class UiZoomableDirective {

  constructor() {
    // console.log(this)
  }

  @HostListener('mouseenter')
  zoomIn(){
    console.log('zoomIn')
  }

  @HostListener('mouseleave')
  zoomOut(){
    console.log('zoomOut')
  }

}
