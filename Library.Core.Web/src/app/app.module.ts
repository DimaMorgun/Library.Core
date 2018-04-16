import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';

import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { PublicationHouseComponent } from './publication-house/publication-house.component';

const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'author', component: AuthorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    PublicationHouseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
