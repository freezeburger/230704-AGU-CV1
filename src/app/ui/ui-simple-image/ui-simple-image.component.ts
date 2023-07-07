import { Component, Input } from '@angular/core';
import { ImageUrl } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-ui-simple-image',
  templateUrl: './ui-simple-image.component.html',
  styleUrls: ['./ui-simple-image.component.scss']
})
export class UiSimpleImageComponent {
  @Input() imageUrl!: ImageUrl;
}
