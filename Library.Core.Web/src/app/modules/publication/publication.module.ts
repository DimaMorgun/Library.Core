import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { publicationRouting } from './publication.routing';

import { AllPublicationsService } from '../../services/all-publications';
import { AllPublicationsComponent } from './all-publications/all-publications.component';
import { PublicationHouseService } from '../../services/publication-house.service';
import { PublicationHouseComponent } from './publication-house/publication-house.component';
import { AuthorService } from '../../services/author.service';
import { AuthorComponent } from './author/author.component';
import { BookService } from '../../services/book.service';
import { BookComponent } from './book/book.component';
import { BrochureService } from '../../services/brochure.service';
import { BrochureComponent } from './brochure/brochure.component';
import { MagazineService } from '../../services/magazine.service';
import { MagazineComponent } from './magazine/magazine.component';


@NgModule({
  declarations: [
    AllPublicationsComponent,
    PublicationHouseComponent,
    AuthorComponent,
    BookComponent,
    BrochureComponent,
    MagazineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    [publicationRouting]
  ],
  providers: [
    AllPublicationsService,
    PublicationHouseService,
    AuthorService,
    BookService,
    BrochureService,
    MagazineService
  ],
  bootstrap: [
    AllPublicationsComponent,
    PublicationHouseComponent,
    AuthorComponent,
    BookComponent,
    BrochureComponent,
    MagazineComponent
  ]
})
export class PublicationModule { }
