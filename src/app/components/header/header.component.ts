import { Component } from '@angular/core';
import { Collapse } from 'bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentPage: string = '';

  
  // Fermer le menu après un clic sur un lien
  closeMenu() {
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse) {
      const bootstrapCollapse = new Collapse(navCollapse, {
        toggle: true, // Initialise le collapse
      });
      bootstrapCollapse.hide(); // Ferme le menu
    }
  }
}