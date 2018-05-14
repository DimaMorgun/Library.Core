import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { GetPublicationHouseView } from '../view-models/publication-house/getPublication-houseView';
import { PostPublicationHouseView } from '../view-models/publication-house/postPublication-houseView';
import { PutPublicationHouseView } from '../view-models/publication-house/putPublication-houseView';

@Injectable()
export class PublicationHouseService {
  url = "/api/publicationhouse";

  constructor(private http: HttpClient) { }

  getPublicationHouse(): Observable<GetPublicationHouseView> {
    return this.http.get<GetPublicationHouseView>(this.url);
  }
  postPublicationHouse(publicationHouse: PostPublicationHouseView): Observable<PostPublicationHouseView> {
    return this.http.post<PostPublicationHouseView>(this.url, publicationHouse);
  }
  putPublicationHouse(publicationHouse: PutPublicationHouseView): Observable<PutPublicationHouseView> {
    return this.http.put<PutPublicationHouseView>(`${this.url}/${publicationHouse.id}`, publicationHouse);
  }
  deletePublicationHouse(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
