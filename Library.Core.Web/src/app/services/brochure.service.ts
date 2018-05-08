import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { GetBrochureView } from '../view-models/brochure/getBrochureView';
import { PostBrochureView } from '../view-models/brochure/postBrochureView';
import { PutBrochureView } from '../view-models/brochure/PutBrochureView';

@Injectable()
export class BrochureService {
  url = "/api/brochure";

  constructor(private http: HttpClient) { }

  getBrochure(): Observable<GetBrochureView> {
    return this.http.get<GetBrochureView>(this.url);
  }
  postBrochure(brochure: PostBrochureView): Observable<PostBrochureView> {
    return this.http.post<PostBrochureView>(this.url, brochure);
  }
  putBrochure(brochure: PutBrochureView): Observable<PutBrochureView> {
    return this.http.put<PutBrochureView>(`${this.url}/${brochure.brochureId}`, brochure);
  }
  deleteBrochure(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
