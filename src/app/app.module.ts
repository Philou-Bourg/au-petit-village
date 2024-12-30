import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,     // Composant pour le header
    FooterComponent,     // Composant pour le footer
    HomeComponent,       // Composant pour la page d'accueil
    AboutComponent,      // Composant pour la page "À propos"
    ProductComponent,    // Composant pour la page de détail des produits
    SortByPricePipe,     // Autres composants/pipes
    FilterByNamePipe, ContactComponent,    // Autres composants/pipes
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'LOCALE_ID', useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
