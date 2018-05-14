import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { GetAllPublicationsView } from '../view-models/all-publications/getAll-publicationsView';
import { DeleteAllPublicationsView } from '../view-models/all-publications/deleteAll-publicationsView';

@Injectable()
export class AllPublicationsService {
  url = "/api/publication";

  constructor(private http: HttpClient) { }

  getAllPublications(): Observable<GetAllPublicationsView> {
    return this.http.get<GetAllPublicationsView>(this.url);
  }
  deleteAllPublications(publication: DeleteAllPublicationsView) {
    return this.http.request('delete', `${this.url}/${publication.id}`, { body: publication });
  }
}
