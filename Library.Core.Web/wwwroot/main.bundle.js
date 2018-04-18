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

module.exports = "<hr />\r\n<router-outlet></router-outlet>\r\n<hr />\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_book__ = __webpack_require__("./src/app/services/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__author_author_component__ = __webpack_require__("./src/app/author/author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__publication_house_publication_house_component__ = __webpack_require__("./src/app/publication-house/publication-house.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__book_book_component__["a" /* BookComponent */] },
    { path: 'author', component: __WEBPACK_IMPORTED_MODULE_11__author_author_component__["a" /* AuthorComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_11__author_author_component__["a" /* AuthorComponent */],
                __WEBPACK_IMPORTED_MODULE_12__publication_house_publication_house_component__["a" /* PublicationHouseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */]
            ],
            providers: [
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_10__services_book__["a" /* BookService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_10__services_book__["a" /* BookService */](jsonp); }; }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author/author.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author/author.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  author works!\n</p>\n"

/***/ }),

/***/ "./src/app/author/author.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorComponent; });
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

var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent.prototype.ngOnInit = function () {
    };
    AuthorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-author',
            template: __webpack_require__("./src/app/author/author.component.html"),
            styles: [__webpack_require__("./src/app/author/author.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate #myForm=\"ngForm\">\r\n  <kendo-grid [data]=\"view | async\"\r\n              [height]=\"533\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              [pageable]=\"true\" [sortable]=\"true\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n              (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n              (add)=\"addHandler($event, myForm)\"\r\n              [navigable]=\"true\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand type=\"button\">Add new</button>\r\n      <div class=\"example-config\">\r\n        The selected authors are <strong>{{ selectedAuthors | json }}</strong>\r\n      </div>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"name\" title=\"Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"yearOfPublishing\" title=\"Year of publishing\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\"\r\n                [disabled]=\"myForm.invalid || myForm.pristine\">\r\n          {{ isNew ? 'Add' : 'Update' }}\r\n        </button>\r\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n  <kendo-multiselect name=\"selectedAuthors\"\r\n                     [data]=\"authors\"\r\n                     [textField]=\"'text'\"\r\n                     [valueField]=\"'value'\"\r\n                     [valuePrimitive]=\"true\"\r\n                     [(ngModel)]=\"selectedAuthors\">\r\n  </kendo-multiselect>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_book__ = __webpack_require__("./src/app/entities/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_book__ = __webpack_require__("./src/app/services/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BookComponent = /** @class */ (function () {
    function BookComponent(editServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.authors = [
            { text: "First Author", value: 1 },
            { text: "Second Author", value: 2 },
            { text: "Leo Tolstoy", value: 3 }
        ];
        this.selectedAuthors = [2];
        this.bookService = editServiceFactory();
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.bookService.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.bookService.read();
    };
    BookComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.bookService.read();
    };
    BookComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__entities_book__["a" /* Book */]());
    };
    BookComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedBook = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    BookComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BookComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.bookService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        var book = new __WEBPACK_IMPORTED_MODULE_2__entities_book__["a" /* Book */]();
        book.bookId = dataItem.bookId;
        this.bookService.remove(book);
    };
    BookComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.bookService.resetItem(this.editedBook);
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__services_book__["a" /* BookService */])),
        __metadata("design:paramtypes", [Object])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/entities/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(bookId, name, yearOfPublishing, selectedAuthors, selectedPublicationHouses) {
        this.bookId = bookId;
        this.name = name;
        this.yearOfPublishing = yearOfPublishing;
        this.selectedAuthors = selectedAuthors;
        this.selectedPublicationHouses = selectedPublicationHouses;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/publication-house/publication-house.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publication-house/publication-house.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  publication-house works!\n</p>\n"

/***/ }),

/***/ "./src/app/publication-house/publication-house.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationHouseComponent; });
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

var PublicationHouseComponent = /** @class */ (function () {
    function PublicationHouseComponent() {
    }
    PublicationHouseComponent.prototype.ngOnInit = function () {
    };
    PublicationHouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publication-house',
            template: __webpack_require__("./src/app/publication-house/publication-house.component.html"),
            styles: [__webpack_require__("./src/app/publication-house/publication-house.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicationHouseComponent);
    return PublicationHouseComponent;
}());



/***/ }),

/***/ "./src/app/services/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var BookService = /** @class */ (function (_super) {
    __extends(BookService, _super);
    function BookService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/book";
        _this.data = [];
        return _this;
    }
    BookService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BookService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BookService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BookService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.bookId === dataItem.bookId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BookService.prototype.reset = function () {
        this.data = [];
    };
    BookService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action === CREATE_ACTION) {
            return this.http
                .post(this.url, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action === '') {
            return this.http.
                get(this.url).
                pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action === UPDATE_ACTION) {
            console.log(this.url + "/" + data.bookId);
            return this.http
                .put(this.url + "/" + data.bookId, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action === REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.bookId)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
    };
    BookService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookService);
    return BookService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
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