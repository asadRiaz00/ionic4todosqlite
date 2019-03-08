(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-data-add-data-module"],{

/***/ "./src/app/add-data/add-data.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-data/add-data.module.ts ***!
  \*********************************************/
/*! exports provided: AddDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataPageModule", function() { return AddDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-data.page */ "./src/app/add-data/add-data.page.ts");







var routes = [
    {
        path: '',
        component: _add_data_page__WEBPACK_IMPORTED_MODULE_6__["AddDataPage"]
    }
];
var AddDataPageModule = /** @class */ (function () {
    function AddDataPageModule() {
    }
    AddDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_data_page__WEBPACK_IMPORTED_MODULE_6__["AddDataPage"]]
        })
    ], AddDataPageModule);
    return AddDataPageModule;
}());



/***/ }),

/***/ "./src/app/add-data/add-data.page.html":
/*!*********************************************!*\
  !*** ./src/app/add-data/add-data.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar>\n    <ion-title>My Expense</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>Add Data</h2>\n  <form (ngSubmit)=\"saveData()\">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"data.date\" name=\"date\" required=\"\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select [(ngModel)]=\"data.type\" name=\"type\" required=\"\">\n        <ion-select-option value=\"Income\">Income</ion-select-option>\n        <ion-select-option value=\"Expense\">Expense</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"data.description\" name=\"description\" required=\"\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Amount</ion-label>\n      <ion-input type=\"number\" placeholder=\"Amount\" [(ngModel)]=\"data.amount\" name=\"amount\" required=\"\" ></ion-input>\n    </ion-item>\n    <button ion-button type=\"submit\" block>Save Data</button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/add-data/add-data.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-data/add-data.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kYXRhL2FkZC1kYXRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-data/add-data.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-data/add-data.page.ts ***!
  \*******************************************/
/*! exports provided: AddDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataPage", function() { return AddDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");



//import { IonicPage, NavController, NavParams } from 'ionic-angular';


var AddDataPage = /** @class */ (function () {
    function AddDataPage(navCtrl, 
    // public navParams: NavParams,
    sqlite, toast) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { date: "", type: "", description: "", amount: 0 };
    }
    AddDataPage.prototype.saveData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)', [_this.data.date, _this.data.type, _this.data.description, _this.data.amount])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data saved', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.navigateForward('');
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    AddDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-data',
            template: __webpack_require__(/*! ./add-data.page.html */ "./src/app/add-data/add-data.page.html"),
            styles: [__webpack_require__(/*! ./add-data.page.scss */ "./src/app/add-data/add-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"]])
    ], AddDataPage);
    return AddDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-data-add-data-module.js.map