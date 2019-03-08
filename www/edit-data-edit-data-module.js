(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-data-edit-data-module"],{

/***/ "./src/app/edit-data/edit-data.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-data/edit-data.module.ts ***!
  \***********************************************/
/*! exports provided: EditDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataPageModule", function() { return EditDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-data.page */ "./src/app/edit-data/edit-data.page.ts");







var routes = [
    {
        path: '',
        component: _edit_data_page__WEBPACK_IMPORTED_MODULE_6__["EditDataPage"]
    }
];
var EditDataPageModule = /** @class */ (function () {
    function EditDataPageModule() {
    }
    EditDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_data_page__WEBPACK_IMPORTED_MODULE_6__["EditDataPage"]]
        })
    ], EditDataPageModule);
    return EditDataPageModule;
}());



/***/ }),

/***/ "./src/app/edit-data/edit-data.page.html":
/*!***********************************************!*\
  !*** ./src/app/edit-data/edit-data.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Expense</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>Edit Data</h2>\n  <form (ngSubmit)=\"updateData()\">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"data.date\" name=\"date\" required=\"\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Type</ion-label>\n      <ion-select [(ngModel)]=\"data.type\" name=\"type\" required=\"\">\n        <ion-option value=\"Income\">Income</ion-option>\n        <ion-option value=\"Expense\">Expense</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"data.description\" name=\"description\" required=\"\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Amount</ion-label>\n      <ion-input type=\"number\" placeholder=\"Amount\" [(ngModel)]=\"data.amount\" name=\"amount\" required=\"\" ></ion-input>\n    </ion-item>\n    <ion-input type=\"hidden\" [(ngModel)]=\"data.rowid\" name=\"rowid\"></ion-input>\n    <button ion-button type=\"submit\" block>Update Data</button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-data/edit-data.page.scss":
/*!***********************************************!*\
  !*** ./src/app/edit-data/edit-data.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZGF0YS9lZGl0LWRhdGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-data/edit-data.page.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-data/edit-data.page.ts ***!
  \*********************************************/
/*! exports provided: EditDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataPage", function() { return EditDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");


//import { IonicPage, NavController, NavParams } from 'ionic-angular';


var EditDataPage = /** @class */ (function () {
    function EditDataPage(
    //public navCtrl: NavController,
    //public navParams: NavParams,
    sqlite, toast) {
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { rowid: 0, date: "", type: "", description: "", amount: 0 };
        // this.getCurrentData(navParams.get("rowid"));
    }
    EditDataPage.prototype.getCurrentData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM expense WHERE rowid=?', [rowid])
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.data.rowid = res.rows.item(0).rowid;
                    _this.data.date = res.rows.item(0).date;
                    _this.data.type = res.rows.item(0).type;
                    _this.data.description = res.rows.item(0).description;
                    _this.data.amount = res.rows.item(0).amount;
                }
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
    EditDataPage.prototype.updateData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('UPDATE expense SET date=?,type=?,description=?,amount=? WHERE rowid=?', [_this.data.date, _this.data.type, _this.data.description, _this.data.amount, _this.data.rowid])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data updated', '5000', 'center').subscribe(function (toast) {
                    //     this.navCtrl.popToRoot();
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
    EditDataPage.prototype.ngOnInit = function () {
    };
    EditDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-data',
            template: __webpack_require__(/*! ./edit-data.page.html */ "./src/app/edit-data/edit-data.page.html"),
            styles: [__webpack_require__(/*! ./edit-data.page.scss */ "./src/app/edit-data/edit-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__["Toast"]])
    ], EditDataPage);
    return EditDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-data-edit-data-module.js.map