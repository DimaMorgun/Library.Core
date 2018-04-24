import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

import { Book } from '../entities/book';
import { BookAuthorsPublicationHousesViewModel } from '../entities/booksAtrhorsPublicationHousesViewModel';
import { forEach } from '@angular/router/src/utils/collection';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class BookService extends BehaviorSubject<Book[]> {

  url = "/api/book"
  public data: Book[] = [];

  constructor(private http: HttpClient) {
    super([]);
  }

  public read() {
    if (this.data.length) {
      return super.next(this.data);
    }

    this.fetch()
      .pipe(
      tap(data => {
        this.data = data;
      })
      )
      .subscribe(data => {
        super.next(data);
      });
  }

  public save(data: Book, isNew?: boolean) {
    const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

    this.reset();

    this.fetch(action, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public remove(data: Book) {
    this.reset();

    this.fetch(REMOVE_ACTION, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public resetItem(dataItem: Book) {
    if (!dataItem) { return; }

    // find orignal data item
    const originalDataItem = this.data.find(item => item.bookId === dataItem.bookId);

    // revert changes
    Object.assign(originalDataItem, dataItem);

    super.next(this.data);
  }

  private reset() {
    this.data = [];
  }

  private fetch(action: string = '', data?: Book): Observable<Book[]> {
    if (action === CREATE_ACTION) {
      return this.http
        .post(this.url, data)
        .pipe(map(res => <Book[]>res));
    }
    if (action === '') {
      return this.http.
        get(this.url).
        pipe(map(res => <Book[]>res));
    }
    if (action === UPDATE_ACTION) {
      return this.http
        .put(`${this.url}/${data.bookId}`, data)
        .pipe(map(res => <Book[]>res));
    }
    if (action === REMOVE_ACTION) {
      return this.http
        .delete(`${this.url}/${data.bookId}`)
        .pipe(map(res => <Book[]>res));
    }
  }

  private serializeModels(data?: Book): string {
    var x = data ? `&models=${JSON.stringify([data])}` : '';
    debugger;
    return data ? `&models=${JSON.stringify([data])}` : '';
  }
}
