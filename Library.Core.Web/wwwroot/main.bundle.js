webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Список моделей</h1>\r\n<input type=\"button\" value=\"Добавить\" class=\"btn btn-default\" (click)=\"add()\" />\r\n<table *ngIf=\"tableMode; else create\" class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <td>Name</td>\r\n      <td>Year of publishing</td>\r\n      <td></td>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let b of books\">\r\n      <ng-template [ngIf]=\"book?.bookId != b.bookId\" [ngIfElse]=\"edit\">\r\n        <td>{{b?.name}}</td>\r\n        <td>{{b?.yearOfPublishing}}</td>\r\n        <td>\r\n          <button class=\"btn btn-sm btn-primary\" (click)=\"editBook(b)\">Update</button>\r\n          <button class=\"btn btn-sm btn-danger\" (click)=\"delete(b)\">Delete</button>\r\n        </td>\r\n      </ng-template>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<!--шаблон для редактирования-->\r\n<ng-template #edit>\r\n  <td>\r\n    <input type=\"text\" [(ngModel)]=\"book.name\" class=\"form-control\" />\r\n  </td>\r\n  <td>\r\n    <input type=\"text\" [(ngModel)]=\"book.yearOfPublishing\" class=\"form-control\" />\r\n  </td>\r\n  <td>\r\n    <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-sm btn-success\" />\r\n    <input type=\"button\" value=\"Отмена\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning\" />\r\n  </td>\r\n</ng-template>\r\n\r\n<!--шаблон для добавления-->\r\n<ng-template #create>\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.name\" class=\"form-control\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Year of publishing</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.yearOfPublishing\" class=\"form-control\" />\r\n  </div>\r\n  <div>\r\n    <input type=\"button\" value=\"Сохранить\" (click)=\"save()\" class=\"btn btn-success\" />\r\n    <input type=\"button\" value=\"Отмена\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book__ = __webpack_require__("./src/app/services/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_book__ = __webpack_require__("./src/app/models/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_bookService) {
        this._bookService = _bookService;
        this.book = new __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */]();
        this.tableMode = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    ;
    AppComponent.prototype.loadBooks = function () {
        var _this = this;
        this._bookService.getBook()
            .subscribe(function (data) { return _this.books = data; });
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.book.bookId == null) {
            this._bookService.createBook(this.book)
                .subscribe(function (data) { return _this.books.push(data); });
        }
        else {
            this._bookService.updateBook(this.book)
                .subscribe(function (data) { return _this.loadBooks(); });
        }
        this.cancel();
    };
    AppComponent.prototype.editBook = function (book) {
        this.book = book;
    };
    AppComponent.prototype.cancel = function () {
        this.book = new __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */]();
        this.tableMode = true;
    };
    AppComponent.prototype.delete = function (book) {
        var _this = this;
        this._bookService.deleteBook(book.bookId)
            .subscribe(function (data) { return _this.loadBooks(); });
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_book__["a" /* BookService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_book__["a" /* BookService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_library_component__ = __webpack_require__("./src/app/library/library.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__library_library_component__["a" /* LibraryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  library works!\n</p>\n"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-library',
            template: __webpack_require__("./src/app/library/library.component.html"),
            styles: [__webpack_require__("./src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/models/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(bookId, name, yearOfPublishing) {
        this.bookId = bookId;
        this.name = name;
        this.yearOfPublishing = yearOfPublishing;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/services/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.url = "/api/book";
    }
    BookService.prototype.getBook = function () {
        return this.http.get(this.url);
    };
    BookService.prototype.createBook = function (book) {
        return this.http.post(this.url, book);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.url + '/' + book.bookId, book);
    };
    BookService.prototype.deleteBook = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map