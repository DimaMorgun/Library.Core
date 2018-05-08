import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { MagazineService } from '../services/magazine.service';
import { MagazineComponent } from './magazine.component';

import { routing } from './magazine.routing';

@NgModule({
  declarations: [
    MagazineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    [routing]
  ],
  providers: [MagazineService],
  bootstrap: [MagazineComponent]
})
export class MagazineModule { }
