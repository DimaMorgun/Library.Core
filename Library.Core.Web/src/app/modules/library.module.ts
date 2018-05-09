import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { PublicationModule } from './publication/publication.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    PublicationModule
  ]
})
export class LibraryModule { }
