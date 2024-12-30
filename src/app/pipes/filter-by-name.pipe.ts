import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products; // Si aucun terme de recherche, retourne tous les produits
    }
    searchTerm = searchTerm.toLowerCase(); // Met le terme de recherche en minuscules
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
  }

}
