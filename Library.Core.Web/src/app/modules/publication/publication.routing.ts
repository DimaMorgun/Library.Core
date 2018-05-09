import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPublicationsComponent } from './all-publications/all-publications.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { BrochureComponent } from './brochure/brochure.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PublicationHouseComponent } from './publication-house/publication-house.component';

const publicationRoutes: Routes = [
  { path: 'publication', component: AllPublicationsComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'book', component: BookComponent },
  { path: 'brochure', component: BrochureComponent },
  { path: 'magazine', component: MagazineComponent },
  { path: 'publication-house', component: PublicationHouseComponent }
];

export const publicationRouting: ModuleWithProviders = RouterModule.forChild(publicationRoutes);
