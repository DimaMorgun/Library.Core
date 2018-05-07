import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'book', loadChildren: 'app/book/book.module#BookModule' },
  { path: 'author', loadChildren: 'app/author/author.module#AuthorModule' },
  { path: 'publication-house', loadChildren: 'app/publication-house/publication-house.module#PublicationHouseModule' },
  { path: 'magazine', loadChildren: 'app/magazine/magazine.module#MagazineModule' },
  { path: 'brochure', loadChildren: 'app/brochure/brochure.module#BrochureModule' },
  { path: 'all-publications', loadChildren: 'app/all-publications/all-publications.module#AllPublicationsModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
