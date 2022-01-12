(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-warehouse-warehouse-module"], {
    /***/
    "/Hob":
    /*!********************************************************!*\
      !*** ./src/app/features/warehouse/warehouse.module.ts ***!
      \********************************************************/

    /*! exports provided: WarehouseModule */

    /***/
    function Hob(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarehouseModule", function () {
        return WarehouseModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _warehouse_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./warehouse-routing */
      "Xe4t");

      var WarehouseModule = function WarehouseModule() {
        _classCallCheck(this, WarehouseModule);
      };

      WarehouseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WarehouseModule
      });
      WarehouseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WarehouseModule_Factory(t) {
          return new (t || WarehouseModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _warehouse_routing__WEBPACK_IMPORTED_MODULE_2__["WarehouseRouting"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WarehouseModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _warehouse_routing__WEBPACK_IMPORTED_MODULE_2__["WarehouseRouting"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarehouseModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _warehouse_routing__WEBPACK_IMPORTED_MODULE_2__["WarehouseRouting"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PvIU":
    /*!********************************************************!*\
      !*** ./src/app/features/warehouse/page/page.module.ts ***!
      \********************************************************/

    /*! exports provided: PageModule */

    /***/
    function PvIU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageModule", function () {
        return PageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page.component */
      "xiq8");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      var PageModule = function PageModule() {
        _classCallCheck(this, PageModule);
      };

      PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageModule
      });
      PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageModule_Factory(t) {
          return new (t || PageModule)();
        },
        providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"],
          useValue: "es-mx"
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageModule, {
          declarations: [_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"]],
          exports: [_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"]],
            exports: [_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]],
            providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"],
              useValue: "es-mx"
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Xe4t":
    /*!*********************************************************!*\
      !*** ./src/app/features/warehouse/warehouse-routing.ts ***!
      \*********************************************************/

    /*! exports provided: WarehouseRouting */

    /***/
    function Xe4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarehouseRouting", function () {
        return WarehouseRouting;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page/page.component */
      "xiq8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _page_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page/page.module */
      "PvIU");

      var routes = [{
        path: "",
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]
      }];

      var WarehouseRouting = function WarehouseRouting() {
        _classCallCheck(this, WarehouseRouting);
      };

      WarehouseRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WarehouseRouting
      });
      WarehouseRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WarehouseRouting_Factory(t) {
          return new (t || WarehouseRouting)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"]], _page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WarehouseRouting, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"]],
          exports: [_page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarehouseRouting, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"]],
            exports: [_page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xiq8":
    /*!***********************************************************!*\
      !*** ./src/app/features/warehouse/page/page.component.ts ***!
      \***********************************************************/

    /*! exports provided: PageComponent */

    /***/
    function xiq8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
        return PageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function PageComponent_mat_card_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inspeccionar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r2.name);
        }
      }

      var PageComponent = /*#__PURE__*/function () {
        function PageComponent() {
          _classCallCheck(this, PageComponent);

          this.sections = [{
            section: 1,
            name: "Entradas"
          }, {
            section: 2,
            name: "Proceso"
          }, {
            section: 3,
            name: "Hornos"
          }, {
            section: 4,
            name: "Almacén Planta"
          }, {
            section: 5,
            name: "Salidas"
          }];
        }

        _createClass(PageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageComponent;
      }();

      PageComponent.ɵfac = function PageComponent_Factory(t) {
        return new (t || PageComponent)();
      };

      PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageComponent,
        selectors: [["app-page"]],
        decls: 11,
        vars: 3,
        consts: [[1, "container-warehouses-page"], [1, "date-section"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "warehouse-scrolls"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["mat-raised-button", "", "color", "default", 1, "button-inspection"]],
        template: function PageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Selecciona una fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PageComponent_mat_card_10_Template, 5, 1, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".container-warehouses-page[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.warehouse-scrolls[_ngcontent-%COMP%] {\n  min-width: 60%;\n  display: inline-flex;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  overflow-x: scroll;\n}\n\n.button-inspection[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: medium;\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvd2FyZWhvdXNlL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvd2FyZWhvdXNlL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItd2FyZWhvdXNlcy1wYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53YXJlaG91c2Utc2Nyb2xsc3tcclxuICAgIG1pbi13aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgb3ZlcmZsb3cteDpzY3JvbGw7XHJcbn1cclxuLmJ1dHRvbi1pbnNwZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page',
            templateUrl: './page.component.html',
            styleUrls: ['./page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=features-warehouse-warehouse-module-es5.js.map