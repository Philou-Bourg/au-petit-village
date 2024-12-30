import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: number | null = null;
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    // Récupére l'ID du produit depuis l'URL
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    
     // Charge les détails du produit si l'ID est valide
     if (this.productId) {
      this.loadProduct(this.productId);
    }
  }
  loadProduct(id: number): void {
    this.productsService.getProductById(id).subscribe((data: Product | undefined) => {
      if (data) {
        this.product = data;
        console.log('Produit chargé :', this.product);
      } else {
        this.product = null;
        console.warn('Produit non trouvé pour l\'ID:', id);
      }
    });
  }

}
