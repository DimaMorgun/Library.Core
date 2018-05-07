import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrochureComponent } from './brochure.component';

const routes: Routes = [
  { path: '', component: BrochureComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
