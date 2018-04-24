import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Book } from '../entities/book';
import { map } from 'rxjs/operators/map';
import { BookService } from '../services/book.service';
import { debug } from 'util';
import { Author } from '../entities/author';
import { PublicationHouse } from '../entities/publicationHouse';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public view: Observable<GridDataResult>;
  private bookService: BookService;
  private editedRowIndex: number;
  private editedBook: Book;
  public books: Book[];
  private allAuthors: Author[] = [];
  private allPublicationHouses: PublicationHouse[] = [];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor( @Inject(BookService) editServiceFactory: any) {
    this.bookService = editServiceFactory();
    this.books = new Array();
  }

  public ngOnInit(): void {
    this.view = this.bookService.pipe(map(data => process(data, this.gridState)));
    this.bookService.getBooks().subscribe(data => {
      this.books = data.books;
    })
    this.bookService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;

    this.bookService.read();
  }

  public addHandler({ sender }, formInstance) {
    this.allAuthors = this.bookService.allAuthors;
    this.allPublicationHouses = this.bookService.allPublicationHouses;

    formInstance.reset();
    this.closeEditor(sender);

    sender.addRow(new Book());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.allAuthors = this.bookService.allAuthors;
    this.allPublicationHouses = this.bookService.allPublicationHouses;

    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedBook = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    this.bookService.save(dataItem, isNew);

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedBook = undefined;
  }

  public removeHandler({ dataItem }) {
    var book = new Book();
    book.bookId = dataItem.bookId;
    this.bookService.remove(book);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.bookService.resetItem(this.editedBook);
    this.editedRowIndex = undefined;
    this.editedBook = undefined;
  }
}
