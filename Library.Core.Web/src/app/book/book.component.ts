import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Book } from '../entities/book';
import { map } from 'rxjs/operators/map';
import { BookService } from '../services/book';
import { debug } from 'util';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  private bookService: BookService;
  private editedRowIndex: number;
  private editedBook: Book;

  constructor( @Inject(BookService) editServiceFactory: any) {
    this.bookService = editServiceFactory();
  }

  public ngOnInit(): void {
    this.view = this.bookService.pipe(map(data => process(data, this.gridState)));

    this.bookService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;

    this.bookService.read();
  }

  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);

    sender.addRow(new Book());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.bookService = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    this.bookService.save(dataItem, isNew);

    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.bookService = undefined;
  }

  public removeHandler({ dataItem }) {
    this.bookService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.bookService.resetItem(this.editedBook);
    this.editedRowIndex = undefined;
    this.bookService = undefined;
  }
}
