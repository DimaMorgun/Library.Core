import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { State, process } from '@progress/kendo-data-query';

import { BookService } from '../../../services/book.service';

import { Book } from '../../../entities/book';
import { Author } from '../../../entities/author';
import { PublicationHouse } from '../../../entities/publication-house';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  private editedRowIndex: number;
  private editedBook: Book;

  public books: Book[] = [];
  private allAuthors: Author[] = [];
  private allPublicationHouses: PublicationHouse[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private bookService: BookService) {
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

    sender.addRow(new Book());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedBook = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) {
      this.bookService.postBook(dataItem).subscribe(data => this.refresh());
    }
    if (!isNew) {
      this.bookService.putBook(dataItem).subscribe(data => this.refresh());
    }

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedBook = undefined;
  }

  public removeHandler({ dataItem }) {
    this.bookService.deleteBook(dataItem.bookId).subscribe(data => this.refresh());
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.refresh();
    this.editedRowIndex = undefined;
    this.editedBook = undefined;
  }

  private refresh() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data.books;
      this.allAuthors = data.allAuthors;
      this.allPublicationHouses = data.allPublicationHouses;
    });
  }
}
