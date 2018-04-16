import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../entities/book';

@Injectable()
export class BookService {

  private url = "/api/book";

  constructor(private http: HttpClient) {
  }

  getBook() {
    return this.http.get(this.url);
  }

  createBook(book: Book) {
    return this.http.post(this.url, book);
  }

  updateBook(book: Book) {
    return this.http.put(this.url + '/' + book.bookId, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
