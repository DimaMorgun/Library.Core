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
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var book_component_1 = __webpack_require__("./src/app/book/book.component.ts");
var book_service_1 = __webpack_require__("./src/app/services/book.service.ts");
var author_component_1 = __webpack_require__("./src/app/author/author.component.ts");
var publication_house_component_1 = __webpack_require__("./src/app/publication-house/publication-house.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'book', component: book_component_1.BookComponent },
    { path: 'author', component: author_component_1.AuthorComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
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

module.exports = "<p>\r\n  author works!\r\n</p>\r\n"

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

module.exports = "<form novalidate #myForm=\"ngForm\">\r\n  <kendo-grid [kendoGridBinding]=\"books\"\r\n              [height]=\"533\"\r\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n              [pageable]=\"true\" [sortable]=\"true\"\r\n              (dataStateChange)=\"onStateChange($event)\"\r\n              (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\r\n              (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\r\n              (add)=\"addHandler($event, myForm)\"\r\n              [navigable]=\"true\">\r\n    <ng-template kendoGridToolbarTemplate>\r\n      <button kendoGridAddCommand type=\"button\">Add new</button>\r\n    </ng-template>\r\n    <kendo-grid-column field=\"name\" title=\"Name\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"yearOfPublishing\" title=\"Year of publishing\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\" required />\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"selectedAuthorsNames\" title=\"Authors\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <kendo-multiselect name=\"dataItem.selectedAuthors\"\r\n                           [data]=\"allAuthors\"\r\n                           [textField]=\"'name'\"\r\n                           [valueField]=\"'authorId'\"\r\n                           [valuePrimitive]=\"true\"\r\n                           [(ngModel)]=\"dataItem.selectedAuthors\">\r\n        </kendo-multiselect>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"selectedPublicationHousesNames\" title=\"Publication houses\">\r\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n        <kendo-multiselect name=\"dataItem.selectedPublicationHouses\"\r\n                           [data]=\"allPublicationHouses\"\r\n                           [textField]=\"'name'\"\r\n                           [valueField]=\"'publicationHouseId'\"\r\n                           [valuePrimitive]=\"true\"\r\n                           [(ngModel)]=\"dataItem.selectedPublicationHouses\">\r\n        </kendo-multiselect>\r\n      </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-command-column title=\"\">\r\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\r\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\r\n        <button kendoGridSaveCommand type=\"button\"\r\n                [disabled]=\"myForm.invalid || myForm.pristine\">\r\n          {{ isNew ? 'Add' : 'Update' }}\r\n        </button>\r\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\r\n      </ng-template>\r\n    </kendo-grid-command-column>\r\n  </kendo-grid>\r\n</form>\r\n"

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
var book_service_1 = __webpack_require__("./src/app/services/book.service.ts");
var book_1 = __webpack_require__("./src/app/entities/book.ts");
var BookComponent = /** @class */ (function () {
    function BookComponent(editServiceFactory) {
        this.books = [];
        this.allAuthors = [];
        this.allPublicationHouses = [];
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.bookService = editServiceFactory();
    }
    BookComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    BookComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.bookService.getBooks();
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
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        if (isNew) {
            this.bookService.createBook(dataItem).subscribe(function (data) { return _this.refresh(); });
        }
        if (!isNew) {
            this.bookService.updateBook(dataItem).subscribe(function (data) { return _this.refresh(); });
        }
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        this.bookService.deleteBook(dataItem.bookId).subscribe(function (data) { return _this.refresh(); });
    };
    BookComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.refresh();
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent.prototype.refresh = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (data) {
            _this.books = data.books;
            _this.allAuthors = data.allAuthors;
            _this.allPublicationHouses = data.allPublicationHouses;
        });
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
    function Book(bookId, name, yearOfPublishing, 
        //public authors?: Author[],
        selectedAuthors, selectedAuthorsNames, 
        //public publicationHouses?: PublicationHouse[],
        selectedPublicationHouses, selectedPublicationHousesNames) {
        if (bookId === void 0) { bookId = 0; }
        if (yearOfPublishing === void 0) { yearOfPublishing = 0; }
        this.bookId = bookId;
        this.name = name;
        this.yearOfPublishing = yearOfPublishing;
        this.selectedAuthors = selectedAuthors;
        this.selectedAuthorsNames = selectedAuthorsNames;
        this.selectedPublicationHouses = selectedPublicationHouses;
        this.selectedPublicationHousesNames = selectedPublicationHousesNames;
    }
    return Book;
}());
exports.Book = Book;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"\" style=\"text-align:center;\">\r\n  <div id=\"container\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMin slice\" viewBox=\"0 0 728 400\">\r\n      <defs>\r\n        <style type=\"text/css\">\r\n          text {\r\n            font-family: \"Acme\", \"Helvetica\", sans-serif;\r\n            font-weight: 500;\r\n            text-transform: uppercase;\r\n          }\r\n\r\n          .sign-txt {\r\n            font-size: 55px;\r\n          }\r\n\r\n          .dish-txt {\r\n            font-size: 70px;\r\n          }\r\n          /*Your color scheme design here*/\r\n          .color-1 {\r\n            fill: #ffffff;\r\n          }\r\n\r\n          .color-2 {\r\n            fill: #e5e5e3;\r\n          }\r\n\r\n          .color-3 {\r\n            fill: #090e17;\r\n          }\r\n\r\n          .color-4 {\r\n            fill: #e5e5e3;\r\n          }\r\n\r\n          .color-5 {\r\n            fill: #ccccca;\r\n          }\r\n\r\n          .stroke {\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 5;\r\n          }\r\n\r\n          #camera {\r\n            overflow: hidden;\r\n          }\r\n\r\n          svg {\r\n            width: 728px;\r\n            height: 400px;\r\n            overflow: visible;\r\n            visibility: hidden;\r\n          }\r\n        </style>\r\n      </defs>\r\n      <script type=\"text/javascript\" xlink:href=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js\"></script>\r\n      <script type=\"text/javascript\">\r\n                document.addEventListener(\"DOMContentLoaded\", function (event) {\r\n                    window.onload = function () {\r\n                        var camera = document.getElementById(\"camera\"),\r\n                            hand3 = document.getElementById(\"hand3\"),\r\n                            plate = document.getElementById(\"plate\"),\r\n                            platecover = document.getElementById(\"platecover\"),\r\n                            fork = document.getElementById(\"fork\"),\r\n                            smoke = document.getElementById(\"smoke\"),\r\n                            smoke1 = document.getElementById(\"smoke1\"),\r\n                            smoke2 = document.getElementById(\"smoke2\"),\r\n                            smoke3 = document.getElementById(\"smoke3\"),\r\n                            smoke4 = document.getElementById(\"smoke4\"),\r\n                            smoke5 = document.getElementById(\"smoke5\"),\r\n                            smoke6 = document.getElementById(\"smoke6\"),\r\n                            smoke7 = document.getElementById(\"smoke7\"),\r\n                            smoke8 = document.getElementById(\"smoke8\"),\r\n                            smoke9 = document.getElementById(\"smoke9\"),\r\n                            dishtext = document.getElementById(\"dishtext\"),\r\n                            dishtext1 = document.getElementById(\"dishtext1\"),\r\n                            dishtext2 = document.getElementById(\"dishtext2\"),\r\n                            sign = document.getElementById(\"sign\"),\r\n                            hand_sign = document.getElementById(\"hand_sign\"),\r\n                            hand_dish = document.getElementById(\"hand_dish\"),\r\n                            hand_cover = document.getElementById(\"hand_cover\"),\r\n                            nale = document.getElementById(\"nale\"),\r\n                            mask1 = document.getElementById(\"mask1\"),\r\n                            mask2 = document.getElementById(\"mask2\"),\r\n                            hand1 = document.getElementById(\"hand1\"),\r\n                            hand2 = document.getElementById(\"hand2\");\r\n                        //settings\r\n                        TweenMax.set(\"svg\", { visibility: \"visible\" })\r\n                        TweenMax.set([nale, sign, hand3, plate, hand1, hand2, platecover, dishtext, fork, smoke, mask1, mask2], { autoAlpha: 0 })\r\n                        TweenMax.set(sign, { y: -37, rotation: -5, transformOrigin: \"49% 0%\", })\r\n                        TweenMax.set(hand1, { x: -8, y: -1 })\r\n                        TweenMax.set(hand2, { x: -8, y: -1 })\r\n                        TweenMax.set([smoke1, smoke2, smoke3, smoke4, smoke5, smoke6, smoke7, smoke8, smoke9], { scale: 0 })\r\n                        TweenMax.set(hand_dish, { transformOrigin: \"0% 50%\" })\r\n                        TweenMax.set(hand_cover, { transformOrigin: \"50% 100%\" })\r\n                        //timeline\r\n                        var tl = new TimelineMax({ repeat: -1, delay: .5, repeatDelay: .5 })\r\n                        //scene 1\r\n                        tl.set(camera, { attr: { viewBox: \"0 0 728 400\" } })\r\n                        tl.set([hand3, plate, platecover], { autoAlpha: 1 })\r\n                        tl.from(hand_dish, 2, { x: -580, rotation: -5, ease: Elastic.easeOut.config(.1, .08) }, \"+=.5\")\r\n                        tl.set([hand1, dishtext, smoke, mask1, mask2], { autoAlpha: 1 })\r\n                        tl.fromTo(hand1, 1, { x: 580 }, { x: 1, ease: Power4.easeOut })\r\n                        tl.to(hand_cover, 1, { x: 60, y: 60, rotation: 60, ease: Elastic.easeOut.config(.08, .1) })\r\n                        tl.fromTo(smoke, 2, { y: 220 }, { y: -180, ease: Power0.easeNone }, \"-=1\")\r\n                            .add(\"smoky\", 3)\r\n                        tl.set(smoke, { autoAlpha: 0 })\r\n                        tl.to(hand_cover, 1, { x: 400, ease: Elastic.easeIn.config(.08, .1) }, \"-=1\")\r\n                        tl.set([hand1, platecover], { autoAlpha: 0 })\r\n                        tl.from(dishtext2, 1, { x: 160, y: 60, attr: { dx: \"0,-50,-50,-50,-50,-50,-50,-50,-50,-50,0\" }, z: .01, rotation: .01, ease: Elastic.easeOut.config(1, .4) })\r\n                        tl.from(dishtext1, 1, { x: 220, y: 120, attr: { dx: \"0,-50,-50,-50,-50,-50,-50,0\" }, z: 0.01, rotation: 0.01, ease: Elastic.easeOut.config(1, .4) }, \"-=.9\")\r\n                        tl.set([mask1, mask2], { autoAlpha: 0 })\r\n                        tl.set([hand1, fork], { autoAlpha: 1, x: 250, y: -180 }),\r\n                            tl.set(hand_cover, { rotation: 40 })\r\n                        tl.to([hand_dish, dishtext], 2, { x: -140, ease: Elastic.easeInOut.config(.1, .08) }, \"+=.5\")\r\n                        tl.to(hand_cover, 1, { x: -140, ease: Power4.easeOut }, \"-=1\")\r\n                        tl.to([hand_cover, dishtext], .5, { x: 580, ease: Power2.easeIn })\r\n                        tl.set([hand1, fork, dishtext], { autoAlpha: 0 })\r\n                        tl.set(hand_cover, { x: 400, rotation: 60 })\r\n                        tl.set(hand1, { x: 1 })\r\n                        tl.to(hand_dish, 1, { x: -580, rotation: -5, ease: Power4.easeIn })\r\n                        tl.set([hand3, plate], { autoAlpha: 0 })\r\n                        //scene 2\r\n                        tl.set(camera, { attr: { viewBox: \"-380 0 728 400\" } })\r\n                        tl.set(nale, { autoAlpha: 1 })\r\n                        tl.to(camera, 1, { attr: { viewBox: \"0 0 728 400\" }, ease: Elastic.easeOut.config(.1, .1) }, \"+=.5\")\r\n                        tl.set([hand2, sign], { autoAlpha: 1 })\r\n                        tl.from(hand_sign, 1, { x: 600, ease: Elastic.easeOut.config(.1, .1) })\r\n                        tl.to(sign, 2, { rotation: .01, z: .01, ease: Elastic.easeOut.config(2, .2) }, \"-=.8\")\r\n                        tl.set(hand2, { autoAlpha: 0 })\r\n                        tl.set(hand1, { x: 20, y: 150, rotation: -55 })\r\n                        tl.set(hand1, { autoAlpha: 1 })\r\n                        tl.to(sign, .5, { y: 0, ease: Elastic.easeOut.config(1, 0.3) })\r\n                        tl.to(sign, 5, { rotation: -6, ease: Elastic.easeOut.config(6, .2) }, \"-=.4\")\r\n                        tl.to(hand1, 1, { x: 100, y: 65, ease: Elastic.easeOut.config(.1, .1) }, \"-=4.5\")\r\n                        tl.to(hand1, 1, { x: 400, y: -165, ease: Elastic.easeIn.config(.1, .1) }, \"-=3.5\")\r\n                        tl.set(hand1, { autoAlpha: 0 })\r\n                        tl.to(camera, 1, { attr: { viewBox: \"80 170 580 200\" }, ease: Power1.easeInOut }, \"-=2.5\")\r\n                        tl.to(camera, 1, { attr: { viewBox: \"80 400 580 200\" }, ease: Elastic.easeIn.config(.1, .1) })\r\n                        tl.set([nale, sign], { autoAlpha: 0 })\r\n                        //add smoke particles\r\n                        tl.to(smoke1, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke2, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke3, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke4, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke5, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke6, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke7, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke8, 3, { scale: 1 }, \"smoky\")\r\n                        tl.to(smoke9, 3, { scale: 1 }, \"smoky\")\r\n                    };\r\n                });\r\n      </script>\r\n      <path d=\"M0 0h728v400H0z\" class=\"color-1\" />\r\n      <svg id=\"camera\" viewBox=\"0 0 728 400\">\r\n        <path id=\"nale\" d=\"M365 138.5a12.4 6.37 0 0 0-13 6.3 12.4 6.37 0 0 0 6 5.2l4 21h4l3-21a12.4 6.37 0 0 0 7-5.2 12.4 6.37 0 0 0-11-6.3z\" class=\"color-3\" />\r\n        <g id=\"hand_sign\">\r\n          <g id=\"sign\">\r\n            <path d=\"M486.32 231.48l-242.352 4.08 3.536 116.96L483.6 356.6zM463.2 241h1.36c2.72 0 5.44 4.08 5.44 6.8 0 2.72-2.72 6.8-5.44 6.8-4.08 0-6.8-2.72-6.8-6.8 0-2.72 2.72-6.8 5.44-6.8zm-200.6 2.72c3.4 0 6.12 2.72 6.12 6.8s-2.72 6.8-6.12 6.8c-3.672 0-6.664-2.72-6.392-6.8-.272-4.08 2.72-6.8 6.392-6.8z\" class=\"color-4\" />\r\n            <path d=\"M490.234 227.576l-250.21 4.166 4.11 123.223 243.272 5.55zm-5.11 5.086l-2.61 122.742-233.54-5.33-3.783-113.418z\" class=\"color-3\" />\r\n            <path d=\"M362.52 158.81l-98.18 87.12a2.5 2.5 0 1 0 3.32 3.74l94.938-84.242 96.265 81.56a2.5 2.5 0 1 0 3.233-3.816z\" class=\"color-3\" />\r\n            <text x=\"295\" y=\"288\" class=\"color-3 sign-txt\">\r\n              TRY\r\n            </text>\r\n            <text x=\"300\" y=\"338\" class=\"color-3 sign-txt\">\r\n              NOW !\r\n            </text>\r\n          </g>\r\n          <g id=\"hand2\">\r\n            <path d=\"M367.914 9.93c-2.73 1.254-5.46 3.766-5.46 9.226 0 3.55 5.46 10.51 8.19 12.967 1.365 5.05 5.46 9.283 9.555 13.24-2.73-1.91-8.19-3.14-12.29-3.685l-9.56-2.047c-1.37-.27-4.1-.41-8.19-.68-5.46-1.77-8.19-2.32-8.19-2.32l-4.1-.68c-4.1-2.32-10.92-4.23-12.29-4.09-2.73 7.1 1.36 10.1 9.55 13.11 9.55 3.01 17.74 6.14 27.3 8.74-2.73 0-6.83.28-10.92 1.5-6.83 2.46-12.29 4.92-17.75 8.19l-12.28 4.5c-4.1.69-8.19 2.46-10.92 3.96-1.37 4.78 4.09 8.6 12.28 7.24 2.73-1.23 6.82-2.73 12.28-4.64 6.82-1.36 9.55-3 21.84-5.05 6.82.55 13.65 1.23 21.84 1.78-10.92 5.46-13.65 7.51-20.48 10.65-1.37 1.5-1.37 1.37-2.73 5.6 0 7.92 1.36 20.48 1.36 22.39 5.46 6.28 9.55 11.61 15.01 14.34 0 0 1.36 0 1.36-.13-2.73 1.23-5.46 3.14-5.46 6.15 5.46 1.91 9.554 2.73 13.65 3.41 1.364 2.05 6.824 6.55 9.554 7.92 2.73 0 15.01-7.097 19.11-10.1 6.82-2.73 9.55-3.276 13.65-6.28 2.73-1.5 9.55-3 9.55-3 6.827-2.73 23.207-9.01 28.667-12.42 9.558-4.37 16.38-4.51 32.76-5.46v12.42l43.68-.82-1.362-46.96-42.313-.273v2.32c-9.557-2.455-13.65-1.91-20.477 0-5.46 1.5-13.65.548-20.473-.82-4.1-.68-8.19-2.18-10.92-3.683-12.29-4.78-24.57-8.46-36.86-13.79-6.82-4.64-12.28-9.14-17.74-13.65-2.73-2.59-5.46-6-8.19-9.28-4.1-3.96-6.83-7.51-8.19-10.24-1.37-3.27-2.73-6-4.1-9.5zm20.475 78.977c1.36 1.775 4.09 2.185 6.82 1.912 4.09 2.04 5.46 2.59 10.92 5.05 2.73 4.23 0 12.69 0 17.74-6.83 6.96-9.56 6.69-15.02 9.69-4.1-.96-12.29-1.09-16.38.55 1.36-1.09 1.36-4.92 0-9.56-1.37-5.74-4.1-7.24-5.46-9.69 1.36-1.5 4.09-6.01 4.09-10.79 4.09-.41 6.82-2.73 10.92-4.51z\" class=\"color-4\" />\r\n            <path d=\"M325.6 38.54c1.364 3.275 5.46 5.186 16.38 8.735 4.094 1.365 15.014 4.914 20.474 6.416 2.73 0 23.205 3.42 23.205 3.42-12.29-4.91-36.86-13.65-38.22-13.92-2.73-.54-4.1-.27-6.83 0-1.37 0-9.56-3.14-15.02-4.64zm35.49 24.296c-8.19.546-15.016 2.32-21.84 4.368-15.016 5.46-17.746 7.37-25.936 10.647 2.73 1.23 5.46 2.05 8.19 1.51 8.19-.95 8.19-4.5 35.49-9.42 2.73-.13 13.65.96 21.84 1.23l4.095-.54c-8.19-4.23-15.02-6.41-21.84-7.78zm23.204 17.745c-8.19.55-12.285 5.06-12.285 6.83-4.1 4.92-4.1 10.92-2.73 17.2 1.36-1.23 4.09-6 4.09-10.51 4.09-.68 8.19-3.41 10.92-4.23 1.36-.54 2.73-.68 4.09-.68 1.36 1.64 5.46 2.19 6.82 1.64 2.73 1.5 6.82 3.28 10.92 5.05 2.73 3.96 0 14.47 0 17.75 4.09-8.19 6.82-13.78 6.82-18.7 0-4.5-12.29-12.01-19.11-13.51-2.73-.54-6.83-.82-9.56-.82zm152.88 6.15l-25.935.82c-4.1-.41-9.56-.68-16.38.41v.28c-8.19 1.23-16.38 4.1-24.57 9.69-2.73 2.32-4.1-8.19-9.56-4.91-5.46 4.23-12.29 10.24-19.11 14.74-17.75 10.24-20.48 8.47-23.21 10.93-4.1 4.09-21.84 14.47-32.76 18.7 0 0 4.09 4.1 5.46 4.1 2.73 0 15.01-7.78 19.11-9.96 8.19-3 10.92-5.05 13.65-6.82 4.09-1.23 5.46-1.77 9.55-2.73 4.09-1.77 20.47-7.5 28.66-12.28 8.19-3.82 15.01-3.68 32.76-5.32v12.42l43.68-1.09z\" class=\"color-5\" />\r\n            <path d=\"M528.5 66.25L803 66v64.25l-273.5-1z\" class=\"color-2\" />\r\n            <path d=\"M529 87.5l274 .5v42.25l-273.5-1z\" class=\"color-3\" />\r\n          </g>\r\n        </g>\r\n        <g id=\"dishtext\">\r\n          <text id=\"dishtext1\" x=\"218\" y=\"180\" font-size=\"55\" dx=\"0, 0, 0, 0, 0, 0, 0, 0\" class=\"color-4 dish-txt\">\r\n            AMAZING\r\n          </text>\r\n          <path id=\"mask1\" d=\"M150 185h430v55H150z\" class=\"color-1\" />\r\n          <text id=\"dishtext2\" x=\"165\" y=\"236\" dx=\"0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0\" class=\"color-4 dish-txt\">\r\n            Library\r\n          </text>\r\n          <g id=\"smoke\">\r\n            <circle id=\"smoke1\" cx=\"344\" cy=\"74.5\" r=\"30\" class=\"color-5\" />\r\n            <circle id=\"smoke2\" cx=\"376\" cy=\"108\" r=\"30\" class=\"color-4\" />\r\n            <circle id=\"smoke3\" cx=\"372\" cy=\"53.5\" r=\"30\" class=\"color-4\" />\r\n            <circle id=\"smoke4\" cx=\"410\" cy=\"108\" r=\"30\" class=\"color-5\" />\r\n            <circle id=\"smoke5\" cx=\"342\" cy=\"110\" r=\"30\" class=\"color-4\" />\r\n            <circle id=\"smoke6\" cx=\"404\" cy=\"76\" r=\"30\" class=\"color-4\" />\r\n            <circle id=\"smoke7\" cx=\"378\" cy=\"83\" r=\"30\" class=\"color-5\" />\r\n            <circle id=\"smoke8\" cx=\"366\" cy=\"146\" r=\"30\" class=\"color-4\" />\r\n            <circle id=\"smoke9\" cx=\"370\" cy=\"130\" r=\"30\" class=\"color-5\" />\r\n          </g>\r\n          <path id=\"mask2\" d=\"M200 239h340v200H200z\" class=\"color-1\" />\r\n        </g>\r\n        <g id=\"hand_dish\">\r\n          <g id=\"hand3\">\r\n            <path d=\"M326.47 255.84c-4.08 0-8.16 0-8.16 4.08v20.4c-1.36 2.72-5.44 9.52-6.8 12.24-4.08 5.44-8.16 16.32-8.16 21.76-2.72 2.72-5.44 5.44-9.52 5.44-2.72 0-5.44 1.36-9.52 4.08h-40.8v51.68h35.36v-12.24c8.16-1.36 16.32-4.08 23.12-5.44 0 0 14.96-1.36 24.48-10.88l10.88-10.88c4.08-4.08 6.8-5.44 10.88-8.16 2.72-2.72 5.44-4.08 10.88-9.52 1.36-2.72 2.72-4.08 5.44-5.44 4.08-2.72 6.8-5.44 9.52-10.88 1.36-4.08 8.16-8.16 12.24-12.24 2.72-4.08 5.44-6.8 9.52-10.88 6.8-5.44 12.24-8.16 19.04-12.24 0 0 1.36 0 2.72-1.36 5.44-1.36 9.52-1.36 13.6-4.08-1.36-5.44-4.08-6.8-12.24-5.44-2.72 0-5.44 2.72-8.16 1.36-4.08-1.36-8.16-1.36-12.24 0-1.36 0-10.88 5.44-20.4 10.88-2.72 1.36-8.16 8.16-12.24 10.88-2.72 0-5.44 2.72-6.8 4.08l-2.72 2.72s-1.36-1.36-1.36-5.44c0-1.36 0 0 1.36-4.08 1.36-2.72 4.08-6.8 5.44-8.16 2.72-2.72 2.72-2.72 6.8-8.16-1.36-2.72-6.8-4.08-9.52-2.72-8.16 2.72-14.96 14.96-19.04 24.48l-6.8-1.36v-21.76c0-2.72-4.08-2.72-6.8-2.72z\" class=\"color-4\" />\r\n            <path d=\"M423.03 255.84c-2.72 0-8.16 0-12.24 2.72 1.36 1.36 1.36 2.72 1.36 2.72-1.36 1.36-2.72 2.72-4.08 2.72-2.72 1.36-10.88 6.8-13.6 8.16-2.72 2.72-6.8 6.8-9.52 10.88-2.72 2.72-10.88 12.24-16.32 19.04 13.6-10.88 23.12-23.12 25.84-24.48 6.8-5.44 17.68-12.24 20.4-13.6 2.72-1.36 5.44-1.36 5.44-1.36 2.72 0 6.8-1.36 9.52-2.72 0 0 0-2.72-2.72-4.08zm-96.56 0c-2.72 0-5.44 0-5.44 1.36-1.36 2.72-1.36 8.16-1.36 23.12 0 4.08-5.44 12.24-4.08 14.96 1.36 8.16-1.36 13.6-8.16 17.68l4.08 1.36c6.8-5.44 16.32-10.88 17.68-13.6 1.36-4.08 2.72-5.44 5.44-8.16l5.44-10.88-6.8-1.36c1.36-10.88 0-21.76 0-21.76-1.36-2.72-4.08-2.72-6.8-2.72zm77.52 2.72c-8.16 0-19.04 8.16-25.84 13.6l-19.04 19.04c-1.36 1.36-4.08 0-4.08-1.36-2.72-8.16-2.72-13.6 5.44-21.76 1.36-1.36 5.44-6.8 6.8-8.16-5.44-2.72-9.52-1.36-13.6 5.44-5.44 8.16-10.88 19.04-16.32 31.28-5.44 0-5.44 5.44-6.8 9.52-4.08 2.72-27.2 19.04-42.16 31.28-2.72 2.72-29.92 9.52-29.92 8.16v1.36h-14.96v28.56h35.36v-12.24c8.16-2.72 17.68-4.08 24.48-5.44 1.36 0 13.6-2.72 16.32-6.8 2.72-2.72 0-4.08 2.72-6.8 4.08-4.08 9.52-10.88 14.96-16.32 4.08-1.36 13.6-8.16 14.96-9.52 5.44-8.16 10.88-14.96 16.32-23.12 8.16-9.52 12.24-14.96 21.76-23.12 2.72-2.72 5.44-5.44 8.16-6.8 5.44 0 6.8-1.36 10.88-4.08 0 0 1.36-1.36-1.36-2.72h-2.72zm-38.08 20.4c-4.08 0-6.8 2.72-9.52 6.8 0 1.36 2.72 2.72 4.08 1.36 1.36-1.36 5.44-8.16 5.44-8.16z\" class=\"color-5\" />\r\n            <path d=\"M-56.643 322.48l302.872-1.36v66.64H-56.51z\" class=\"color-2\" />\r\n            <path d=\"M246.23 346.96l-303.01 4.08.273 36.72H246.23z\" class=\"color-3\" />\r\n          </g>\r\n          <g id=\"plate\">\r\n            <path d=\"M232 242h265l-12 15H244z\" class=\"color-3\" />\r\n            <path d=\"M262 245c-1 4-1 5-1 9h18v-9z\" class=\"color-4\" />\r\n          </g>\r\n          <g id=\"hand_cover\">\r\n            <g id=\"platecover\">\r\n              <path d=\"M365 120a8.88 8.88 0 0 0-9 8 8.88 8.88 0 0 0 6 8v5c-57 1-105 43-114 98h235c-10-55-59-96-115-98v-5a8.88 8.88 0 0 0 6-8 8.88 8.88 0 0 0-9-8z\" class=\"color-3\" />\r\n              <path d=\"M363 123c-3 0-5 2-5 5s2 5 5 5zm0 27c-49 0-92 37-100 85h16c13-64 48-75 84-85z\" class=\"color-4\" />\r\n            </g>\r\n            <g id=\"hand1\">\r\n              <path d=\"M367.914 9.065c-2.73 1.256-5.46 3.768-5.46 9.228 0 3.55 5.46 10.51 8.19 12.967 1.365 5.05 5.46 9.282 9.555 13.24-2.73-1.91-8.19-3.14-12.29-3.685l-9.56-2.047c-1.37-.274-4.1-.41-8.19-.683-5.46-1.774-8.19-2.32-8.19-2.32l-4.1-.683c-4.1-2.32-10.92-4.232-12.29-4.095-2.73 7.098 1.36 10.1 9.55 13.104 9.55 3.01 17.74 6.15 27.3 8.74-2.73 0-6.83.28-10.92 1.5-6.83 2.46-12.29 4.92-17.75 8.19l-12.27 4.51c-4.1.69-8.19 2.46-10.92 3.96-1.37 4.78 4.09 8.6 12.28 7.24 2.73-1.23 6.82-2.73 12.28-4.64 6.82-1.36 9.55-3 21.84-5.05 6.82.55 13.65 1.23 21.84 1.78-15.02 2.46-24.57 5.19-27.3 6.96-2.73 2.46-2.73 7.51-2.73 11.74-1.37 7.78-1.37 14.2 0 16.25 5.46 6.69 8.19 10.78 12.28 16.24 4.09-3 4.09-5.73 4.09-11.46-2.73-5.73-2.73-6.27-5.46-8.73 2.73-1.5 2.73-6 2.73-10.78 5.46-.54 10.92-2.18 16.38-3.95l9.55.957c2.73 1.773 4.09 2.32 6.82 2.046 4.093 1.91 8.19 3.96 12.283 6.55 4.093 6.96 2.73 13.11 1.363 18.16-5.46 6.96-9.555 9.416-13.65 12.42-6.825-1.5-21.84-1.64-23.205 8.053 4.096 1.64 9.556 1.64 13.65 3.004 2.73 1.366 8.19 6.826 10.92 6.826 2.73 0 10.92-6.826 15.016-10.375 6.827-3.41 12.287-6.003 16.38-9.01 2.73-1.5 12.287-6.412 12.287-6.412 6.828-2.73 16.38-6.55 21.84-9.96 9.558-4.37 16.38-4.504 32.76-5.46v12.42l43.68-.82L537.15 68l-42.31-.272v2.32c-9.56-2.456-13.65-1.91-20.48 0-5.46 1.5-13.65.547-20.47-.82-4.09-.68-8.19-2.183-10.92-3.685-12.28-4.778-24.57-8.464-36.85-13.787-6.82-4.64-12.28-9.148-17.74-13.65-2.73-2.596-5.46-6.008-8.19-9.284-4.096-3.96-6.826-7.51-8.19-10.24-1.366-3.277-2.73-6.007-4.096-9.5z\" class=\"color-4\" />\r\n              <path d=\"M325.6 37.948c1.364 2.594 5.46 5.187 15.014 8.054 4.095 1.092 10.92 3.55 21.84 6.825 2.73 0 23.205 3.413 23.205 3.413-12.29-4.915-36.86-13.65-38.22-13.924-2.73-.545-4.1-.272-6.83 0-1.37 0-9.56-2.866-15.02-4.367zm35.49 24.024c-8.19.546-15.016 2.32-21.84 4.368-15.016 5.46-17.746 7.644-25.936 10.92 2.73 1.23 6.825 1.91 9.555 1.365 4.09-.82 6.82-4.64 34.12-9.69 2.73-.138 13.65 1.09 21.84 1.364l4.09-.55c-8.19-4.23-15.02-6.42-21.84-7.78zm23.204 17.745c-8.19.547-21.84 2.73-23.205 4.505-4.1 5.05-2.73 10.784-1.37 17.063 2.73-1.23 2.73-6.28 2.73-10.784 6.82-.68 10.92-1.77 16.38-3.54 4.09.55 5.46.28 9.55 1.09 2.73 1.5 5.46 2.46 6.82 1.91 1.36.55 9.55 4.78 12.28 6.83 1.36 1.23 2.73 7.65 2.73 14.88 5.46-8.19 2.73-12.69 2.73-17.61 0-4.5-12.29-12.01-19.11-13.51-2.73-.54-6.83-.82-9.56-.82zm152.88 6.28l-23.205.682c-4.1-.55-10.92-.96-19.11.54v.27c-6.83 1.36-15.02 4.09-23.21 9.55-2.73 2.18-4.1-8.33-9.56-5.05-5.46 4.23-12.29 10.51-19.11 14.74-17.75 10.24-15.02 13.92-17.75 16.24-4.1 3.96-24.57 14.74-34.13 18.83 0 0 4.09 2.73 5.46 2.73 4.09 1.36 12.28-6.83 15.01-10.1 8.19-3.69 12.28-6.28 16.38-9.29 2.73-1.5 12.28-6.01 12.28-6.01 5.46-2.18 16.38-4.91 23.2-9.96 6.82-4.23 15.01-4.23 31.39-5.73V116l43.68-1.09z\" class=\"color-5\" />\r\n              <path d=\"M528.5 65.25L803 65v64.25L529.25 128z\" class=\"color-2\" />\r\n              <path d=\"M529 86.5l274 .5v42.25L529.25 128z\" class=\"color-3\" />\r\n            </g>\r\n            <path id=\"fork\" d=\"M264.404 197.884l38.043-18.917-26.95 31.068 33.75-24.057-22.4 36.49 43.822-41.613c4.66-4.26 6.33-10.085 4.83-15.482l58.96-53.823c2.97-2.718 3.18-7.304.46-10.28-2.718-2.978-7.303-3.187-10.28-.47l-58.96 53.824c-5.238-1.99-11.19-.858-15.858 3.403z\" class=\"color-3\" />\r\n          </g>\r\n        </g>\r\n      </svg>\r\n    </svg>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
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
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/publication-house/publication-house.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/publication-house/publication-house.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  publication-house works!\r\n</p>\r\n"

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
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.url = "/api/book";
    }
    BookService.prototype.createBook = function (book) {
        return this.http.post(this.url, book);
    };
    BookService.prototype.getBooks = function () {
        return this.http.get(this.url);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.url + "/" + book.bookId, book);
    };
    BookService.prototype.deleteBook = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BookService);
    return BookService;
}());
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