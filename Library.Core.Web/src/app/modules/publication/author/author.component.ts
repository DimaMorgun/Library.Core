import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { State, process } from '@progress/kendo-data-query';

import { AuthorService } from '../../../services/author.service';

import { Author } from '../../../entities/author';
import { Book } from '../../../entities/book';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {
  private editedRowIndex: number;
  private editedAuthor: Author;

  public authors: Author[] = [];
  private allBooks: Book[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private authorService: AuthorService) {
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
    this.editedAuthor = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.authorService.postAuthor(dataItem).subscribe(data => this.refresh());
    }
    if (!isNew) {
      this.authorService.putAuthor(dataItem).subscribe(data => this.refresh());
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedAuthor = undefined;
  }

  public removeHandler({ dataItem }) {
    this.authorService.deleteAuthor(dataItem.authorId).subscribe(data => this.refresh());
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.refresh();
    this.editedRowIndex = undefined;
    this.editedAuthor = undefined;
  }

  private refresh() {
    this.authorService.getAuthor().subscribe(data => {
      this.authors = data.authors;
      this.allBooks = data.allBooks;
    });
  }
}
