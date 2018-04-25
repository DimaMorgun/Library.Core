import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Author } from '../entities/author';
import { AuthorsBooksViewModel } from '../entities/AuthorsBooksViewModel';

@Injectable()
export class AuthorService {
  url = "/api/author";

  constructor(private http: HttpClient) { }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.url, author);
  }
  getAuthors(): Observable<AuthorsBooksViewModel> {
    return this.http.get<AuthorsBooksViewModel>(this.url);
  }
  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.url}/${author.authorId}`, author);
  }
  deleteAuthor(id: number): Observable<Author> {
    return this.http.delete<Author>(`${this.url}/${id}`);
  }
}
