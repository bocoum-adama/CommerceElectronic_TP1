import {Component, signal} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {FooterComponent} from "../footer/footer.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-aceuil',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './aceuil.component.html',
  styleUrl: './aceuil.component.css'
})
export class AceuilComponent {

  modifications: string[] = ['Deploiment initial --> 20/01/2024',
    'Ajout du menu et restructure de la page d accueil initial --> 25/01/2024',
    'Ajout de la page galerie  --> 27/01/2024']; // Remplir avec des données de journal
  cip: string = 'boca2901'; // Remplacer par votre CIP
  contactName = '';
  contactEmail = '';
  contactMessage = '';

  onSubmitContact() {
    const contactData = {
      name: this.contactName,
      email: this.contactEmail,
      message: this.contactMessage
    };
    console.log('Données du formulaire de contact :', contactData);
    // Ajoutez ici la logique pour traiter les données de contact
  }
  constructor() {
    // Logique pour récupérer les modifications et le CIP
  }
}
