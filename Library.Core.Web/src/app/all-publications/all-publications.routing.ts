import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPublicationsComponent } from './all-publications.component';

const routes: Routes = [
  { path: '', component: AllPublicationsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
