import { Pipe, PipeTransform } from '@angular/core';
import { ProductPreview } from '../core/interfaces/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( products:ProductPreview[], text:string):ProductPreview[] {
    if(!text) return products;

    return products.filter( p => p.title.toLowerCase().includes(text))
  }

}
