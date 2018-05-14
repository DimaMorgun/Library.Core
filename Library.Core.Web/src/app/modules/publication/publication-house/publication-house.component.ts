import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { State, process } from '@progress/kendo-data-query';

import { PublicationHouseService } from '../../../services/publication-house.service';

import { PublicationHouse } from '../../../entities/publication-house';
import { Book } from '../../../entities/book';

@Component({
  selector: 'app-publication-house',
  templateUrl: './publication-house.component.html',
  styleUrls: ['./publication-house.component.css']
})

export class PublicationHouseComponent implements OnInit {
  private editedRowIndex: number;
  private editedPublicationHouse: PublicationHouse;

  public publicationHouses: PublicationHouse[] = [];
  private allBooks: Book[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private publicationHouseService: PublicationHouseService) {
  }

  public ngOnInit(): void {
    this.refresh();
  }

  public onStateChange(state: State) {
    this.gridState = state;
  }

  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);

    sender.addRow(new PublicationHouse());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedPublicationHouse = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.publicationHouseService.postPublicationHouse(dataItem).subscribe(data => this.refresh());
    }
    if (!isNew) {
      this.publicationHouseService.putPublicationHouse(dataItem).subscribe(data => this.refresh());
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedPublicationHouse = undefined;
  }

  public removeHandler({ dataItem }) {
    this.publicationHouseService.deletePublicationHouse(dataItem.id).subscribe(data => this.refresh());
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.refresh();
    this.editedRowIndex = undefined;
    this.editedPublicationHouse = undefined;
  }

  private refresh() {
    this.publicationHouseService.getPublicationHouse().subscribe(data => {
      this.publicationHouses = data.publicationHouses;
      this.allBooks = data.allBooks;
    });
  }
}
