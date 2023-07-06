import { Component, Input } from '@angular/core';
import { Rating } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-ui-rating',
  templateUrl: './ui-rating.component.html',
  styleUrls: ['./ui-rating.component.scss']
})
export class UiRatingComponent {

  @Input() note:Rating = 0;
  maximum = 5;

}
