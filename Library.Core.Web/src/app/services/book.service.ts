import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Book } from '../entities/book';
import { BookAuthorsPublicationHousesViewModel } from '../entities/booksAtrhorsPublicationHousesViewModel';

@Injectable()
export class BookService {
  url = "/api/book";

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }
  getBooks(): Observable<BookAuthorsPublicationHousesViewModel> {
    return this.http.get<BookAuthorsPublicationHousesViewModel>(this.url);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.url}/${book.bookId}`, book);
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.url}/${id}`);
  }
}
