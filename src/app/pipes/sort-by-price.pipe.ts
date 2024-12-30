import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], order: string): any[] {
    if (!products || !order) return products;
    return products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
  }

}
