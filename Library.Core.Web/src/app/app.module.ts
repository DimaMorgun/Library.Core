import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { PublicationHouseModule } from './publication-house/publication-house.module';
import { MagazineModule } from './magazine/magazine.module';
import { BrochureModule } from './brochure/brochure.module';
import { AllPublicationsModule } from './all-publications/all-publications.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    BookModule,
    AuthorModule,
    PublicationHouseModule,
    MagazineModule,
    BrochureModule,
    AllPublicationsModule,
    [routing]
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
