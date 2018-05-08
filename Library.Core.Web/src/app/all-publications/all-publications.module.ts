import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AllPublicationsService } from '../services/all-publications';
import { AllPublicationsComponent } from './all-publications.component';

import { routing } from './all-publications.routing';

@NgModule({
  declarations: [
    AllPublicationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    [routing]
  ],
  providers: [AllPublicationsService],
  bootstrap: [AllPublicationsComponent]
})
export class AllPublicationsModule { }
