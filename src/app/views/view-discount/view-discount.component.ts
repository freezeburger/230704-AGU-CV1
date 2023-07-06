import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-discount',
  templateUrl: './view-discount.component.html',
  styleUrls: ['./view-discount.component.scss']
})
export class ViewDiscountComponent implements OnInit, OnChanges, OnDestroy {

  // Component LifeCycle

  constructor(){
    console.warn('1. Creation : ViewDiscountComponent')
  }

  ngOnInit(){
    console.warn('2. DOM Insertion : ViewDiscountComponent')
  }

  ngOnChanges(){
    console.warn('3. Evolution : ViewDiscountComponent')
  }

  ngOnDestroy(){
    console.warn('4. DOM Suppression : ViewDiscountComponent')
  }
}
