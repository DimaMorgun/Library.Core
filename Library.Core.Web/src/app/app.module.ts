import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app.routing';
import { BookModule } from './book/book.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    HttpClientModule,
    RoutingModule,
    BookModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
