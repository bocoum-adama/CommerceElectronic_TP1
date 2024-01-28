import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FooterComponent,
    MenuComponent
  ],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {

  selectedImage: any = null;
  otherImages = [
    { url: './assets/images/Einyvrsgtheirgtvn3.png', description: 'Description de l\'image 1' },
    { url: './assets/images/Einyvrsgtheirgtvn5.png', description: 'Description de l\'image 2' },
    { url: './assets/images/Einyvrsgtheirgtvn4.png', description: 'Description de l\'image 3' },
    { url: './assets/images/Einyvrsgtheirgtvn1.png', description: 'Description de l\'image 4' }
    // Ajoutez d'autres images selon le besoin
  ];
}
