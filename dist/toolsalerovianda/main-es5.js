(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/salvadorkano/Desktop/ToolSalesRovianda/ventas-metrics/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6KnP":
    /*!**************************************************!*\
      !*** ./src/app/providers/store/sales.effects.ts ***!
      \**************************************************/

    /*! exports provided: SaleEffects */

    /***/
    function KnP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleEffects", function () {
        return SaleEffects;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _sales_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sales.actions */
      "glQp");
      /* harmony import */


      var _services_Rovianda_Api_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/Rovianda.Api.Service */
      "M3y6");

      var SaleEffects = function SaleEffects(roviandaApi, actions) {
        var _this = this;

        _classCallCheck(this, SaleEffects);

        this.roviandaApi = roviandaApi;
        this.actions = actions;
        this.getAllSales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_sales_actions__WEBPACK_IMPORTED_MODULE_3__["getAllSalesForSuperAdmin"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (action) {
            return _this.roviandaApi.getAllSales(action.page, action.peerPage, action.saleIds, action.date, action.folio, action.dateTo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (response) {
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["setAllSalesForSuperAdmin"]({
                sales: response.body,
                count: +response.headers.get('x-total-count')
              }), Object(_sales_actions__WEBPACK_IMPORTED_MODULE_3__["getAcumulated"])({
                dateFrom: action.date,
                dateTo: action.dateTo
              })];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["setAllSalesForSuperAdmin"]({
                sales: [],
                count: 0
              })];
            }));
          }));
        });
        this.getTicket$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_sales_actions__WEBPACK_IMPORTED_MODULE_3__["getTicketOfSale"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (action) {
            return _this.roviandaApi.getTicket(action.saleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (response) {
              //console.log("TICKET",response);
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["setTicketOfSale"]({
                ticket: response
              })];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              //console.log("ERROR",err);
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["setTicketOfSale"]({
                ticket: ""
              })];
            }));
          }));
        });
        this.getAcumulated$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_sales_actions__WEBPACK_IMPORTED_MODULE_3__["getAcumulated"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (action) {
            return _this.roviandaApi.getAcumulated(action.dateFrom, action.dateTo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (res) {
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["setAcumulated"](res)];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["setAcumulated"]({
                contado: "0",
                credito: "0",
                total: "0",
                cobranza: "0"
              })];
            }));
          }));
        });
        this.deleteSales$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_sales_actions__WEBPACK_IMPORTED_MODULE_3__["deleteSalesSuperAdmin"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (action) {
            return _this.roviandaApi.delSalesOfSystem(action.salesIds, action.date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["deleteSalesSuperAdminSuccess"]()];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              return [_sales_actions__WEBPACK_IMPORTED_MODULE_3__["deleteSalesSuperAdminFail"]({
                error: err.message
              })];
            }));
          }));
        });
      };

      SaleEffects.ɵfac = function SaleEffects_Factory(t) {
        return new (t || SaleEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Rovianda_Api_Service__WEBPACK_IMPORTED_MODULE_4__["RoviandaApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]));
      };

      SaleEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SaleEffects,
        factory: SaleEffects.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaleEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _services_Rovianda_Api_Service__WEBPACK_IMPORTED_MODULE_4__["RoviandaApiService"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        basePath: "https://us-central1-sistema-rovianda.cloudfunctions.net/app/rovianda" //"https://us-central1-rovianda-88249.cloudfunctions.net/app/rovianda""http://localhost:5001/sistema-rovianda/us-central1/app/rovianda",//

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DHQ9":
    /*!**************************************************!*\
      !*** ./src/app/providers/store/sales.reducer.ts ***!
      \**************************************************/

    /*! exports provided: saleReducer */

    /***/
    function DHQ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saleReducer", function () {
        return saleReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _sales_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sales.actions */
      "glQp");

      var initValue = {
        sales: [],
        loading: false,
        count: 0,
        salesIds: [],
        totalAcumulated: 0,
        currentTiket: "",
        loadingTicket: false,
        isDeletingSales: false,
        errorDeleting: null,
        acumulated: {
          cobranza: "0",
          contado: "0",
          credito: "0",
          total: "0"
        }
      };
      var saleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initValue, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["getAllSalesForSuperAdmin"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["setAllSalesForSuperAdmin"], function (state, _ref) {
        var sales = _ref.sales,
            count = _ref.count;
        return Object.assign(Object.assign({}, state), {
          sales: sales,
          loading: false,
          count: count
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["sendAllRemovesToSystemSuccess"], function (state) {
        return Object.assign(Object.assign({}, state), {
          sales: [],
          loading: false,
          count: 0
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["sendAllRemovesToSystemError"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["addRemoveSale"], function (state, _ref2) {
        var id = _ref2.id;

        var sales = _toConsumableArray(state.sales);

        var salesIds = _toConsumableArray(state.salesIds);

        var saleId = _toConsumableArray(sales.filter(function (x) {
          return x.saleId == id;
        }))[0];

        salesIds.push(Object.assign({}, saleId));
        var amount = Object.assign({}, state).totalAcumulated;
        amount += saleId.amount;
        var idsOmited = salesIds.map(function (x) {
          return x.saleId;
        }); //console.log(sales.length);

        sales = sales.filter(function (x) {
          return !idsOmited.includes(x.saleId);
        }); //console.log(sales.length);

        return Object.assign(Object.assign({}, state), {
          salesIds: _toConsumableArray(salesIds),
          totalAcumulated: amount,
          sales: _toConsumableArray(sales),
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["popRemoveSale"], function (state, _ref3) {
        var id = _ref3.id;

        var salesIds = _toConsumableArray(state.salesIds);

        var saleId = _toConsumableArray(salesIds.filter(function (x) {
          return x.saleId == id;
        }))[0];

        var amount = Object.assign({}, state).totalAcumulated;
        amount -= saleId.amount;
        salesIds = salesIds.filter(function (x) {
          return x.saleId != id;
        });
        var idsOmited = salesIds.map(function (x) {
          return x.saleId;
        });

        var sales = _toConsumableArray(state.sales.filter(function (x) {
          return !idsOmited.includes(x.saleId);
        }));

        sales.push(saleId);
        return Object.assign(Object.assign({}, state), {
          salesIds: salesIds,
          totalAcumulated: amount,
          sales: sales,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["getTicketOfSale"], function (state, _ref4) {
        var saleId = _ref4.saleId;
        return Object.assign(Object.assign({}, state), {
          loadingTicket: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["setTicketOfSale"], function (state, _ref5) {
        var ticket = _ref5.ticket;
        return Object.assign(Object.assign({}, state), {
          currentTiket: ticket,
          loadingTicket: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["deleteSalesSuperAdmin"], function (state, _ref6) {
        var salesIds = _ref6.salesIds;
        return Object.assign(Object.assign({}, state), {
          isDeletingSales: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["deleteSalesSuperAdminSuccess"], function (state) {
        return Object.assign(Object.assign({}, state), {
          isDeletingSales: false,
          salesIds: [],
          totalAcumulated: 0
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["deleteSalesSuperAdminFail"], function (state, _ref7) {
        var error = _ref7.error;
        return Object.assign(Object.assign({}, state), {
          isDeletingSales: false,
          errorDeleting: error
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sales_actions__WEBPACK_IMPORTED_MODULE_1__["setAcumulated"], function (state, acumulated) {
        return Object.assign(Object.assign({}, state), {
          acumulated: acumulated
        });
      }));
      /***/
    },

    /***/
    "M3y6":
    /*!************************************************************!*\
      !*** ./src/app/providers/services/Rovianda.Api.Service.ts ***!
      \************************************************************/

    /*! exports provided: RoviandaApiService */

    /***/
    function M3y6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoviandaApiService", function () {
        return RoviandaApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var RoviandaApiService = /*#__PURE__*/function () {
        function RoviandaApiService(http) {
          _classCallCheck(this, RoviandaApiService);

          this.http = http;
          this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].basePath;
        }

        _createClass(RoviandaApiService, [{
          key: "getAllSales",
          value: function getAllSales(page, peerPage, saleIds, date, folio, dateTo) {
            var parameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            parameters = parameters.set("page", page.toString());
            parameters = parameters.set("peerPage", peerPage.toString());
            parameters = parameters.set("date", date);

            if (folio != null) {
              parameters = parameters.set("hint", folio);
            }

            if (dateTo) {
              parameters = parameters.set("dateTo", dateTo);
            }

            return this.http.post("".concat(this.path, "/sales-superadmin/sales"), {
              sales: saleIds
            }, {
              params: parameters,
              observe: "response"
            });
          }
        }, {
          key: "getTicket",
          value: function getTicket(saleId) {
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              responseType: 'text'
            };
            return this.http.get("".concat(this.path, "/sale-ticket/").concat(saleId), httpOptions);
          }
        }, {
          key: "delSalesOfSystem",
          value: function delSalesOfSystem(salesIds, date) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.set("date", date);
            return this.http.post("".concat(this.path, "/sales-superadmin/del"), salesIds, {
              params: params
            });
          }
        }, {
          key: "getReport",
          value: function getReport(date) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.set("date", date);
            return this.http.post("".concat(this.path, "/sales-superadmin/report-deleted"), {}, {
              params: params,
              responseType: 'blob'
            });
          }
        }, {
          key: "getAcumulated",
          value: function getAcumulated(from, to) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.set("dateFrom", from);
            params = params.set("dateTo", to);
            return this.http.get("".concat(this.path, "/accumulated/sales"), {
              params: params
            });
          }
        }, {
          key: "getAllSellers",
          value: function getAllSellers() {
            return this.http.get("".concat(this.path, "/admin-sales/sellers"));
          }
        }, {
          key: "loadAcumulatedBySeller",
          value: function loadAcumulatedBySeller(sellerId, date) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("date", date);
            return this.http.get("".concat(this.path, "/get-status/sales/").concat(sellerId), {
              params: params
            });
          }
        }, {
          key: "getClientOfSeller",
          value: function getClientOfSeller(sellerId) {
            return this.http.get("".concat(this.path, "/seller-clients/") + sellerId);
          }
        }, {
          key: "updateClient",
          value: function updateClient(clientId, clientUpdateRequest) {
            return this.http.put("".concat(this.path, "/seller-client/") + clientId, Object.assign({}, clientUpdateRequest));
          }
        }, {
          key: "registerClient",
          value: function registerClient(sellerId, clientUpdateRequest) {
            return this.http.post("".concat(this.path, "/admin-sales/client/") + sellerId, Object.assign({}, clientUpdateRequest));
          }
        }, {
          key: "getDaysVisit",
          value: function getDaysVisit(clientId) {
            return this.http.get("".concat(this.path, "/get-days-visit/") + clientId);
          }
        }, {
          key: "getLastCountClientRegister",
          value: function getLastCountClientRegister() {
            return this.http.get("".concat(this.path, "/client-register/last-count"));
          }
        }, {
          key: "deleteLogicClient",
          value: function deleteLogicClient(clientId) {
            return this.http["delete"]("".concat(this.path, "/client-delete/") + clientId);
          }
        }]);

        return RoviandaApiService;
      }();

      RoviandaApiService.ɵfac = function RoviandaApiService_Factory(t) {
        return new (t || RoviandaApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      RoviandaApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RoviandaApiService,
        factory: RoviandaApiService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoviandaApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'toolsalerovianda';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        consts: [[2, "height", "100%"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet", 0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _providers_store_sales_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./providers/store/sales.reducer */
      "DHQ9");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _providers_store_sales_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./providers/store/sales.effects */
      "6KnP");
      /* harmony import */


      var _providers_services_Rovianda_Api_Service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./providers/services/Rovianda.Api.Service */
      "M3y6");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_providers_services_Rovianda_Api_Service__WEBPACK_IMPORTED_MODULE_10__["RoviandaApiService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
          sales: _providers_store_sales_reducer__WEBPACK_IMPORTED_MODULE_7__["saleReducer"]
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_providers_store_sales_effects__WEBPACK_IMPORTED_MODULE_9__["SaleEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
              sales: _providers_store_sales_reducer__WEBPACK_IMPORTED_MODULE_7__["saleReducer"]
            }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_providers_store_sales_effects__WEBPACK_IMPORTED_MODULE_9__["SaleEffects"]])],
            providers: [_providers_services_Rovianda_Api_Service__WEBPACK_IMPORTED_MODULE_10__["RoviandaApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "glQp":
    /*!**************************************************!*\
      !*** ./src/app/providers/store/sales.actions.ts ***!
      \**************************************************/

    /*! exports provided: getAllSalesForSuperAdmin, setAllSalesForSuperAdmin, sendAllRemovesToSystem, sendAllRemovesToSystemSuccess, sendAllRemovesToSystemError, addRemoveSale, popRemoveSale, getTicketOfSale, setTicketOfSale, deleteSalesSuperAdmin, deleteSalesSuperAdminSuccess, deleteSalesSuperAdminFail, getAcumulated, setAcumulated */

    /***/
    function glQp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllSalesForSuperAdmin", function () {
        return getAllSalesForSuperAdmin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setAllSalesForSuperAdmin", function () {
        return setAllSalesForSuperAdmin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sendAllRemovesToSystem", function () {
        return sendAllRemovesToSystem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sendAllRemovesToSystemSuccess", function () {
        return sendAllRemovesToSystemSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sendAllRemovesToSystemError", function () {
        return sendAllRemovesToSystemError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addRemoveSale", function () {
        return addRemoveSale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "popRemoveSale", function () {
        return popRemoveSale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTicketOfSale", function () {
        return getTicketOfSale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setTicketOfSale", function () {
        return setTicketOfSale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteSalesSuperAdmin", function () {
        return deleteSalesSuperAdmin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteSalesSuperAdminSuccess", function () {
        return deleteSalesSuperAdminSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteSalesSuperAdminFail", function () {
        return deleteSalesSuperAdminFail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAcumulated", function () {
        return getAcumulated;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setAcumulated", function () {
        return setAcumulated;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var getAllSalesForSuperAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] getting all sales", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setAllSalesForSuperAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] setting all sales", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var sendAllRemovesToSystem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] setting sales to system", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var sendAllRemovesToSystemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] setting sales to system Success");
      var sendAllRemovesToSystemError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] setting sales to system Error");
      var addRemoveSale = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] remove sale", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var popRemoveSale = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] pop remove sale", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getTicketOfSale = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] getting ticket", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setTicketOfSale = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] setting ticket", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteSalesSuperAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] deleting sales", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteSalesSuperAdminSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] deleting sales success");
      var deleteSalesSuperAdminFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] deleting sales fail", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getAcumulated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] get acumulated", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setAcumulated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[SUPERADMIN] set acumulated", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-landing-landing-module */
          [__webpack_require__.e("default~features-home-home-module~features-landing-landing-module"), __webpack_require__.e("features-landing-landing-module")]).then(__webpack_require__.bind(null,
          /*! ./features/landing/landing.module */
          "0duw")).then(function (m) {
            return m.LandingModule;
          });
        }
      }, {
        path: "home",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-home-home-module */
          [__webpack_require__.e("default~features-home-home-module~features-landing-landing-module"), __webpack_require__.e("features-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./features/home/home.module */
          "fOOd")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map