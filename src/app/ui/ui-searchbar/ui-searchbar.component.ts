import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ui-searchbar',
  templateUrl: './ui-searchbar.component.html',
  styleUrls: ['./ui-searchbar.component.scss']
})
export class UiSearchbarComponent {

  @Output() search = new EventEmitter<string>();

  term = '';

}
