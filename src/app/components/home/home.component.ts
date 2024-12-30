// src/app/components/home/home.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('productsSection') productsSection!: ElementRef;  // Référence à la section des produits
  products: Product[] = []; // Tableau pour stocker les produits
  searchTerm: string = ''; // Terme de recherche
  sortOrder: 'asc' | 'desc' = 'asc'; // Ordre de tri par défaut

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts(); // Charge les produits lorsque le composant est initialisé
  }

  // Méthode pour récupérer les produits via le service
  loadProducts(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
   // Méthode pour changer l'ordre de tri
   setSortOrder(order: 'asc' | 'desc'): void {
    this.sortOrder = order;
  }
  // Méthode pour faire défiler jusqu'à la section des produits
  scrollToProducts(): void {
    this.productsSection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}