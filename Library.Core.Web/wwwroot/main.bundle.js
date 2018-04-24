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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var kendo_angular_grid_1 = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
var kendo_angular_dropdowns_1 = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var book_component_1 = __webpack_require__("./src/app/book/book.component.ts");
var book_service_1 = __webpack_require__("./src/app/services/book.service.ts");
var author_component_1 = __webpack_require__("./src/app/author/author.component.ts");
var publication_house_component_1 = __webpack_require__("./src/app/publication-house/publication-house.component.ts");
var routes = [
    { path: '', component: book_component_1.BookComponent },
    { path: 'author', component: author_component_1.AuthorComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                book_component_1.BookComponent,
                author_component_1.AuthorComponent,
                publication_house_component_1.PublicationHouseComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                http_1.HttpClientJsonpModule,
                router_1.RouterModule.forRoot(routes, { useHash: true }),
                kendo_angular_grid_1.GridModule,
                kendo_angular_dropdowns_1.DropDownsModule
            ],
            providers: [
                {
                    deps: [http_1.HttpClient],
                    provide: book_service_1.BookService,
                    useFactory: function (jsonp) { return function () { return new book_service_1.BookService(jsonp); }; }
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent.prototype.ngOnInit = function () {
    };
    AuthorComponent = __decorate([
        core_1.Component({
            selector: 'app-author',
            template: __webpack_require__("./src/app/author/author.component.html"),
            styles: [__webpack_require__("./src/app/author/author.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorComponent);
    return AuthorComponent;
}());
exports.AuthorComponent = AuthorComponent;


/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate #myForm=\"ngForm\">\r\n  <kendo-grid [data]=\"view | async\"\r\n              [height]=\"533\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              [pageable]=\"true\" [sortable]=\"true\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n              (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n              (add)=\"addHandler($event, myForm)\"\r\n              [navigable]=\"true\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand type=\"button\">Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"name\" title=\"Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"yearOfPublishing\" title=\"Year of publishing\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"selectedAuthorsNames\" title=\"Authors\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <kendo-multiselect name=\"dataItem.selectedAuthors\"\r\n                           [data]=\"dataItem.allAuthors\"\r\n                           [textField]=\"'name'\"\r\n                           [valueField]=\"'authorId'\"\r\n                           [valuePrimitive]=\"true\"\r\n                           [(ngModel)]=\"dataItem.selectedAuthors\">\r\n        </kendo-multiselect>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"selectedPublicationHousesNames\" title=\"Publication houses\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <kendo-multiselect name=\"dataItem.selectedPublicationHouses\"\r\n                           [data]=\"dataItem.allPublicationHouses\"\r\n                           [textField]=\"'name'\"\r\n                           [valueField]=\"'publicationHouseId'\"\r\n                           [valuePrimitive]=\"true\"\r\n                           [(ngModel)]=\"dataItem.selectedPublicationHouses\">\r\n        </kendo-multiselect>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\"\r\n                [disabled]=\"myForm.invalid || myForm.pristine\">\r\n          {{ isNew ? 'Add' : 'Update' }}\r\n        </button>\r\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var book_1 = __webpack_require__("./src/app/entities/book.ts");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var book_service_1 = __webpack_require__("./src/app/services/book.service.ts");
var BookComponent = /** @class */ (function () {
    function BookComponent(editServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.bookService = editServiceFactory();
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.bookService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
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
        sender.addRow(new book_1.Book());
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
        var book = new book_1.Book();
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
        core_1.Component({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")]
        }),
        __param(0, core_1.Inject(book_service_1.BookService)),
        __metadata("design:paramtypes", [Object])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;


/***/ }),

/***/ "./src/app/entities/book.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(bookId, name, yearOfPublishing, authors, selectedAuthors, selectedAuthorsNames, publicationHouses, selectedPublicationHouses, selectedPublicationHousesNames) {
        if (bookId === void 0) { bookId = 0; }
        if (yearOfPublishing === void 0) { yearOfPublishing = 0; }
        this.bookId = bookId;
        this.name = name;
        this.yearOfPublishing = yearOfPublishing;
        this.authors = authors;
        this.selectedAuthors = selectedAuthors;
        this.selectedAuthorsNames = selectedAuthorsNames;
        this.publicationHouses = publicationHouses;
        this.selectedPublicationHouses = selectedPublicationHouses;
        this.selectedPublicationHousesNames = selectedPublicationHousesNames;
    }
    return Book;
}());
exports.Book = Book;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PublicationHouseComponent = /** @class */ (function () {
    function PublicationHouseComponent() {
    }
    PublicationHouseComponent.prototype.ngOnInit = function () {
    };
    PublicationHouseComponent = __decorate([
        core_1.Component({
            selector: 'app-publication-house',
            template: __webpack_require__("./src/app/publication-house/publication-house.component.html"),
            styles: [__webpack_require__("./src/app/publication-house/publication-house.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicationHouseComponent);
    return PublicationHouseComponent;
}());
exports.PublicationHouseComponent = PublicationHouseComponent;


/***/ }),

/***/ "./src/app/services/book.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
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
            .pipe(tap_1.tap(function (data) {
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
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action === '') {
            return this.http.
                get(this.url).
                pipe(map_1.map(function (res) { return res; }));
        }
        if (action === UPDATE_ACTION) {
            return this.http
                .put(this.url + "/" + data.bookId, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action === REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.bookId)
                .pipe(map_1.map(function (res) { return res; }));
        }
    };
    BookService.prototype.serializeModels = function (data) {
        var x = data ? "&models=" + JSON.stringify([data]) : '';
        debugger;
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BookService);
    return BookService;
}(BehaviorSubject_1.BehaviorSubject));
exports.BookService = BookService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map