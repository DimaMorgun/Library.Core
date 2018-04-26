import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class RoutingModule { }
