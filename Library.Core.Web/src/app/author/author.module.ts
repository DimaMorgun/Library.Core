import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AuthorService } from '../services/author.service';
import { AuthorComponent } from './author.component';

import { routing } from './author.routing';

@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    [routing]
  ],
  providers: [AuthorService],
  bootstrap: [AuthorComponent]
})
export class AuthorModule { }
