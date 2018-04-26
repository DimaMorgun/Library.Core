import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { GetBookView } from '../view-models/Book/getBookView';
import { PostBookView } from '../view-models/Book/postBookView';
import { PutBookView } from '../view-models/Book/putBookView';

@Injectable()
export class BookService {
  url = "/api/book";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<GetBookView> {
    return this.http.get<GetBookView>(this.url);
  }
  postBook(book: PostBookView): Observable<PostBookView> {
    return this.http.post<PostBookView>(this.url, book);
  }
  putBook(book: PutBookView): Observable<PutBookView> {
    return this.http.put<PutBookView>(`${this.url}/${book.bookId}`, book);
  }
  deleteBook(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
