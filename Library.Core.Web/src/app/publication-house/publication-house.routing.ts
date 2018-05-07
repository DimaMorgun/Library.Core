import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationHouseComponent } from './publication-house.component';

const routes: Routes = [
  { path: '', component: PublicationHouseComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
