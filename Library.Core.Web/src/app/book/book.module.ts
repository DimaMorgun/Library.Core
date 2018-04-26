import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { BookService } from '../services/book.service';
import { BookComponent } from '../book/book.component';

@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    GridModule,
    DropDownsModule
  ],
  providers: [BookService],
  bootstrap: [BookComponent]
})
export class BookModule { }
