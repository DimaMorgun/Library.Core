import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';

import { BookComponent } from './book/book.component';
import { BookService } from './services/book.service';
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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    GridModule,
    DropDownsModule
  ],
  providers: [
    {
      deps: [HttpClient],
      provide: BookService,
      useFactory: (jsonp: HttpClient) => () => new BookService(jsonp)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
