import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { State, process } from '@progress/kendo-data-query';

import { AuthorService } from '../services/author.service';

import { Author } from '../entities/author';
import { Book } from '../entities/book';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  private athorService: AuthorService;
  private editedRowIndex: number;
  private editedAutor: Author;

  public authors: Author[] = [];
  private allBooks: Book[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor( @Inject(AuthorService) editServiceFactory: any) {
    this.athorService = editServiceFactory();
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

    sender.addRow(new Author());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedAutor = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.athorService.createAuthor(dataItem).subscribe(data => this.refresh());
    }
    if (!isNew) {
      this.athorService.updateAuthor(dataItem).subscribe(data => this.refresh());
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedAutor = undefined;
  }

  public removeHandler({ dataItem }) {
    this.athorService.deleteAuthor(dataItem.authorId).subscribe(data => this.refresh());
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.refresh();
    this.editedRowIndex = undefined;
    this.editedAutor = undefined;
  }

  private refresh() {
    this.athorService.getAuthors().subscribe(data => {
      this.authors = data.authors;
      this.allBooks = data.allBooks;
    });
  }
}
