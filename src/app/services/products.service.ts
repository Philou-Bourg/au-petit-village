// src/app/services/products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// Interface pour définir la structure d'un produit
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  details?: { // La propriété "details"
    material?: string; //  matériau du produit
    height?: string;   //  hauteur
    weight?: string;   //  poids
  };
}

@Injectable({
  providedIn: 'root' // rend le service disponible globalement
})
export class ProductsService {

  // Données de produits (via le fichier JSON dans le répertoire assets)
  private jsonUrl = 'assets/products.json';
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les produits
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  // Méthode pour récupérer un produit par son ID
  getProductById(id: number): Observable<Product | undefined> {
    return this.getAllProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }
}