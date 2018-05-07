import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazineComponent } from './magazine.component';

const routes: Routes = [
  { path: '', component: MagazineComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
