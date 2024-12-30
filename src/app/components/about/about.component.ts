import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  companyHistory: string = `
    Fondée en 2018, "Au petit village" est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix.
    Elle a commencé avec une petite boutique spécialisée dans les figurines rares.
    Avec plus de 8 ans d'expérience, nous sommes fiers d'offrir des produits de qualité à nos clients passionnés.
    Notre mission est de fournir une expérience exceptionnelle tout en partageant notre amour pour les figurines.
  `;

  companyMission: string = 'Faire bénéficier à nos clients de la qualité de nos produits exceptionnels des célèbres Gaulois.';
  vision: string = 'Nous aspirons à être les leaders du marché en matière d\'innovation et de satisfaction client.';
}