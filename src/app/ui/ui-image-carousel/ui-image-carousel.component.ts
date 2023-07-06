import { Component, HostListener, Input } from '@angular/core';
import { ImageUrl } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-ui-image-carousel',
  templateUrl: './ui-image-carousel.component.html',
  styleUrls: ['./ui-image-carousel.component.scss']
})
export class UiImageCarouselComponent {
  @Input() public images:ImageUrl[] = [
    'https://placehold.co/500x250',
    'https://placehold.co/500x250/000/FFF',
    'https://placehold.co/500x250/F00/FFF'
  ]

  index= 0;
  leftPos = 0;

  @HostListener('click')
  slide(){
    this.index++;
    if(this.index >= this.images.length ) this.index = 0;
    this.leftPos = 0 - this.index * 500;
  }
}
