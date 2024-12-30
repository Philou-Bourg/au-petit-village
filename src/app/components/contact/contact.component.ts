import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    lastName: '',
    firstName: '',
    email: '',
    comment: '',
  };

  onSubmit() {
    console.log('Formulaire envoyé :', this.contact);
    alert('Votre message a été envoyé avec succès !');
    // Réinitialiser le formulaire
    this.contact = {
      lastName: '',
      firstName: '',
      email: '',
      comment: '',
    };
  }
}

  