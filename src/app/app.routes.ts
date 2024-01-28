import { Routes } from '@angular/router';
import { AceuilComponent } from './aceuil/aceuil.component';
import { GalerieComponent } from './galerie/galerie.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AceuilComponent },
  { path: 'galerie', component: GalerieComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];
