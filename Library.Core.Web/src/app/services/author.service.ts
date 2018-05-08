import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { GetAuthorView } from '../view-models/Author/getAuthorView';
import { PostAuthorView } from '../view-models/Author/postAuthorView';
import { PutAuthorView } from '../view-models/Author/putAuthorView';

@Injectable()
export class AuthorService {
  url = "/api/author";

  constructor(private http: HttpClient) { }

  getAuthor(): Observable<GetAuthorView> {
    return this.http.get<GetAuthorView>(this.url);
  }
  postAuthor(author: PostAuthorView): Observable<PostAuthorView> {
    return this.http.post<PostAuthorView>(this.url, author);
  }
  putAuthor(author: PutAuthorView): Observable<PutAuthorView> {
    return this.http.put<PutAuthorView>(`${this.url}/${author.authorId}`, author);
  }
  deleteAuthor(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
