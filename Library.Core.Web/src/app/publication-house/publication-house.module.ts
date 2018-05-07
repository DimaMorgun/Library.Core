import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

//import { BookService } from '../services/book.service';
import { PublicationHouseComponent } from './publication-house.component';

import { routing } from './publication-house.routing';

@NgModule({
  declarations: [
    PublicationHouseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    [routing]
  ],
  //providers: [BookService],
  bootstrap: [PublicationHouseComponent]
})
export class PublicationHouseModule { }
