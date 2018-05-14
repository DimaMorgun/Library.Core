import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { GetMagazineView } from '../view-models/magazine/getMagazineView';
import { PostMagazineView } from '../view-models/magazine/PostMagazineView';
import { PutMagazineView } from '../view-models/magazine/PutMagazineView';

@Injectable()
export class MagazineService {
  url = "/api/magazine";

  constructor(private http: HttpClient) { }

  getMagazine(): Observable<GetMagazineView> {
    return this.http.get<GetMagazineView>(this.url);
  }
  postMagazine(magazine: PostMagazineView): Observable<PostMagazineView> {
    return this.http.post<PostMagazineView>(this.url, magazine);
  }
  putMagazine(magazine: PutMagazineView): Observable<PutMagazineView> {
    return this.http.put<PutMagazineView>(`${this.url}/${magazine.id}`, magazine);
  }
  deleteMagazine(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
