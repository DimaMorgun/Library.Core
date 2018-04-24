import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

import { Book } from '../entities/book';
import { BookAuthorsPublicationHousesViewModel } from '../entities/booksAtrhorsPublicationHousesViewModel';
import { Author } from '../entities/author';
import { PublicationHouse } from '../entities/publicationHouse';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class BookService extends BehaviorSubject<any> {

  url = "/api/book"
  public data: any = null;
  public allAuthors: Author[] = [];
  public allPublicationHouses: PublicationHouse[] = [];

  constructor(private http: HttpClient) {
    super([]);
  }
  getBooks(): Observable<BookAuthorsPublicationHousesViewModel> {
    return this.http.get<BookAuthorsPublicationHousesViewModel>(this.url);
  }
  public read() {
    if (this.data) {
      return super.next(this.data);
    }

    this.fetch()
      .pipe(
      tap(data => {
        this.data = data;
      })
      )
      .subscribe(data => {
        this.allAuthors = data.allAuthors;
        this.allPublicationHouses = data.allPublicationHouses
        super.next(data.books);
      });
  }

  public save(data: any, isNew?: boolean) {
    const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

    this.reset();

    this.fetch(action, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public remove(data: any) {
    this.reset();

    this.fetch(REMOVE_ACTION, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public resetItem(dataItem: any) {
    if (!dataItem) { return; }

    // find orignal data item
    const originalDataItem = this.data.books.find(item => item.bookId === dataItem.bookId);

    // revert changes
    Object.assign(originalDataItem, dataItem);

    super.next(this.data.books);
  }

  private reset() {
    this.data = null;
  }

  private fetch(action: string = '', data?: any): Observable<any> {
    if (action === CREATE_ACTION) {
      return this.http
        .post(this.url, data)
        .pipe(map(res => <any>res));
    }
    if (action === '') {
      return this.http.
        get(this.url).
        pipe(map(res => <any[]>res));
    }
    if (action === UPDATE_ACTION) {
      return this.http
        .put(`${this.url}/${data.bookId}`, data)
        .pipe(map(res => <any>res));
    }
    if (action === REMOVE_ACTION) {
      return this.http
        .delete(`${this.url}/${data.bookId}`)
        .pipe(map(res => <any>res));
    }
  }

  private serializeModels(data?: any): string {
    var x = data ? `&models=${JSON.stringify([data])}` : '';
    debugger;
    return data ? `&models=${JSON.stringify([data])}` : '';
  }
}
