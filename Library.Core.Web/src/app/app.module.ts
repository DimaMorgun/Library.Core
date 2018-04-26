import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { PublicationHouseComponent } from './publication-house/publication-house.component';

import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'author', component: AuthorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    AuthorComponent,
    PublicationHouseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    GridModule,
    DropDownsModule
  ],
  providers: [
    BookService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
