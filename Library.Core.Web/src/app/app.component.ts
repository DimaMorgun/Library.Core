import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(private _httpService: HttpClient) { }
  bookJson: Book[];
  ngOnInit() {
    this._httpService.get('/api/book').subscribe((book: Book[]) => {
      this.bookJson = book;
      console.log(book);
    });
  }
}
class Book {

}
