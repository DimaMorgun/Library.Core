import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book';
import { Book } from '../entities/book';
import { products } from './products';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})

export class BookComponent implements OnInit {

  constructor(private _bookService: BookService) { }
  book: Book = new Book();
  books: Book[];
  tableMode: boolean = true;
  public gridData: any[] = products;

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this._bookService.getBook()
      .subscribe((data: Book[]) => this.books = data);
  }

  save() {
    if (this.book.bookId == null) {
      this._bookService.createBook(this.book)
        .subscribe((data: Book) => this.books.push(data));
    } else {
      this._bookService.updateBook(this.book)
        .subscribe(data => this.loadBooks());
    }
    this.cancel();
  }

  editBook(book: Book) {
    this.book = book;
  }

  cancel() {
    this.book = new Book();
    this.tableMode = true;
  }

  delete(book: Book) {
    this._bookService.deleteBook(book.bookId)
      .subscribe(data => this.loadBooks());
  }

  add() {
    this.cancel();
    this.tableMode = false;
  }

}
