import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule' },
  { path: 'publication', loadChildren: 'app/modules/publication/publication.module#PublicationModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
