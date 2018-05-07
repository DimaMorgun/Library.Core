import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';

const routes: Routes = [
  { path: '', component: BookComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
