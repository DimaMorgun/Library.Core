import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { HomeComponent } from './home.component';

import { homeRouting } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    [homeRouting]
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
