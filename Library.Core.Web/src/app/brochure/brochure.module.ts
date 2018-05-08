import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { BrochureService } from '../services/brochure.service';
import { BrochureComponent } from './brochure.component';

import { routing } from './brochure.routing';

@NgModule({
  declarations: [
    BrochureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    [routing]
  ],
  providers: [BrochureService],
  bootstrap: [BrochureComponent]
})
export class BrochureModule { }
