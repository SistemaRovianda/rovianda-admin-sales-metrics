(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-home-home-module~features-warehouse-warehouse-module"], {
    /***/
    "+rOU":
    /*!*******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
      \*******************************************************************/

    /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

    /***/
    function rOU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
        return BasePortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
        return BasePortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
        return CdkPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
        return CdkPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
        return ComponentPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
        return DomPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
        return DomPortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
        return DomPortalOutlet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Portal", function () {
        return Portal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
        return PortalHostDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
        return PortalInjector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
        return PortalModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
        return TemplatePortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
        return TemplatePortalDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception when attempting to attach a null portal to a host.
       * @docs-private
       */


      function throwNullPortalError() {
        throw Error('Must provide a portal to attach');
      }
      /**
       * Throws an exception when attempting to attach a portal to a host that is already attached.
       * @docs-private
       */


      function throwPortalAlreadyAttachedError() {
        throw Error('Host already has a portal attached');
      }
      /**
       * Throws an exception when attempting to attach a portal to an already-disposed host.
       * @docs-private
       */


      function throwPortalOutletAlreadyDisposedError() {
        throw Error('This PortalOutlet has already been disposed');
      }
      /**
       * Throws an exception when attempting to attach an unknown portal type.
       * @docs-private
       */


      function throwUnknownPortalTypeError() {
        throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
      }
      /**
       * Throws an exception when attempting to attach a portal to a null host.
       * @docs-private
       */


      function throwNullPortalOutletError() {
        throw Error('Attempting to attach a portal to a null PortalOutlet');
      }
      /**
       * Throws an exception when attempting to detach a portal that is not attached.
       * @docs-private
       */


      function throwNoPortalAttachedError() {
        throw Error('Attempting to detach a portal that is not attached to a host');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A `Portal` is something that you want to render somewhere else.
       * It can be attach to / detached from a `PortalOutlet`.
       */


      var Portal = /*#__PURE__*/function () {
        function Portal() {
          _classCallCheck(this, Portal);
        }

        _createClass(Portal, [{
          key: "attach",

          /** Attach this portal to a host. */
          value: function attach(host) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (host == null) {
                throwNullPortalOutletError();
              }

              if (host.hasAttached()) {
                throwPortalAlreadyAttachedError();
              }
            }

            this._attachedHost = host;
            return host.attach(this);
          }
          /** Detach this portal from its host */

        }, {
          key: "detach",
          value: function detach() {
            var host = this._attachedHost;

            if (host != null) {
              this._attachedHost = null;
              host.detach();
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throwNoPortalAttachedError();
            }
          }
          /** Whether this portal is attached to a host. */

        }, {
          key: "setAttachedHost",

          /**
           * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
           * the PortalOutlet when it is performing an `attach()` or `detach()`.
           */
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
        }]);

        return Portal;
      }();
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       */


      var ComponentPortal = /*#__PURE__*/function (_Portal) {
        _inherits(ComponentPortal, _Portal);

        var _super = _createSuper(ComponentPortal);

        function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
          var _this;

          _classCallCheck(this, ComponentPortal);

          _this = _super.call(this);
          _this.component = component;
          _this.viewContainerRef = viewContainerRef;
          _this.injector = injector;
          _this.componentFactoryResolver = componentFactoryResolver;
          return _this;
        }

        return ComponentPortal;
      }(Portal);
      /**
       * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
       */


      var TemplatePortal = /*#__PURE__*/function (_Portal2) {
        _inherits(TemplatePortal, _Portal2);

        var _super2 = _createSuper(TemplatePortal);

        function TemplatePortal(template, viewContainerRef, context) {
          var _this2;

          _classCallCheck(this, TemplatePortal);

          _this2 = _super2.call(this);
          _this2.templateRef = template;
          _this2.viewContainerRef = viewContainerRef;
          _this2.context = context;
          return _this2;
        }

        _createClass(TemplatePortal, [{
          key: "attach",

          /**
           * Attach the portal to the provided `PortalOutlet`.
           * When a context is provided it will override the `context` property of the `TemplatePortal`
           * instance.
           */
          value: function attach(host) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
            this.context = context;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
          }
        }, {
          key: "detach",
          value: function detach() {
            this.context = undefined;
            return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
          }
        }, {
          key: "origin",
          get: function get() {
            return this.templateRef.elementRef;
          }
        }]);

        return TemplatePortal;
      }(Portal);
      /**
       * A `DomPortal` is a portal whose DOM element will be taken from its current position
       * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
       * will be restored to its original position.
       */


      var DomPortal = /*#__PURE__*/function (_Portal3) {
        _inherits(DomPortal, _Portal3);

        var _super3 = _createSuper(DomPortal);

        function DomPortal(element) {
          var _this3;

          _classCallCheck(this, DomPortal);

          _this3 = _super3.call(this);
          _this3.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
          return _this3;
        }

        return DomPortal;
      }(Portal);
      /**
       * Partial implementation of PortalOutlet that handles attaching
       * ComponentPortal and TemplatePortal.
       */


      var BasePortalOutlet = /*#__PURE__*/function () {
        function BasePortalOutlet() {
          _classCallCheck(this, BasePortalOutlet);

          /** Whether this host has already been permanently disposed. */
          this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

          this.attachDomPortal = null;
        }
        /** Whether this host has an attached portal. */


        _createClass(BasePortalOutlet, [{
          key: "hasAttached",
          value: function hasAttached() {
            return !!this._attachedPortal;
          }
          /** Attaches a portal. */

        }, {
          key: "attach",
          value: function attach(portal) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!portal) {
                throwNullPortalError();
              }

              if (this.hasAttached()) {
                throwPortalAlreadyAttachedError();
              }

              if (this._isDisposed) {
                throwPortalOutletAlreadyDisposedError();
              }
            }

            if (portal instanceof ComponentPortal) {
              this._attachedPortal = portal;
              return this.attachComponentPortal(portal);
            } else if (portal instanceof TemplatePortal) {
              this._attachedPortal = portal;
              return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
            } else if (this.attachDomPortal && portal instanceof DomPortal) {
              this._attachedPortal = portal;
              return this.attachDomPortal(portal);
            }

            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throwUnknownPortalTypeError();
            }
          }
          /** Detaches a previously attached portal. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost(null);

              this._attachedPortal = null;
            }

            this._invokeDisposeFn();
          }
          /** Permanently dispose of this portal host. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.hasAttached()) {
              this.detach();
            }

            this._invokeDisposeFn();

            this._isDisposed = true;
          }
          /** @docs-private */

        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
        }, {
          key: "_invokeDisposeFn",
          value: function _invokeDisposeFn() {
            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = null;
            }
          }
        }]);

        return BasePortalOutlet;
      }();
      /**
       * @deprecated Use `BasePortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
        _inherits(BasePortalHost, _BasePortalOutlet);

        var _super4 = _createSuper(BasePortalHost);

        function BasePortalHost() {
          _classCallCheck(this, BasePortalHost);

          return _super4.apply(this, arguments);
        }

        return BasePortalHost;
      }(BasePortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       */


      var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
        _inherits(DomPortalOutlet, _BasePortalOutlet2);

        var _super5 = _createSuper(DomPortalOutlet);

        function DomPortalOutlet(
        /** Element into which the content is projected. */
        outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
        /**
         * @deprecated `_document` Parameter to be made required.
         * @breaking-change 10.0.0
         */
        _document) {
          var _thisSuper, _this4;

          _classCallCheck(this, DomPortalOutlet);

          _this4 = _super5.call(this);
          _this4.outletElement = outletElement;
          _this4._componentFactoryResolver = _componentFactoryResolver;
          _this4._appRef = _appRef;
          _this4._defaultInjector = _defaultInjector;
          /**
           * Attaches a DOM portal by transferring its content into the outlet.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this4.attachDomPortal = function (portal) {
            // @breaking-change 10.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this4._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this4._document.createComment('dom-portal');

            element.parentNode.insertBefore(anchorNode, element);

            _this4.outletElement.appendChild(element);

            _get((_thisSuper = _assertThisInitialized(_this4), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper, function () {
              // We can't use `replaceWith` here because IE doesn't support it.
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this4._document = _document;
          return _this4;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         * @returns Reference to the created component.
         */


        _createClass(DomPortalOutlet, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            var _this5 = this;

            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the view to the application.

            if (portal.viewContainerRef) {
              componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
              this.setDisposeFn(function () {
                return componentRef.destroy();
              });
            } else {
              componentRef = componentFactory.create(portal.injector || this._defaultInjector);

              this._appRef.attachView(componentRef.hostView);

              this.setDisposeFn(function () {
                _this5._appRef.detachView(componentRef.hostView);

                componentRef.destroy();
              });
            } // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.


            this.outletElement.appendChild(this._getComponentRootNode(componentRef));
            return componentRef;
          }
          /**
           * Attaches a template portal to the DOM as an embedded view.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this6 = this;

            var viewContainer = portal.viewContainerRef;
            var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
            // But for the DomPortalOutlet the view can be added everywhere in the DOM
            // (e.g Overlay Container) To move the view to the specified host element. We just
            // re-append the existing root nodes.

            viewRef.rootNodes.forEach(function (rootNode) {
              return _this6.outletElement.appendChild(rootNode);
            }); // Note that we want to detect changes after the nodes have been moved so that
            // any directives inside the portal that are looking at the DOM inside a lifecycle
            // hook won't be invoked too early.

            viewRef.detectChanges();
            this.setDisposeFn(function () {
              var index = viewContainer.indexOf(viewRef);

              if (index !== -1) {
                viewContainer.remove(index);
              }
            }); // TODO(jelbourn): Return locals from view.

            return viewRef;
          }
          /**
           * Clears out a portal from the DOM.
           */

        }, {
          key: "dispose",
          value: function dispose() {
            _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

            if (this.outletElement.parentNode != null) {
              this.outletElement.parentNode.removeChild(this.outletElement);
            }
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return DomPortalOutlet;
      }(BasePortalOutlet);
      /**
       * @deprecated Use `DomPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
        _inherits(DomPortalHost, _DomPortalOutlet);

        var _super6 = _createSuper(DomPortalHost);

        function DomPortalHost() {
          _classCallCheck(this, DomPortalHost);

          return _super6.apply(this, arguments);
        }

        return DomPortalHost;
      }(DomPortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
       * the directive instance itself can be attached to a host, enabling declarative use of portals.
       */


      var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
        _inherits(CdkPortal, _TemplatePortal);

        var _super7 = _createSuper(CdkPortal);

        function CdkPortal(templateRef, viewContainerRef) {
          _classCallCheck(this, CdkPortal);

          return _super7.call(this, templateRef, viewContainerRef);
        }

        return CdkPortal;
      }(TemplatePortal);

      CdkPortal.ɵfac = function CdkPortal_Factory(t) {
        return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortal,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortal]',
            exportAs: 'cdkPortal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, null);
      })();
      /**
       * @deprecated Use `CdkPortal` instead.
       * @breaking-change 9.0.0
       */


      var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
        _inherits(TemplatePortalDirective, _CdkPortal);

        var _super8 = _createSuper(TemplatePortalDirective);

        function TemplatePortalDirective() {
          _classCallCheck(this, TemplatePortalDirective);

          return _super8.apply(this, arguments);
        }

        return TemplatePortalDirective;
      }(CdkPortal);

      TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
        return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
      };

      TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TemplatePortalDirective,
        selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortal,
          useExisting: TemplatePortalDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵTemplatePortalDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdk-portal], [portal]',
            exportAs: 'cdkPortal',
            providers: [{
              provide: CdkPortal,
              useExisting: TemplatePortalDirective
            }]
          }]
        }], null, null);
      })();
      /**
       * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
       * directly attached to it, enabling declarative use.
       *
       * Usage:
       * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
       */


      var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
        _inherits(CdkPortalOutlet, _BasePortalOutlet3);

        var _super9 = _createSuper(CdkPortalOutlet);

        function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
          var _thisSuper2, _this7;

          _classCallCheck(this, CdkPortalOutlet);

          _this7 = _super9.call(this);
          _this7._componentFactoryResolver = _componentFactoryResolver;
          _this7._viewContainerRef = _viewContainerRef;
          /** Whether the portal component is initialized. */

          _this7._isInitialized = false;
          /** Emits when a portal is attached to the outlet. */

          _this7.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this7.attachDomPortal = function (portal) {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this7._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this7._document.createComment('dom-portal');

            portal.setAttachedHost(_assertThisInitialized(_this7));
            element.parentNode.insertBefore(anchorNode, element);

            _this7._getRootNode().appendChild(element);

            _get((_thisSuper2 = _assertThisInitialized(_this7), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2, function () {
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this7._document = _document;
          return _this7;
        }
        /** Portal associated with the Portal outlet. */


        _createClass(CdkPortalOutlet, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

            this._attachedPortal = null;
            this._attachedRef = null;
          }
          /**
           * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
           *
           * @param portal Portal to be attached to the portal outlet.
           * @returns Reference to the created component.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.

            var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
            // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
            // inside of the alternate view container.

            if (viewContainerRef !== this._viewContainerRef) {
              this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
            }

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return ref.destroy();
            });

            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
          }
          /**
           * Attach the given TemplatePortal to this PortalHost as an embedded View.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this8 = this;

            portal.setAttachedHost(this);

            var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return _this8._viewContainerRef.clear();
            });

            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
          }
          /** Gets the root node of the portal outlet. */

        }, {
          key: "_getRootNode",
          value: function _getRootNode() {
            var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
            // node being the root. Use the comment's parent node if that is the case.

            return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
          }
        }, {
          key: "portal",
          get: function get() {
            return this._attachedPortal;
          },
          set: function set(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
              return;
            }

            if (this.hasAttached()) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
            }

            if (portal) {
              _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
            }

            this._attachedPortal = portal;
          }
          /** Component or view reference that is attached to the portal. */

        }, {
          key: "attachedRef",
          get: function get() {
            return this._attachedRef;
          }
        }]);

        return CdkPortalOutlet;
      }(BasePortalOutlet);

      CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
        return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkPortalOutlet,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
          portal: ["cdkPortalOutlet", "portal"]
        },
        outputs: {
          attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      CdkPortalOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      CdkPortalOutlet.propDecorators = {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalOutlet]',
            exportAs: 'cdkPortalOutlet',
            inputs: ['portal: cdkPortalOutlet']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          attached: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * @deprecated Use `CdkPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
        _inherits(PortalHostDirective, _CdkPortalOutlet);

        var _super10 = _createSuper(PortalHostDirective);

        function PortalHostDirective() {
          _classCallCheck(this, PortalHostDirective);

          return _super10.apply(this, arguments);
        }

        return PortalHostDirective;
      }(CdkPortalOutlet);

      PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
        return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
      };

      PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PortalHostDirective,
        selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
        inputs: {
          portal: ["cdkPortalHost", "portal"]
        },
        exportAs: ["cdkPortalHost"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CdkPortalOutlet,
          useExisting: PortalHostDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵPortalHostDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkPortalHost], [portalHost]',
            exportAs: 'cdkPortalHost',
            inputs: ['portal: cdkPortalHost'],
            providers: [{
              provide: CdkPortalOutlet,
              useExisting: PortalHostDirective
            }]
          }]
        }], null, null);
      })();

      var PortalModule = function PortalModule() {
        _classCallCheck(this, PortalModule);
      };

      PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PortalModule
      });
      PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PortalModule_Factory(t) {
          return new (t || PortalModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
            declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Custom injector to be used when providing custom
       * injection tokens to components inside a portal.
       * @docs-private
       * @deprecated Use `Injector.create` instead.
       * @breaking-change 11.0.0
       */


      var PortalInjector = /*#__PURE__*/function () {
        function PortalInjector(_parentInjector, _customTokens) {
          _classCallCheck(this, PortalInjector);

          this._parentInjector = _parentInjector;
          this._customTokens = _customTokens;
        }

        _createClass(PortalInjector, [{
          key: "get",
          value: function get(token, notFoundValue) {
            var value = this._customTokens.get(token);

            if (typeof value !== 'undefined') {
              return value;
            }

            return this._parentInjector.get(token, notFoundValue);
          }
        }]);

        return PortalInjector;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=portal.js.map

      /***/

    },

    /***/
    "0EQZ":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
      \************************************************************************/

    /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, getMultipleValuesInSingleSelectionError, isDataSource */

    /***/
    function EQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
        return ArrayDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSource", function () {
        return DataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
        return SelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
        return UniqueSelectionDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_DisposeViewRepeaterStrategy", function () {
        return _DisposeViewRepeaterStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_RecycleViewRepeaterStrategy", function () {
        return _RecycleViewRepeaterStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_VIEW_REPEATER_STRATEGY", function () {
        return _VIEW_REPEATER_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
        return getMultipleValuesInSingleSelectionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
        return isDataSource;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DataSource = function DataSource() {
        _classCallCheck(this, DataSource);
      };
      /** Checks whether an object is a data source. */


      function isDataSource(value) {
        // Check if the value is a DataSource by observing if it has a connect function. Cannot
        // be checked as an `instanceof DataSource` since people could create their own sources
        // that match the interface, but don't extend DataSource.
        return value && typeof value.connect === 'function';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** DataSource wrapper for a native array. */


      var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
        _inherits(ArrayDataSource, _DataSource);

        var _super11 = _createSuper(ArrayDataSource);

        function ArrayDataSource(_data) {
          var _this9;

          _classCallCheck(this, ArrayDataSource);

          _this9 = _super11.call(this);
          _this9._data = _data;
          return _this9;
        }

        _createClass(ArrayDataSource, [{
          key: "connect",
          value: function connect() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return ArrayDataSource;
      }(DataSource);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A repeater that destroys views when they are removed from a
       * {@link ViewContainerRef}. When new items are inserted into the container,
       * the repeater will always construct a new embedded view for each item.
       *
       * @template T The type for the embedded view's $implicit property.
       * @template R The type for the item in each IterableDiffer change record.
       * @template C The type for the context passed to each embedded view.
       */


      var _DisposeViewRepeaterStrategy = /*#__PURE__*/function () {
        function _DisposeViewRepeaterStrategy() {
          _classCallCheck(this, _DisposeViewRepeaterStrategy);
        }

        _createClass(_DisposeViewRepeaterStrategy, [{
          key: "applyChanges",
          value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              var view;
              var operation;

              if (record.previousIndex == null) {
                var insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
                operation = 1
                /* INSERTED */
                ;
              } else if (currentIndex == null) {
                viewContainerRef.remove(adjustedPreviousIndex);
                operation = 3
                /* REMOVED */
                ;
              } else {
                view = viewContainerRef.get(adjustedPreviousIndex);
                viewContainerRef.move(view, currentIndex);
                operation = 2
                /* MOVED */
                ;
              }

              if (itemViewChanged) {
                itemViewChanged({
                  context: view === null || view === void 0 ? void 0 : view.context,
                  operation: operation,
                  record: record
                });
              }
            });
          }
        }, {
          key: "detach",
          value: function detach() {}
        }]);

        return _DisposeViewRepeaterStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A repeater that caches views when they are removed from a
       * {@link ViewContainerRef}. When new items are inserted into the container,
       * the repeater will reuse one of the cached views instead of creating a new
       * embedded view. Recycling cached views reduces the quantity of expensive DOM
       * inserts.
       *
       * @template T The type for the embedded view's $implicit property.
       * @template R The type for the item in each IterableDiffer change record.
       * @template C The type for the context passed to each embedded view.
       */


      var _RecycleViewRepeaterStrategy = /*#__PURE__*/function () {
        function _RecycleViewRepeaterStrategy() {
          _classCallCheck(this, _RecycleViewRepeaterStrategy);

          /**
           * The size of the cache used to store unused views.
           * Setting the cache size to `0` will disable caching. Defaults to 20 views.
           */
          this.viewCacheSize = 20;
          /**
           * View cache that stores embedded view instances that have been previously stamped out,
           * but don't are not currently rendered. The view repeater will reuse these views rather than
           * creating brand new ones.
           *
           * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
           */

          this._viewCache = [];
        }
        /** Apply changes to the DOM. */


        _createClass(_RecycleViewRepeaterStrategy, [{
          key: "applyChanges",
          value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
            var _this10 = this;

            // Rearrange the views to put them in the right location.
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              var view;
              var operation;

              if (record.previousIndex == null) {
                // Item added.
                var viewArgsFactory = function viewArgsFactory() {
                  return itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                };

                view = _this10._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = view ? 1
                /* INSERTED */
                : 0
                /* REPLACED */
                ;
              } else if (currentIndex == null) {
                // Item removed.
                _this10._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);

                operation = 3
                /* REMOVED */
                ;
              } else {
                // Item moved.
                view = _this10._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = 2
                /* MOVED */
                ;
              }

              if (itemViewChanged) {
                itemViewChanged({
                  context: view === null || view === void 0 ? void 0 : view.context,
                  operation: operation,
                  record: record
                });
              }
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            var _iterator = _createForOfIteratorHelper(this._viewCache),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var view = _step.value;
                view.destroy();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Inserts a view for a new item, either from the cache or by creating a new
           * one. Returns `undefined` if the item was inserted into a cached view.
           */

        }, {
          key: "_insertView",
          value: function _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
            var cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);

            if (cachedView) {
              cachedView.context.$implicit = value;
              return undefined;
            }

            var viewArgs = viewArgsFactory();
            return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
          }
          /** Detaches the view at the given index and inserts into the view cache. */

        }, {
          key: "_detachAndCacheView",
          value: function _detachAndCacheView(index, viewContainerRef) {
            var detachedView = this._detachView(index, viewContainerRef);

            this._maybeCacheView(detachedView, viewContainerRef);
          }
          /** Moves view at the previous index to the current index. */

        }, {
          key: "_moveView",
          value: function _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
            var view = viewContainerRef.get(adjustedPreviousIndex);
            viewContainerRef.move(view, currentIndex);
            view.context.$implicit = value;
            return view;
          }
          /**
           * Cache the given detached view. If the cache is full, the view will be
           * destroyed.
           */

        }, {
          key: "_maybeCacheView",
          value: function _maybeCacheView(view, viewContainerRef) {
            if (this._viewCache.length < this.viewCacheSize) {
              this._viewCache.push(view);
            } else {
              var index = viewContainerRef.indexOf(view); // The host component could remove views from the container outside of
              // the view repeater. It's unlikely this will occur, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.

              if (index === -1) {
                view.destroy();
              } else {
                viewContainerRef.remove(index);
              }
            }
          }
          /** Inserts a recycled view from the cache at the given index. */

        }, {
          key: "_insertViewFromCache",
          value: function _insertViewFromCache(index, viewContainerRef) {
            var cachedView = this._viewCache.pop();

            if (cachedView) {
              viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
          /** Detaches the embedded view at the given index. */

        }, {
          key: "_detachView",
          value: function _detachView(index, viewContainerRef) {
            return viewContainerRef.detach(index);
          }
        }]);

        return _RecycleViewRepeaterStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to be used to power selecting one or more options from a list.
       */


      var SelectionModel = /*#__PURE__*/function () {
        function SelectionModel() {
          var _this11 = this;

          var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

          var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          _classCallCheck(this, SelectionModel);

          this._multiple = _multiple;
          this._emitChanges = _emitChanges;
          /** Currently-selected values. */

          this._selection = new Set();
          /** Keeps track of the deselected options that haven't been emitted by the change event. */

          this._deselectedToEmit = [];
          /** Keeps track of the selected options that haven't been emitted by the change event. */

          this._selectedToEmit = [];
          /** Event emitted when the value has changed. */

          this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
              initiallySelectedValues.forEach(function (value) {
                return _this11._markSelected(value);
              });
            } else {
              this._markSelected(initiallySelectedValues[0]);
            } // Clear the array in order to avoid firing the change event for preselected values.


            this._selectedToEmit.length = 0;
          }
        }
        /** Selected values. */


        _createClass(SelectionModel, [{
          key: "select",

          /**
           * Selects a value or an array of values.
           */
          value: function select() {
            var _this12 = this;

            for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
              values[_key] = arguments[_key];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this12._markSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Deselects a value or an array of values.
           */

        }, {
          key: "deselect",
          value: function deselect() {
            var _this13 = this;

            for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              values[_key2] = arguments[_key2];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this13._unmarkSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Toggles a value between selected and deselected.
           */

        }, {
          key: "toggle",
          value: function toggle(value) {
            this.isSelected(value) ? this.deselect(value) : this.select(value);
          }
          /**
           * Clears all of the selected values.
           */

        }, {
          key: "clear",
          value: function clear() {
            this._unmarkAll();

            this._emitChangeEvent();
          }
          /**
           * Determines whether a value is selected.
           */

        }, {
          key: "isSelected",
          value: function isSelected(value) {
            return this._selection.has(value);
          }
          /**
           * Determines whether the model does not have a value.
           */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._selection.size === 0;
          }
          /**
           * Determines whether the model has a value.
           */

        }, {
          key: "hasValue",
          value: function hasValue() {
            return !this.isEmpty();
          }
          /**
           * Sorts the selected values based on a predicate function.
           */

        }, {
          key: "sort",
          value: function sort(predicate) {
            if (this._multiple && this.selected) {
              this._selected.sort(predicate);
            }
          }
          /**
           * Gets whether multiple values can be selected.
           */

        }, {
          key: "isMultipleSelection",
          value: function isMultipleSelection() {
            return this._multiple;
          }
          /** Emits a change event and clears the records of selected and deselected values. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            // Clear the selected values so they can be re-cached.
            this._selected = null;

            if (this._selectedToEmit.length || this._deselectedToEmit.length) {
              this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
              });
              this._deselectedToEmit = [];
              this._selectedToEmit = [];
            }
          }
          /** Selects a value. */

        }, {
          key: "_markSelected",
          value: function _markSelected(value) {
            if (!this.isSelected(value)) {
              if (!this._multiple) {
                this._unmarkAll();
              }

              this._selection.add(value);

              if (this._emitChanges) {
                this._selectedToEmit.push(value);
              }
            }
          }
          /** Deselects a value. */

        }, {
          key: "_unmarkSelected",
          value: function _unmarkSelected(value) {
            if (this.isSelected(value)) {
              this._selection["delete"](value);

              if (this._emitChanges) {
                this._deselectedToEmit.push(value);
              }
            }
          }
          /** Clears out the selected values. */

        }, {
          key: "_unmarkAll",
          value: function _unmarkAll() {
            var _this14 = this;

            if (!this.isEmpty()) {
              this._selection.forEach(function (value) {
                return _this14._unmarkSelected(value);
              });
            }
          }
          /**
           * Verifies the value assignment and throws an error if the specified value array is
           * including multiple values while the selection model is not supporting multiple values.
           */

        }, {
          key: "_verifyValueAssignment",
          value: function _verifyValueAssignment(values) {
            if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMultipleValuesInSingleSelectionError();
            }
          }
        }, {
          key: "selected",
          get: function get() {
            if (!this._selected) {
              this._selected = Array.from(this._selection.values());
            }

            return this._selected;
          }
        }]);

        return SelectionModel;
      }();
      /**
       * Returns an error that reports that multiple values are passed into a selection model
       * with a single value.
       * @docs-private
       */


      function getMultipleValuesInSingleSelectionError() {
        return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to coordinate unique selection based on name.
       * Intended to be consumed as an Angular service.
       * This service is needed because native radio change events are only fired on the item currently
       * being selected, and we still need to uncheck the previous selection.
       *
       * This service does not *store* any IDs and names because they may change at any time, so it is
       * less error-prone if they are simply passed through when the events occur.
       */


      var UniqueSelectionDispatcher = /*#__PURE__*/function () {
        function UniqueSelectionDispatcher() {
          _classCallCheck(this, UniqueSelectionDispatcher);

          this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param id ID of the item.
         * @param name Name of the item.
         */


        _createClass(UniqueSelectionDispatcher, [{
          key: "notify",
          value: function notify(id, name) {
            var _iterator2 = _createForOfIteratorHelper(this._listeners),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var listener = _step2.value;
                listener(id, name);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /**
           * Listen for future changes to item selection.
           * @return Function used to deregister listener
           */

        }, {
          key: "listen",
          value: function listen(listener) {
            var _this15 = this;

            this._listeners.push(listener);

            return function () {
              _this15._listeners = _this15._listeners.filter(function (registered) {
                return listener !== registered;
              });
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._listeners = [];
          }
        }]);

        return UniqueSelectionDispatcher;
      }();

      UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
        return new (t || UniqueSelectionDispatcher)();
      };

      UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function UniqueSelectionDispatcher_Factory() {
          return new UniqueSelectionDispatcher();
        },
        token: UniqueSelectionDispatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
       * @docs-private
       */


      var _VIEW_REPEATER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('_ViewRepeater');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=collections.js.map

      /***/

    },

    /***/
    "0IaG":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
      \************************************************************************/

    /*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _MatDialogBase, _MatDialogContainerBase, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */

    /***/
    function IaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
        return MAT_DIALOG_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
        return MAT_DIALOG_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
        return MatDialog;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
        return MatDialogActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
        return MatDialogClose;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
        return MatDialogConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
        return MatDialogContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
        return MatDialogContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
        return MatDialogModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
        return MatDialogRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
        return MatDialogTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatDialogBase", function () {
        return _MatDialogBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatDialogContainerBase", function () {
        return _MatDialogContainerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function () {
        return _closeDialogVia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
        return matDialogAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
        return throwMatDialogContentAlreadyAttachedError;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for opening a modal dialog with the MatDialog service.
       */


      function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

      var MatDialogConfig = function MatDialogConfig() {
        _classCallCheck(this, MatDialogConfig);

        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */

        this.panelClass = '';
        /** Whether the dialog has a backdrop. */

        this.hasBackdrop = true;
        /** Custom class for the backdrop. */

        this.backdropClass = '';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */

        this.disableClose = false;
        /** Width of the dialog. */

        this.width = '';
        /** Height of the dialog. */

        this.height = '';
        /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

        this.maxWidth = '80vw';
        /** Data being injected into the child component. */

        this.data = null;
        /** ID of the element that describes the dialog. */

        this.ariaDescribedBy = null;
        /** ID of the element that labels the dialog. */

        this.ariaLabelledBy = null;
        /** Aria label to assign to the dialog element. */

        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */

        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */

        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by MatDialog.
       * @docs-private
       */


      var matDialogAnimations = {
        /** Animation that is applied on the dialog container by default. */
        dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          opacity: 0,
          transform: 'scale(0.7)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none',
          opacity: 1
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          opacity: 0
        })))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception for the case when a ComponentPortal is
       * attached to a DomPortalOutlet without an origin.
       * @docs-private
       */

      function throwMatDialogContentAlreadyAttachedError() {
        throw Error('Attempting to attach dialog content after content is already attached');
      }
      /**
       * Base class for the `MatDialogContainer`. The base class does not implement
       * animations as these are left to implementers of the dialog container.
       */


      var _MatDialogContainerBase = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(_MatDialogContainerBase, _angular_cdk_portal__);

        var _super12 = _createSuper(_MatDialogContainerBase);

        function _MatDialogContainerBase(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
        /** The dialog configuration. */
        _config, _focusMonitor) {
          var _this16;

          _classCallCheck(this, _MatDialogContainerBase);

          _this16 = _super12.call(this);
          _this16._elementRef = _elementRef;
          _this16._focusTrapFactory = _focusTrapFactory;
          _this16._changeDetectorRef = _changeDetectorRef;
          _this16._config = _config;
          _this16._focusMonitor = _focusMonitor;
          /** Emits when an animation state changes. */

          _this16._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Element that was focused before the dialog was opened. Save this to restore upon close. */

          _this16._elementFocusedBeforeDialogWasOpened = null;
          /**
           * Type of interaction that led to the dialog being closed. This is used to determine
           * whether the focus style will be applied when returning focus to its original location
           * after the dialog is closed.
           */

          _this16._closeInteractionType = null;
          /**
           * Attaches a DOM portal to the dialog container.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this16.attachDomPortal = function (portal) {
            if (_this16._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return _this16._portalOutlet.attachDomPortal(portal);
          };

          _this16._ariaLabelledBy = _config.ariaLabelledBy || null;
          _this16._document = _document;
          return _this16;
        }
        /** Initializes the dialog container with the attached content. */


        _createClass(_MatDialogContainerBase, [{
          key: "_initializeWithAttachedContent",
          value: function _initializeWithAttachedContent() {
            this._setupFocusTrap(); // Save the previously focused element. This element will be re-focused
            // when the dialog closes.


            this._capturePreviouslyFocusedElement(); // Move focus onto the dialog immediately in order to prevent the user
            // from accidentally opening multiple dialogs at the same time.


            this._focusDialogContainer();
          }
          /**
           * Attach a ComponentPortal as content to this dialog container.
           * @param portal Portal to be attached as the dialog content.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return this._portalOutlet.attachComponentPortal(portal);
          }
          /**
           * Attach a TemplatePortal as content to this dialog container.
           * @param portal Portal to be attached as the dialog content.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return this._portalOutlet.attachTemplatePortal(portal);
          }
          /** Moves focus back into the dialog if it was moved out. */

        }, {
          key: "_recaptureFocus",
          value: function _recaptureFocus() {
            if (!this._containsFocus()) {
              var focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();

              if (focusContainer) {
                this._elementRef.nativeElement.focus();
              }
            }
          }
          /** Moves the focus inside the focus trap. */

        }, {
          key: "_trapFocus",
          value: function _trapFocus() {
            // If we were to attempt to focus immediately, then the content of the dialog would not yet be
            // ready in instances where change detection has to run first. To deal with this, we simply
            // wait for the microtask queue to be empty.
            if (this._config.autoFocus) {
              this._focusTrap.focusInitialElementWhenReady();
            } else if (!this._containsFocus()) {
              // Otherwise ensure that focus is on the dialog container. It's possible that a different
              // component tried to move focus while the open animation was running. See:
              // https://github.com/angular/components/issues/16215. Note that we only want to do this
              // if the focus isn't inside the dialog already, because it's possible that the consumer
              // turned off `autoFocus` in order to move focus themselves.
              this._elementRef.nativeElement.focus();
            }
          }
          /** Restores focus to the element that was focused before the dialog opened. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            var previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

            if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
              var activeElement = this._document.activeElement;
              var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
              // non-focusable element like the backdrop was clicked) before moving it. It's possible that
              // the consumer moved it themselves before the animation was done, in which case we shouldn't
              // do anything.

              if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
                if (this._focusMonitor) {
                  this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

                  this._closeInteractionType = null;
                } else {
                  previousElement.focus();
                }
              }
            }

            if (this._focusTrap) {
              this._focusTrap.destroy();
            }
          }
          /** Sets up the focus trap. */

        }, {
          key: "_setupFocusTrap",
          value: function _setupFocusTrap() {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          }
          /** Captures the element that was focused before the dialog was opened. */

        }, {
          key: "_capturePreviouslyFocusedElement",
          value: function _capturePreviouslyFocusedElement() {
            if (this._document) {
              this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
            }
          }
          /** Focuses the dialog container. */

        }, {
          key: "_focusDialogContainer",
          value: function _focusDialogContainer() {
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
              this._elementRef.nativeElement.focus();
            }
          }
          /** Returns whether focus is inside the dialog. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            var element = this._elementRef.nativeElement;
            var activeElement = this._document.activeElement;
            return element === activeElement || element.contains(activeElement);
          }
        }]);

        return _MatDialogContainerBase;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

      _MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) {
        return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]));
      };

      _MatDialogContainerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatDialogContainerBase,
        viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatDialogContainerBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: MatDialogConfig
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
        }];
      };

      _MatDialogContainerBase.propDecorators = {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: MatDialogConfig
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
          }];
        }, {
          _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
              "static": true
            }]
          }]
        });
      })();
      /**
       * Internal component that wraps user-provided dialog content.
       * Animation is based on https://material.io/guidelines/motion/choreography.html.
       * @docs-private
       */


      var MatDialogContainer = /*#__PURE__*/function (_MatDialogContainerBa) {
        _inherits(MatDialogContainer, _MatDialogContainerBa);

        var _super13 = _createSuper(MatDialogContainer);

        function MatDialogContainer() {
          var _this17;

          _classCallCheck(this, MatDialogContainer);

          _this17 = _super13.apply(this, arguments);
          /** State of the dialog animation. */

          _this17._state = 'enter';
          return _this17;
        }
        /** Callback, invoked whenever an animation on the host completes. */


        _createClass(MatDialogContainer, [{
          key: "_onAnimationDone",
          value: function _onAnimationDone(_ref) {
            var toState = _ref.toState,
                totalTime = _ref.totalTime;

            if (toState === 'enter') {
              this._trapFocus();

              this._animationStateChanged.next({
                state: 'opened',
                totalTime: totalTime
              });
            } else if (toState === 'exit') {
              this._restoreFocus();

              this._animationStateChanged.next({
                state: 'closed',
                totalTime: totalTime
              });
            }
          }
          /** Callback, invoked when an animation on the host starts. */

        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(_ref2) {
            var toState = _ref2.toState,
                totalTime = _ref2.totalTime;

            if (toState === 'enter') {
              this._animationStateChanged.next({
                state: 'opening',
                totalTime: totalTime
              });
            } else if (toState === 'exit' || toState === 'void') {
              this._animationStateChanged.next({
                state: 'closing',
                totalTime: totalTime
              });
            }
          }
          /** Starts the dialog exit animation. */

        }, {
          key: "_startExitAnimation",
          value: function _startExitAnimation() {
            this._state = 'exit'; // Mark the container for check so it can react if the
            // view container is using OnPush change detection.

            this._changeDetectorRef.markForCheck();
          }
        }]);

        return MatDialogContainer;
      }(_MatDialogContainerBase);

      MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
        return ɵMatDialogContainer_BaseFactory(t || MatDialogContainer);
      };

      MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatDialogContainer,
        selectors: [["mat-dialog-container"]],
        hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
        hostVars: 6,
        hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
              return ctx._onAnimationStart($event);
            })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
              return ctx._onAnimationDone($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx._id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function MatDialogContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [matDialogAnimations.dialogContainer]
        }
      });

      var ɵMatDialogContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatDialogContainer);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-dialog-container',
            template: "<ng-template cdkPortalOutlet></ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
            animations: [matDialogAnimations.dialogContainer],
            host: {
              'class': 'mat-dialog-container',
              'tabindex': '-1',
              'aria-modal': 'true',
              '[id]': '_id',
              '[attr.role]': '_config.role',
              '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
              '[attr.aria-label]': '_config.ariaLabel',
              '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
              '[@dialogContainer]': '_state',
              '(@dialogContainer.start)': '_onAnimationStart($event)',
              '(@dialogContainer.done)': '_onAnimationDone($event)'
            },
            styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(jelbourn): resizing
      // Counter for unique dialog ids.


      var uniqueId = 0;
      /**
       * Reference to a dialog opened via the MatDialog service.
       */

      var MatDialogRef = /*#__PURE__*/function () {
        function MatDialogRef(_overlayRef, _containerInstance) {
          var _this18 = this;

          var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

          _classCallCheck(this, MatDialogRef);

          this._overlayRef = _overlayRef;
          this._containerInstance = _containerInstance;
          this.id = id;
          /** Whether the user is allowed to close the dialog. */

          this.disableClose = this._containerInstance._config.disableClose;
          /** Subject for notifying the user that the dialog has finished opening. */

          this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has finished closing. */

          this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has started closing. */

          this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Current state of the dialog. */

          this._state = 0
          /* OPEN */
          ; // Pass the id along to the container.

          _containerInstance._id = id; // Emit when opening animation completes

          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.state === 'opened';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            _this18._afterOpened.next();

            _this18._afterOpened.complete();
          }); // Dispose overlay when closing animation is complete


          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.state === 'closed';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            clearTimeout(_this18._closeFallbackTimeout);

            _this18._finishDialogClose();
          });

          _overlayRef.detachments().subscribe(function () {
            _this18._beforeClosed.next(_this18._result);

            _this18._beforeClosed.complete();

            _this18._afterClosed.next(_this18._result);

            _this18._afterClosed.complete();

            _this18.componentInstance = null;

            _this18._overlayRef.dispose();
          });

          _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !_this18.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
          })).subscribe(function (event) {
            event.preventDefault();

            _closeDialogVia(_this18, 'keyboard');
          });

          _overlayRef.backdropClick().subscribe(function () {
            if (_this18.disableClose) {
              _this18._containerInstance._recaptureFocus();
            } else {
              _closeDialogVia(_this18, 'mouse');
            }
          });
        }
        /**
         * Close the dialog.
         * @param dialogResult Optional result to return to the dialog opener.
         */


        _createClass(MatDialogRef, [{
          key: "close",
          value: function close(dialogResult) {
            var _this19 = this;

            this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

            this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
              return event.state === 'closing';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (event) {
              _this19._beforeClosed.next(dialogResult);

              _this19._beforeClosed.complete();

              _this19._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
              // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
              // timeout which will clean everything up if the animation hasn't fired within the specified
              // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
              // vast majority of cases the timeout will have been cleared before it has the chance to fire.


              _this19._closeFallbackTimeout = setTimeout(function () {
                return _this19._finishDialogClose();
              }, event.totalTime + 100);
            });

            this._state = 1
            /* CLOSING */
            ;

            this._containerInstance._startExitAnimation();
          }
          /**
           * Gets an observable that is notified when the dialog is finished opening.
           */

        }, {
          key: "afterOpened",
          value: function afterOpened() {
            return this._afterOpened;
          }
          /**
           * Gets an observable that is notified when the dialog is finished closing.
           */

        }, {
          key: "afterClosed",
          value: function afterClosed() {
            return this._afterClosed;
          }
          /**
           * Gets an observable that is notified when the dialog has started closing.
           */

        }, {
          key: "beforeClosed",
          value: function beforeClosed() {
            return this._beforeClosed;
          }
          /**
           * Gets an observable that emits when the overlay's backdrop has been clicked.
           */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._overlayRef.backdropClick();
          }
          /**
           * Gets an observable that emits when keydown events are targeted on the overlay.
           */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._overlayRef.keydownEvents();
          }
          /**
           * Updates the dialog's position.
           * @param position New dialog position.
           */

        }, {
          key: "updatePosition",
          value: function updatePosition(position) {
            var strategy = this._getPositionStrategy();

            if (position && (position.left || position.right)) {
              position.left ? strategy.left(position.left) : strategy.right(position.right);
            } else {
              strategy.centerHorizontally();
            }

            if (position && (position.top || position.bottom)) {
              position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
            } else {
              strategy.centerVertically();
            }

            this._overlayRef.updatePosition();

            return this;
          }
          /**
           * Updates the dialog's width and height.
           * @param width New width of the dialog.
           * @param height New height of the dialog.
           */

        }, {
          key: "updateSize",
          value: function updateSize() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this._getPositionStrategy().width(width).height(height);

            this._overlayRef.updatePosition();

            return this;
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            this._overlayRef.addPanelClass(classes);

            return this;
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            this._overlayRef.removePanelClass(classes);

            return this;
          }
          /** Gets the current state of the dialog's lifecycle. */

        }, {
          key: "getState",
          value: function getState() {
            return this._state;
          }
          /**
           * Finishes the dialog close by updating the state of the dialog
           * and disposing the overlay.
           */

        }, {
          key: "_finishDialogClose",
          value: function _finishDialogClose() {
            this._state = 2
            /* CLOSED */
            ;

            this._overlayRef.dispose();
          }
          /** Fetches the position strategy object from the overlay ref. */

        }, {
          key: "_getPositionStrategy",
          value: function _getPositionStrategy() {
            return this._overlayRef.getConfig().positionStrategy;
          }
        }]);

        return MatDialogRef;
      }();
      /**
       * Closes the dialog with the specified interaction type. This is currently not part of
       * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
       * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
       */
      // TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


      function _closeDialogVia(ref, interactionType, result) {
        // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
        // For those, we keep the behavior as is and do not deal with the interaction type.
        if (ref._containerInstance !== undefined) {
          ref._containerInstance._closeInteractionType = interactionType;
        }

        return ref.close(result);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to access the data that was passed in to a dialog. */


      var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
      /** Injection token that can be used to specify default dialog options. */

      var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
      /** Injection token that determines the scroll handling while the dialog is open. */

      var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
      /** @docs-private */

      function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
        provide: MAT_DIALOG_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * Base class for dialog services. The base dialog service allows
       * for arbitrary dialog refs and dialog container components.
       */

      var _MatDialogBase = /*#__PURE__*/function () {
        function _MatDialogBase(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
          var _this20 = this;

          _classCallCheck(this, _MatDialogBase);

          this._overlay = _overlay;
          this._injector = _injector;
          this._defaultOptions = _defaultOptions;
          this._parentDialog = _parentDialog;
          this._overlayContainer = _overlayContainer;
          this._dialogRefConstructor = _dialogRefConstructor;
          this._dialogContainerType = _dialogContainerType;
          this._dialogDataToken = _dialogDataToken;
          this._openDialogsAtThisLevel = [];
          this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

          /**
           * Stream that emits when all open dialog have finished closing.
           * Will emit on subscribe if there are no open dialogs to begin with.
           */

          this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(function () {
            return _this20.openDialogs.length ? _this20._getAfterAllClosed() : _this20._getAfterAllClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /** Keeps track of the currently-open dialogs. */


        _createClass(_MatDialogBase, [{
          key: "_getAfterAllClosed",
          value: function _getAfterAllClosed() {
            var parent = this._parentDialog;
            return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
          }
        }, {
          key: "open",
          value: function open(componentOrTemplateRef, config) {
            var _this21 = this;

            config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

            if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
            }

            var overlayRef = this._createOverlay(config);

            var dialogContainer = this._attachDialogContainer(overlayRef, config);

            var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


            if (!this.openDialogs.length) {
              this._hideNonDialogContentFromAssistiveTechnology();
            }

            this.openDialogs.push(dialogRef);
            dialogRef.afterClosed().subscribe(function () {
              return _this21._removeOpenDialog(dialogRef);
            });
            this.afterOpened.next(dialogRef); // Notify the dialog container that the content has been attached.

            dialogContainer._initializeWithAttachedContent();

            return dialogRef;
          }
          /**
           * Closes all of the currently-open dialogs.
           */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._closeDialogs(this.openDialogs);
          }
          /**
           * Finds an open dialog by its id.
           * @param id ID to use when looking up the dialog.
           */

        }, {
          key: "getDialogById",
          value: function getDialogById(id) {
            return this.openDialogs.find(function (dialog) {
              return dialog.id === id;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Only close the dialogs at this level on destroy
            // since the parent service may still be active.
            this._closeDialogs(this._openDialogsAtThisLevel);

            this._afterAllClosedAtThisLevel.complete();

            this._afterOpenedAtThisLevel.complete();
          }
          /**
           * Creates the overlay into which the dialog will be loaded.
           * @param config The dialog configuration.
           * @returns A promise resolving to the OverlayRef for the created overlay.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay(config) {
            var overlayConfig = this._getOverlayConfig(config);

            return this._overlay.create(overlayConfig);
          }
          /**
           * Creates an overlay config from a dialog config.
           * @param dialogConfig The dialog configuration.
           * @returns The overlay configuration.
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig(dialogConfig) {
            var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
              positionStrategy: this._overlay.position().global(),
              scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
              panelClass: dialogConfig.panelClass,
              hasBackdrop: dialogConfig.hasBackdrop,
              direction: dialogConfig.direction,
              minWidth: dialogConfig.minWidth,
              minHeight: dialogConfig.minHeight,
              maxWidth: dialogConfig.maxWidth,
              maxHeight: dialogConfig.maxHeight,
              disposeOnNavigation: dialogConfig.closeOnNavigation
            });

            if (dialogConfig.backdropClass) {
              state.backdropClass = dialogConfig.backdropClass;
            }

            return state;
          }
          /**
           * Attaches a dialog container to a dialog's already-created overlay.
           * @param overlay Reference to the dialog's underlying overlay.
           * @param config The dialog configuration.
           * @returns A promise resolving to a ComponentRef for the attached container.
           */

        }, {
          key: "_attachDialogContainer",
          value: function _attachDialogContainer(overlay, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: [{
                provide: MatDialogConfig,
                useValue: config
              }]
            });

            var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
            var containerRef = overlay.attach(containerPortal);
            return containerRef.instance;
          }
          /**
           * Attaches the user-provided component to the already-created dialog container.
           * @param componentOrTemplateRef The type of component being loaded into the dialog,
           *     or a TemplateRef to instantiate as the content.
           * @param dialogContainer Reference to the wrapping dialog container.
           * @param overlayRef Reference to the overlay in which the dialog resides.
           * @param config The dialog configuration.
           * @returns A promise resolving to the MatDialogRef that should be returned to the user.
           */

        }, {
          key: "_attachDialogContent",
          value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            var dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);

            if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
              dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: config.data,
                dialogRef: dialogRef
              }));
            } else {
              var injector = this._createInjector(config, dialogRef, dialogContainer);

              var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
              dialogRef.componentInstance = contentRef.instance;
            }

            dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
            return dialogRef;
          }
          /**
           * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
           * of a dialog to close itself and, optionally, to return a value.
           * @param config Config object that is used to construct the dialog.
           * @param dialogRef Reference to the dialog.
           * @param dialogContainer Dialog container element that wraps all of the contents.
           * @returns The custom injector that can be used inside the dialog.
           */

        }, {
          key: "_createInjector",
          value: function _createInjector(config, dialogRef, dialogContainer) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The dialog container should be provided as the dialog container and the dialog's
            // content are created out of the same `ViewContainerRef` and as such, are siblings
            // for injector purposes. To allow the hierarchy that is expected, the dialog
            // container is explicitly provided in the injector.

            var providers = [{
              provide: this._dialogContainerType,
              useValue: dialogContainer
            }, {
              provide: this._dialogDataToken,
              useValue: config.data
            }, {
              provide: this._dialogRefConstructor,
              useValue: dialogRef
            }];

            if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
              providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                useValue: {
                  value: config.direction,
                  change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
                }
              });
            }

            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: providers
            });
          }
          /**
           * Removes a dialog from the array of open dialogs.
           * @param dialogRef Dialog to be removed.
           */

        }, {
          key: "_removeOpenDialog",
          value: function _removeOpenDialog(dialogRef) {
            var index = this.openDialogs.indexOf(dialogRef);

            if (index > -1) {
              this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
              // to a the siblings and emit to the `afterAllClosed` stream.

              if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach(function (previousValue, element) {
                  if (previousValue) {
                    element.setAttribute('aria-hidden', previousValue);
                  } else {
                    element.removeAttribute('aria-hidden');
                  }
                });

                this._ariaHiddenElements.clear();

                this._getAfterAllClosed().next();
              }
            }
          }
          /**
           * Hides all of the content that isn't an overlay from assistive technology.
           */

        }, {
          key: "_hideNonDialogContentFromAssistiveTechnology",
          value: function _hideNonDialogContentFromAssistiveTechnology() {
            var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


            if (overlayContainer.parentElement) {
              var siblings = overlayContainer.parentElement.children;

              for (var i = siblings.length - 1; i > -1; i--) {
                var sibling = siblings[i];

                if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                  this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                  sibling.setAttribute('aria-hidden', 'true');
                }
              }
            }
          }
          /** Closes all of the dialogs in an array. */

        }, {
          key: "_closeDialogs",
          value: function _closeDialogs(dialogs) {
            var i = dialogs.length;

            while (i--) {
              // The `_openDialogs` property isn't updated after close until the rxjs subscription
              // runs on the next microtask, in addition to modifying the array as we're going
              // through it. We loop through all of them and call close without assuming that
              // they'll be removed from the list instantaneously.
              dialogs[i].close();
            }
          }
        }, {
          key: "openDialogs",
          get: function get() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
          }
          /** Stream that emits when a dialog has been opened. */

        }, {
          key: "afterOpened",
          get: function get() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
          }
        }]);

        return _MatDialogBase;
      }();

      _MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) {
        return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]));
      };

      _MatDialogBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatDialogBase
      });

      _MatDialogBase.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: undefined
        }, {
          type: undefined
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }, {
          type: undefined
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: undefined
          }, {
            type: undefined
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
          }, {
            type: undefined
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]
          }];
        }, null);
      })();
      /**
       * Service to open Material Design modal dialogs.
       */


      var MatDialog = /*#__PURE__*/function (_MatDialogBase2) {
        _inherits(MatDialog, _MatDialogBase2);

        var _super14 = _createSuper(MatDialog);

        function MatDialog(overlay, injector,
        /**
         * @deprecated `_location` parameter to be removed.
         * @breaking-change 10.0.0
         */
        location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
          _classCallCheck(this, MatDialog);

          return _super14.call(this, overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
        }

        return MatDialog;
      }(_MatDialogBase);

      MatDialog.ɵfac = function MatDialog_Factory(t) {
        return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]));
      };

      MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MatDialog,
        factory: MatDialog.ɵfac
      });

      MatDialog.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatDialogConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_SCROLL_STRATEGY]
          }]
        }, {
          type: MatDialog,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: MatDialogConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_SCROLL_STRATEGY]
            }]
          }, {
            type: MatDialog,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
          }];
        }, null);
      })();
      /**
       * Applies default options to the dialog config.
       * @param config Config to be modified.
       * @param defaultOptions Default options provided.
       * @returns The new configuration object.
       */


      function _applyConfigDefaults(config, defaultOptions) {
        return Object.assign(Object.assign({}, defaultOptions), config);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique IDs for dialog elements. */


      var dialogElementUid = 0;
      /**
       * Button that will close the current dialog.
       */

      var MatDialogClose = /*#__PURE__*/function () {
        function MatDialogClose( // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogClose);

          this.dialogRef = dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          /** Default to "button" to prevents accidental form submits. */

          this.type = 'button';
        }

        _createClass(MatDialogClose, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.dialogRef) {
              // When this directive is included in a dialog via TemplateRef (rather than being
              // in a Component), the DialogRef isn't available via injection because embedded
              // views cannot be given a custom injector. Instead, we look up the DialogRef by
              // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
              // be resolved at constructor time.
              this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

            if (proxiedChange) {
              this.dialogResult = proxiedChange.currentValue;
            }
          }
        }, {
          key: "_onButtonClick",
          value: function _onButtonClick(event) {
            // Determinate the focus origin using the click event, because using the FocusMonitor will
            // result in incorrect origins. Most of the time, close buttons will be auto focused in the
            // dialog, and therefore clicking the button won't result in a focus change. This means that
            // the FocusMonitor won't detect any origin change, and will always output `program`.
            _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
          }
        }]);

        return MatDialogClose;
      }();

      MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
        return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogClose,
        selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
        hostVars: 2,
        hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
              return ctx._onButtonClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
          }
        },
        inputs: {
          type: "type",
          dialogResult: ["mat-dialog-close", "dialogResult"],
          ariaLabel: ["aria-label", "ariaLabel"],
          _matDialogClose: ["matDialogClose", "_matDialogClose"]
        },
        exportAs: ["matDialogClose"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      MatDialogClose.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogClose.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dialogResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mat-dialog-close']
        }],
        _matDialogClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matDialogClose']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-close], [matDialogClose]',
            exportAs: 'matDialogClose',
            host: {
              '(click)': '_onButtonClick($event)',
              '[attr.aria-label]': 'ariaLabel || null',
              '[attr.type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mat-dialog-close']
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matDialogClose']
          }]
        });
      })();
      /**
       * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
       */


      var MatDialogTitle = /*#__PURE__*/function () {
        function MatDialogTitle( // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        _dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogTitle);

          this._dialogRef = _dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          this.id = "mat-dialog-title-".concat(dialogElementUid++);
        }

        _createClass(MatDialogTitle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            if (!this._dialogRef) {
              this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }

            if (this._dialogRef) {
              Promise.resolve().then(function () {
                var container = _this22._dialogRef._containerInstance;

                if (container && !container._ariaLabelledBy) {
                  container._ariaLabelledBy = _this22.id;
                }
              });
            }
          }
        }]);

        return MatDialogTitle;
      }();

      MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
        return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogTitle,
        selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
        hostAttrs: [1, "mat-dialog-title"],
        hostVars: 1,
        hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        exportAs: ["matDialogTitle"]
      });

      MatDialogTitle.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogTitle.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-title], [matDialogTitle]',
            exportAs: 'matDialogTitle',
            host: {
              'class': 'mat-dialog-title',
              '[id]': 'id'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Scrollable content container of a dialog.
       */


      var MatDialogContent = function MatDialogContent() {
        _classCallCheck(this, MatDialogContent);
      };

      MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
        return new (t || MatDialogContent)();
      };

      MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogContent,
        selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
        hostAttrs: [1, "mat-dialog-content"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
            host: {
              'class': 'mat-dialog-content'
            }
          }]
        }], null, null);
      })();
      /**
       * Container for the bottom action buttons in a dialog.
       * Stays fixed to the bottom when scrolling.
       */


      var MatDialogActions = function MatDialogActions() {
        _classCallCheck(this, MatDialogActions);
      };

      MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
        return new (t || MatDialogActions)();
      };

      MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogActions,
        selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
        hostAttrs: [1, "mat-dialog-actions"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
            host: {
              'class': 'mat-dialog-actions'
            }
          }]
        }], null, null);
      })();
      /**
       * Finds the closest MatDialogRef to an element by looking at the DOM.
       * @param element Element relative to which to look for a dialog.
       * @param openDialogs References to the currently-open dialogs.
       */


      function getClosestDialog(element, openDialogs) {
        var parent = element.nativeElement.parentElement;

        while (parent && !parent.classList.contains('mat-dialog-container')) {
          parent = parent.parentElement;
        }

        return parent ? openDialogs.find(function (dialog) {
          return dialog.id === parent.id;
        }) : null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDialogModule = function MatDialogModule() {
        _classCallCheck(this, MatDialogModule);
      };

      MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatDialogModule
      });
      MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatDialogModule_Factory(t) {
          return new (t || MatDialogModule)();
        },
        providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, {
          declarations: function declarations() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
            providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
            entryComponents: [MatDialogContainer]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=dialog.js.map

      /***/

    },

    /***/
    "iadO":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js ***!
      \****************************************************************************/

    /*! exports provided: DateRange, DefaultMatCalendarRangeStrategy, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATE_RANGE_SELECTION_STRATEGY, MAT_RANGE_DATE_SELECTION_MODEL_FACTORY, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY, MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, MatCalendar, MatCalendarBody, MatCalendarCell, MatCalendarHeader, MatDateRangeInput, MatDateRangePicker, MatDateSelectionModel, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatEndDate, MatMonthView, MatMultiYearView, MatRangeDateSelectionModel, MatSingleDateSelectionModel, MatStartDate, MatYearView, matDatepickerAnimations, yearsPerPage, yearsPerRow, ɵangular_material_src_material_datepicker_datepicker_a, ɵangular_material_src_material_datepicker_datepicker_b, ɵangular_material_src_material_datepicker_datepicker_c, ɵangular_material_src_material_datepicker_datepicker_d, ɵangular_material_src_material_datepicker_datepicker_e */

    /***/
    function iadO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateRange", function () {
        return DateRange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMatCalendarRangeStrategy", function () {
        return DefaultMatCalendarRangeStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function () {
        return MAT_DATEPICKER_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function () {
        return MAT_DATEPICKER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_RANGE_SELECTION_STRATEGY", function () {
        return MAT_DATE_RANGE_SELECTION_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_FACTORY", function () {
        return MAT_RANGE_DATE_SELECTION_MODEL_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER", function () {
        return MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY", function () {
        return MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER", function () {
        return MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendar", function () {
        return MatCalendar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function () {
        return MatCalendarBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function () {
        return MatCalendarCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function () {
        return MatCalendarHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateRangeInput", function () {
        return MatDateRangeInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateRangePicker", function () {
        return MatDateRangePicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateSelectionModel", function () {
        return MatDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepicker", function () {
        return MatDatepicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function () {
        return MatDatepickerContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function () {
        return MatDatepickerInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function () {
        return MatDatepickerInputEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function () {
        return MatDatepickerIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function () {
        return MatDatepickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function () {
        return MatDatepickerToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function () {
        return MatDatepickerToggleIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatEndDate", function () {
        return MatEndDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMonthView", function () {
        return MatMonthView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function () {
        return MatMultiYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRangeDateSelectionModel", function () {
        return MatRangeDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSingleDateSelectionModel", function () {
        return MatSingleDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStartDate", function () {
        return MatStartDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatYearView", function () {
        return MatYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function () {
        return matDatepickerAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
        return yearsPerPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
        return yearsPerRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_a", function () {
        return MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_b", function () {
        return MAT_CALENDAR_RANGE_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_c", function () {
        return MatDatepickerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_d", function () {
        return MatDatepickerInputBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_e", function () {
        return MAT_DATE_RANGE_INPUT_PARENT;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var _c0 = ["mat-calendar-body", ""];

      function MatCalendarBody_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r0.numCols);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
        }
      }

      function MatCalendarBody_tr_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
        }
      }

      function MatCalendarBody_tr_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var item_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r8._cellClicked(item_r6, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var colIndex_r7 = ctx.index;

          var rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6.compareValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6.compareValue))("mat-calendar-body-comparison-identical", ctx_r5._isComparisonIdentical(item_r6.compareValue))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
        }
      }

      function MatCalendarBody_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 4, 46, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;
          var rowIndex_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r2);
        }
      }

      function MatMonthView_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", day_r1["long"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r1.narrow);
        }
      }

      var _c1 = ["*"];

      function MatCalendar_ng_template_0_Template(rf, ctx) {}

      function MatCalendar_mat_month_view_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-month-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.activeDate = $event;
          })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6._dateSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd);
        }
      }

      function MatCalendar_mat_year_view_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-year-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.activeDate = $event;
          })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9._monthSelectedInYearView($event);
          })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10._goToDateInView($event, "month");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
        }
      }

      function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-multi-year-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.activeDate = $event;
          })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13._yearSelectedInMultiYearView($event);
          })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14._goToDateInView($event, "year");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
        }
      }

      var _c2 = ["button"];

      function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c3 = [[["", "matDatepickerToggleIcon", ""]]];
      var _c4 = ["[matDatepickerToggleIcon]"];
      var _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
      var _c6 = ["input[matStartDate]", "input[matEndDate]"];

      function createMissingDateImplError(provider) {
        return Error("MatDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " + "custom implementation.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Datepicker data that requires internationalization. */


      var MatDatepickerIntl = /*#__PURE__*/function () {
        function MatDatepickerIntl() {
          _classCallCheck(this, MatDatepickerIntl);

          /**
           * Stream that emits whenever the labels here are changed. Use this to notify
           * components if the labels have changed after initialization.
           */
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** A label for the calendar popup (used by screen readers). */

          this.calendarLabel = 'Calendar';
          /** A label for the button used to open the calendar popup (used by screen readers). */

          this.openCalendarLabel = 'Open calendar';
          /** A label for the previous month button (used by screen readers). */

          this.prevMonthLabel = 'Previous month';
          /** A label for the next month button (used by screen readers). */

          this.nextMonthLabel = 'Next month';
          /** A label for the previous year button (used by screen readers). */

          this.prevYearLabel = 'Previous year';
          /** A label for the next year button (used by screen readers). */

          this.nextYearLabel = 'Next year';
          /** A label for the previous multi-year button (used by screen readers). */

          this.prevMultiYearLabel = 'Previous 20 years';
          /** A label for the next multi-year button (used by screen readers). */

          this.nextMultiYearLabel = 'Next 20 years';
          /** A label for the 'switch to month view' button (used by screen readers). */

          this.switchToMonthViewLabel = 'Choose date';
          /** A label for the 'switch to year view' button (used by screen readers). */

          this.switchToMultiYearViewLabel = 'Choose month and year';
        }
        /** Formats a range of years. */


        _createClass(MatDatepickerIntl, [{
          key: "formatYearRange",
          value: function formatYearRange(start, end) {
            return "".concat(start, " \u2013 ").concat(end);
          }
        }]);

        return MatDatepickerIntl;
      }();

      MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) {
        return new (t || MatDatepickerIntl)();
      };

      MatDatepickerIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
        factory: function MatDatepickerIntl_Factory() {
          return new MatDatepickerIntl();
        },
        token: MatDatepickerIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An internal class that represents the data corresponding to a single calendar cell.
       * @docs-private
       */


      var MatCalendarCell = function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
        var cssClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        var compareValue = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : value;
        var rawValue = arguments.length > 6 ? arguments[6] : undefined;

        _classCallCheck(this, MatCalendarCell);

        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.compareValue = compareValue;
        this.rawValue = rawValue;
      };
      /**
       * An internal component used to display calendar data in a table.
       * @docs-private
       */


      var MatCalendarBody = /*#__PURE__*/function () {
        function MatCalendarBody(_elementRef, _ngZone) {
          var _this23 = this;

          _classCallCheck(this, MatCalendarBody);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /** The number of columns in the table. */

          this.numCols = 7;
          /** The cell number of the active cell in the table. */

          this.activeCell = 0;
          /** Whether a range is being selected. */

          this.isRange = false;
          /**
           * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
           * maintained even as the table resizes.
           */

          this.cellAspectRatio = 1;
          /** Start of the preview range. */

          this.previewStart = null;
          /** End of the preview range. */

          this.previewEnd = null;
          /** Emits when a new value is selected. */

          this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the preview has changed as a result of a user action. */

          this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Event handler for when the user enters an element
           * inside the calendar body (e.g. by hovering in or focus).
           */

          this._enterHandler = function (event) {
            if (_this23._skipNextFocus && event.type === 'focus') {
              _this23._skipNextFocus = false;
              return;
            } // We only need to hit the zone when we're selecting a range.


            if (event.target && _this23.isRange) {
              var cell = _this23._getCellFromElement(event.target);

              if (cell) {
                _this23._ngZone.run(function () {
                  return _this23.previewChange.emit({
                    value: cell.enabled ? cell : null,
                    event: event
                  });
                });
              }
            }
          };
          /**
           * Event handler for when the user's pointer leaves an element
           * inside the calendar body (e.g. by hovering out or blurring).
           */


          this._leaveHandler = function (event) {
            // We only need to hit the zone when we're selecting a range.
            if (_this23.previewEnd !== null && _this23.isRange) {
              // Only reset the preview end value when leaving cells. This looks better, because
              // we have a gap between the cells and the rows and we don't want to remove the
              // range just for it to show up again when the user moves a few pixels to the side.
              if (event.target && isTableCell(event.target)) {
                _this23._ngZone.run(function () {
                  return _this23.previewChange.emit({
                    value: null,
                    event: event
                  });
                });
              }
            }
          };

          _ngZone.runOutsideAngular(function () {
            var element = _elementRef.nativeElement;
            element.addEventListener('mouseenter', _this23._enterHandler, true);
            element.addEventListener('focus', _this23._enterHandler, true);
            element.addEventListener('mouseleave', _this23._leaveHandler, true);
            element.addEventListener('blur', _this23._leaveHandler, true);
          });
        }
        /** Called when a cell is clicked. */


        _createClass(MatCalendarBody, [{
          key: "_cellClicked",
          value: function _cellClicked(cell, event) {
            if (cell.enabled) {
              this.selectedValueChange.emit({
                value: cell.value,
                event: event
              });
            }
          }
          /** Returns whether a cell should be marked as selected. */

        }, {
          key: "_isSelected",
          value: function _isSelected(value) {
            return this.startValue === value || this.endValue === value;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var columnChanges = changes['numCols'];
            var rows = this.rows,
                numCols = this.numCols;

            if (changes['rows'] || columnChanges) {
              this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
            }

            if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
              this._cellPadding = "".concat(50 * this.cellAspectRatio / numCols, "%");
            }

            if (columnChanges || !this._cellWidth) {
              this._cellWidth = "".concat(100 / numCols, "%");
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mouseenter', this._enterHandler, true);
            element.removeEventListener('focus', this._enterHandler, true);
            element.removeEventListener('mouseleave', this._leaveHandler, true);
            element.removeEventListener('blur', this._leaveHandler, true);
          }
          /** Returns whether a cell is active. */

        }, {
          key: "_isActiveCell",
          value: function _isActiveCell(rowIndex, colIndex) {
            var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

            if (rowIndex) {
              cellNumber -= this._firstRowOffset;
            }

            return cellNumber == this.activeCell;
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            var _this24 = this;

            var movePreview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this._ngZone.runOutsideAngular(function () {
              _this24._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
                var activeCell = _this24._elementRef.nativeElement.querySelector('.mat-calendar-body-active');

                if (activeCell) {
                  if (!movePreview) {
                    _this24._skipNextFocus = true;
                  }

                  activeCell.focus();
                }
              });
            });
          }
          /** Gets whether a value is the start of the main range. */

        }, {
          key: "_isRangeStart",
          value: function _isRangeStart(value) {
            return isStart(value, this.startValue, this.endValue);
          }
          /** Gets whether a value is the end of the main range. */

        }, {
          key: "_isRangeEnd",
          value: function _isRangeEnd(value) {
            return isEnd(value, this.startValue, this.endValue);
          }
          /** Gets whether a value is within the currently-selected range. */

        }, {
          key: "_isInRange",
          value: function _isInRange(value) {
            return isInRange(value, this.startValue, this.endValue, this.isRange);
          }
          /** Gets whether a value is the start of the comparison range. */

        }, {
          key: "_isComparisonStart",
          value: function _isComparisonStart(value) {
            return isStart(value, this.comparisonStart, this.comparisonEnd);
          }
          /** Whether the cell is a start bridge cell between the main and comparison ranges. */

        }, {
          key: "_isComparisonBridgeStart",
          value: function _isComparisonBridgeStart(value, rowIndex, colIndex) {
            if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
              return false;
            }

            var previousCell = this.rows[rowIndex][colIndex - 1];

            if (!previousCell) {
              var previousRow = this.rows[rowIndex - 1];
              previousCell = previousRow && previousRow[previousRow.length - 1];
            }

            return previousCell && !this._isRangeEnd(previousCell.compareValue);
          }
          /** Whether the cell is an end bridge cell between the main and comparison ranges. */

        }, {
          key: "_isComparisonBridgeEnd",
          value: function _isComparisonBridgeEnd(value, rowIndex, colIndex) {
            if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
              return false;
            }

            var nextCell = this.rows[rowIndex][colIndex + 1];

            if (!nextCell) {
              var nextRow = this.rows[rowIndex + 1];
              nextCell = nextRow && nextRow[0];
            }

            return nextCell && !this._isRangeStart(nextCell.compareValue);
          }
          /** Gets whether a value is the end of the comparison range. */

        }, {
          key: "_isComparisonEnd",
          value: function _isComparisonEnd(value) {
            return isEnd(value, this.comparisonStart, this.comparisonEnd);
          }
          /** Gets whether a value is within the current comparison range. */

        }, {
          key: "_isInComparisonRange",
          value: function _isInComparisonRange(value) {
            return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
          }
          /**
           * Gets whether a value is the same as the start and end of the comparison range.
           * For context, the functions that we use to determine whether something is the start/end of
           * a range don't allow for the start and end to be on the same day, because we'd have to use
           * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
           * the regular range, because when it happens, the selected styles take over and still show where
           * the range would've been, however we don't have these selected styles for a comparison range.
           * This function is used to apply a class that serves the same purpose as the one for selected
           * dates, but it only applies in the context of a comparison range.
           */

        }, {
          key: "_isComparisonIdentical",
          value: function _isComparisonIdentical(value) {
            // Note that we don't need to null check the start/end
            // here, because the `value` will always be defined.
            return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
          }
          /** Gets whether a value is the start of the preview range. */

        }, {
          key: "_isPreviewStart",
          value: function _isPreviewStart(value) {
            return isStart(value, this.previewStart, this.previewEnd);
          }
          /** Gets whether a value is the end of the preview range. */

        }, {
          key: "_isPreviewEnd",
          value: function _isPreviewEnd(value) {
            return isEnd(value, this.previewStart, this.previewEnd);
          }
          /** Gets whether a value is inside the preview range. */

        }, {
          key: "_isInPreview",
          value: function _isInPreview(value) {
            return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
          }
          /** Finds the MatCalendarCell that corresponds to a DOM node. */

        }, {
          key: "_getCellFromElement",
          value: function _getCellFromElement(element) {
            var cell;

            if (isTableCell(element)) {
              cell = element;
            } else if (isTableCell(element.parentNode)) {
              cell = element.parentNode;
            }

            if (cell) {
              var row = cell.getAttribute('data-mat-row');
              var col = cell.getAttribute('data-mat-col');

              if (row && col) {
                return this.rows[parseInt(row)][parseInt(col)];
              }
            }

            return null;
          }
        }]);

        return MatCalendarBody;
      }();

      MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) {
        return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
      };

      MatCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendarBody,
        selectors: [["", "mat-calendar-body", ""]],
        hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"],
        inputs: {
          numCols: "numCols",
          activeCell: "activeCell",
          isRange: "isRange",
          cellAspectRatio: "cellAspectRatio",
          previewStart: "previewStart",
          previewEnd: "previewEnd",
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          startValue: "startValue",
          endValue: "endValue",
          labelMinRequiredCells: "labelMinRequiredCells",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedValueChange: "selectedValueChange",
          previewChange: "previewChange"
        },
        exportAs: ["matCalendarBody"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        decls: 2,
        vars: 2,
        consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]],
        template: function MatCalendarBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendarBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }];
      };

      MatCalendarBody.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        todayValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        endValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        labelMinRequiredCells: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        numCols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        activeCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        isRange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        cellAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        previewStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        previewEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        previewChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: '[mat-calendar-body]',
            template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [attr.data-mat-row]=\"rowIndex\"\n      [attr.data-mat-col]=\"colIndex\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"_isSelected(item.compareValue)\"\n      (click)=\"_cellClicked(item, $event)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n        [class.mat-calendar-body-selected]=\"_isSelected(item.compareValue)\"\n        [class.mat-calendar-body-comparison-identical]=\"_isComparisonIdentical(item.compareValue)\"\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n        {{item.displayValue}}\n      </div>\n      <div class=\"mat-calendar-body-cell-preview\"></div>\n  </td>\n</tr>\n",
            host: {
              'class': 'mat-calendar-body',
              'role': 'grid',
              'aria-readonly': 'true'
            },
            exportAs: 'matCalendarBody',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }];
        }, {
          numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          previewStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          previewEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          previewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          startValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          endValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /** Checks whether a node is a table cell element. */


      function isTableCell(node) {
        return node.nodeName === 'TD';
      }
      /** Checks whether a value is the start of a range. */


      function isStart(value, start, end) {
        return end !== null && start !== end && value < end && value === start;
      }
      /** Checks whether a value is the end of a range. */


      function isEnd(value, start, end) {
        return start !== null && start !== end && value >= start && value === end;
      }
      /** Checks whether a value is inside of a range. */


      function isInRange(value, start, end, rangeEnabled) {
        return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** A class representing a range of dates. */


      var DateRange = function DateRange(
      /** The start date of the range. */
      start,
      /** The end date of the range. */
      end) {
        _classCallCheck(this, DateRange);

        this.start = start;
        this.end = end;
      };
      /** A selection model containing a date selection. */


      var MatDateSelectionModel = /*#__PURE__*/function () {
        function MatDateSelectionModel(
        /** The current selection. */
        selection, _adapter) {
          _classCallCheck(this, MatDateSelectionModel);

          this.selection = selection;
          this._adapter = _adapter;
          this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits when the selection has changed. */

          this.selectionChanged = this._selectionChanged;
          this.selection = selection;
        }
        /**
         * Updates the current selection in the model.
         * @param value New selection that should be assigned.
         * @param source Object that triggered the selection change.
         */


        _createClass(MatDateSelectionModel, [{
          key: "updateSelection",
          value: function updateSelection(value, source) {
            this.selection = value;

            this._selectionChanged.next({
              selection: value,
              source: source
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._selectionChanged.complete();
          }
        }, {
          key: "_isValidDateInstance",
          value: function _isValidDateInstance(date) {
            return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
          }
        }]);

        return MatDateSelectionModel;
      }();

      MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) {
        return new (t || MatDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatDateSelectionModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDateSelectionModel
      });

      MatDateSelectionModel.ctorParameters = function () {
        return [{
          type: undefined
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: undefined
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /**  A selection model that contains a single date. */


      var MatSingleDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode) {
        _inherits(MatSingleDateSelectionModel, _MatDateSelectionMode);

        var _super15 = _createSuper(MatSingleDateSelectionModel);

        function MatSingleDateSelectionModel(adapter) {
          _classCallCheck(this, MatSingleDateSelectionModel);

          return _super15.call(this, null, adapter);
        }
        /**
         * Adds a date to the current selection. In the case of a single date selection, the added date
         * simply overwrites the previous selection
         */


        _createClass(MatSingleDateSelectionModel, [{
          key: "add",
          value: function add(date) {
            _get(_getPrototypeOf(MatSingleDateSelectionModel.prototype), "updateSelection", this).call(this, date, this);
          }
          /** Checks whether the current selection is valid. */

        }, {
          key: "isValid",
          value: function isValid() {
            return this.selection != null && this._isValidDateInstance(this.selection);
          }
          /**
           * Checks whether the current selection is complete. In the case of a single date selection, this
           * is true if the current selection is not null.
           */

        }, {
          key: "isComplete",
          value: function isComplete() {
            return this.selection != null;
          }
        }]);

        return MatSingleDateSelectionModel;
      }(MatDateSelectionModel);

      MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) {
        return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatSingleDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: MatSingleDateSelectionModel,
        factory: MatSingleDateSelectionModel.ɵfac
      });

      MatSingleDateSelectionModel.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /**  A selection model that contains a date range. */


      var MatRangeDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode2) {
        _inherits(MatRangeDateSelectionModel, _MatDateSelectionMode2);

        var _super16 = _createSuper(MatRangeDateSelectionModel);

        function MatRangeDateSelectionModel(adapter) {
          _classCallCheck(this, MatRangeDateSelectionModel);

          return _super16.call(this, new DateRange(null, null), adapter);
        }
        /**
         * Adds a date to the current selection. In the case of a date range selection, the added date
         * fills in the next `null` value in the range. If both the start and the end already have a date,
         * the selection is reset so that the given date is the new `start` and the `end` is null.
         */


        _createClass(MatRangeDateSelectionModel, [{
          key: "add",
          value: function add(date) {
            var _this$selection = this.selection,
                start = _this$selection.start,
                end = _this$selection.end;

            if (start == null) {
              start = date;
            } else if (end == null) {
              end = date;
            } else {
              start = date;
              end = null;
            }

            _get(_getPrototypeOf(MatRangeDateSelectionModel.prototype), "updateSelection", this).call(this, new DateRange(start, end), this);
          }
          /** Checks whether the current selection is valid. */

        }, {
          key: "isValid",
          value: function isValid() {
            var _this$selection2 = this.selection,
                start = _this$selection2.start,
                end = _this$selection2.end; // Empty ranges are valid.

            if (start == null && end == null) {
              return true;
            } // Complete ranges are only valid if both dates are valid and the start is before the end.


            if (start != null && end != null) {
              return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
            } // Partial ranges are valid if the start/end is valid.


            return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
          }
          /**
           * Checks whether the current selection is complete. In the case of a date range selection, this
           * is true if the current selection has a non-null `start` and `end`.
           */

        }, {
          key: "isComplete",
          value: function isComplete() {
            return this.selection.start != null && this.selection.end != null;
          }
        }]);

        return MatRangeDateSelectionModel;
      }(MatDateSelectionModel);

      MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) {
        return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatRangeDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: MatRangeDateSelectionModel,
        factory: MatRangeDateSelectionModel.ɵfac
      });

      MatRangeDateSelectionModel.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /** @docs-private */


      function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
        return parent || new MatSingleDateSelectionModel(adapter);
      }
      /** Used to provide a single selection model to a component. */


      var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
        provide: MatDateSelectionModel,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
        useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
      };
      /** @docs-private */

      function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
        return parent || new MatRangeDateSelectionModel(adapter);
      }
      /** Used to provide a range selection model to a component. */


      var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
        provide: MatDateSelectionModel,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
        useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token used to customize the date range selection behavior. */

      var MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_SELECTION_STRATEGY');
      /** Provides the default date range selection behavior. */

      var DefaultMatCalendarRangeStrategy = /*#__PURE__*/function () {
        function DefaultMatCalendarRangeStrategy(_dateAdapter) {
          _classCallCheck(this, DefaultMatCalendarRangeStrategy);

          this._dateAdapter = _dateAdapter;
        }

        _createClass(DefaultMatCalendarRangeStrategy, [{
          key: "selectionFinished",
          value: function selectionFinished(date, currentRange) {
            var start = currentRange.start,
                end = currentRange.end;

            if (start == null) {
              start = date;
            } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
              end = date;
            } else {
              start = date;
              end = null;
            }

            return new DateRange(start, end);
          }
        }, {
          key: "createPreview",
          value: function createPreview(activeDate, currentRange) {
            var start = null;
            var end = null;

            if (currentRange.start && !currentRange.end && activeDate) {
              start = currentRange.start;
              end = activeDate;
            }

            return new DateRange(start, end);
          }
        }]);

        return DefaultMatCalendarRangeStrategy;
      }();

      DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) {
        return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      DefaultMatCalendarRangeStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: DefaultMatCalendarRangeStrategy,
        factory: DefaultMatCalendarRangeStrategy.ɵfac
      });

      DefaultMatCalendarRangeStrategy.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /** @docs-private */


      function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
        return parent || new DefaultMatCalendarRangeStrategy(adapter);
      }
      /** @docs-private */


      var MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
        provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
        useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var DAYS_PER_WEEK = 7;
      /**
       * An internal component used to display a single month in the datepicker.
       * @docs-private
       */

      var MatMonthView = /*#__PURE__*/function () {
        function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
          _classCallCheck(this, MatMonthView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateFormats = _dateFormats;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rangeStrategy = _rangeStrategy;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new date is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
              throw createMissingDateImplError('DateAdapter');
            }

            if (!this._dateFormats) {
              throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
          }

          this._activeDate = this._dateAdapter.today();
        }
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */


        _createClass(MatMonthView, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this25 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this25._init();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];

            if (comparisonChange && !comparisonChange.firstChange) {
              this._setRanges(this.selected);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Handles when a new date is selected. */

        }, {
          key: "_dateSelected",
          value: function _dateSelected(event) {
            var date = event.value;

            var selectedYear = this._dateAdapter.getYear(this.activeDate);

            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);

            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);

            var rangeStartDate;
            var rangeEndDate;

            if (this._selected instanceof DateRange) {
              rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
              rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
            } else {
              rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
            }

            if (rangeStartDate !== date || rangeEndDate !== date) {
              this.selectedChange.emit(selectedDate);
            }

            this._userSelection.emit({
              value: selectedDate,
              event: event.event
            });
          }
          /** Handles keydown events on the calendar body when calendar is in month view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                  this._dateSelected({
                    value: this._dateAdapter.getDate(this._activeDate),
                    event: event
                  }); // Prevent unexpected default actions such as form submission.


                  event.preventDefault();
                }

                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this._previewEnd != null) {
                  this._previewStart = this._previewEnd = null;
                  this.selectedChange.emit(null);

                  this._userSelection.emit({
                    value: null,
                    event: event
                  });

                  event.preventDefault();
                  event.stopPropagation(); // Prevents the overlay from closing.
                }

                return;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
          /** Initializes this month view. */

        }, {
          key: "_init",
          value: function _init() {
            this._setRanges(this.selected);

            this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
            this._monthLabel = this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();

            var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);

            this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

            this._initWeekdays();

            this._createWeekCells();

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell(movePreview) {
            this._matCalendarBody._focusActiveCell(movePreview);
          }
          /** Called when the user has activated a new cell and the preview needs to be updated. */

        }, {
          key: "_previewChanged",
          value: function _previewChanged(_ref3) {
            var event = _ref3.event,
                cell = _ref3.value;

            if (this._rangeStrategy) {
              // We can assume that this will be a range, because preview
              // events aren't fired for single date selections.
              var _value = cell ? cell.rawValue : null;

              var previewRange = this._rangeStrategy.createPreview(_value, this.selected, event);

              this._previewStart = this._getCellCompareValue(previewRange.start);
              this._previewEnd = this._getCellCompareValue(previewRange.end); // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
              // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
              // when navigating one month back using the keyboard which will cause this handler
              // to throw a "changed after checked" error when updating the preview state.

              this._changeDetectorRef.detectChanges();
            }
          }
          /** Initializes the weekdays. */

        }, {
          key: "_initWeekdays",
          value: function _initWeekdays() {
            var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();

            var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');

            var longWeekdays = this._dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.


            var weekdays = longWeekdays.map(function (_long, i) {
              return {
                "long": _long,
                narrow: narrowWeekdays[i]
              };
            });
            this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
          }
          /** Creates MatCalendarCells for the dates in this month. */

        }, {
          key: "_createWeekCells",
          value: function _createWeekCells() {
            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);

            var dateNames = this._dateAdapter.getDateNames();

            this._weeks = [[]];

            for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
              if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);

                cell = 0;
              }

              var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);

              var enabled = this._shouldEnableDate(date);

              var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);

              var cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;

              this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
            }
          }
          /** Date filter for the month */

        }, {
          key: "_shouldEnableDate",
          value: function _shouldEnableDate(date) {
            return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
          }
          /**
           * Gets the date in this month that the given Date falls on.
           * Returns null if the given Date is in another month.
           */

        }, {
          key: "_getDateInCurrentMonth",
          value: function _getDateInCurrentMonth(date) {
            return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
          }
          /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */

        }, {
          key: "_hasSameMonthAndYear",
          value: function _hasSameMonthAndYear(d1, d2) {
            return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
          }
          /** Gets the value that will be used to one cell to another. */

        }, {
          key: "_getCellCompareValue",
          value: function _getCellCompareValue(date) {
            if (date) {
              // We use the time since the Unix epoch to compare dates in this view, rather than the
              // cell values, because we need to support ranges that span across multiple months/years.
              var year = this._dateAdapter.getYear(date);

              var month = this._dateAdapter.getMonth(date);

              var day = this._dateAdapter.getDate(date);

              return new Date(year, month, day).getTime();
            }

            return null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the current range based on a model value. */

        }, {
          key: "_setRanges",
          value: function _setRanges(selectedValue) {
            if (selectedValue instanceof DateRange) {
              this._rangeStart = this._getCellCompareValue(selectedValue.start);
              this._rangeEnd = this._getCellCompareValue(selectedValue.end);
              this._isRange = true;
            } else {
              this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
              this._isRange = false;
            }

            this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
            this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
          }
        }, {
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setRanges(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }]);

        return MatMonthView;
      }();

      MatMonthView.ɵfac = function MatMonthView_Factory(t) {
        return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };

      MatMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatMonthView,
        selectors: [["mat-month-view"]],
        viewQuery: function MatMonthView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedChange: "selectedChange",
          _userSelection: "_userSelection",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMonthView"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 7,
        vars: 13,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keydown"], ["scope", "col"]],
        template: function MatMonthView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) {
              return ctx._dateSelected($event);
            })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) {
              return ctx._previewChanged($event);
            })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._weekdays);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMonthView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatMonthView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMonthView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-month-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matMonthView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var yearsPerPage = 24;
      var yearsPerRow = 4;
      /**
       * An internal component used to display a year selector in the datepicker.
       * @docs-private
       */

      var MatMultiYearView = /*#__PURE__*/function () {
        function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
          _classCallCheck(this, MatMultiYearView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new year is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected year. This doesn't imply a change on the selected date */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._activeDate = this._dateAdapter.today();
        }
        /** The date to display in this multi-year view (everything other than the year is ignored). */


        _createClass(MatMultiYearView, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this26 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this26._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Initializes this multi-year view. */

        }, {
          key: "_init",
          value: function _init() {
            var _this27 = this;

            this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today()); // We want a range years such that we maximize the number of
            // enabled dates visible at once. This prevents issues where the minimum year
            // is the last item of a page OR the maximum year is the first item of a page.
            // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view.

            var activeYear = this._dateAdapter.getYear(this._activeDate);

            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
            this._years = [];

            for (var i = 0, row = []; i < yearsPerPage; i++) {
              row.push(minYearOfPage + i);

              if (row.length == yearsPerRow) {
                this._years.push(row.map(function (year) {
                  return _this27._createCellForYear(year);
                }));

                row = [];
              }
            }

            this._changeDetectorRef.markForCheck();
          }
          /** Handles when a new year is selected. */

        }, {
          key: "_yearSelected",
          value: function _yearSelected(event) {
            var year = event.value;
            this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));

            var month = this._dateAdapter.getMonth(this.activeDate);

            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));

            this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in multi-year view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._yearSelected({
                  value: this._dateAdapter.getYear(this._activeDate),
                  event: event
                });

                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
        }, {
          key: "_getActiveCell",
          value: function _getActiveCell() {
            return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            this._matCalendarBody._focusActiveCell();
          }
          /** Creates an MatCalendarCell for the given year. */

        }, {
          key: "_createCellForYear",
          value: function _createCellForYear(year) {
            var date = this._dateAdapter.createDate(year, 0, 1);

            var yearName = this._dateAdapter.getYearName(date);

            var cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
            return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
          }
          /** Whether the given year is enabled. */

        }, {
          key: "_shouldEnableYear",
          value: function _shouldEnableYear(year) {
            // disable if the year is greater than maxDate lower than minDate
            if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
              return false;
            } // enable if it reaches here and there's no filter defined


            if (!this.dateFilter) {
              return true;
            }

            var firstOfYear = this._dateAdapter.createDate(year, 0, 1); // If any date in the year is enabled count the year as enabled.


            for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the currently-highlighted year based on a model value. */

        }, {
          key: "_setSelectedYear",
          value: function _setSelectedYear(value) {
            this._selectedYear = null;

            if (value instanceof DateRange) {
              var displayValue = value.start || value.end;

              if (displayValue) {
                this._selectedYear = this._dateAdapter.getYear(displayValue);
              }
            } else if (value) {
              this._selectedYear = this._dateAdapter.getYear(value);
            }
          }
        }, {
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setSelectedYear(value);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }]);

        return MatMultiYearView;
      }();

      MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) {
        return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8));
      };

      MatMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatMultiYearView,
        selectors: [["mat-multi-year-view"]],
        viewQuery: function MatMultiYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMultiYearView"],
        decls: 5,
        vars: 7,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function MatMultiYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._yearSelected($event);
            })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
          }
        },
        directives: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMultiYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatMultiYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMultiYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-multi-year-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matMultiYearView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
          }]
        });
      })();

      function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
        var year1 = dateAdapter.getYear(date1);
        var year2 = dateAdapter.getYear(date2);
        var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
        return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
      }
      /**
       * When the multi-year view is first opened, the active year will be in view.
       * So we compute how many years are between the active year and the *slot* where our
       * "startingYear" will render when paged into view.
       */


      function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
        var activeYear = dateAdapter.getYear(activeDate);
        return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
      }
      /**
       * We pick a "starting" year such that either the maximum year would be at the end
       * or the minimum year would be at the beginning of a page.
       */


      function getStartingYear(dateAdapter, minDate, maxDate) {
        var startingYear = 0;

        if (maxDate) {
          var maxYear = dateAdapter.getYear(maxDate);
          startingYear = maxYear - yearsPerPage + 1;
        } else if (minDate) {
          startingYear = dateAdapter.getYear(minDate);
        }

        return startingYear;
      }
      /** Gets remainder that is non-negative, even if first number is negative */


      function euclideanModulo(a, b) {
        return (a % b + b) % b;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An internal component used to display a single year in the datepicker.
       * @docs-private
       */


      var MatYearView = /*#__PURE__*/function () {
        function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
          _classCallCheck(this, MatYearView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateFormats = _dateFormats;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new month is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected month. This doesn't imply a change on the selected date */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
              throw createMissingDateImplError('DateAdapter');
            }

            if (!this._dateFormats) {
              throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
          }

          this._activeDate = this._dateAdapter.today();
        }
        /** The date to display in this year view (everything other than the year is ignored). */


        _createClass(MatYearView, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this28 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this28._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Handles when a new month is selected. */

        }, {
          key: "_monthSelected",
          value: function _monthSelected(event) {
            var month = event.value;

            var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

            this.monthSelected.emit(normalizedDate);

            var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

            this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in year view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._monthSelected({
                  value: this._dateAdapter.getMonth(this._activeDate),
                  event: event
                });

                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
          /** Initializes this year view. */

        }, {
          key: "_init",
          value: function _init() {
            var _this29 = this;

            this._setSelectedMonth(this.selected);

            this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
            this._yearLabel = this._dateAdapter.getYearName(this.activeDate);

            var monthNames = this._dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.


            this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
              return row.map(function (month) {
                return _this29._createCellForMonth(month, monthNames[month]);
              });
            });

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            this._matCalendarBody._focusActiveCell();
          }
          /**
           * Gets the month in this year that the given Date falls on.
           * Returns null if the given Date is in another year.
           */

        }, {
          key: "_getMonthInCurrentYear",
          value: function _getMonthInCurrentYear(date) {
            return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
          }
          /** Creates an MatCalendarCell for the given month. */

        }, {
          key: "_createCellForMonth",
          value: function _createCellForMonth(month, monthName) {
            var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

            var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);

            var cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
            return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
          }
          /** Whether the given month is enabled. */

        }, {
          key: "_shouldEnableMonth",
          value: function _shouldEnableMonth(month) {
            var activeYear = this._dateAdapter.getYear(this.activeDate);

            if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
              return false;
            }

            if (!this.dateFilter) {
              return true;
            }

            var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1); // If any date in the month is enabled count the month as enabled.


            for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is after this.maxDate, considering
           * just the month and year of this.maxDate
           */

        }, {
          key: "_isYearAndMonthAfterMaxDate",
          value: function _isYearAndMonthAfterMaxDate(year, month) {
            if (this.maxDate) {
              var maxYear = this._dateAdapter.getYear(this.maxDate);

              var maxMonth = this._dateAdapter.getMonth(this.maxDate);

              return year > maxYear || year === maxYear && month > maxMonth;
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is before this.minDate, considering
           * just the month and year of this.minDate
           */

        }, {
          key: "_isYearAndMonthBeforeMinDate",
          value: function _isYearAndMonthBeforeMinDate(year, month) {
            if (this.minDate) {
              var minYear = this._dateAdapter.getYear(this.minDate);

              var minMonth = this._dateAdapter.getMonth(this.minDate);

              return year < minYear || year === minYear && month < minMonth;
            }

            return false;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the currently-selected month based on a model value. */

        }, {
          key: "_setSelectedMonth",
          value: function _setSelectedMonth(value) {
            if (value instanceof DateRange) {
              this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
            } else {
              this._selectedMonth = this._getMonthInCurrentYear(value);
            }
          }
        }, {
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setSelectedMonth(value);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }]);

        return MatYearView;
      }();

      MatYearView.ɵfac = function MatYearView_Factory(t) {
        return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8));
      };

      MatYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatYearView,
        selectors: [["mat-year-view"]],
        viewQuery: function MatYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matYearView"],
        decls: 5,
        vars: 9,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function MatYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._monthSelected($event);
            })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
          }
        },
        directives: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-year-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matYearView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default header for MatCalendar */


      var MatCalendarHeader = /*#__PURE__*/function () {
        function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
          _classCallCheck(this, MatCalendarHeader);

          this._intl = _intl;
          this.calendar = calendar;
          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          this.calendar.stateChanges.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
        }
        /** The label for the current calendar view. */


        _createClass(MatCalendarHeader, [{
          key: "currentPeriodClicked",

          /** Handles user clicks on the period label. */
          value: function currentPeriodClicked() {
            this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
          }
          /** Handles user clicks on the previous button. */

        }, {
          key: "previousClicked",
          value: function previousClicked() {
            this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
          }
          /** Handles user clicks on the next button. */

        }, {
          key: "nextClicked",
          value: function nextClicked() {
            this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
          }
          /** Whether the previous period button is enabled. */

        }, {
          key: "previousEnabled",
          value: function previousEnabled() {
            if (!this.calendar.minDate) {
              return true;
            }

            return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
          }
          /** Whether the next period button is enabled. */

        }, {
          key: "nextEnabled",
          value: function nextEnabled() {
            return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
          }
          /** Whether the two dates represent the same view in the current view mode (month or year). */

        }, {
          key: "_isSameView",
          value: function _isSameView(date1, date2) {
            if (this.calendar.currentView == 'month') {
              return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
            }

            if (this.calendar.currentView == 'year') {
              return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
            } // Otherwise we are in 'multi-year' view.


            return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
          }
        }, {
          key: "periodButtonText",
          get: function get() {
            if (this.calendar.currentView == 'month') {
              return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
            }

            if (this.calendar.currentView == 'year') {
              return this._dateAdapter.getYearName(this.calendar.activeDate);
            } // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view, and the last year is
            // just yearsPerPage - 1 away.


            var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);

            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
            var maxYearOfPage = minYearOfPage + yearsPerPage - 1;

            var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));

            var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));

            return this._intl.formatYearRange(minYearName, maxYearName);
          }
        }, {
          key: "periodButtonLabel",
          get: function get() {
            return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
          }
          /** The label for the previous button. */

        }, {
          key: "prevButtonLabel",
          get: function get() {
            return {
              'month': this._intl.prevMonthLabel,
              'year': this._intl.prevYearLabel,
              'multi-year': this._intl.prevMultiYearLabel
            }[this.calendar.currentView];
          }
          /** The label for the next button. */

        }, {
          key: "nextButtonLabel",
          get: function get() {
            return {
              'month': this._intl.nextMonthLabel,
              'year': this._intl.nextYearLabel,
              'multi-year': this._intl.nextMultiYearLabel
            }[this.calendar.currentView];
          }
        }]);

        return MatCalendarHeader;
      }();

      MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) {
        return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatCalendar;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendarHeader,
        selectors: [["mat-calendar-header"]],
        exportAs: ["matCalendarHeader"],
        ngContentSelectors: _c1,
        decls: 9,
        vars: 8,
        consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], [1, "mat-calendar-arrow"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]],
        template: function MatCalendarHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() {
              return ctx.currentPeriodClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_7_listener() {
              return ctx.previousClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_8_listener() {
              return ctx.nextClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView != "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.previousEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.nextEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkAriaLive"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendarHeader.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: MatCalendar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return MatCalendar;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-calendar-header',
            template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            cdkAriaLive=\"polite\">\n      {{periodButtonText}}\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
            exportAs: 'matCalendarHeader',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: MatCalendar,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return MatCalendar;
              })]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /**
       * A calendar that is used as part of the datepicker.
       * @docs-private
       */


      var MatCalendar = /*#__PURE__*/function () {
        function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
          var _this30 = this;

          _classCallCheck(this, MatCalendar);

          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          this._changeDetectorRef = _changeDetectorRef;
          /**
           * Used for scheduling that focus should be moved to the active cell on the next tick.
           * We need to schedule it, rather than do it immediately, because we have to wait
           * for Angular to re-evaluate the view children.
           */

          this._moveFocusOnNextTick = false;
          /** Whether the calendar should be started in month or year view. */

          this.startView = 'month';
          /**
           * Emits when the currently selected date changes.
           * @breaking-change 11.0.0 Emitted value to change to `D | null`.
           */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the year chosen in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the month chosen in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits whenever there is a state change that the header may need to respond to.
           */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
              throw createMissingDateImplError('DateAdapter');
            }

            if (!this._dateFormats) {
              throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
          }

          this._intlChanges = _intl.changes.subscribe(function () {
            _changeDetectorRef.markForCheck();

            _this30.stateChanges.next();
          });
        }
        /** A date representing the period (month or year) to start the calendar in. */


        _createClass(MatCalendar, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
            this.activeDate = this.startAt || this._dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

            this._currentView = this.startView;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this._moveFocusOnNextTick) {
              this._moveFocusOnNextTick = false;
              this.focusActiveCell();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlChanges.unsubscribe();

            this.stateChanges.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];

            if (change && !change.firstChange) {
              var view = this._getCurrentViewComponent();

              if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();

                view._init();
              }
            }

            this.stateChanges.next();
          }
        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this._getCurrentViewComponent()._focusActiveCell(false);
          }
          /** Updates today's date after an update of the active date */

        }, {
          key: "updateTodaysDate",
          value: function updateTodaysDate() {
            var currentView = this.currentView;
            var view;

            if (currentView === 'month') {
              view = this.monthView;
            } else if (currentView === 'year') {
              view = this.yearView;
            } else {
              view = this.multiYearView;
            }

            view._init();
          }
          /** Handles date selection in the month view. */

        }, {
          key: "_dateSelected",
          value: function _dateSelected(event) {
            var date = event.value;

            if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
              // @breaking-change 11.0.0 remove non-null assertion
              // once the `selectedChange` is allowed to be null.
              this.selectedChange.emit(date);
            }

            this._userSelection.emit(event);
          }
          /** Handles year selection in the multiyear view. */

        }, {
          key: "_yearSelectedInMultiYearView",
          value: function _yearSelectedInMultiYearView(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Handles month selection in the year view. */

        }, {
          key: "_monthSelectedInYearView",
          value: function _monthSelectedInYearView(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /** Handles year/month selection in the multi-year/year views. */

        }, {
          key: "_goToDateInView",
          value: function _goToDateInView(date, view) {
            this.activeDate = date;
            this.currentView = view;
          }
          /** Returns the component instance that corresponds to the current calendar view. */

        }, {
          key: "_getCurrentViewComponent",
          value: function _getCurrentViewComponent() {
            return this.monthView || this.yearView || this.multiYearView;
          }
        }, {
          key: "startAt",
          get: function get() {
            return this._startAt;
          },
          set: function set(value) {
            this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            }
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /**
           * The current active date. This determines which time period is shown and which date is
           * highlighted when using keyboard navigation.
           */

        }, {
          key: "activeDate",
          get: function get() {
            return this._clampedActiveDate;
          },
          set: function set(value) {
            this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
            this.stateChanges.next();

            this._changeDetectorRef.markForCheck();
          }
          /** Whether the calendar is in month view. */

        }, {
          key: "currentView",
          get: function get() {
            return this._currentView;
          },
          set: function set(value) {
            this._currentView = value;
            this._moveFocusOnNextTick = true;

            this._changeDetectorRef.markForCheck();
          }
        }]);

        return MatCalendar;
      }();

      MatCalendar.ɵfac = function MatCalendar_Factory(t) {
        return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendar,
        selectors: [["mat-calendar"]],
        viewQuery: function MatCalendar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMonthView, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatYearView, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMultiYearView, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
          }
        },
        hostAttrs: [1, "mat-calendar"],
        inputs: {
          startView: "startView",
          startAt: "startAt",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          headerComponent: "headerComponent",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          _userSelection: "_userSelection"
        },
        exportAs: ["matCalendar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 5,
        consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]],
        template: function MatCalendar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 8, "mat-month-view", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 6, "mat-year-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 6, "mat-multi-year-view", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentView);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "multi-year");
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], MatMonthView, MatYearView, MatMultiYearView],
        styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendar.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      MatCalendar.propDecorators = {
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMonthView]
        }],
        yearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatYearView]
        }],
        multiYearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMultiYearView]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-calendar',
            template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      (_userSelection)=\"_dateSelected($event)\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
            host: {
              'class': 'mat-calendar'
            },
            exportAs: 'matCalendar',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
            styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"]
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMonthView]
          }],
          yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatYearView]
          }],
          multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMultiYearView]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material datepicker.
       * @docs-private
       */


      var matDatepickerAnimations = {
        /** Transforms the height of the datepicker's calendar. */
        transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0,
          transform: 'scale(1, 0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          transform: 'scale(1, 1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })))]),

        /** Fades in the content of the calendar. */
        fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1
        })), // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate a unique ID for each datepicker instance. */

      var datepickerUid = 0;
      /** Injection token that determines the scroll handling while the calendar is open. */

      var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-datepicker-scroll-strategy');
      /** @docs-private */

      function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_DATEPICKER_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
        useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
      }; // Boilerplate for applying mixins to MatDatepickerContent.

      /** @docs-private */

      var MatDatepickerContentBase = function MatDatepickerContentBase(_elementRef) {
        _classCallCheck(this, MatDatepickerContentBase);

        this._elementRef = _elementRef;
      };

      var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(MatDatepickerContentBase);
      /**
       * Component used as the content for the datepicker dialog and popup. We use this instead of using
       * MatCalendar directly as the content so we can control the initial focus. This also gives us a
       * place to put additional features of the popup that are not part of the calendar itself in the
       * future. (e.g. confirmation buttons).
       * @docs-private
       */


      var MatDatepickerContent = /*#__PURE__*/function (_MatDatepickerContent) {
        _inherits(MatDatepickerContent, _MatDatepickerContent);

        var _super17 = _createSuper(MatDatepickerContent);

        function MatDatepickerContent(elementRef,
        /**
         * @deprecated `_changeDetectorRef`, `_model` and `_rangeSelectionStrategy`
         * parameters to become required.
         * @breaking-change 11.0.0
         */
        _changeDetectorRef, _model, _dateAdapter, _rangeSelectionStrategy) {
          var _this31;

          _classCallCheck(this, MatDatepickerContent);

          _this31 = _super17.call(this, elementRef);
          _this31._changeDetectorRef = _changeDetectorRef;
          _this31._model = _model;
          _this31._dateAdapter = _dateAdapter;
          _this31._rangeSelectionStrategy = _rangeSelectionStrategy;
          _this31._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
          /** Current state of the animation. */

          _this31._animationState = 'enter';
          /** Emits when an animation has finished. */

          _this31._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          return _this31;
        }

        _createClass(MatDatepickerContent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this32 = this;

            // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef.
            if (this._changeDetectorRef) {
              this._subscriptions.add(this.datepicker._stateChanges.subscribe(function () {
                _this32._changeDetectorRef.markForCheck();
              }));
            }

            this._calendar.focusActiveCell();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscriptions.unsubscribe();

            this._animationDone.complete();
          }
        }, {
          key: "_handleUserSelection",
          value: function _handleUserSelection(event) {
            // @breaking-change 11.0.0 Remove null checks for _model,
            // _rangeSelectionStrategy and _dateAdapter.
            if (this._model && this._dateAdapter) {
              var selection = this._model.selection;
              var _value2 = event.value;
              var isRange = selection instanceof DateRange; // If we're selecting a range and we have a selection strategy, always pass the value through
              // there. Otherwise don't assign null values to the model, unless we're selecting a range.
              // A null value when picking a range means that the user cancelled the selection (e.g. by
              // pressing escape), whereas when selecting a single value it means that the value didn't
              // change. This isn't very intuitive, but it's here for backwards-compatibility.

              if (isRange && this._rangeSelectionStrategy) {
                var newSelection = this._rangeSelectionStrategy.selectionFinished(_value2, selection, event.event);

                this._model.updateSelection(newSelection, this);
              } else if (_value2 && (isRange || !this._dateAdapter.sameDate(_value2, selection))) {
                this._model.add(_value2);
              }
            }

            if (!this._model || this._model.isComplete()) {
              this.datepicker.close();
            }
          }
        }, {
          key: "_startExitAnimation",
          value: function _startExitAnimation() {
            this._animationState = 'void'; // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef`.

            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_getSelected",
          value: function _getSelected() {
            // @breaking-change 11.0.0 Remove null check for `_model`.
            return this._model ? this._model.selection : null;
          }
        }]);

        return MatDatepickerContent;
      }(_MatDatepickerContentMixinBase);

      MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) {
        return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };

      MatDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepickerContent,
        selectors: [["mat-datepicker-content"]],
        viewQuery: function MatDatepickerContent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendar, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-content"],
        hostVars: 3,
        hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() {
              return ctx._animationDone.next();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matDatepickerContent"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 13,
        consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "yearSelected", "monthSelected", "_userSelection"]],
        template: function MatDatepickerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-calendar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_0_listener($event) {
              return ctx.datepicker._selectYear($event);
            })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_0_listener($event) {
              return ctx.datepicker._selectMonth($event);
            })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_0_listener($event) {
              return ctx._handleUserSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter");
          }
        },
        directives: [MatCalendar, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"],
        encapsulation: 2,
        data: {
          animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
        },
        changeDetection: 0
      });

      MatDatepickerContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: MatDateSelectionModel
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
          }]
        }];
      };

      MatDatepickerContent.propDecorators = {
        _calendar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendar]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker-content',
            template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\">\n</mat-calendar>\n",
            host: {
              'class': 'mat-datepicker-content',
              '[@transformPanel]': '_animationState',
              '(@transformPanel.done)': '_animationDone.next()',
              '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
            },
            animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
            exportAs: 'matDatepickerContent',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            inputs: ['color'],
            styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: MatDateSelectionModel
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }]
          }];
        }, {
          _calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendar]
          }]
        });
      })();
      /** Base class for a datepicker. */


      var MatDatepickerBase = /*#__PURE__*/function () {
        function MatDatepickerBase(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document, _model) {
          _classCallCheck(this, MatDatepickerBase);

          this._dialog = _dialog;
          this._overlay = _overlay;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._document = _document;
          this._model = _model;
          this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** The view that the calendar should start in. */

          this.startView = 'month';
          this._touchUi = false;
          /** Preferred position of the datepicker in the X axis. */

          this.xPosition = 'start';
          /** Preferred position of the datepicker in the Y axis. */

          this.yPosition = 'below';
          /**
           * Emits selected year in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits selected month in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been opened. */

          this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been closed. */

          this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this._opened = false;
          /** The id for the datepicker calendar. */

          this.id = "mat-datepicker-".concat(datepickerUid++);
          /** The element that was focused before the datepicker was opened. */

          this._focusedElementBeforeOpen = null;
          /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */

          this._backdropHarnessClass = "".concat(this.id, "-backdrop");
          /** Emits when the datepicker's state changes. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._scrollStrategy = scrollStrategy;
        }
        /** The date to open the calendar to initially. */


        _createClass(MatDatepickerBase, [{
          key: "_getMinDate",

          /** The minimum selectable date. */
          value: function _getMinDate() {
            return this._datepickerInput && this._datepickerInput.min;
          }
          /** The maximum selectable date. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._datepickerInput && this._datepickerInput.max;
          }
        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._datepickerInput && this._datepickerInput.dateFilter;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var positionChange = changes['xPosition'] || changes['yPosition'];

            if (positionChange && !positionChange.firstChange && this._popupRef) {
              this._setConnectedPositions(this._popupRef.getConfig().positionStrategy);

              if (this.opened) {
                this._popupRef.updatePosition();
              }
            }

            this._stateChanges.next(undefined);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyPopup();

            this.close();

            this._inputStateChanges.unsubscribe();

            this._stateChanges.complete();
          }
          /** Selects the given date */

        }, {
          key: "select",
          value: function select(date) {
            this._model.add(date);
          }
          /** Emits the selected year in multiyear view */

        }, {
          key: "_selectYear",
          value: function _selectYear(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Emits selected month in year view */

        }, {
          key: "_selectMonth",
          value: function _selectMonth(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /**
           * Register an input with this datepicker.
           * @param input The datepicker input to register with this datepicker.
           * @returns Selection model that the input should hook itself up to.
           */

        }, {
          key: "_registerInput",
          value: function _registerInput(input) {
            var _this33 = this;

            if (this._datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('A MatDatepicker can only be associated with a single input.');
            }

            this._inputStateChanges.unsubscribe();

            this._datepickerInput = input;
            this._inputStateChanges = input.stateChanges.subscribe(function () {
              return _this33._stateChanges.next(undefined);
            });
            return this._model;
          }
          /** Open the calendar. */

        }, {
          key: "open",
          value: function open() {
            if (this._opened || this.disabled) {
              return;
            }

            if (!this._datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Attempted to open an MatDatepicker with no associated input.');
            }

            if (this._document) {
              this._focusedElementBeforeOpen = this._document.activeElement;
            }

            this.touchUi ? this._openAsDialog() : this._openAsPopup();
            this._opened = true;
            this.openedStream.emit();
          }
          /** Close the calendar. */

        }, {
          key: "close",
          value: function close() {
            var _this34 = this;

            if (!this._opened) {
              return;
            }

            if (this._popupComponentRef && this._popupRef) {
              var instance = this._popupComponentRef.instance;

              instance._startExitAnimation();

              instance._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
                return _this34._destroyPopup();
              });
            }

            if (this._dialogRef) {
              this._dialogRef.close();

              this._dialogRef = null;
            }

            var completeClose = function completeClose() {
              // The `_opened` could've been reset already if
              // we got two events in quick succession.
              if (_this34._opened) {
                _this34._opened = false;

                _this34.closedStream.emit();

                _this34._focusedElementBeforeOpen = null;
              }
            };

            if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
              // Because IE moves focus asynchronously, we can't count on it being restored before we've
              // marked the datepicker as closed. If the event fires out of sequence and the element that
              // we're refocusing opens the datepicker on focus, the user could be stuck with not being
              // able to close the calendar at all. We work around it by making the logic, that marks
              // the datepicker as closed, async as well.
              this._focusedElementBeforeOpen.focus();

              setTimeout(completeClose);
            } else {
              completeClose();
            }
          }
          /** Open the calendar as a dialog. */

        }, {
          key: "_openAsDialog",
          value: function _openAsDialog() {
            var _this35 = this;

            // Usually this would be handled by `open` which ensures that we can only have one overlay
            // open at a time, however since we reset the variables in async handlers some overlays
            // may slip through if the user opens and closes multiple times in quick succession (e.g.
            // by holding down the enter key).
            if (this._dialogRef) {
              this._dialogRef.close();
            }

            this._dialogRef = this._dialog.open(MatDatepickerContent, {
              direction: this._dir ? this._dir.value : 'ltr',
              viewContainerRef: this._viewContainerRef,
              panelClass: 'mat-datepicker-dialog',
              // These values are all the same as the defaults, but we set them explicitly so that the
              // datepicker dialog behaves consistently even if the user changed the defaults.
              hasBackdrop: true,
              disableClose: false,
              backdropClass: ['cdk-overlay-dark-backdrop', this._backdropHarnessClass],
              width: '',
              height: '',
              minWidth: '',
              minHeight: '',
              maxWidth: '80vw',
              maxHeight: '',
              position: {},
              autoFocus: true,
              // `MatDialog` has focus restoration built in, however we want to disable it since the
              // datepicker also has focus restoration for dropdown mode. We want to do this, in order
              // to ensure that the timing is consistent between dropdown and dialog modes since `MatDialog`
              // restores focus when the animation is finished, but the datepicker does it immediately.
              // Furthermore, this avoids any conflicts where the datepicker consumer might move focus
              // inside the `closed` event which is dispatched immediately.
              restoreFocus: false
            });

            this._dialogRef.afterClosed().subscribe(function () {
              return _this35.close();
            });

            this._forwardContentValues(this._dialogRef.componentInstance);
          }
          /** Open the calendar as a popup. */

        }, {
          key: "_openAsPopup",
          value: function _openAsPopup() {
            var _this36 = this;

            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);

            this._destroyPopup();

            this._createPopup();

            this._popupComponentRef = this._popupRef.attach(portal);

            this._forwardContentValues(this._popupComponentRef.instance); // Update the position once the calendar has rendered.


            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
              _this36._popupRef.updatePosition();
            });
          }
          /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */

        }, {
          key: "_forwardContentValues",
          value: function _forwardContentValues(instance) {
            instance.datepicker = this;
            instance.color = this.color;
          }
          /** Create the popup. */

        }, {
          key: "_createPopup",
          value: function _createPopup() {
            var _this37 = this;

            var positionStrategy = this._overlay.position().flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();

            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
              positionStrategy: this._setConnectedPositions(positionStrategy),
              hasBackdrop: true,
              backdropClass: ['mat-overlay-transparent-backdrop', this._backdropHarnessClass],
              direction: this._dir,
              scrollStrategy: this._scrollStrategy(),
              panelClass: 'mat-datepicker-popup'
            });
            this._popupRef = this._overlay.create(overlayConfig);

            this._popupRef.overlayElement.setAttribute('role', 'dialog');

            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function (event) {
              // Closing on alt + up is only valid when there's an input associated with the datepicker.
              return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] || _this37._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
            }))).subscribe(function (event) {
              if (event) {
                event.preventDefault();
              }

              _this37.close();
            });
          }
          /** Destroys the current popup overlay. */

        }, {
          key: "_destroyPopup",
          value: function _destroyPopup() {
            if (this._popupRef) {
              this._popupRef.dispose();

              this._popupRef = this._popupComponentRef = null;
            }
          }
          /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */

        }, {
          key: "_setConnectedPositions",
          value: function _setConnectedPositions(strategy) {
            var primaryX = this.xPosition === 'end' ? 'end' : 'start';
            var secondaryX = primaryX === 'start' ? 'end' : 'start';
            var primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
            var secondaryY = primaryY === 'top' ? 'bottom' : 'top';
            return strategy.withPositions([{
              originX: primaryX,
              originY: secondaryY,
              overlayX: primaryX,
              overlayY: primaryY
            }, {
              originX: primaryX,
              originY: primaryY,
              overlayX: primaryX,
              overlayY: secondaryY
            }, {
              originX: secondaryX,
              originY: secondaryY,
              overlayX: secondaryX,
              overlayY: primaryY
            }, {
              originX: secondaryX,
              originY: primaryY,
              overlayX: secondaryX,
              overlayY: secondaryY
            }]);
          }
        }, {
          key: "startAt",
          get: function get() {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.getStartValue() : null);
          },
          set: function set(value) {
            this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** Color palette to use on the datepicker's calendar. */

        }, {
          key: "color",
          get: function get() {
            return this._color || (this._datepickerInput ? this._datepickerInput.getThemePalette() : undefined);
          },
          set: function set(value) {
            this._color = value;
          }
          /**
           * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
           * than a popup and elements have more padding to allow for bigger touch targets.
           */

        }, {
          key: "touchUi",
          get: function get() {
            return this._touchUi;
          },
          set: function set(value) {
            this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
          /** Whether the datepicker pop-up should be disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled === undefined && this._datepickerInput ? this._datepickerInput.disabled : !!this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._stateChanges.next(undefined);
            }
          }
          /** Whether the calendar is open. */

        }, {
          key: "opened",
          get: function get() {
            return this._opened;
          },
          set: function set(value) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value) ? this.open() : this.close();
          }
        }]);

        return MatDatepickerBase;
      }();

      MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) {
        return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel));
      };

      MatDatepickerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerBase,
        inputs: {
          startView: "startView",
          xPosition: "xPosition",
          yPosition: "yPosition",
          startAt: "startAt",
          color: "color",
          touchUi: "touchUi",
          disabled: "disabled",
          opened: "opened",
          calendarHeaderComponent: "calendarHeaderComponent",
          panelClass: "panelClass",
          dateClass: "dateClass"
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          openedStream: "opened",
          closedStream: "closed"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      MatDatepickerBase.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATEPICKER_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: MatDateSelectionModel
        }];
      };

      MatDatepickerBase.propDecorators = {
        calendarHeaderComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        touchUi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['opened']
        }],
        closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['closed']
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: MatDateSelectionModel
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['opened']
          }],
          closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['closed']
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
      // if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the datepicker popup/dialog. */


      var MatDatepicker = /*#__PURE__*/function (_MatDatepickerBase) {
        _inherits(MatDatepicker, _MatDatepickerBase);

        var _super18 = _createSuper(MatDatepicker);

        function MatDatepicker() {
          _classCallCheck(this, MatDatepicker);

          return _super18.apply(this, arguments);
        }

        return MatDatepicker;
      }(MatDatepickerBase);

      MatDatepicker.ɵfac = function MatDatepicker_Factory(t) {
        return ɵMatDatepicker_BaseFactory(t || MatDatepicker);
      };

      MatDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepicker,
        selectors: [["mat-datepicker"]],
        exportAs: ["matDatepicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDatepicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatDatepicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDatepicker);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker',
            template: '',
            exportAs: 'matDatepicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An event used for datepicker input and change events. We don't always have access to a native
       * input or change event because the event may have been triggered by the user clicking on the
       * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
       */


      var MatDatepickerInputEvent = function MatDatepickerInputEvent(
      /** Reference to the datepicker input component that emitted the event. */
      target,
      /** Reference to the native input element associated with the datepicker input. */
      targetElement) {
        _classCallCheck(this, MatDatepickerInputEvent);

        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
      };
      /** Base class for datepicker inputs. */


      var MatDatepickerInputBase = /*#__PURE__*/function () {
        function MatDatepickerInputBase(_elementRef, _dateAdapter, _dateFormats) {
          var _this38 = this;

          _classCallCheck(this, MatDatepickerInputBase);

          this._elementRef = _elementRef;
          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          /** Emits when a `change` event is fired on this `<input>`. */

          this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when an `input` event is fired on this `<input>`. */

          this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the value changes (either due to user input or programmatic change). */

          this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the internal state has changed */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          this._onTouched = function () {};

          this._validatorOnChange = function () {};

          this._cvaOnChange = function () {};

          this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** The form control validator for whether the input parses. */

          this._parseValidator = function () {
            return _this38._lastValueValid ? null : {
              'matDatepickerParse': {
                'text': _this38._elementRef.nativeElement.value
              }
            };
          };
          /** The form control validator for the date filter. */


          this._filterValidator = function (control) {
            var controlValue = _this38._dateAdapter.getValidDateOrNull(_this38._dateAdapter.deserialize(control.value));

            var dateFilter = _this38._getDateFilter();

            return !dateFilter || !controlValue || dateFilter(controlValue) ? null : {
              'matDatepickerFilter': true
            };
          };
          /** The form control validator for the min date. */


          this._minValidator = function (control) {
            var controlValue = _this38._dateAdapter.getValidDateOrNull(_this38._dateAdapter.deserialize(control.value));

            var min = _this38._getMinDate();

            return !min || !controlValue || _this38._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
              'matDatepickerMin': {
                'min': min,
                'actual': controlValue
              }
            };
          };
          /** The form control validator for the max date. */


          this._maxValidator = function (control) {
            var controlValue = _this38._dateAdapter.getValidDateOrNull(_this38._dateAdapter.deserialize(control.value));

            var max = _this38._getMaxDate();

            return !max || !controlValue || _this38._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
              'matDatepickerMax': {
                'max': max,
                'actual': controlValue
              }
            };
          };
          /** Whether the last value set on the input was valid. */


          this._lastValueValid = false;

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
              throw createMissingDateImplError('DateAdapter');
            }

            if (!this._dateFormats) {
              throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
          } // Update the displayed date when the locale changes.


          this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this38.value = _this38.value;
          });
        }
        /** The value of the input. */


        _createClass(MatDatepickerInputBase, [{
          key: "_getValidators",

          /** Gets the base validator functions. */
          value: function _getValidators() {
            return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
          }
          /** Registers a date selection model with the input. */

        }, {
          key: "_registerModel",
          value: function _registerModel(model) {
            var _this39 = this;

            this._model = model;

            this._valueChangesSubscription.unsubscribe();

            if (this._pendingValue) {
              this._assignValue(this._pendingValue);
            }

            this._valueChangesSubscription = this._model.selectionChanged.subscribe(function (event) {
              if (event.source !== _this39) {
                var _value3 = _this39._getValueFromModel(event.selection);

                _this39._lastValueValid = _this39._isValidValue(_value3);

                _this39._cvaOnChange(_value3);

                _this39._onTouched();

                _this39._formatValue(_value3); // Note that we can't wrap the entire block with this logic, because for the range inputs
                // we want to revalidate whenever either one of the inputs changes and we don't have a
                // good way of distinguishing it at the moment.


                if (_this39._canEmitChangeEvent(event)) {
                  _this39.dateInput.emit(new MatDatepickerInputEvent(_this39, _this39._elementRef.nativeElement));

                  _this39.dateChange.emit(new MatDatepickerInputEvent(_this39, _this39._elementRef.nativeElement));
                }

                if (_this39._outsideValueChanged) {
                  _this39._outsideValueChanged();
                }
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (dateInputsHaveChanged(changes, this._dateAdapter)) {
              this.stateChanges.next(undefined);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._valueChangesSubscription.unsubscribe();

            this._localeSubscription.unsubscribe();

            this._valueChange.complete();

            this.stateChanges.complete();
          }
          /** @docs-private */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._validatorOnChange = fn;
          }
          /** @docs-private */

        }, {
          key: "validate",
          value: function validate(c) {
            return this._validator ? this._validator(c) : null;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._cvaOnChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"];

            if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
              this._openPopup();

              event.preventDefault();
            }
          }
        }, {
          key: "_onInput",
          value: function _onInput(value) {
            var lastValueWasValid = this._lastValueValid;

            var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);

            this._lastValueValid = this._isValidValue(date);
            date = this._dateAdapter.getValidDateOrNull(date);

            if (!this._dateAdapter.sameDate(date, this.value)) {
              this._assignValue(date);

              this._cvaOnChange(date);

              this._valueChange.emit(date);

              this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
            } else {
              // Call the CVA change handler for invalid values
              // since this is what marks the control as dirty.
              if (value && !this.value) {
                this._cvaOnChange(date);
              }

              if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
              }
            }
          }
        }, {
          key: "_onChange",
          value: function _onChange() {
            this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
          }
          /** Handles blur events on the input. */

        }, {
          key: "_onBlur",
          value: function _onBlur() {
            // Reformat the input only if we have a valid value.
            if (this.value) {
              this._formatValue(this.value);
            }

            this._onTouched();
          }
          /** Formats a value and sets it on the input element. */

        }, {
          key: "_formatValue",
          value: function _formatValue(value) {
            this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
          }
          /** Assigns a value to the model. */

        }, {
          key: "_assignValue",
          value: function _assignValue(value) {
            // We may get some incoming values before the model was
            // assigned. Save the value so that we can assign it later.
            if (this._model) {
              this._assignValueToModel(value);

              this._pendingValue = null;
            } else {
              this._pendingValue = value;
            }
          }
          /** Whether a value is considered valid. */

        }, {
          key: "_isValidValue",
          value: function _isValidValue(value) {
            return !value || this._dateAdapter.isValid(value);
          }
          /**
           * Checks whether a parent control is disabled. This is in place so that it can be overridden
           * by inputs extending this one which can be placed inside of a group that can be disabled.
           */

        }, {
          key: "_parentDisabled",
          value: function _parentDisabled() {
            return false;
          }
        }, {
          key: "value",
          get: function get() {
            return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
          },
          set: function set(value) {
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = this._isValidValue(value);
            value = this._dateAdapter.getValidDateOrNull(value);
            var oldDate = this.value;

            this._assignValue(value);

            this._formatValue(value);

            if (!this._dateAdapter.sameDate(oldDate, value)) {
              this._valueChange.emit(value);
            }
          }
          /** Whether the datepicker-input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return !!this._disabled || this._parentDisabled();
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
            var element = this._elementRef.nativeElement;

            if (this._disabled !== newValue) {
              this._disabled = newValue;
              this.stateChanges.next(undefined);
            } // We need to null check the `blur` method, because it's undefined during SSR.
            // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
            // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
            // element has been inserted.


            if (newValue && this._isInitialized && element.blur) {
              // Normally, native input elements automatically blur if they turn disabled. This behavior
              // is problematic, because it would mean that it triggers another change detection cycle,
              // which then causes a changed after checked error if the input element was focused before.
              element.blur();
            }
          }
        }]);

        return MatDatepickerInputBase;
      }();

      MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) {
        return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatDatepickerInputBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerInputBase,
        inputs: {
          value: "value",
          disabled: "disabled"
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      MatDatepickerInputBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };

      MatDatepickerInputBase.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, {
          dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Checks whether the `SimpleChanges` object from an `ngOnChanges`
       * callback has any changes, accounting for date objects.
       */


      function dateInputsHaveChanged(changes, adapter) {
        var keys = Object.keys(changes);

        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
          var key = _keys[_i];
          var _changes$key = changes[key],
              previousValue = _changes$key.previousValue,
              currentValue = _changes$key.currentValue;

          if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
            if (!adapter.sameDate(previousValue, currentValue)) {
              return true;
            }
          } else {
            return true;
          }
        }

        return false;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var MAT_DATEPICKER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatDatepickerInput;
        }),
        multi: true
      };
      /** @docs-private */

      var MAT_DATEPICKER_VALIDATORS = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatDatepickerInput;
        }),
        multi: true
      };
      /** Directive used to connect an input to a MatDatepicker. */

      var MatDatepickerInput = /*#__PURE__*/function (_MatDatepickerInputBa) {
        _inherits(MatDatepickerInput, _MatDatepickerInputBa);

        var _super19 = _createSuper(MatDatepickerInput);

        function MatDatepickerInput(elementRef, dateAdapter, dateFormats, _formField) {
          var _thisSuper3, _this40;

          _classCallCheck(this, MatDatepickerInput);

          _this40 = _super19.call(this, elementRef, dateAdapter, dateFormats);
          _this40._formField = _formField;
          _this40._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose(_get((_thisSuper3 = _assertThisInitialized(_this40), _getPrototypeOf(MatDatepickerInput.prototype)), "_getValidators", _thisSuper3).call(_thisSuper3));
          return _this40;
        }
        /** The datepicker that this input is associated with. */


        _createClass(MatDatepickerInput, [{
          key: "getConnectedOverlayOrigin",

          /**
           * Gets the element that the datepicker popup should be connected to.
           * @return The element to connect the popup to.
           */
          value: function getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
          }
          /** Returns the palette used by the input's form field, if any. */

        }, {
          key: "getThemePalette",
          value: function getThemePalette() {
            return this._formField ? this._formField.color : undefined;
          }
          /** Gets the value at which the calendar should start. */

        }, {
          key: "getStartValue",
          value: function getStartValue() {
            return this.value;
          }
          /**
           * @deprecated
           * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
           */

        }, {
          key: "getPopupConnectionElementRef",
          value: function getPopupConnectionElementRef() {
            return this.getConnectedOverlayOrigin();
          }
          /** Opens the associated datepicker. */

        }, {
          key: "_openPopup",
          value: function _openPopup() {
            if (this._datepicker) {
              this._datepicker.open();
            }
          }
        }, {
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              this._model.updateSelection(value, this);
            }
          }
          /** Gets the input's minimum date. */

        }, {
          key: "_getMinDate",
          value: function _getMinDate() {
            return this._min;
          }
          /** Gets the input's maximum date. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._max;
          }
          /** Gets the input's date filtering function. */

        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._dateFilter;
          }
        }, {
          key: "_canEmitChangeEvent",
          value: function _canEmitChangeEvent() {
            return true;
          }
        }, {
          key: "matDatepicker",
          set: function set(datepicker) {
            if (datepicker) {
              this._datepicker = datepicker;

              this._registerModel(datepicker._registerInput(this));
            }
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

            if (!this._dateAdapter.sameDate(validValue, this._min)) {
              this._min = validValue;

              this._validatorOnChange();
            }
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

            if (!this._dateAdapter.sameDate(validValue, this._max)) {
              this._max = validValue;

              this._validatorOnChange();
            }
          }
          /** Function that can be used to filter out dates within the datepicker. */

        }, {
          key: "dateFilter",
          get: function get() {
            return this._dateFilter;
          },
          set: function set(value) {
            this._dateFilter = value;

            this._validatorOnChange();
          }
        }]);

        return MatDatepickerInput;
      }(MatDatepickerInputBase);

      MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) {
        return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"], 8));
      };

      MatDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerInput,
        selectors: [["input", "matDatepicker", ""]],
        hostAttrs: [1, "mat-datepicker-input"],
        hostVars: 6,
        hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatDatepickerInput_change_HostBindingHandler() {
              return ctx._onChange();
            })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
          }
        },
        inputs: {
          matDatepicker: "matDatepicker",
          min: "min",
          max: "max",
          dateFilter: ["matDatepickerFilter", "dateFilter"]
        },
        exportAs: ["matDatepickerInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
          provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"],
          useExisting: MatDatepickerInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatDatepickerInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatDatepickerInput.propDecorators = {
        matDatepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['matDatepickerFilter']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matDatepicker]',
            providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
              provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"],
              useExisting: MatDatepickerInput
            }],
            host: {
              'class': 'mat-datepicker-input',
              '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
              '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
              '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
              '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
              // Used by the test harness to tie this input to its calendar. We can't depend on
              // `aria-owns` for this, because it's only defined while the calendar is open.
              '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)'
            },
            exportAs: 'matDatepickerInput'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          matDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['matDatepickerFilter']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Can be used to override the icon of a `matDatepickerToggle`. */


      var MatDatepickerToggleIcon = function MatDatepickerToggleIcon() {
        _classCallCheck(this, MatDatepickerToggleIcon);
      };

      MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
        return new (t || MatDatepickerToggleIcon)();
      };

      MatDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerToggleIcon,
        selectors: [["", "matDatepickerToggleIcon", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matDatepickerToggleIcon]'
          }]
        }], null, null);
      })();

      var MatDatepickerToggle = /*#__PURE__*/function () {
        function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
          _classCallCheck(this, MatDatepickerToggle);

          this._intl = _intl;
          this._changeDetectorRef = _changeDetectorRef;
          this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          var parsedTabIndex = Number(defaultTabIndex);
          this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        }
        /** Whether the toggle button is disabled. */


        _createClass(MatDatepickerToggle, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['datepicker']) {
              this._watchStateChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._watchStateChanges();
          }
        }, {
          key: "_open",
          value: function _open(event) {
            if (this.datepicker && !this.disabled) {
              this.datepicker.open();
              event.stopPropagation();
            }
          }
        }, {
          key: "_watchStateChanges",
          value: function _watchStateChanges() {
            var _this41 = this;

            var datepickerStateChanged = this.datepicker ? this.datepicker._stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var inputStateChanged = this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput.stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();

            this._stateChanges.unsubscribe();

            this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(function () {
              return _this41._changeDetectorRef.markForCheck();
            });
          }
        }, {
          key: "disabled",
          get: function get() {
            if (this._disabled === undefined && this.datepicker) {
              return this.datepicker.disabled;
            }

            return !!this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatDatepickerToggle;
      }();

      MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) {
        return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'));
      };

      MatDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepickerToggle,
        selectors: [["mat-datepicker-toggle"]],
        contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
          }
        },
        viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-toggle"],
        hostVars: 8,
        hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function MatDatepickerToggle_focus_HostBindingHandler() {
              return ctx._button.focus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
          }
        },
        inputs: {
          tabIndex: "tabIndex",
          disabled: "disabled",
          datepicker: ["for", "datepicker"],
          disableRipple: "disableRipple"
        },
        exportAs: ["matDatepickerToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 4,
        vars: 6,
        consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
        template: function MatDatepickerToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatDatepickerToggle_Template_button_click_0_listener($event) {
              return ctx._open($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx._customIcon);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatDatepickerToggle.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }];
      };

      MatDatepickerToggle.propDecorators = {
        datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['for']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatDatepickerToggleIcon]
        }],
        _button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['button']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker-toggle',
            template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"_intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\"\n  (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
            host: {
              'class': 'mat-datepicker-toggle',
              // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
              // consumer may have provided, while still being able to receive focus.
              '[attr.tabindex]': 'disabled ? null : -1',
              '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
              '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
              '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
              // Used by the test harness to tie this toggle to its datepicker.
              '[attr.data-mat-calendar]': 'datepicker ? datepicker.id : null',
              '(focus)': '_button.focus()'
            },
            exportAs: 'matDatepickerToggle',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
              args: ['tabindex']
            }]
          }];
        }, {
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['for']
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatDatepickerToggleIcon]
          }],
          _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['button']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide the date range input wrapper component
       * to the parts without circular dependencies.
       */


      var MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_INPUT_PARENT');
      /**
       * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
       */

      var MatDateRangeInputPartBase = /*#__PURE__*/function (_MatDatepickerInputBa2) {
        _inherits(MatDateRangeInputPartBase, _MatDatepickerInputBa2);

        var _super20 = _createSuper(MatDateRangeInputPartBase);

        function MatDateRangeInputPartBase(_rangeInput, elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
          var _this42;

          _classCallCheck(this, MatDateRangeInputPartBase);

          _this42 = _super20.call(this, elementRef, dateAdapter, dateFormats);
          _this42._rangeInput = _rangeInput;
          _this42._defaultErrorStateMatcher = _defaultErrorStateMatcher;
          _this42._injector = _injector;
          _this42._parentForm = _parentForm;
          _this42._parentFormGroup = _parentFormGroup;

          _this42._outsideValueChanged = function () {
            // Whenever the value changes outside the input we need to revalidate, because
            // the validation state of each of the inputs depends on the other one.
            _this42._validatorOnChange();
          };

          return _this42;
        }

        _createClass(MatDateRangeInputPartBase, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
            // injecting its `NgControl` so that the error state is handled correctly. This introduces a
            // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
            // itself. Usually we can work around it for the CVA, but there's no API to do it for the
            // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
            // everything has been resolved.
            var ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectFlags"].Self);

            if (ngControl) {
              this.ngControl = ngControl;
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            }
          }
          /** Gets whether the input is empty. */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._elementRef.nativeElement.value.length === 0;
          }
          /** Gets the placeholder of the input. */

        }, {
          key: "_getPlaceholder",
          value: function _getPlaceholder() {
            return this._elementRef.nativeElement.placeholder;
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
          /** Handles `input` events on the input element. */

        }, {
          key: "_onInput",
          value: function _onInput(value) {
            _get(_getPrototypeOf(MatDateRangeInputPartBase.prototype), "_onInput", this).call(this, value);

            this._rangeInput._handleChildValueChange();
          }
          /** Opens the datepicker associated with the input. */

        }, {
          key: "_openPopup",
          value: function _openPopup() {
            this._rangeInput._openDatepicker();
          }
          /** Gets the minimum date from the range input. */

        }, {
          key: "_getMinDate",
          value: function _getMinDate() {
            return this._rangeInput.min;
          }
          /** Gets the maximum date from the range input. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._rangeInput.max;
          }
          /** Gets the date filter function from the range input. */

        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._rangeInput.dateFilter;
          }
        }, {
          key: "_parentDisabled",
          value: function _parentDisabled() {
            return this._rangeInput._groupDisabled;
          }
        }]);

        return MatDateRangeInputPartBase;
      }(MatDatepickerInputBase);

      MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) {
        return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatDateRangeInputPartBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDateRangeInputPartBase,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatDateRangeInputPartBase.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();

      var _MatDateRangeInputBase = // Needs to be `as any`, because the base class is abstract.
      Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"])(MatDateRangeInputPartBase);
      /** Input for entering the start date in a `mat-date-range-input`. */


      var MatStartDate = /*#__PURE__*/function (_MatDateRangeInputBas) {
        _inherits(MatStartDate, _MatDateRangeInputBas);

        var _super21 = _createSuper(MatStartDate);

        function MatStartDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
          var _thisSuper4, _this43;

          _classCallCheck(this, MatStartDate);

          // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
          // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
          // constructor once ViewEngine is removed.
          _this43 = _super21.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
          /** Validator that checks that the start date isn't after the end date. */

          _this43._startValidator = function (control) {
            var start = _this43._dateAdapter.getValidDateOrNull(_this43._dateAdapter.deserialize(control.value));

            var end = _this43._model ? _this43._model.selection.end : null;
            return !start || !end || _this43._dateAdapter.compareDate(start, end) <= 0 ? null : {
              'matStartDateInvalid': {
                'end': end,
                'actual': start
              }
            };
          };

          _this43._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([].concat(_toConsumableArray(_get((_thisSuper4 = _assertThisInitialized(_this43), _getPrototypeOf(MatStartDate.prototype)), "_getValidators", _thisSuper4).call(_thisSuper4)), [_this43._startValidator]));

          _this43._canEmitChangeEvent = function (event) {
            return event.source !== _this43._rangeInput._endInput;
          };

          return _this43;
        }

        _createClass(MatStartDate, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Normally this happens automatically, but it seems to break if not added explicitly when all
            // of the criteria below are met:
            // 1) The class extends a TS mixin.
            // 2) The application is running in ViewEngine.
            // 3) The application is being transpiled through tsickle.
            // This can be removed once google3 is completely migrated to Ivy.
            _get(_getPrototypeOf(MatStartDate.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            // Normally this happens automatically, but it seems to break if not added explicitly when all
            // of the criteria below are met:
            // 1) The class extends a TS mixin.
            // 2) The application is running in ViewEngine.
            // 3) The application is being transpiled through tsickle.
            // This can be removed once google3 is completely migrated to Ivy.
            _get(_getPrototypeOf(MatStartDate.prototype), "ngDoCheck", this).call(this);
          }
        }, {
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue.start;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              var range = new DateRange(value, this._model.selection.end);

              this._model.updateSelection(range, this);

              this._cvaOnChange(value);
            }
          }
        }, {
          key: "_formatValue",
          value: function _formatValue(value) {
            _get(_getPrototypeOf(MatStartDate.prototype), "_formatValue", this).call(this, value); // Any time the input value is reformatted we need to tell the parent.


            this._rangeInput._handleChildValueChange();
          }
          /** Gets the value that should be used when mirroring the input's size. */

        }, {
          key: "getMirrorValue",
          value: function getMirrorValue() {
            var element = this._elementRef.nativeElement;
            var value = element.value;
            return value.length > 0 ? value : element.placeholder;
          }
        }]);

        return MatStartDate;
      }(_MatDateRangeInputBase);

      MatStartDate.ɵfac = function MatStartDate_Factory(t) {
        return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatStartDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatStartDate,
        selectors: [["input", "matStartDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
        hostVars: 6,
        hostBindings: function MatStartDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatStartDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatStartDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", ctx._rangeInput.id)("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
          useExisting: MatStartDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
          useExisting: MatStartDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatStartDate.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatStartDate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matStartDate]',
            host: {
              'class': 'mat-start-date mat-date-range-input-inner',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(keydown)': '_onKeydown($event)',
              '[attr.id]': '_rangeInput.id',
              '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
              '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
              '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
              '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
              '(blur)': '_onBlur()',
              'type': 'text'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
              useExisting: MatStartDate,
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
              useExisting: MatStartDate,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();
      /** Input for entering the end date in a `mat-date-range-input`. */


      var MatEndDate = /*#__PURE__*/function (_MatDateRangeInputBas2) {
        _inherits(MatEndDate, _MatDateRangeInputBas2);

        var _super22 = _createSuper(MatEndDate);

        function MatEndDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
          var _thisSuper5, _this44;

          _classCallCheck(this, MatEndDate);

          // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
          // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
          // constructor once ViewEngine is removed.
          _this44 = _super22.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
          /** Validator that checks that the end date isn't before the start date. */

          _this44._endValidator = function (control) {
            var end = _this44._dateAdapter.getValidDateOrNull(_this44._dateAdapter.deserialize(control.value));

            var start = _this44._model ? _this44._model.selection.start : null;
            return !end || !start || _this44._dateAdapter.compareDate(end, start) >= 0 ? null : {
              'matEndDateInvalid': {
                'start': start,
                'actual': end
              }
            };
          };

          _this44._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([].concat(_toConsumableArray(_get((_thisSuper5 = _assertThisInitialized(_this44), _getPrototypeOf(MatEndDate.prototype)), "_getValidators", _thisSuper5).call(_thisSuper5)), [_this44._endValidator]));

          _this44._canEmitChangeEvent = function (event) {
            return event.source !== _this44._rangeInput._startInput;
          };

          return _this44;
        }

        _createClass(MatEndDate, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Normally this happens automatically, but it seems to break if not added explicitly when all
            // of the criteria below are met:
            // 1) The class extends a TS mixin.
            // 2) The application is running in ViewEngine.
            // 3) The application is being transpiled through tsickle.
            // This can be removed once google3 is completely migrated to Ivy.
            _get(_getPrototypeOf(MatEndDate.prototype), "ngOnInit", this).call(this);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            // Normally this happens automatically, but it seems to break if not added explicitly when all
            // of the criteria below are met:
            // 1) The class extends a TS mixin.
            // 2) The application is running in ViewEngine.
            // 3) The application is being transpiled through tsickle.
            // This can be removed once google3 is completely migrated to Ivy.
            _get(_getPrototypeOf(MatEndDate.prototype), "ngDoCheck", this).call(this);
          }
        }, {
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue.end;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              var range = new DateRange(this._model.selection.start, value);

              this._model.updateSelection(range, this);

              this._cvaOnChange(value);
            }
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            // If the user is pressing backspace on an empty end input, move focus back to the start.
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["BACKSPACE"] && !this._elementRef.nativeElement.value) {
              this._rangeInput._startInput.focus();
            }

            _get(_getPrototypeOf(MatEndDate.prototype), "_onKeydown", this).call(this, event);
          }
        }]);

        return MatEndDate;
      }(_MatDateRangeInputBase);

      MatEndDate.ɵfac = function MatEndDate_Factory(t) {
        return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatEndDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatEndDate,
        selectors: [["input", "matEndDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
        hostVars: 5,
        hostBindings: function MatEndDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatEndDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatEndDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
          useExisting: MatEndDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
          useExisting: MatEndDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatEndDate.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatEndDate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matEndDate]',
            host: {
              'class': 'mat-end-date mat-date-range-input-inner',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(keydown)': '_onKeydown($event)',
              '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
              '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
              '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
              '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
              '(blur)': '_onBlur()',
              'type': 'text'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
              useExisting: MatEndDate,
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
              useExisting: MatEndDate,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
      // directive if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the date range picker popup/dialog. */


      var MatDateRangePicker = /*#__PURE__*/function (_MatDatepickerBase2) {
        _inherits(MatDateRangePicker, _MatDatepickerBase2);

        var _super23 = _createSuper(MatDateRangePicker);

        function MatDateRangePicker() {
          _classCallCheck(this, MatDateRangePicker);

          return _super23.apply(this, arguments);
        }

        _createClass(MatDateRangePicker, [{
          key: "_forwardContentValues",
          value: function _forwardContentValues(instance) {
            _get(_getPrototypeOf(MatDateRangePicker.prototype), "_forwardContentValues", this).call(this, instance);

            var input = this._datepickerInput;

            if (input) {
              instance.comparisonStart = input.comparisonStart;
              instance.comparisonEnd = input.comparisonEnd;
            }
          }
        }]);

        return MatDateRangePicker;
      }(MatDatepickerBase);

      MatDateRangePicker.ɵfac = function MatDateRangePicker_Factory(t) {
        return ɵMatDateRangePicker_BaseFactory(t || MatDateRangePicker);
      };

      MatDateRangePicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDateRangePicker,
        selectors: [["mat-date-range-picker"]],
        exportAs: ["matDateRangePicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDateRangePicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatDateRangePicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDateRangePicker);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangePicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-date-range-picker',
            template: '',
            exportAs: 'matDateRangePicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId = 0;

      var MatDateRangeInput = /*#__PURE__*/function () {
        function MatDateRangeInput(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
          _classCallCheck(this, MatDateRangeInput);

          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          this._dateAdapter = _dateAdapter;
          this._formField = _formField;
          /** Unique ID for the input. */

          this.id = "mat-date-range-input-".concat(nextUniqueId++);
          /** Whether the control is focused. */

          this.focused = false;
          /** Name of the form control. */

          this.controlType = 'mat-date-range-input';
          this._groupDisabled = false;
          /** Value for the `aria-describedby` attribute of the inputs. */

          this._ariaDescribedBy = null;
          /** Separator text to be shown between the inputs. */

          this.separator = '–';
          /** Start of the comparison range that should be shown in the calendar. */

          this.comparisonStart = null;
          /** End of the comparison range that should be shown in the calendar. */

          this.comparisonEnd = null;
          /** Emits when the input's state has changed. */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
          } // TODO(crisbeto): remove `as any` after #18206 lands.


          this.ngControl = control;
        }
        /** Current value of the range input. */


        _createClass(MatDateRangeInput, [{
          key: "setDescribedByIds",

          /**
           * Implemented as a part of `MatFormFieldControl`.
           * @docs-private
           */
          value: function setDescribedByIds(ids) {
            this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
          }
          /**
           * Implemented as a part of `MatFormFieldControl`.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            if (!this.focused && !this.disabled) {
              if (!this._model || !this._model.selection.start) {
                this._startInput.focus();
              } else {
                this._endInput.focus();
              }
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this45 = this;

            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._startInput) {
                throw Error('mat-date-range-input must contain a matStartDate input');
              }

              if (!this._endInput) {
                throw Error('mat-date-range-input must contain a matEndDate input');
              }
            }

            if (this._model) {
              this._registerModel(this._model);
            } // We don't need to unsubscribe from this, because we
            // know that the input streams will be completed on destroy.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(function () {
              _this45.stateChanges.next(undefined);
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (dateInputsHaveChanged(changes, this._dateAdapter)) {
              this.stateChanges.next(undefined);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();
          }
          /** Gets the date at which the calendar should start. */

        }, {
          key: "getStartValue",
          value: function getStartValue() {
            return this.value ? this.value.start : null;
          }
          /** Gets the input's theme palette. */

        }, {
          key: "getThemePalette",
          value: function getThemePalette() {
            return this._formField ? this._formField.color : undefined;
          }
          /** Gets the element to which the calendar overlay should be attached. */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
          }
          /** Gets the value that is used to mirror the state input. */

        }, {
          key: "_getInputMirrorValue",
          value: function _getInputMirrorValue() {
            return this._startInput ? this._startInput.getMirrorValue() : '';
          }
          /** Whether the input placeholders should be hidden. */

        }, {
          key: "_shouldHidePlaceholders",
          value: function _shouldHidePlaceholders() {
            return this._startInput ? !this._startInput.isEmpty() : false;
          }
          /** Handles the value in one of the child inputs changing. */

        }, {
          key: "_handleChildValueChange",
          value: function _handleChildValueChange() {
            this.stateChanges.next(undefined);

            this._changeDetectorRef.markForCheck();
          }
          /** Opens the date range picker associated with the input. */

        }, {
          key: "_openDatepicker",
          value: function _openDatepicker() {
            if (this._rangePicker) {
              this._rangePicker.open();
            }
          }
          /** Whether the separate text should be hidden. */

        }, {
          key: "_shouldHideSeparator",
          value: function _shouldHideSeparator() {
            return (!this._formField || this._formField._hideControlPlaceholder()) && this.empty;
          }
          /** Gets the value for the `aria-labelledby` attribute of the inputs. */

        }, {
          key: "_getAriaLabelledby",
          value: function _getAriaLabelledby() {
            var formField = this._formField;
            return formField && formField._hasFloatingLabel() ? formField._labelId : null;
          }
          /** Re-runs the validators on the start/end inputs. */

        }, {
          key: "_revalidate",
          value: function _revalidate() {
            if (this._startInput) {
              this._startInput._validatorOnChange();
            }

            if (this._endInput) {
              this._endInput._validatorOnChange();
            }
          }
          /** Registers the current date selection model with the start/end inputs. */

        }, {
          key: "_registerModel",
          value: function _registerModel(model) {
            if (this._startInput) {
              this._startInput._registerModel(model);
            }

            if (this._endInput) {
              this._endInput._registerModel(model);
            }
          }
        }, {
          key: "value",
          get: function get() {
            return this._model ? this._model.selection : null;
          }
          /** Whether the control's label should float. */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this.focused || !this.empty;
          }
          /**
           * Implemented as a part of `MatFormFieldControl`.
           * Set the placeholder attribute on `matStartDate` and `matEndDate`.
           * @docs-private
           */

        }, {
          key: "placeholder",
          get: function get() {
            var _a, _b;

            var start = ((_a = this._startInput) === null || _a === void 0 ? void 0 : _a._getPlaceholder()) || '';
            var end = ((_b = this._endInput) === null || _b === void 0 ? void 0 : _b._getPlaceholder()) || '';
            return start || end ? "".concat(start, " ").concat(this.separator, " ").concat(end) : '';
          }
          /** The range picker that this input is associated with. */

        }, {
          key: "rangePicker",
          get: function get() {
            return this._rangePicker;
          },
          set: function set(rangePicker) {
            if (rangePicker) {
              this._model = rangePicker._registerInput(this);
              this._rangePicker = rangePicker;

              this._registerModel(this._model);
            }
          }
          /** Whether the input is required. */

        }, {
          key: "required",
          get: function get() {
            return !!this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
          /** Function that can be used to filter out dates within the date range picker. */

        }, {
          key: "dateFilter",
          get: function get() {
            return this._dateFilter;
          },
          set: function set(value) {
            this._dateFilter = value;

            this._revalidate();
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

            if (!this._dateAdapter.sameDate(validValue, this._min)) {
              this._min = validValue;

              this._revalidate();
            }
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            var validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));

            if (!this._dateAdapter.sameDate(validValue, this._max)) {
              this._max = validValue;

              this._revalidate();
            }
          }
          /** Whether the input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);

            if (newValue !== this._groupDisabled) {
              this._groupDisabled = newValue;
              this.stateChanges.next(undefined);
            }
          }
          /** Whether the input is in an error state. */

        }, {
          key: "errorState",
          get: function get() {
            if (this._startInput && this._endInput) {
              return this._startInput.errorState || this._endInput.errorState;
            }

            return false;
          }
          /** Whether the datepicker input is empty. */

        }, {
          key: "empty",
          get: function get() {
            var startEmpty = this._startInput ? this._startInput.isEmpty() : false;
            var endEmpty = this._endInput ? this._endInput.isEmpty() : false;
            return startEmpty && endEmpty;
          }
        }]);

        return MatDateRangeInput;
      }();

      MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) {
        return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"], 8));
      };

      MatDateRangeInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDateRangeInput,
        selectors: [["mat-date-range-input"]],
        contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatStartDate, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatEndDate, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
          }
        },
        hostAttrs: ["role", "group", 1, "mat-date-range-input"],
        hostVars: 8,
        hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
          }
        },
        inputs: {
          separator: "separator",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          rangePicker: "rangePicker",
          required: "required",
          dateFilter: "dateFilter",
          min: "min",
          max: "max",
          disabled: "disabled"
        },
        exportAs: ["matDateRangeInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"],
          useExisting: MatDateRangeInput
        }, {
          provide: MAT_DATE_RANGE_INPUT_PARENT,
          useExisting: MatDateRangeInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c6,
        decls: 9,
        vars: 4,
        consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-start-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-end-wrapper"]],
        template: function MatDateRangeInput_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
              return ctx.focused = $event !== null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._getInputMirrorValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.separator);
          }
        },
        directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"]],
        styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatDateRangeInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatDateRangeInput.propDecorators = {
        rangePicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        separator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _startInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatStartDate]
        }],
        _endInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatEndDate]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-date-range-input',
            template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"focused = $event !== null\">\n  <div class=\"mat-date-range-input-start-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue()}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n  </div>\n</div>\n\n",
            exportAs: 'matDateRangeInput',
            host: {
              'class': 'mat-date-range-input',
              '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
              '[class.mat-date-range-input-required]': 'required',
              '[attr.id]': 'null',
              'role': 'group',
              '[attr.aria-labelledby]': '_getAriaLabelledby()',
              '[attr.aria-describedby]': '_ariaDescribedBy',
              // Used by the test harness to tie this input to its calendar. We can't depend on
              // `aria-owns` for this, because it's only defined while the calendar is open.
              '[attr.data-mat-calendar]': 'rangePicker ? rangePicker.id : null'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"],
              useExisting: MatDateRangeInput
            }, {
              provide: MAT_DATE_RANGE_INPUT_PARENT,
              useExisting: MatDateRangeInput
            }],
            styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rangePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _startInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatStartDate]
          }],
          _endInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatEndDate]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDatepickerModule = function MatDatepickerModule() {
        _classCallCheck(this, MatDatepickerModule);
      };

      MatDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: MatDatepickerModule
      });
      MatDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function MatDatepickerModule_Factory(t) {
          return new (t || MatDatepickerModule)();
        },
        providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatDatepickerModule, {
          declarations: function declarations() {
            return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
            declarations: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
            providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
            entryComponents: [MatDatepickerContent, MatCalendarHeader]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=datepicker.js.map

      /***/

    },

    /***/
    "rDax":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
      \********************************************************************/

    /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g, ɵangular_material_src_cdk_overlay_overlay_h */

    /***/
    function rDax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
        return BlockScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
        return CdkConnectedOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
        return CdkOverlayOrigin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
        return CloseScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
        return ConnectedOverlayPositionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
        return ConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
        return ConnectionPositionPair;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
        return FlexibleConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
        return FullscreenOverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
        return GlobalPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
        return NoopScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
        return OVERLAY_PROVIDERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Overlay", function () {
        return Overlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
        return OverlayConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
        return OverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
        return OverlayKeyboardDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
        return OverlayModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayOutsideClickDispatcher", function () {
        return OverlayOutsideClickDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
        return OverlayPositionBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
        return OverlayRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
        return RepositionScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
        return ScrollStrategyOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
        return ScrollingVisibility;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
        return validateHorizontalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
        return validateVerticalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
        return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
        return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
        return OVERLAY_CONTAINER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
        return OVERLAY_CONTAINER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_h", function () {
        return BaseOverlayDispatcher;
      });
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Strategy that will prevent the user from scrolling while the overlay is visible.
       */


      var BlockScrollStrategy = /*#__PURE__*/function () {
        function BlockScrollStrategy(_viewportRuler, document) {
          _classCallCheck(this, BlockScrollStrategy);

          this._viewportRuler = _viewportRuler;
          this._previousHTMLStyles = {
            top: '',
            left: ''
          };
          this._isEnabled = false;
          this._document = document;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(BlockScrollStrategy, [{
          key: "attach",
          value: function attach() {}
          /** Blocks page-level scroll while the attached overlay is open. */

        }, {
          key: "enable",
          value: function enable() {
            if (this._canBeEnabled()) {
              var root = this._document.documentElement;
              this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

              this._previousHTMLStyles.left = root.style.left || '';
              this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
              // have the user agent margin, whereas the `html` is guaranteed not to have one.

              root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
              root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
              root.classList.add('cdk-global-scrollblock');
              this._isEnabled = true;
            }
          }
          /** Unblocks page-level scroll while the attached overlay is open. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._isEnabled) {
              var html = this._document.documentElement;
              var body = this._document.body;
              var htmlStyle = html.style;
              var bodyStyle = body.style;
              var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
              var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
              this._isEnabled = false;
              htmlStyle.left = this._previousHTMLStyles.left;
              htmlStyle.top = this._previousHTMLStyles.top;
              html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
              // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

              htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
              window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
              htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
              bodyStyle.scrollBehavior = previousBodyScrollBehavior;
            }
          }
        }, {
          key: "_canBeEnabled",
          value: function _canBeEnabled() {
            // Since the scroll strategies can't be singletons, we have to use a global CSS class
            // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
            // scrolling multiple times.
            var html = this._document.documentElement;

            if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
              return false;
            }

            var body = this._document.body;

            var viewport = this._viewportRuler.getViewportSize();

            return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
          }
        }]);

        return BlockScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
       */


      function getMatScrollStrategyAlreadyAttachedError() {
        return Error("Scroll strategy has already been attached.");
      }
      /**
       * Strategy that will close the overlay as soon as the user starts scrolling.
       */


      var CloseScrollStrategy = /*#__PURE__*/function () {
        function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
          var _this46 = this;

          _classCallCheck(this, CloseScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._config = _config;
          this._scrollSubscription = null;
          /** Detaches the overlay ref and disables the scroll strategy. */

          this._detach = function () {
            _this46.disable();

            if (_this46._overlayRef.hasAttached()) {
              _this46._ngZone.run(function () {
                return _this46._overlayRef.detach();
              });
            }
          };
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(CloseScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables the closing of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this47 = this;

            if (this._scrollSubscription) {
              return;
            }

            var stream = this._scrollDispatcher.scrolled(0);

            if (this._config && this._config.threshold && this._config.threshold > 1) {
              this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
              this._scrollSubscription = stream.subscribe(function () {
                var scrollPosition = _this47._viewportRuler.getViewportScrollPosition().top;

                if (Math.abs(scrollPosition - _this47._initialScrollPosition) > _this47._config.threshold) {
                  _this47._detach();
                } else {
                  _this47._overlayRef.updatePosition();
                }
              });
            } else {
              this._scrollSubscription = stream.subscribe(this._detach);
            }
          }
          /** Disables the closing the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return CloseScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Scroll strategy that doesn't do anything. */


      var NoopScrollStrategy = /*#__PURE__*/function () {
        function NoopScrollStrategy() {
          _classCallCheck(this, NoopScrollStrategy);
        }

        _createClass(NoopScrollStrategy, [{
          key: "enable",

          /** Does nothing, as this scroll strategy is a no-op. */
          value: function enable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "disable",
          value: function disable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "attach",
          value: function attach() {}
        }]);

        return NoopScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(jelbourn): move this to live with the rest of the scrolling code
      // TODO(jelbourn): someday replace this with IntersectionObservers

      /**
       * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is scrolled out of view
       * @docs-private
       */


      function isElementScrolledOutsideView(element, scrollContainers) {
        return scrollContainers.some(function (containerBounds) {
          var outsideAbove = element.bottom < containerBounds.top;
          var outsideBelow = element.top > containerBounds.bottom;
          var outsideLeft = element.right < containerBounds.left;
          var outsideRight = element.left > containerBounds.right;
          return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
      }
      /**
       * Gets whether an element is clipped by any of its scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is clipped
       * @docs-private
       */


      function isElementClippedByScrolling(element, scrollContainers) {
        return scrollContainers.some(function (scrollContainerRect) {
          var clippedAbove = element.top < scrollContainerRect.top;
          var clippedBelow = element.bottom > scrollContainerRect.bottom;
          var clippedLeft = element.left < scrollContainerRect.left;
          var clippedRight = element.right > scrollContainerRect.right;
          return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Strategy that will update the element position as the user is scrolling.
       */


      var RepositionScrollStrategy = /*#__PURE__*/function () {
        function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
          _classCallCheck(this, RepositionScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._viewportRuler = _viewportRuler;
          this._ngZone = _ngZone;
          this._config = _config;
          this._scrollSubscription = null;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(RepositionScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables repositioning of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this48 = this;

            if (!this._scrollSubscription) {
              var throttle = this._config ? this._config.scrollThrottle : 0;
              this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this48._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


                if (_this48._config && _this48._config.autoClose) {
                  var overlayRect = _this48._overlayRef.overlayElement.getBoundingClientRect();

                  var _this48$_viewportRule = _this48._viewportRuler.getViewportSize(),
                      width = _this48$_viewportRule.width,
                      height = _this48$_viewportRule.height; // TODO(crisbeto): include all ancestor scroll containers here once
                  // we have a way of exposing the trigger element to the scroll strategy.


                  var parentRects = [{
                    width: width,
                    height: height,
                    bottom: height,
                    right: width,
                    top: 0,
                    left: 0
                  }];

                  if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                    _this48.disable();

                    _this48._ngZone.run(function () {
                      return _this48._overlayRef.detach();
                    });
                  }
                }
              });
            }
          }
          /** Disables repositioning of the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return RepositionScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Options for how an overlay will handle scrolling.
       *
       * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
       * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
       */


      var ScrollStrategyOptions = function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this49 = this;

        _classCallCheck(this, ScrollStrategyOptions);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */

        this.noop = function () {
          return new NoopScrollStrategy();
        };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */


        this.close = function (config) {
          return new CloseScrollStrategy(_this49._scrollDispatcher, _this49._ngZone, _this49._viewportRuler, config);
        };
        /** Block scrolling. */


        this.block = function () {
          return new BlockScrollStrategy(_this49._viewportRuler, _this49._document);
        };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */


        this.reposition = function (config) {
          return new RepositionScrollStrategy(_this49._scrollDispatcher, _this49._viewportRuler, _this49._ngZone, config);
        };

        this._document = document;
      };

      ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
        return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollStrategyOptions_Factory() {
          return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: ScrollStrategyOptions,
        providedIn: "root"
      });

      ScrollStrategyOptions.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Initial configuration used when creating an overlay. */


      var OverlayConfig = function OverlayConfig(config) {
        _classCallCheck(this, OverlayConfig);

        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = new NoopScrollStrategy();
        /** Custom class to add to the overlay pane. */

        this.panelClass = '';
        /** Whether the overlay has a backdrop. */

        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */

        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.disposeOnNavigation = false;

        if (config) {
          // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
          // loses the array generic type in the `for of`. But we *also* have to use `Array` because
          // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
          var configKeys = Object.keys(config);

          for (var _i2 = 0, _configKeys = configKeys; _i2 < _configKeys.length; _i2++) {
            var key = _configKeys[_i2];

            if (config[key] !== undefined) {
              // TypeScript, as of version 3.5, sees the left-hand-side of this expression
              // as "I don't know *which* key this is, so the only valid value is the intersection
              // of all the posible values." In this case, that happens to be `undefined`. TypeScript
              // is not smart enough to see that the right-hand-side is actually an access of the same
              // exact type with the same exact key, meaning that the value type must be identical.
              // So we use `any` to work around this.
              this[key] = config[key];
            }
          }
        }
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The points of the origin element and the overlay element to connect. */


      var ConnectionPositionPair = function ConnectionPositionPair(origin, overlay,
      /** Offset along the X axis. */
      offsetX,
      /** Offset along the Y axis. */
      offsetY,
      /** Class(es) to be applied to the panel while this position is active. */
      panelClass) {
        _classCallCheck(this, ConnectionPositionPair);

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
      };
      /**
       * Set of properties regarding the position of the origin and overlay relative to the viewport
       * with respect to the containing Scrollable elements.
       *
       * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
       * bounds of any one of the strategy's Scrollable's bounding client rectangle.
       *
       * The overlay and origin are outside view if there is no overlap between their bounding client
       * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
       *
       *       -----------                    -----------
       *       | outside |                    | clipped |
       *       |  view   |              --------------------------
       *       |         |              |     |         |        |
       *       ----------               |     -----------        |
       *  --------------------------    |                        |
       *  |                        |    |      Scrollable        |
       *  |                        |    |                        |
       *  |                        |     --------------------------
       *  |      Scrollable        |
       *  |                        |
       *  --------------------------
       *
       *  @docs-private
       */


      var ScrollingVisibility = function ScrollingVisibility() {
        _classCallCheck(this, ScrollingVisibility);
      };
      /** The change event emitted by the strategy when a fallback position is used. */


      var ConnectedOverlayPositionChange = function ConnectedOverlayPositionChange(
      /** The position used as a result of this change. */
      connectionPair,
      /** @docs-private */
      scrollableViewProperties) {
        _classCallCheck(this, ConnectedOverlayPositionChange);

        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      };

      ConnectedOverlayPositionChange.ctorParameters = function () {
        return [{
          type: ConnectionPositionPair
        }, {
          type: ScrollingVisibility,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /**
       * Validates whether a vertical position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function validateVerticalPosition(property, value) {
        if (value !== 'top' && value !== 'bottom' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
        }
      }
      /**
       * Validates whether a horizontal position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function validateHorizontalPosition(property, value) {
        if (value !== 'start' && value !== 'end' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var BaseOverlayDispatcher = /*#__PURE__*/function () {
        function BaseOverlayDispatcher(document) {
          _classCallCheck(this, BaseOverlayDispatcher);

          /** Currently attached overlays in the order they were attached. */
          this._attachedOverlays = [];
          this._document = document;
        }

        _createClass(BaseOverlayDispatcher, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();
          }
          /** Add a new overlay to the list of attached overlay refs. */

        }, {
          key: "add",
          value: function add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef);

            this._attachedOverlays.push(overlayRef);
          }
          /** Remove an overlay from the list of attached overlay refs. */

        }, {
          key: "remove",
          value: function remove(overlayRef) {
            var index = this._attachedOverlays.indexOf(overlayRef);

            if (index > -1) {
              this._attachedOverlays.splice(index, 1);
            } // Remove the global listener once there are no more overlays.


            if (this._attachedOverlays.length === 0) {
              this.detach();
            }
          }
        }]);

        return BaseOverlayDispatcher;
      }();

      BaseOverlayDispatcher.ɵfac = function BaseOverlayDispatcher_Factory(t) {
        return new (t || BaseOverlayDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      BaseOverlayDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function BaseOverlayDispatcher_Factory() {
          return new BaseOverlayDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: BaseOverlayDispatcher,
        providedIn: "root"
      });

      BaseOverlayDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseOverlayDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var OverlayKeyboardDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche) {
        _inherits(OverlayKeyboardDispatcher, _BaseOverlayDispatche);

        var _super24 = _createSuper(OverlayKeyboardDispatcher);

        function OverlayKeyboardDispatcher(document) {
          var _this50;

          _classCallCheck(this, OverlayKeyboardDispatcher);

          _this50 = _super24.call(this, document);
          /** Keyboard event listener that will be attached to the body. */

          _this50._keydownListener = function (event) {
            var overlays = _this50._attachedOverlays;

            for (var i = overlays.length - 1; i > -1; i--) {
              // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
              // We want to target the most recent overlay, rather than trying to match where the event came
              // from, because some components might open an overlay, but keep focus on a trigger element
              // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
              // because we don't want overlays that don't handle keyboard events to block the ones below
              // them that do.
              if (overlays[i]._keydownEvents.observers.length > 0) {
                overlays[i]._keydownEvents.next(event);

                break;
              }
            }
          };

          return _this50;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(OverlayKeyboardDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(OverlayKeyboardDispatcher.prototype), "add", this).call(this, overlayRef); // Lazily start dispatcher once first overlay is added


            if (!this._isAttached) {
              this._document.body.addEventListener('keydown', this._keydownListener);

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('keydown', this._keydownListener);

              this._isAttached = false;
            }
          }
        }]);

        return OverlayKeyboardDispatcher;
      }(BaseOverlayDispatcher);

      OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
        return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayKeyboardDispatcher_Factory() {
          return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: OverlayKeyboardDispatcher,
        providedIn: "root"
      });

      OverlayKeyboardDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
        return dispatcher || new OverlayKeyboardDispatcher(_document);
      }
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
        // If there is already an OverlayKeyboardDispatcher available, use that.
        // Otherwise, provide a new one.
        provide: OverlayKeyboardDispatcher,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher], // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
        useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching mouse click events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */

      var OverlayOutsideClickDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche2) {
        _inherits(OverlayOutsideClickDispatcher, _BaseOverlayDispatche2);

        var _super25 = _createSuper(OverlayOutsideClickDispatcher);

        function OverlayOutsideClickDispatcher(document, _platform) {
          var _this51;

          _classCallCheck(this, OverlayOutsideClickDispatcher);

          _this51 = _super25.call(this, document);
          _this51._platform = _platform;
          _this51._cursorStyleIsSet = false;
          /** Click event listener that will be attached to the body propagate phase. */

          _this51._clickListener = function (event) {
            // Get the target through the `composedPath` if possible to account for shadow DOM.
            var target = event.composedPath ? event.composedPath()[0] : event.target; // We copy the array because the original may be modified asynchronously if the
            // outsidePointerEvents listener decides to detach overlays resulting in index errors inside
            // the for loop.

            var overlays = _this51._attachedOverlays.slice(); // Dispatch the mouse event to the top overlay which has subscribers to its mouse events.
            // We want to target all overlays for which the click could be considered as outside click.
            // As soon as we reach an overlay for which the click is not outside click we break off
            // the loop.


            for (var i = overlays.length - 1; i > -1; i--) {
              var overlayRef = overlays[i];

              if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
                continue;
              } // If it's a click inside the overlay, just break - we should do nothing
              // If it's an outside click dispatch the mouse event, and proceed with the next overlay


              if (overlayRef.overlayElement.contains(target)) {
                break;
              }

              overlayRef._outsidePointerEvents.next(event);
            }
          };

          return _this51;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(OverlayOutsideClickDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(OverlayOutsideClickDispatcher.prototype), "add", this).call(this, overlayRef); // tslint:disable: max-line-length
            // Safari on iOS does not generate click events for non-interactive
            // elements. However, we want to receive a click for any element outside
            // the overlay. We can force a "clickable" state by setting
            // `cursor: pointer` on the document body.
            // See https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
            // and https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
            // tslint:enable: max-line-length


            if (!this._isAttached) {
              this._document.body.addEventListener('click', this._clickListener, true);

              this._document.body.addEventListener('contextmenu', this._clickListener, true); // click event is not fired on iOS. To make element "clickable" we are
              // setting the cursor to pointer


              if (this._platform.IOS && !this._cursorStyleIsSet) {
                this._cursorOriginalValue = this._document.body.style.cursor;
                this._document.body.style.cursor = 'pointer';
                this._cursorStyleIsSet = true;
              }

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('click', this._clickListener, true);

              this._document.body.removeEventListener('contextmenu', this._clickListener, true);

              if (this._platform.IOS && this._cursorStyleIsSet) {
                this._document.body.style.cursor = this._cursorOriginalValue;
                this._cursorStyleIsSet = false;
              }

              this._isAttached = false;
            }
          }
        }]);

        return OverlayOutsideClickDispatcher;
      }(BaseOverlayDispatcher);

      OverlayOutsideClickDispatcher.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) {
        return new (t || OverlayOutsideClickDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      OverlayOutsideClickDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayOutsideClickDispatcher_Factory() {
          return new OverlayOutsideClickDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: OverlayOutsideClickDispatcher,
        providedIn: "root"
      });

      OverlayOutsideClickDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayOutsideClickDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Whether we're in a testing environment.
       * TODO(crisbeto): remove this once we have an overlay testing module.
       */


      var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(window.__karma__ || window.jasmine);
      /** Container inside which all overlays will render. */

      var OverlayContainer = /*#__PURE__*/function () {
        function OverlayContainer(document,
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        _platform) {
          _classCallCheck(this, OverlayContainer);

          this._platform = _platform;
          this._document = document;
        }

        _createClass(OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var container = this._containerElement;

            if (container && container.parentNode) {
              container.parentNode.removeChild(container);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            // @breaking-change 10.0.0 Remove null check for `_platform`.
            var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
            var containerClass = 'cdk-overlay-container';

            if (isBrowser || isTestEnvironment) {
              var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
              // This can happen when transitioning from the server to the client.


              for (var i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
              }
            }

            var container = this._document.createElement('div');

            container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
            // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
            // The new logic was a little too aggressive since it was breaking some legitimate use cases.
            // To mitigate the problem we made it so that only containers from a different platform are
            // cleared, but the side-effect was that people started depending on the overly-aggressive
            // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
            // module which does the cleanup, we try to detect that we're in a test environment and we
            // always clear the container. See #17006.
            // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

            if (isTestEnvironment) {
              container.setAttribute('platform', 'test');
            } else if (!isBrowser) {
              container.setAttribute('platform', 'server');
            }

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return OverlayContainer;
      }();

      OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayContainer_Factory() {
          return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: OverlayContainer,
        providedIn: "root"
      });

      OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
        return parentContainer || new OverlayContainer(_document);
      }
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      var OVERLAY_CONTAINER_PROVIDER = {
        // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
        provide: OverlayContainer,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
        ],
        useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */

      var OverlayRef = /*#__PURE__*/function () {
        function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, // @breaking-change 8.0.0 `_location` parameter to be made required.
        _location, // @breaking-change 9.0.0 `_mouseClickDispatcher` parameter to be made required.
        _outsideClickDispatcher) {
          var _this52 = this;

          _classCallCheck(this, OverlayRef);

          this._portalOutlet = _portalOutlet;
          this._host = _host;
          this._pane = _pane;
          this._config = _config;
          this._ngZone = _ngZone;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._document = _document;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
          this._backdropElement = null;
          this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

          this._backdropClickHandler = function (event) {
            return _this52._backdropClick.next(event);
          };
          /** Stream of keydown events dispatched to this overlay. */


          this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Stream of mouse outside events dispatched to this overlay. */

          this._outsidePointerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();

          if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;

            this._scrollStrategy.attach(this);
          }

          this._positionStrategy = _config.positionStrategy;
        }
        /** The overlay's HTML element */


        _createClass(OverlayRef, [{
          key: "attach",

          /**
           * Attaches content, given via a Portal, to the overlay.
           * If the overlay is configured to have a backdrop, it will be created.
           *
           * @param portal Portal instance to which to attach the overlay.
           * @returns The portal attachment result.
           */
          value: function attach(portal) {
            var _this53 = this;

            var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


            if (!this._host.parentElement && this._previousHostParent) {
              this._previousHostParent.appendChild(this._host);
            }

            if (this._positionStrategy) {
              this._positionStrategy.attach(this);
            }

            this._updateStackingOrder();

            this._updateElementSize();

            this._updateElementDirection();

            if (this._scrollStrategy) {
              this._scrollStrategy.enable();
            } // Update the position once the zone is stable so that the overlay will be fully rendered
            // before attempting to position it, as the position may depend on the size of the rendered
            // content.


            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              // The overlay could've been detached before the zone has stabilized.
              if (_this53.hasAttached()) {
                _this53.updatePosition();
              }
            }); // Enable pointer events for the overlay pane element.


            this._togglePointerEvents(true);

            if (this._config.hasBackdrop) {
              this._attachBackdrop();
            }

            if (this._config.panelClass) {
              this._toggleClasses(this._pane, this._config.panelClass, true);
            } // Only emit the `attachments` event once all other setup is done.


            this._attachments.next(); // Track this overlay by the keyboard dispatcher


            this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
            // once the constructor parameter is made required.


            if (this._config.disposeOnNavigation && this._location) {
              this._locationChanges = this._location.subscribe(function () {
                return _this53.dispose();
              });
            } // @breaking-change 9.0.0 remove the null check for `_mouseClickDispatcher`


            if (this._outsideClickDispatcher) {
              this._outsideClickDispatcher.add(this);
            }

            return attachResult;
          }
          /**
           * Detaches an overlay from a portal.
           * @returns The portal detachment result.
           */

        }, {
          key: "detach",
          value: function detach() {
            if (!this.hasAttached()) {
              return;
            }

            this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
            // This is necessary because otherwise the pane element will cover the page and disable
            // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

            this._togglePointerEvents(false);

            if (this._positionStrategy && this._positionStrategy.detach) {
              this._positionStrategy.detach();
            }

            if (this._scrollStrategy) {
              this._scrollStrategy.disable();
            }

            var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


            this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


            this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
            // rendered, even though it's transparent and unclickable which is why we remove it.


            this._detachContentWhenStable(); // Stop listening for location changes.


            this._locationChanges.unsubscribe(); // @breaking-change 9.0.0 remove the null check for `_outsideClickDispatcher`


            if (this._outsideClickDispatcher) {
              this._outsideClickDispatcher.remove(this);
            }

            return detachmentResult;
          }
          /** Cleans up the overlay from the DOM. */

        }, {
          key: "dispose",
          value: function dispose() {
            var isAttached = this.hasAttached();

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._disposeScrollStrategy();

            this.detachBackdrop();

            this._locationChanges.unsubscribe();

            this._keyboardDispatcher.remove(this);

            this._portalOutlet.dispose();

            this._attachments.complete();

            this._backdropClick.complete();

            this._keydownEvents.complete();

            this._outsidePointerEvents.complete(); // @breaking-change 9.0.0 remove the null check for `_outsideClickDispatcher`


            if (this._outsideClickDispatcher) {
              this._outsideClickDispatcher.remove(this);
            }

            if (this._host && this._host.parentNode) {
              this._host.parentNode.removeChild(this._host);

              this._host = null;
            }

            this._previousHostParent = this._pane = null;

            if (isAttached) {
              this._detachments.next();
            }

            this._detachments.complete();
          }
          /** Whether the overlay has attached content. */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._portalOutlet.hasAttached();
          }
          /** Gets an observable that emits when the backdrop has been clicked. */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._backdropClick;
          }
          /** Gets an observable that emits when the overlay has been attached. */

        }, {
          key: "attachments",
          value: function attachments() {
            return this._attachments;
          }
          /** Gets an observable that emits when the overlay has been detached. */

        }, {
          key: "detachments",
          value: function detachments() {
            return this._detachments;
          }
          /** Gets an observable of keydown events targeted to this overlay. */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._keydownEvents;
          }
          /** Gets an observable of pointer events targeted outside this overlay. */

        }, {
          key: "outsidePointerEvents",
          value: function outsidePointerEvents() {
            return this._outsidePointerEvents;
          }
          /** Gets the current overlay configuration, which is immutable. */

        }, {
          key: "getConfig",
          value: function getConfig() {
            return this._config;
          }
          /** Updates the position of the overlay based on the position strategy. */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._positionStrategy) {
              this._positionStrategy.apply();
            }
          }
          /** Switches to a new position strategy and updates the overlay position. */

        }, {
          key: "updatePositionStrategy",
          value: function updatePositionStrategy(strategy) {
            if (strategy === this._positionStrategy) {
              return;
            }

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._positionStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              this.updatePosition();
            }
          }
          /** Update the size properties of the overlay. */

        }, {
          key: "updateSize",
          value: function updateSize(sizeConfig) {
            this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

            this._updateElementSize();
          }
          /** Sets the LTR/RTL direction for the overlay. */

        }, {
          key: "setDirection",
          value: function setDirection(dir) {
            this._config = Object.assign(Object.assign({}, this._config), {
              direction: dir
            });

            this._updateElementDirection();
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, true);
            }
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, false);
            }
          }
          /**
           * Returns the layout direction of the overlay panel.
           */

        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = this._config.direction;

            if (!direction) {
              return 'ltr';
            }

            return typeof direction === 'string' ? direction : direction.value;
          }
          /** Switches to a new scroll strategy. */

        }, {
          key: "updateScrollStrategy",
          value: function updateScrollStrategy(strategy) {
            if (strategy === this._scrollStrategy) {
              return;
            }

            this._disposeScrollStrategy();

            this._scrollStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              strategy.enable();
            }
          }
          /** Updates the text direction of the overlay panel. */

        }, {
          key: "_updateElementDirection",
          value: function _updateElementDirection() {
            this._host.setAttribute('dir', this.getDirection());
          }
          /** Updates the size of the overlay element based on the overlay config. */

        }, {
          key: "_updateElementSize",
          value: function _updateElementSize() {
            if (!this._pane) {
              return;
            }

            var style = this._pane.style;
            style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
            style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
            style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
            style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
            style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
            style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
          }
          /** Toggles the pointer events for the overlay pane element. */

        }, {
          key: "_togglePointerEvents",
          value: function _togglePointerEvents(enablePointer) {
            this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
          }
          /** Attaches a backdrop for this overlay. */

        }, {
          key: "_attachBackdrop",
          value: function _attachBackdrop() {
            var _this54 = this;

            var showingClass = 'cdk-overlay-backdrop-showing';
            this._backdropElement = this._document.createElement('div');

            this._backdropElement.classList.add('cdk-overlay-backdrop');

            if (this._config.backdropClass) {
              this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
            } // Insert the backdrop before the pane in the DOM order,
            // in order to handle stacked overlays properly.


            this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
            // action desired when such a click occurs (usually closing the overlay).


            this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  if (_this54._backdropElement) {
                    _this54._backdropElement.classList.add(showingClass);
                  }
                });
              });
            } else {
              this._backdropElement.classList.add(showingClass);
            }
          }
          /**
           * Updates the stacking order of the element, moving it to the top if necessary.
           * This is required in cases where one overlay was detached, while another one,
           * that should be behind it, was destroyed. The next time both of them are opened,
           * the stacking will be wrong, because the detached element's pane will still be
           * in its original DOM position.
           */

        }, {
          key: "_updateStackingOrder",
          value: function _updateStackingOrder() {
            if (this._host.nextSibling) {
              this._host.parentNode.appendChild(this._host);
            }
          }
          /** Detaches the backdrop (if any) associated with the overlay. */

        }, {
          key: "detachBackdrop",
          value: function detachBackdrop() {
            var _this55 = this;

            var backdropToDetach = this._backdropElement;

            if (!backdropToDetach) {
              return;
            }

            var timeoutId;

            var finishDetach = function finishDetach() {
              // It may not be attached to anything in certain cases (e.g. unit tests).
              if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', _this55._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);

                if (backdropToDetach.parentNode) {
                  backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
              } // It is possible that a new portal has been attached to this overlay since we started
              // removing the backdrop. If that is the case, only clear the backdrop reference if it
              // is still the same instance that we started to remove.


              if (_this55._backdropElement == backdropToDetach) {
                _this55._backdropElement = null;
              }

              if (_this55._config.backdropClass) {
                _this55._toggleClasses(backdropToDetach, _this55._config.backdropClass, false);
              }

              clearTimeout(timeoutId);
            };

            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

            this._ngZone.runOutsideAngular(function () {
              backdropToDetach.addEventListener('transitionend', finishDetach);
            }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.


            backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.

            timeoutId = this._ngZone.runOutsideAngular(function () {
              return setTimeout(finishDetach, 500);
            });
          }
          /** Toggles a single CSS class or an array of classes on an element. */

        }, {
          key: "_toggleClasses",
          value: function _toggleClasses(element, cssClasses, isAdd) {
            var classList = element.classList;
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
              // We can't do a spread here, because IE doesn't support setting multiple classes.
              // Also trying to add an empty string to a DOMTokenList will throw.
              if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
              }
            });
          }
          /** Detaches the overlay content next time the zone stabilizes. */

        }, {
          key: "_detachContentWhenStable",
          value: function _detachContentWhenStable() {
            var _this56 = this;

            // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
            // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
            // be patched to run inside the zone, which will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(function () {
              // We can't remove the host here immediately, because the overlay pane's content
              // might still be animating. This stream helps us avoid interrupting the animation
              // by waiting for the pane to become empty.
              var subscription = _this56._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this56._attachments, _this56._detachments))).subscribe(function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this56._pane || !_this56._host || _this56._pane.children.length === 0) {
                  if (_this56._pane && _this56._config.panelClass) {
                    _this56._toggleClasses(_this56._pane, _this56._config.panelClass, false);
                  }

                  if (_this56._host && _this56._host.parentElement) {
                    _this56._previousHostParent = _this56._host.parentElement;

                    _this56._previousHostParent.removeChild(_this56._host);
                  }

                  subscription.unsubscribe();
                }
              });
            });
          }
          /** Disposes of a scroll strategy. */

        }, {
          key: "_disposeScrollStrategy",
          value: function _disposeScrollStrategy() {
            var scrollStrategy = this._scrollStrategy;

            if (scrollStrategy) {
              scrollStrategy.disable();

              if (scrollStrategy.detach) {
                scrollStrategy.detach();
              }
            }
          }
        }, {
          key: "overlayElement",
          get: function get() {
            return this._pane;
          }
          /** The overlay's backdrop HTML element. */

        }, {
          key: "backdropElement",
          get: function get() {
            return this._backdropElement;
          }
          /**
           * Wrapper around the panel element. Can be used for advanced
           * positioning where a wrapper with specific styling is
           * required around the overlay pane.
           */

        }, {
          key: "hostElement",
          get: function get() {
            return this._host;
          }
        }]);

        return OverlayRef;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO: refactor clipping detection into a separate thing (part of scrolling module)
      // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

      /** Class to be added to the overlay bounding box. */


      var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
      /** Regex used to split a string on its CSS units. */

      var cssUnitPattern = /([A-Za-z%]+)$/;
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       */

      var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
        function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, FlexibleConnectedPositionStrategy);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
          /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */

          this._lastBoundingBoxSize = {
            width: 0,
            height: 0
          };
          /** Whether the overlay was pushed in a previous positioning. */

          this._isPushed = false;
          /** Whether the overlay can be pushed on-screen on the initial open. */

          this._canPush = true;
          /** Whether the overlay can grow via flexible width/height after the initial open. */

          this._growAfterOpen = false;
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

          this._hasFlexibleDimensions = true;
          /** Whether the overlay position is locked. */

          this._positionLocked = false;
          /** Amount of space that must be maintained between the overlay and the edge of the viewport. */

          this._viewportMargin = 0;
          /** The Scrollable containers used to check scrollable view properties on position change. */

          this._scrollables = [];
          /** Ordered list of preferred positions, from most to least desirable. */

          this._preferredPositions = [];
          /** Subject that emits whenever the position changes. */

          this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Subscription to viewport size changes. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Default offset for the overlay along the x axis. */

          this._offsetX = 0;
          /** Default offset for the overlay along the y axis. */

          this._offsetY = 0;
          /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */

          this._appliedPanelClasses = [];
          /** Observable sequence of position changes. */

          this.positionChanges = this._positionChanges;
          this.setOrigin(connectedTo);
        }
        /** Ordered list of preferred positions, from most to least desirable. */


        _createClass(FlexibleConnectedPositionStrategy, [{
          key: "attach",

          /** Attaches this position strategy to an overlay. */
          value: function attach(overlayRef) {
            var _this57 = this;

            if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('This position strategy is already attached to an overlay');
            }

            this._validatePositions();

            overlayRef.hostElement.classList.add(boundingBoxClass);
            this._overlayRef = overlayRef;
            this._boundingBox = overlayRef.hostElement;
            this._pane = overlayRef.overlayElement;
            this._isDisposed = false;
            this._isInitialRender = true;
            this._lastPosition = null;

            this._resizeSubscription.unsubscribe();

            this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
              // When the window is resized, we want to trigger the next reposition as if it
              // was an initial render, in order for the strategy to pick a new optimal position,
              // otherwise position locking will cause it to stay at the old one.
              _this57._isInitialRender = true;

              _this57.apply();
            });
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin best fits on-screen.
           *
           * The selection of a position goes as follows:
           *  - If any positions fit completely within the viewport as-is,
           *      choose the first position that does so.
           *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
           *      choose the position with the greatest available size modified by the positions' weight.
           *  - If pushing is enabled, take the position that went off-screen the least and push it
           *      on-screen.
           *  - If none of the previous criteria were met, use the position that goes off-screen the least.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // We shouldn't do anything if the strategy was disposed or we're on the server.
            if (this._isDisposed || !this._platform.isBrowser) {
              return;
            } // If the position has been applied already (e.g. when the overlay was opened) and the
            // consumer opted into locking in the position, re-use the old position, in order to
            // prevent the overlay from jumping around.


            if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
              this.reapplyLastPosition();
              return;
            }

            this._clearPanelClasses();

            this._resetOverlayElementStyles();

            this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
            // the overlay relative to the origin.
            // We use the viewport rect to determine whether a position would go off-screen.


            this._viewportRect = this._getNarrowedViewportRect();
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            var originRect = this._originRect;
            var overlayRect = this._overlayRect;
            var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

            var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

            var fallback; // Go through each of the preferred positions looking for a good fit.
            // If a good fit is found, it will be applied immediately.

            var _iterator3 = _createForOfIteratorHelper(this._preferredPositions),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var pos = _step3.value;

                // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
                var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
                // overlay in this position. We use the top-left corner for calculations and later translate
                // this into an appropriate (top, left, bottom, right) style.


                var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.


                var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


                if (overlayFit.isCompletelyWithinViewport) {
                  this._isPushed = false;

                  this._applyPosition(pos, originPoint);

                  return;
                } // If the overlay has flexible dimensions, we can use this position
                // so long as there's enough space for the minimum dimensions.


                if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                  // Save positions where the overlay will fit with flexible dimensions. We will use these
                  // if none of the positions fit *without* flexible dimensions.
                  flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                  });
                  continue;
                } // If the current preferred position does not fit on the screen, remember the position
                // if it has more visible area on-screen than we've seen and move onto the next preferred
                // position.


                if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                  fallback = {
                    overlayFit: overlayFit,
                    overlayPoint: overlayPoint,
                    originPoint: originPoint,
                    position: pos,
                    overlayRect: overlayRect
                  };
                }
              } // If there are any positions where the overlay would fit with flexible dimensions, choose the
              // one that has the greatest area available modified by the position's weight

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (flexibleFits.length) {
              var bestFit = null;
              var bestScore = -1;

              var _iterator4 = _createForOfIteratorHelper(flexibleFits),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var fit = _step4.value;
                  var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                  if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              this._isPushed = false;

              this._applyPosition(bestFit.position, bestFit.origin);

              return;
            } // When none of the preferred positions fit within the viewport, take the position
            // that went off-screen the least and attempt to push it on-screen.


            if (this._canPush) {
              // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
              this._isPushed = true;

              this._applyPosition(fallback.position, fallback.originPoint);

              return;
            } // All options for getting the overlay within the viewport have been exhausted, so go with the
            // position that went off-screen the least.


            this._applyPosition(fallback.position, fallback.originPoint);
          }
        }, {
          key: "detach",
          value: function detach() {
            this._clearPanelClasses();

            this._lastPosition = null;
            this._previousPushAmount = null;

            this._resizeSubscription.unsubscribe();
          }
          /** Cleanup after the element gets destroyed. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed) {
              return;
            } // We can't use `_resetBoundingBoxStyles` here, because it resets
            // some properties to zero, rather than removing them.


            if (this._boundingBox) {
              extendStyles(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: ''
              });
            }

            if (this._pane) {
              this._resetOverlayElementStyles();
            }

            if (this._overlayRef) {
              this._overlayRef.hostElement.classList.remove(boundingBoxClass);
            }

            this.detach();

            this._positionChanges.complete();

            this._overlayRef = this._boundingBox = null;
            this._isDisposed = true;
          }
          /**
           * This re-aligns the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "reapplyLastPosition",
          value: function reapplyLastPosition() {
            if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
              this._originRect = this._getOriginRect();
              this._overlayRect = this._pane.getBoundingClientRect();
              this._viewportRect = this._getNarrowedViewportRect();
              var lastPosition = this._lastPosition || this._preferredPositions[0];

              var originPoint = this._getOriginPoint(this._originRect, lastPosition);

              this._applyPosition(lastPosition, originPoint);
            }
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._scrollables = scrollables;
            return this;
          }
          /**
           * Adds new preferred positions.
           * @param positions List of positions options for this overlay.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
            // it in order to avoid it being picked up if the consumer tries to re-apply.

            if (positions.indexOf(this._lastPosition) === -1) {
              this._lastPosition = null;
            }

            this._validatePositions();

            return this;
          }
          /**
           * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
           * @param margin Required margin between the overlay and the viewport edge in pixels.
           */

        }, {
          key: "withViewportMargin",
          value: function withViewportMargin(margin) {
            this._viewportMargin = margin;
            return this;
          }
          /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "withFlexibleDimensions",
          value: function withFlexibleDimensions() {
            var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._hasFlexibleDimensions = flexibleDimensions;
            return this;
          }
          /** Sets whether the overlay can grow after the initial open via flexible width/height. */

        }, {
          key: "withGrowAfterOpen",
          value: function withGrowAfterOpen() {
            var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._growAfterOpen = growAfterOpen;
            return this;
          }
          /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "withPush",
          value: function withPush() {
            var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._canPush = canPush;
            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition() {
            var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._positionLocked = isLocked;
            return this;
          }
          /**
           * Sets the origin, relative to which to position the overlay.
           * Using an element origin is useful for building components that need to be positioned
           * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
           * used for cases like contextual menus which open relative to the user's pointer.
           * @param origin Reference to the new origin.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._origin = origin;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the x-axis.
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withDefaultOffsetX",
          value: function withDefaultOffsetX(offset) {
            this._offsetX = offset;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the y-axis.
           * @param offset New offset in the Y axis.
           */

        }, {
          key: "withDefaultOffsetY",
          value: function withDefaultOffsetY(offset) {
            this._offsetY = offset;
            return this;
          }
          /**
           * Configures that the position strategy should set a `transform-origin` on some elements
           * inside the overlay, depending on the current position that is being applied. This is
           * useful for the cases where the origin of an animation can change depending on the
           * alignment of the overlay.
           * @param selector CSS selector that will be used to find the target
           *    elements onto which to set the transform origin.
           */

        }, {
          key: "withTransformOriginOn",
          value: function withTransformOriginOn(selector) {
            this._transformOriginSelector = selector;
            return this;
          }
          /**
           * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
           */

        }, {
          key: "_getOriginPoint",
          value: function _getOriginPoint(originRect, pos) {
            var x;

            if (pos.originX == 'center') {
              // Note: when centering we should always use the `left`
              // offset, otherwise the position will be wrong in RTL.
              x = originRect.left + originRect.width / 2;
            } else {
              var startX = this._isRtl() ? originRect.right : originRect.left;
              var endX = this._isRtl() ? originRect.left : originRect.right;
              x = pos.originX == 'start' ? startX : endX;
            }

            var y;

            if (pos.originY == 'center') {
              y = originRect.top + originRect.height / 2;
            } else {
              y = pos.originY == 'top' ? originRect.top : originRect.bottom;
            }

            return {
              x: x,
              y: y
            };
          }
          /**
           * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
           * origin point to which the overlay should be connected.
           */

        }, {
          key: "_getOverlayPoint",
          value: function _getOverlayPoint(originPoint, overlayRect, pos) {
            // Calculate the (overlayStartX, overlayStartY), the start of the
            // potential overlay position relative to the origin point.
            var overlayStartX;

            if (pos.overlayX == 'center') {
              overlayStartX = -overlayRect.width / 2;
            } else if (pos.overlayX === 'start') {
              overlayStartX = this._isRtl() ? -overlayRect.width : 0;
            } else {
              overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
            }

            var overlayStartY;

            if (pos.overlayY == 'center') {
              overlayStartY = -overlayRect.height / 2;
            } else {
              overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
            } // The (x, y) coordinates of the overlay.


            return {
              x: originPoint.x + overlayStartX,
              y: originPoint.y + overlayStartY
            };
          }
          /** Gets how well an overlay at the given point will fit within the viewport. */

        }, {
          key: "_getOverlayFit",
          value: function _getOverlayFit(point, overlay, viewport, position) {
            var x = point.x,
                y = point.y;

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


            if (offsetX) {
              x += offsetX;
            }

            if (offsetY) {
              y += offsetY;
            } // How much the overlay would overflow at this position, on each side.


            var leftOverflow = 0 - x;
            var rightOverflow = x + overlay.width - viewport.width;
            var topOverflow = 0 - y;
            var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

            var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);

            var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);

            var visibleArea = visibleWidth * visibleHeight;
            return {
              visibleArea: visibleArea,
              isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
              fitsInViewportVertically: visibleHeight === overlay.height,
              fitsInViewportHorizontally: visibleWidth == overlay.width
            };
          }
          /**
           * Whether the overlay can fit within the viewport when it may resize either its width or height.
           * @param fit How well the overlay fits in the viewport at some position.
           * @param point The (x, y) coordinates of the overlat at some position.
           * @param viewport The geometry of the viewport.
           */

        }, {
          key: "_canFitWithFlexibleDimensions",
          value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
            if (this._hasFlexibleDimensions) {
              var availableHeight = viewport.bottom - point.y;
              var availableWidth = viewport.right - point.x;
              var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
              var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
              var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
              var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
              return verticalFit && horizontalFit;
            }

            return false;
          }
          /**
           * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
           * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
           * right and bottom).
           *
           * @param start Starting point from which the overlay is pushed.
           * @param overlay Dimensions of the overlay.
           * @param scrollPosition Current viewport scroll position.
           * @returns The point at which to position the overlay after pushing. This is effectively a new
           *     originPoint.
           */

        }, {
          key: "_pushOverlayOnScreen",
          value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
            // If the position is locked and we've pushed the overlay already, reuse the previous push
            // amount, rather than pushing it again. If we were to continue pushing, the element would
            // remain in the viewport, which goes against the expectations when position locking is enabled.
            if (this._previousPushAmount && this._positionLocked) {
              return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
              };
            }

            var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
            // side, which we'll use to decide which direction to push it.

            var overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
            var overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
            var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
            var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

            var pushX = 0;
            var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
            // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
            // viewport and allow for the trailing end of the overlay to go out of bounds.

            if (overlay.width <= viewport.width) {
              pushX = overflowLeft || -overflowRight;
            } else {
              pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
            }

            if (overlay.height <= viewport.height) {
              pushY = overflowTop || -overflowBottom;
            } else {
              pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
            }

            this._previousPushAmount = {
              x: pushX,
              y: pushY
            };
            return {
              x: start.x + pushX,
              y: start.y + pushY
            };
          }
          /**
           * Applies a computed position to the overlay and emits a position change.
           * @param position The position preference
           * @param originPoint The point on the origin element where the overlay is connected.
           */

        }, {
          key: "_applyPosition",
          value: function _applyPosition(position, originPoint) {
            this._setTransformOrigin(position);

            this._setOverlayElementStyles(originPoint, position);

            this._setBoundingBoxStyles(originPoint, position);

            if (position.panelClass) {
              this._addPanelClasses(position.panelClass);
            } // Save the last connected position in case the position needs to be re-calculated.


            this._lastPosition = position; // Notify that the position has been changed along with its change properties.
            // We only emit if we've got any subscriptions, because the scroll visibility
            // calculcations can be somewhat expensive.

            if (this._positionChanges.observers.length) {
              var scrollableViewProperties = this._getScrollVisibility();

              var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

              this._positionChanges.next(changeEvent);
            }

            this._isInitialRender = false;
          }
          /** Sets the transform origin based on the configured selector and the passed-in position.  */

        }, {
          key: "_setTransformOrigin",
          value: function _setTransformOrigin(position) {
            if (!this._transformOriginSelector) {
              return;
            }

            var elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);

            var xOrigin;
            var yOrigin = position.overlayY;

            if (position.overlayX === 'center') {
              xOrigin = 'center';
            } else if (this._isRtl()) {
              xOrigin = position.overlayX === 'start' ? 'right' : 'left';
            } else {
              xOrigin = position.overlayX === 'start' ? 'left' : 'right';
            }

            for (var i = 0; i < elements.length; i++) {
              elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
            }
          }
          /**
           * Gets the position and size of the overlay's sizing container.
           *
           * This method does no measuring and applies no styles so that we can cheaply compute the
           * bounds for all positions and choose the best fit based on these results.
           */

        }, {
          key: "_calculateBoundingBoxRect",
          value: function _calculateBoundingBoxRect(origin, position) {
            var viewport = this._viewportRect;

            var isRtl = this._isRtl();

            var height, top, bottom;

            if (position.overlayY === 'top') {
              // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
              top = origin.y;
              height = viewport.height - top + this._viewportMargin;
            } else if (position.overlayY === 'bottom') {
              // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
              // the viewport margin back in, because the viewport rect is narrowed down to remove the
              // margin, whereas the `origin` position is calculated based on its `ClientRect`.
              bottom = viewport.height - origin.y + this._viewportMargin * 2;
              height = viewport.height - bottom + this._viewportMargin;
            } else {
              // If neither top nor bottom, it means that the overlay is vertically centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.bottom - origin.y` and
              // `origin.y - viewport.top`.
              var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
              var previousHeight = this._lastBoundingBoxSize.height;
              height = smallestDistanceToViewportEdge * 2;
              top = origin.y - smallestDistanceToViewportEdge;

              if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - previousHeight / 2;
              }
            } // The overlay is opening 'right-ward' (the content flows to the right).


            var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

            var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
            var width, left, right;

            if (isBoundedByLeftViewportEdge) {
              right = viewport.width - origin.x + this._viewportMargin;
              width = origin.x - this._viewportMargin;
            } else if (isBoundedByRightViewportEdge) {
              left = origin.x;
              width = viewport.right - origin.x;
            } else {
              // If neither start nor end, it means that the overlay is horizontally centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.right - origin.x` and
              // `origin.x - viewport.left`.
              var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);

              var previousWidth = this._lastBoundingBoxSize.width;
              width = _smallestDistanceToViewportEdge * 2;
              left = origin.x - _smallestDistanceToViewportEdge;

              if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - previousWidth / 2;
              }
            }

            return {
              top: top,
              left: left,
              bottom: bottom,
              right: right,
              width: width,
              height: height
            };
          }
          /**
           * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
           * origin's connection point and stetches to the bounds of the viewport.
           *
           * @param origin The point on the origin element where the overlay is connected.
           * @param position The position preference
           */

        }, {
          key: "_setBoundingBoxStyles",
          value: function _setBoundingBoxStyles(origin, position) {
            var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
            // when applying a new size.


            if (!this._isInitialRender && !this._growAfterOpen) {
              boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
              boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
            }

            var styles = {};

            if (this._hasExactPosition()) {
              styles.top = styles.left = '0';
              styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
              styles.width = styles.height = '100%';
            } else {
              var maxHeight = this._overlayRef.getConfig().maxHeight;

              var maxWidth = this._overlayRef.getConfig().maxWidth;

              styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
              styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
              styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
              styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

              if (position.overlayX === 'center') {
                styles.alignItems = 'center';
              } else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
              }

              if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
              } else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
              }

              if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
              }

              if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
              }
            }

            this._lastBoundingBoxSize = boundingBoxRect;
            extendStyles(this._boundingBox.style, styles);
          }
          /** Resets the styles for the bounding box so that a new positioning can be computed. */

        }, {
          key: "_resetBoundingBoxStyles",
          value: function _resetBoundingBoxStyles() {
            extendStyles(this._boundingBox.style, {
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }
          /** Resets the styles for the overlay pane so that a new positioning can be computed. */

        }, {
          key: "_resetOverlayElementStyles",
          value: function _resetOverlayElementStyles() {
            extendStyles(this._pane.style, {
              top: '',
              left: '',
              bottom: '',
              right: '',
              position: '',
              transform: ''
            });
          }
          /** Sets positioning styles to the overlay element. */

        }, {
          key: "_setOverlayElementStyles",
          value: function _setOverlayElementStyles(originPoint, position) {
            var styles = {};

            var hasExactPosition = this._hasExactPosition();

            var hasFlexibleDimensions = this._hasFlexibleDimensions;

            var config = this._overlayRef.getConfig();

            if (hasExactPosition) {
              var scrollPosition = this._viewportRuler.getViewportScrollPosition();

              extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
              extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
            } else {
              styles.position = 'static';
            } // Use a transform to apply the offsets. We do this because the `center` positions rely on
            // being in the normal flex flow and setting a `top` / `left` at all will completely throw
            // off the position. We also can't use margins, because they won't have an effect in some
            // cases where the element doesn't have anything to "push off of". Finally, this works
            // better both with flexible and non-flexible positioning.


            var transformString = '';

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y');

            if (offsetX) {
              transformString += "translateX(".concat(offsetX, "px) ");
            }

            if (offsetY) {
              transformString += "translateY(".concat(offsetY, "px)");
            }

            styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
            // we need these values to both be set to "100%" for the automatic flexible sizing to work.
            // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
            // Note that this doesn't apply when we have an exact position, in which case we do want to
            // apply them because they'll be cleared from the bounding box.

            if (config.maxHeight) {
              if (hasExactPosition) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
              } else if (hasFlexibleDimensions) {
                styles.maxHeight = '';
              }
            }

            if (config.maxWidth) {
              if (hasExactPosition) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
              } else if (hasFlexibleDimensions) {
                styles.maxWidth = '';
              }
            }

            extendStyles(this._pane.style, styles);
          }
          /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayY",
          value: function _getExactOverlayY(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the
            // preferred position has changed since the last `apply`.
            var styles = {
              top: '',
              bottom: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            }

            var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
            // autocomplete), mobile browsers will shift everything in order to put the input in the middle
            // of the screen and to make space for the virtual keyboard. We need to account for this offset,
            // otherwise our positioning will be thrown off.


            overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
            // above or below the origin and the direction in which the element will expand.

            if (position.overlayY === 'bottom') {
              // When using `bottom`, we adjust the y position such that it is the distance
              // from the bottom of the viewport rather than the top.
              var documentHeight = this._document.documentElement.clientHeight;
              styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
            } else {
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
            }

            return styles;
          }
          /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayX",
          value: function _getExactOverlayX(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the preferred position has
            // changed since the last `apply`.
            var styles = {
              left: '',
              right: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
            // or "after" the origin, which determines the direction in which the element will expand.
            // For the horizontal axis, the meaning of "before" and "after" change based on whether the
            // page is in RTL or LTR.


            var horizontalStyleProperty;

            if (this._isRtl()) {
              horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
            } else {
              horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
            } // When we're setting `right`, we adjust the x position such that it is the distance
            // from the right edge of the viewport rather than the left edge.


            if (horizontalStyleProperty === 'right') {
              var documentWidth = this._document.documentElement.clientWidth;
              styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
            } else {
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
            }

            return styles;
          }
          /**
           * Gets the view properties of the trigger and overlay, including whether they are clipped
           * or completely outside the view of any of the strategy's scrollables.
           */

        }, {
          key: "_getScrollVisibility",
          value: function _getScrollVisibility() {
            // Note: needs fresh rects since the position could've changed.
            var originBounds = this._getOriginRect();

            var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
            // every time, we should be able to use the scrollTop of the containers if the size of those
            // containers hasn't changed.


            var scrollContainerBounds = this._scrollables.map(function (scrollable) {
              return scrollable.getElementRef().nativeElement.getBoundingClientRect();
            });

            return {
              isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
              isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
              isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
              isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
            };
          }
          /** Subtracts the amount that an element is overflowing on an axis from its length. */

        }, {
          key: "_subtractOverflows",
          value: function _subtractOverflows(length) {
            for (var _len3 = arguments.length, overflows = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              overflows[_key3 - 1] = arguments[_key3];
            }

            return overflows.reduce(function (currentValue, currentOverflow) {
              return currentValue - Math.max(currentOverflow, 0);
            }, length);
          }
          /** Narrows the given viewport rect by the current _viewportMargin. */

        }, {
          key: "_getNarrowedViewportRect",
          value: function _getNarrowedViewportRect() {
            // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
            // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
            // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
            // and `innerHeight` that do. This is necessary, because the overlay container uses
            // 100% `width` and `height` which don't include the scrollbar either.
            var width = this._document.documentElement.clientWidth;
            var height = this._document.documentElement.clientHeight;

            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            return {
              top: scrollPosition.top + this._viewportMargin,
              left: scrollPosition.left + this._viewportMargin,
              right: scrollPosition.left + width - this._viewportMargin,
              bottom: scrollPosition.top + height - this._viewportMargin,
              width: width - 2 * this._viewportMargin,
              height: height - 2 * this._viewportMargin
            };
          }
          /** Whether the we're dealing with an RTL context */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._overlayRef.getDirection() === 'rtl';
          }
          /** Determines whether the overlay uses exact or flexible positioning. */

        }, {
          key: "_hasExactPosition",
          value: function _hasExactPosition() {
            return !this._hasFlexibleDimensions || this._isPushed;
          }
          /** Retrieves the offset of a position along the x or y axis. */

        }, {
          key: "_getOffset",
          value: function _getOffset(position, axis) {
            if (axis === 'x') {
              // We don't do something like `position['offset' + axis]` in
              // order to avoid breking minifiers that rename properties.
              return position.offsetX == null ? this._offsetX : position.offsetX;
            }

            return position.offsetY == null ? this._offsetY : position.offsetY;
          }
          /** Validates that the current position match the expected values. */

        }, {
          key: "_validatePositions",
          value: function _validatePositions() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._preferredPositions.length) {
                throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
              } // TODO(crisbeto): remove these once Angular's template type
              // checking is advanced enough to catch these cases.


              this._preferredPositions.forEach(function (pair) {
                validateHorizontalPosition('originX', pair.originX);
                validateVerticalPosition('originY', pair.originY);
                validateHorizontalPosition('overlayX', pair.overlayX);
                validateVerticalPosition('overlayY', pair.overlayY);
              });
            }
          }
          /** Adds a single CSS class or an array of classes on the overlay panel. */

        }, {
          key: "_addPanelClasses",
          value: function _addPanelClasses(cssClasses) {
            var _this58 = this;

            if (this._pane) {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
                if (cssClass !== '' && _this58._appliedPanelClasses.indexOf(cssClass) === -1) {
                  _this58._appliedPanelClasses.push(cssClass);

                  _this58._pane.classList.add(cssClass);
                }
              });
            }
          }
          /** Clears the classes that the position strategy has applied from the overlay panel. */

        }, {
          key: "_clearPanelClasses",
          value: function _clearPanelClasses() {
            var _this59 = this;

            if (this._pane) {
              this._appliedPanelClasses.forEach(function (cssClass) {
                _this59._pane.classList.remove(cssClass);
              });

              this._appliedPanelClasses = [];
            }
          }
          /** Returns the ClientRect of the current origin. */

        }, {
          key: "_getOriginRect",
          value: function _getOriginRect() {
            var origin = this._origin;

            if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
              return origin.nativeElement.getBoundingClientRect();
            } // Check for Element so SVG elements are also supported.


            if (origin instanceof Element) {
              return origin.getBoundingClientRect();
            }

            var width = origin.width || 0;
            var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

            return {
              top: origin.y,
              bottom: origin.y + height,
              left: origin.x,
              right: origin.x + width,
              height: height,
              width: width
            };
          }
        }, {
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
        }]);

        return FlexibleConnectedPositionStrategy;
      }();
      /** Shallow-extends a stylesheet object with another stylesheet object. */


      function extendStyles(destination, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
          }
        }

        return destination;
      }
      /**
       * Extracts the pixel value as a number from a value, if it's a number
       * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
       */


      function getPixelValue(input) {
        if (typeof input !== 'number' && input != null) {
          var _input$split = input.split(cssUnitPattern),
              _input$split2 = _slicedToArray(_input$split, 2),
              _value4 = _input$split2[0],
              units = _input$split2[1];

          return !units || units === 'px' ? parseFloat(_value4) : null;
        }

        return input || null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative to some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
       * @breaking-change 8.0.0
       */


      var ConnectedPositionStrategy = /*#__PURE__*/function () {
        function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
          _classCallCheck(this, ConnectedPositionStrategy);

          /** Ordered list of preferred positions, from most to least desirable. */
          this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
          // the extra logic, we create an instance of the positioning strategy that has some
          // defaults that make it behave as the old position strategy and to which we'll
          // proxy all of the API calls.

          this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
          this.withFallbackPosition(originPos, overlayPos);
          this.onPositionChange = this._positionStrategy.positionChanges;
        }
        /** Ordered list of preferred positions, from most to least desirable. */


        _createClass(ConnectedPositionStrategy, [{
          key: "attach",

          /** Attach this position strategy to an overlay. */
          value: function attach(overlayRef) {
            this._overlayRef = overlayRef;

            this._positionStrategy.attach(overlayRef);

            if (this._direction) {
              overlayRef.setDirection(this._direction);
              this._direction = null;
            }
          }
          /** Disposes all resources used by the position strategy. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._positionStrategy.dispose();
          }
          /** @docs-private */

        }, {
          key: "detach",
          value: function detach() {
            this._positionStrategy.detach();
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin fits on-screen.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            this._positionStrategy.apply();
          }
          /**
           * Re-positions the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "recalculateLastPosition",
          value: function recalculateLastPosition() {
            this._positionStrategy.reapplyLastPosition();
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._positionStrategy.withScrollableContainers(scrollables);
          }
          /**
           * Adds a new preferred fallback position.
           * @param originPos
           * @param overlayPos
           */

        }, {
          key: "withFallbackPosition",
          value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
            var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

            this._preferredPositions.push(position);

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the layout direction so the overlay's position can be adjusted to match.
           * @param dir New layout direction.
           */

        }, {
          key: "withDirection",
          value: function withDirection(dir) {
            // Since the direction might be declared before the strategy is attached,
            // we save the value in a temporary property and we'll transfer it to the
            // overlay ref on attachment.
            if (this._overlayRef) {
              this._overlayRef.setDirection(dir);
            } else {
              this._direction = dir;
            }

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the x-axis
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withOffsetX",
          value: function withOffsetX(offset) {
            this._positionStrategy.withDefaultOffsetX(offset);

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the y-axis
           * @param  offset New offset in the Y axis.
           */

        }, {
          key: "withOffsetY",
          value: function withOffsetY(offset) {
            this._positionStrategy.withDefaultOffsetY(offset);

            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition(isLocked) {
            this._positionStrategy.withLockedPosition(isLocked);

            return this;
          }
          /**
           * Overwrites the current set of positions with an array of new ones.
           * @param positions Position pairs to be set on the strategy.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions.slice();

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the origin element, relative to which to position the overlay.
           * @param origin Reference to the new origin element.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._positionStrategy.setOrigin(origin);

            return this;
          }
        }, {
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
        }]);

        return ConnectedPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Class to be added to the overlay pane wrapper. */


      var wrapperClass = 'cdk-global-overlay-wrapper';
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * explicit position relative to the browser's viewport. We use flexbox, instead of
       * transforms, in order to avoid issues with subpixel rendering which can cause the
       * element to become blurry.
       */

      var GlobalPositionStrategy = /*#__PURE__*/function () {
        function GlobalPositionStrategy() {
          _classCallCheck(this, GlobalPositionStrategy);

          this._cssPosition = 'static';
          this._topOffset = '';
          this._bottomOffset = '';
          this._leftOffset = '';
          this._rightOffset = '';
          this._alignItems = '';
          this._justifyContent = '';
          this._width = '';
          this._height = '';
        }

        _createClass(GlobalPositionStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            var config = overlayRef.getConfig();
            this._overlayRef = overlayRef;

            if (this._width && !config.width) {
              overlayRef.updateSize({
                width: this._width
              });
            }

            if (this._height && !config.height) {
              overlayRef.updateSize({
                height: this._height
              });
            }

            overlayRef.hostElement.classList.add(wrapperClass);
            this._isDisposed = false;
          }
          /**
           * Sets the top position of the overlay. Clears any previously set vertical position.
           * @param value New top offset.
           */

        }, {
          key: "top",
          value: function top() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._bottomOffset = '';
            this._topOffset = value;
            this._alignItems = 'flex-start';
            return this;
          }
          /**
           * Sets the left position of the overlay. Clears any previously set horizontal position.
           * @param value New left offset.
           */

        }, {
          key: "left",
          value: function left() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._rightOffset = '';
            this._leftOffset = value;
            this._justifyContent = 'flex-start';
            return this;
          }
          /**
           * Sets the bottom position of the overlay. Clears any previously set vertical position.
           * @param value New bottom offset.
           */

        }, {
          key: "bottom",
          value: function bottom() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._topOffset = '';
            this._bottomOffset = value;
            this._alignItems = 'flex-end';
            return this;
          }
          /**
           * Sets the right position of the overlay. Clears any previously set horizontal position.
           * @param value New right offset.
           */

        }, {
          key: "right",
          value: function right() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._leftOffset = '';
            this._rightOffset = value;
            this._justifyContent = 'flex-end';
            return this;
          }
          /**
           * Sets the overlay width and clears any previously set width.
           * @param value New width for the overlay
           * @deprecated Pass the `width` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "width",
          value: function width() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                width: value
              });
            } else {
              this._width = value;
            }

            return this;
          }
          /**
           * Sets the overlay height and clears any previously set height.
           * @param value New height for the overlay
           * @deprecated Pass the `height` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "height",
          value: function height() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                height: value
              });
            } else {
              this._height = value;
            }

            return this;
          }
          /**
           * Centers the overlay horizontally with an optional offset.
           * Clears any previously set horizontal position.
           *
           * @param offset Overlay offset from the horizontal center.
           */

        }, {
          key: "centerHorizontally",
          value: function centerHorizontally() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.left(offset);
            this._justifyContent = 'center';
            return this;
          }
          /**
           * Centers the overlay vertically with an optional offset.
           * Clears any previously set vertical position.
           *
           * @param offset Overlay offset from the vertical center.
           */

        }, {
          key: "centerVertically",
          value: function centerVertically() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.top(offset);
            this._alignItems = 'center';
            return this;
          }
          /**
           * Apply the position to the element.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // Since the overlay ref applies the strategy asynchronously, it could
            // have been disposed before it ends up being applied. If that is the
            // case, we shouldn't do anything.
            if (!this._overlayRef || !this._overlayRef.hasAttached()) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parentStyles = this._overlayRef.hostElement.style;

            var config = this._overlayRef.getConfig();

            var width = config.width,
                height = config.height,
                maxWidth = config.maxWidth,
                maxHeight = config.maxHeight;
            var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
            var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
            styles.position = this._cssPosition;
            styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
            styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
            styles.marginBottom = this._bottomOffset;
            styles.marginRight = this._rightOffset;

            if (shouldBeFlushHorizontally) {
              parentStyles.justifyContent = 'flex-start';
            } else if (this._justifyContent === 'center') {
              parentStyles.justifyContent = 'center';
            } else if (this._overlayRef.getConfig().direction === 'rtl') {
              // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
              // don't want that because our positioning is explicitly `left` and `right`, hence
              // why we do another inversion to ensure that the overlay stays in the same position.
              // TODO: reconsider this if we add `start` and `end` methods.
              if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
              } else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
              }
            } else {
              parentStyles.justifyContent = this._justifyContent;
            }

            parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
          }
          /**
           * Cleans up the DOM changes from the position strategy.
           * @docs-private
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed || !this._overlayRef) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parent = this._overlayRef.hostElement;
            var parentStyles = parent.style;
            parent.classList.remove(wrapperClass);
            parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
            this._overlayRef = null;
            this._isDisposed = true;
          }
        }]);

        return GlobalPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Builder for overlay position strategy. */


      var OverlayPositionBuilder = /*#__PURE__*/function () {
        function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, OverlayPositionBuilder);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         */


        _createClass(OverlayPositionBuilder, [{
          key: "global",
          value: function global() {
            return new GlobalPositionStrategy();
          }
          /**
           * Creates a relative position strategy.
           * @param elementRef
           * @param originPos
           * @param overlayPos
           * @deprecated Use `flexibleConnectedTo` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(elementRef, originPos, overlayPos) {
            return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
          /**
           * Creates a flexible position strategy.
           * @param origin Origin relative to which to position the overlay.
           */

        }, {
          key: "flexibleConnectedTo",
          value: function flexibleConnectedTo(origin) {
            return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
        }]);

        return OverlayPositionBuilder;
      }();

      OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
        return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
      };

      OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayPositionBuilder_Factory() {
          return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
        },
        token: OverlayPositionBuilder,
        providedIn: "root"
      });

      OverlayPositionBuilder.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: OverlayContainer
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Next overlay unique ID. */


      var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
      // which needs to be different depending on where OverlayModule is imported.

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
       */

      var Overlay = /*#__PURE__*/function () {
        function Overlay(
        /** Scrolling strategies that can be used when creating an overlay. */
        scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, // @breaking-change 8.0.0 `_location` parameter to be made required.
        _location, // @breaking-change 9.0.0 `_outsideClickDispatcher` parameter to be made required.
        _outsideClickDispatcher) {
          _classCallCheck(this, Overlay);

          this.scrollStrategies = scrollStrategies;
          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._positionBuilder = _positionBuilder;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._injector = _injector;
          this._ngZone = _ngZone;
          this._document = _document;
          this._directionality = _directionality;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
        }
        /**
         * Creates an overlay.
         * @param config Configuration applied to the overlay.
         * @returns Reference to the created overlay.
         */


        _createClass(Overlay, [{
          key: "create",
          value: function create(config) {
            var host = this._createHostElement();

            var pane = this._createPaneElement(host);

            var portalOutlet = this._createPortalOutlet(pane);

            var overlayConfig = new OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher);
          }
          /**
           * Gets a position builder that can be used, via fluent API,
           * to construct and configure a position strategy.
           * @returns An overlay position builder.
           */

        }, {
          key: "position",
          value: function position() {
            return this._positionBuilder;
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(host) {
            var pane = this._document.createElement('div');

            pane.id = "cdk-overlay-".concat(nextUniqueId++);
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
          }
          /**
           * Creates the host element that wraps around an overlay
           * and can be used for advanced positioning.
           * @returns Newly-create host element.
           */

        }, {
          key: "_createHostElement",
          value: function _createHostElement() {
            var host = this._document.createElement('div');

            this._overlayContainer.getContainerElement().appendChild(host);

            return host;
          }
          /**
           * Create a DomPortalOutlet into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal outlet.
           * @returns A portal outlet for the given DOM element.
           */

        }, {
          key: "_createPortalOutlet",
          value: function _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
              this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
            }

            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
          }
        }]);

        return Overlay;
      }();

      Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayOutsideClickDispatcher));
      };

      Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Overlay,
        factory: Overlay.ɵfac
      });

      Overlay.ctorParameters = function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: OverlayOutsideClickDispatcher
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: ScrollStrategyOptions
          }, {
            type: OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }, {
            type: OverlayPositionBuilder
          }, {
            type: OverlayKeyboardDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: OverlayOutsideClickDispatcher
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default set of positions for the overlay. Follows the behavior of a dropdown. */


      var defaultPositionList = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }];
      /** Injection token that determines the scroll handling while the connected overlay is open. */

      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
      /** @docs-private @deprecated @breaking-change 8.0.0 */

      function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
        return function (config) {
          return overlay.scrollStrategies.reposition(config);
        };
      }
      /**
       * Directive applied to an element to make it usable as an origin for an Overlay using a
       * ConnectedPositionStrategy.
       */


      var CdkOverlayOrigin = function CdkOverlayOrigin(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, CdkOverlayOrigin);

        this.elementRef = elementRef;
      };

      CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
        return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkOverlayOrigin,
        selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
        exportAs: ["cdkOverlayOrigin"]
      });

      CdkOverlayOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
            exportAs: 'cdkOverlayOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive to facilitate declarative creation of an
       * Overlay using a FlexibleConnectedPositionStrategy.
       */


      var CdkConnectedOverlay = /*#__PURE__*/function () {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
        function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
          _classCallCheck(this, CdkConnectedOverlay);

          this._overlay = _overlay;
          this._dir = _dir;
          this._hasBackdrop = false;
          this._lockPosition = false;
          this._growAfterOpen = false;
          this._flexibleDimensions = false;
          this._push = false;
          this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Margin between the overlay and the viewport edges. */

          this.viewportMargin = 0;
          /** Whether the overlay is open. */

          this.open = false;
          /** Event emitted when the backdrop is clicked. */

          this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the position has changed. */

          this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been attached. */

          this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been detached. */

          this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emits when there are keyboard events that are targeted at the overlay. */

          this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emits when there are mouse outside click events that are targeted at the overlay. */

          this.overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
          this._scrollStrategyFactory = scrollStrategyFactory;
          this.scrollStrategy = this._scrollStrategyFactory();
        }
        /** The offset in pixels for the overlay connection point on the x-axis */


        _createClass(CdkConnectedOverlay, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._attachSubscription.unsubscribe();

            this._detachSubscription.unsubscribe();

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();

            if (this._overlayRef) {
              this._overlayRef.dispose();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._position) {
              this._updatePositionStrategy(this._position);

              this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight
              });

              if (changes['origin'] && this.open) {
                this._position.apply();
              }
            }

            if (changes['open']) {
              this.open ? this._attachOverlay() : this._detachOverlay();
            }
          }
          /** Creates an overlay */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this60 = this;

            if (!this.positions || !this.positions.length) {
              this.positions = defaultPositionList;
            }

            var overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());

            this._attachSubscription = overlayRef.attachments().subscribe(function () {
              return _this60.attach.emit();
            });
            this._detachSubscription = overlayRef.detachments().subscribe(function () {
              return _this60.detach.emit();
            });
            overlayRef.keydownEvents().subscribe(function (event) {
              _this60.overlayKeydown.next(event);

              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                event.preventDefault();

                _this60._detachOverlay();
              }
            });

            this._overlayRef.outsidePointerEvents().subscribe(function (event) {
              _this60.overlayOutsideClick.next(event);
            });
          }
          /** Builds the overlay config based on the directive's inputs */

        }, {
          key: "_buildConfig",
          value: function _buildConfig() {
            var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();

            var overlayConfig = new OverlayConfig({
              direction: this._dir,
              positionStrategy: positionStrategy,
              scrollStrategy: this.scrollStrategy,
              hasBackdrop: this.hasBackdrop
            });

            if (this.width || this.width === 0) {
              overlayConfig.width = this.width;
            }

            if (this.height || this.height === 0) {
              overlayConfig.height = this.height;
            }

            if (this.minWidth || this.minWidth === 0) {
              overlayConfig.minWidth = this.minWidth;
            }

            if (this.minHeight || this.minHeight === 0) {
              overlayConfig.minHeight = this.minHeight;
            }

            if (this.backdropClass) {
              overlayConfig.backdropClass = this.backdropClass;
            }

            if (this.panelClass) {
              overlayConfig.panelClass = this.panelClass;
            }

            return overlayConfig;
          }
          /** Updates the state of a position strategy, based on the values of the directive inputs. */

        }, {
          key: "_updatePositionStrategy",
          value: function _updatePositionStrategy(positionStrategy) {
            var _this61 = this;

            var positions = this.positions.map(function (currentPosition) {
              return {
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || _this61.offsetX,
                offsetY: currentPosition.offsetY || _this61.offsetY,
                panelClass: currentPosition.panelClass || undefined
              };
            });
            return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
          }
          /** Returns the position strategy of the overlay to be set on the overlay config */

        }, {
          key: "_createPositionStrategy",
          value: function _createPositionStrategy() {
            var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

            this._updatePositionStrategy(strategy);

            return strategy;
          }
          /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this62 = this;

            if (!this._overlayRef) {
              this._createOverlay();
            } else {
              // Update the overlay size, in case the directive's inputs have changed
              this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }

            if (!this._overlayRef.hasAttached()) {
              this._overlayRef.attach(this._templatePortal);
            }

            if (this.hasBackdrop) {
              this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this62.backdropClick.emit(event);
              });
            } else {
              this._backdropSubscription.unsubscribe();
            }

            this._positionSubscription.unsubscribe(); // Only subscribe to `positionChanges` if requested, because putting
            // together all the information for it can be expensive.


            if (this.positionChange.observers.length > 0) {
              this._positionSubscription = this._position.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(function () {
                return _this62.positionChange.observers.length > 0;
              })).subscribe(function (position) {
                _this62.positionChange.emit(position);

                if (_this62.positionChange.observers.length === 0) {
                  _this62._positionSubscription.unsubscribe();
                }
              });
            }
          }
          /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_detachOverlay",
          value: function _detachOverlay() {
            if (this._overlayRef) {
              this._overlayRef.detach();
            }

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();
          }
        }, {
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          },
          set: function set(offsetX) {
            this._offsetX = offsetX;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** The offset in pixels for the overlay connection point on the y-axis */

        }, {
          key: "offsetY",
          get: function get() {
            return this._offsetY;
          },
          set: function set(offsetY) {
            this._offsetY = offsetY;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** Whether or not the overlay should attach a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether or not the overlay should be locked when scrolling. */

        }, {
          key: "lockPosition",
          get: function get() {
            return this._lockPosition;
          },
          set: function set(value) {
            this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "flexibleDimensions",
          get: function get() {
            return this._flexibleDimensions;
          },
          set: function set(value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */

        }, {
          key: "growAfterOpen",
          get: function get() {
            return this._growAfterOpen;
          },
          set: function set(value) {
            this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "push",
          get: function get() {
            return this._push;
          },
          set: function set(value) {
            this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The associated overlay reference. */

        }, {
          key: "overlayRef",
          get: function get() {
            return this._overlayRef;
          }
          /** The element's layout direction. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir ? this._dir.value : 'ltr';
          }
        }]);

        return CdkConnectedOverlay;
      }();

      CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
        return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkConnectedOverlay,
        selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
        inputs: {
          viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
          open: ["cdkConnectedOverlayOpen", "open"],
          scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
          offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
          offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
          hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
          lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
          flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
          growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
          push: ["cdkConnectedOverlayPush", "push"],
          positions: ["cdkConnectedOverlayPositions", "positions"],
          origin: ["cdkConnectedOverlayOrigin", "origin"],
          positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
          width: ["cdkConnectedOverlayWidth", "width"],
          height: ["cdkConnectedOverlayHeight", "height"],
          minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
          minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
          backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
          panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
          transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
        },
        outputs: {
          backdropClick: "backdropClick",
          positionChange: "positionChange",
          attach: "attach",
          detach: "detach",
          overlayKeydown: "overlayKeydown",
          overlayOutsideClick: "overlayOutsideClick"
        },
        exportAs: ["cdkConnectedOverlay"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      CdkConnectedOverlay.ctorParameters = function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      CdkConnectedOverlay.propDecorators = {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayOutsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
            exportAs: 'cdkConnectedOverlay'
          }]
        }], function () {
          return [{
            type: Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          viewportMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayViewportMargin']
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOpen']
          }],
          backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          attach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          detach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          overlayOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayScrollStrategy']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetX']
          }],
          offsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetY']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHasBackdrop']
          }],
          lockPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayLockPosition']
          }],
          flexibleDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayFlexibleDimensions']
          }],
          growAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayGrowAfterOpen']
          }],
          push: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPush']
          }],
          positions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositions']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOrigin']
          }],
          positionStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositionStrategy']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayWidth']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHeight']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinWidth']
          }],
          minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinHeight']
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayBackdropClass']
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPanelClass']
          }],
          transformOriginSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayTransformOriginOn']
          }]
        });
      })();
      /** @docs-private */


      function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
        provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
        deps: [Overlay],
        useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var OverlayModule = function OverlayModule() {
        _classCallCheck(this, OverlayModule);
      };

      OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OverlayModule
      });
      OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OverlayModule_Factory(t) {
          return new (t || OverlayModule)();
        },
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
          declarations: function declarations() {
            return [CdkConnectedOverlay, CdkOverlayOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          },
          exports: function exports() {
            return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
            providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @deprecated Use `OverlayModule` instead.
       * @breaking-change 8.0.0
       * @docs-private
       */


      var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Alternative to OverlayContainer that supports correct displaying of overlay elements in
       * Fullscreen mode
       * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
       *
       * Should be provided in the root component.
       */

      var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
        _inherits(FullscreenOverlayContainer, _OverlayContainer);

        var _super26 = _createSuper(FullscreenOverlayContainer);

        function FullscreenOverlayContainer(_document,
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        platform) {
          _classCallCheck(this, FullscreenOverlayContainer);

          return _super26.call(this, _document, platform);
        }

        _createClass(FullscreenOverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

            if (this._fullScreenEventName && this._fullScreenListener) {
              this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
          }
        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var _this63 = this;

            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

            this._adjustParentForFullscreenChange();

            this._addFullscreenChangeListener(function () {
              return _this63._adjustParentForFullscreenChange();
            });
          }
        }, {
          key: "_adjustParentForFullscreenChange",
          value: function _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
              return;
            }

            var fullscreenElement = this.getFullscreenElement();
            var parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
          }
        }, {
          key: "_addFullscreenChangeListener",
          value: function _addFullscreenChangeListener(fn) {
            var eventName = this._getEventName();

            if (eventName) {
              if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
              }

              this._document.addEventListener(eventName, fn);

              this._fullScreenListener = fn;
            }
          }
        }, {
          key: "_getEventName",
          value: function _getEventName() {
            if (!this._fullScreenEventName) {
              var _document = this._document;

              if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
              } else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
              } else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
              } else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
              }
            }

            return this._fullScreenEventName;
          }
          /**
           * When the page is put into fullscreen mode, a specific element is specified.
           * Only that element and its children are visible when in fullscreen mode.
           */

        }, {
          key: "getFullscreenElement",
          value: function getFullscreenElement() {
            var _document = this._document;
            return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
          }
        }]);

        return FullscreenOverlayContainer;
      }(OverlayContainer);

      FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
        return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FullscreenOverlayContainer_Factory() {
          return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: FullscreenOverlayContainer,
        providedIn: "root"
      });

      FullscreenOverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=overlay.js.map

      /***/

    },

    /***/
    "vxfF":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
      \**********************************************************************/

    /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

    /***/
    function vxfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
        return CdkFixedSizeVirtualScroll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return CdkScrollable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
        return CdkScrollableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
        return CdkVirtualForOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
        return CdkVirtualScrollViewport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
        return DEFAULT_RESIZE_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
        return DEFAULT_SCROLL_TIME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
        return FixedSizeVirtualScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return ScrollDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
        return ScrollingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
        return VIRTUAL_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return ViewportRuler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
        return _fixedSizeVirtualScrollStrategyFactory;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the virtual scrolling strategy. */


      var _c0 = ["contentWrapper"];
      var _c1 = ["*"];
      var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Virtual scrolling strategy for lists with items of known fixed size. */

      var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param itemSize The size of the items in the virtually scrolling list.
         * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */
        function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
          _classCallCheck(this, FixedSizeVirtualScrollStrategy);

          this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          /** The attached viewport. */

          this._viewport = null;
          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;
        }
        /**
         * Attaches this scroll strategy to a viewport.
         * @param viewport The viewport to attach this strategy to.
         */


        _createClass(FixedSizeVirtualScrollStrategy, [{
          key: "attach",
          value: function attach(viewport) {
            this._viewport = viewport;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** Detaches this scroll strategy from the currently attached viewport. */

        }, {
          key: "detach",
          value: function detach() {
            this._scrolledIndexChange.complete();

            this._viewport = null;
          }
          /**
           * Update the item size and buffer size.
           * @param itemSize The size of the items in the virtually scrolling list.
           * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
           * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
           */

        }, {
          key: "updateItemAndBufferSize",
          value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
            if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
            }

            this._itemSize = itemSize;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentScrolled",
          value: function onContentScrolled() {
            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onDataLengthChanged",
          value: function onDataLengthChanged() {
            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentRendered",
          value: function onContentRendered() {}
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onRenderedOffsetChanged",
          value: function onRenderedOffsetChanged() {}
          /**
           * Scroll to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index, behavior) {
            if (this._viewport) {
              this._viewport.scrollToOffset(index * this._itemSize, behavior);
            }
          }
          /** Update the viewport's total content size. */

        }, {
          key: "_updateTotalContentSize",
          value: function _updateTotalContentSize() {
            if (!this._viewport) {
              return;
            }

            this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
          }
          /** Update the viewport's rendered range. */

        }, {
          key: "_updateRenderedRange",
          value: function _updateRenderedRange() {
            if (!this._viewport) {
              return;
            }

            var renderedRange = this._viewport.getRenderedRange();

            var newRange = {
              start: renderedRange.start,
              end: renderedRange.end
            };

            var viewportSize = this._viewport.getViewportSize();

            var dataLength = this._viewport.getDataLength();

            var scrollOffset = this._viewport.measureScrollOffset();

            var firstVisibleIndex = scrollOffset / this._itemSize; // If user scrolls to the bottom of the list and data changes to a smaller list

            if (newRange.end > dataLength) {
              // We have to recalculate the first visible index based on new data length and viewport size.
              var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
              var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
              // Current range must also be adjusted to cover the new position (bottom of new list).

              if (firstVisibleIndex != newVisibleIndex) {
                firstVisibleIndex = newVisibleIndex;
                scrollOffset = newVisibleIndex * this._itemSize;
                newRange.start = Math.floor(firstVisibleIndex);
              }

              newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
            }

            var startBuffer = scrollOffset - newRange.start * this._itemSize;

            if (startBuffer < this._minBufferPx && newRange.start != 0) {
              var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
              newRange.start = Math.max(0, newRange.start - expandStart);
              newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
            } else {
              var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

              if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

                if (expandEnd > 0) {
                  newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                  newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
              }
            }

            this._viewport.setRenderedRange(newRange);

            this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

            this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
          }
        }]);

        return FixedSizeVirtualScrollStrategy;
      }();
      /**
       * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
       * `FixedSizeVirtualScrollStrategy` from the given directive.
       * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
       *     `FixedSizeVirtualScrollStrategy` from.
       */


      function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
        return fixedSizeDir._scrollStrategy;
      }
      /** A virtual scroll strategy that supports fixed-size items. */


      var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
        function CdkFixedSizeVirtualScroll() {
          _classCallCheck(this, CdkFixedSizeVirtualScroll);

          this._itemSize = 20;
          this._minBufferPx = 100;
          this._maxBufferPx = 200;
          /** The scroll strategy used by this directive. */

          this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /** The size of the items in the list (in pixels). */


        _createClass(CdkFixedSizeVirtualScroll, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(value) {
            this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           */

        }, {
          key: "minBufferPx",
          get: function get() {
            return this._minBufferPx;
          },
          set: function set(value) {
            this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           */

        }, {
          key: "maxBufferPx",
          get: function get() {
            return this._maxBufferPx;
          },
          set: function set(value) {
            this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
          }
        }]);

        return CdkFixedSizeVirtualScroll;
      }();

      CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
        return new (t || CdkFixedSizeVirtualScroll)();
      };

      CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkFixedSizeVirtualScroll,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return CdkFixedSizeVirtualScroll;
          })]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport[itemSize]',
            providers: [{
              provide: VIRTUAL_SCROLL_STRATEGY,
              useFactory: _fixedSizeVirtualScrollStrategyFactory,
              deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return CdkFixedSizeVirtualScroll;
              })]
            }]
          }]
        }], function () {
          return [];
        }, {
          itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the scrolling events by default. */


      var DEFAULT_SCROLL_TIME = 20;
      /**
       * Service contained all registered Scrollable references and emits an event when any one of the
       * Scrollable references emit a scrolled event.
       */

      var ScrollDispatcher = /*#__PURE__*/function () {
        function ScrollDispatcher(_ngZone, _platform,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, ScrollDispatcher);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** Subject for notifying that a registered scrollable reference element has been scrolled. */

          this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Keeps track of the global `scroll` and `resize` subscriptions. */

          this._globalSubscription = null;
          /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

          this._scrolledCount = 0;
          /**
           * Map of all the scrollable references that are registered with the service and their
           * scroll event subscriptions.
           */

          this.scrollContainers = new Map();
          this._document = document;
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param scrollable Scrollable instance to be registered.
         */


        _createClass(ScrollDispatcher, [{
          key: "register",
          value: function register(scrollable) {
            var _this64 = this;

            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
                return _this64._scrolled.next(scrollable);
              }));
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param scrollable Scrollable instance to be deregistered.
           */

        }, {
          key: "deregister",
          value: function deregister(scrollable) {
            var scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers["delete"](scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           */

        }, {
          key: "scrolled",
          value: function scrolled() {
            var _this65 = this;

            var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

            if (!this._platform.isBrowser) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              if (!_this65._globalSubscription) {
                _this65._addGlobalListener();
              } // In the case of a 0ms delay, use an observable without auditTime
              // since it does add a perceptible delay in processing overhead.


              var subscription = auditTimeInMs > 0 ? _this65._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this65._scrolled.subscribe(observer);
              _this65._scrolledCount++;
              return function () {
                subscription.unsubscribe();
                _this65._scrolledCount--;

                if (!_this65._scrolledCount) {
                  _this65._removeGlobalListener();
                }
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this66 = this;

            this._removeGlobalListener();

            this.scrollContainers.forEach(function (_, container) {
              return _this66.deregister(container);
            });

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param elementRef Element whose ancestors to listen for.
           * @param auditTimeInMs Time to throttle the scroll events.
           */

        }, {
          key: "ancestorScrolled",
          value: function ancestorScrolled(elementRef, auditTimeInMs) {
            var ancestors = this.getAncestorScrollContainers(elementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
              return !target || ancestors.indexOf(target) > -1;
            }));
          }
          /** Returns all registered Scrollables that contain the provided element. */

        }, {
          key: "getAncestorScrollContainers",
          value: function getAncestorScrollContainers(elementRef) {
            var _this67 = this;

            var scrollingContainers = [];
            this.scrollContainers.forEach(function (_subscription, scrollable) {
              if (_this67._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Returns true if the element is contained within the provided Scrollable. */

        }, {
          key: "_scrollableContainsElement",
          value: function _scrollableContainsElement(scrollable, elementRef) {
            var element = elementRef.nativeElement;
            var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while (element = element.parentElement);

            return false;
          }
          /** Sets up the global scroll listeners. */

        }, {
          key: "_addGlobalListener",
          value: function _addGlobalListener() {
            var _this68 = this;

            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
              var window = _this68._getWindow();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () {
                return _this68._scrolled.next();
              });
            });
          }
          /** Cleans up the global scroll listener. */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }]);

        return ScrollDispatcher;
      }();

      ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
        return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollDispatcher_Factory() {
          return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ScrollDispatcher,
        providedIn: "root"
      });

      ScrollDispatcher.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Sends an event when the directive's element is scrolled. Registers itself with the
       * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
       * can be listened to through the service.
       */


      var CdkScrollable = /*#__PURE__*/function () {
        function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
          var _this69 = this;

          _classCallCheck(this, CdkScrollable);

          this.elementRef = elementRef;
          this.scrollDispatcher = scrollDispatcher;
          this.ngZone = ngZone;
          this.dir = dir;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this69.ngZone.runOutsideAngular(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this69.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this69._destroyed)).subscribe(observer);
            });
          });
        }

        _createClass(CdkScrollable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollDispatcher.register(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Returns observable that emits when a scroll event is fired on the host element. */

        }, {
          key: "elementScrolled",
          value: function elementScrolled() {
            return this._elementScrolled;
          }
          /** Gets the ElementRef for the viewport. */

        }, {
          key: "getElementRef",
          value: function getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param options specified the offsets to scroll to.
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(options) {
            var el = this.elementRef.nativeElement;
            var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

            if (options.left == null) {
              options.left = isRtl ? options.end : options.start;
            }

            if (options.right == null) {
              options.right = isRtl ? options.start : options.end;
            } // Rewrite the bottom offset as a top offset.


            if (options.bottom != null) {
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.


            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
            /* NORMAL */
            ) {
                if (options.left != null) {
                  options.right = el.scrollWidth - el.clientWidth - options.left;
                }

                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
                /* INVERTED */
                ) {
                    options.left = options.right;
                  } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
                /* NEGATED */
                ) {
                    options.left = options.right ? -options.right : options.right;
                  }
              } else {
              if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }
        }, {
          key: "_applyScrollToOptions",
          value: function _applyScrollToOptions(options) {
            var el = this.elementRef.nativeElement;

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param from The edge to measure from.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            var LEFT = 'left';
            var RIGHT = 'right';
            var el = this.elementRef.nativeElement;

            if (from == 'top') {
              return el.scrollTop;
            }

            if (from == 'bottom') {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.


            var isRtl = this.dir && this.dir.value == 'rtl';

            if (from == 'start') {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == 'end') {
              from = isRtl ? LEFT : RIGHT;
            }

            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
            /* INVERTED */
            ) {
                // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollWidth - el.clientWidth - el.scrollLeft;
                } else {
                  return el.scrollLeft;
                }
              } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
            /* NEGATED */
            ) {
                // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                  return el.scrollLeft + el.scrollWidth - el.clientWidth;
                } else {
                  return -el.scrollLeft;
                }
              } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }]);

        return CdkScrollable;
      }();

      CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
        return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
      };

      CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkScrollable,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
      });

      CdkScrollable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-scrollable], [cdkScrollable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the resize events by default. */


      var DEFAULT_RESIZE_TIME = 20;
      /**
       * Simple utility for getting the bounds of the browser viewport.
       * @docs-private
       */

      var ViewportRuler = /*#__PURE__*/function () {
        function ViewportRuler(_platform, ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          var _this70 = this;

          _classCallCheck(this, ViewportRuler);

          this._platform = _platform;
          /** Stream of viewport change events. */

          this._change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Event listener that will be used to handle the viewport change events. */

          this._changeListener = function (event) {
            _this70._change.next(event);
          };

          this._document = document;
          ngZone.runOutsideAngular(function () {
            if (_platform.isBrowser) {
              var _window = _this70._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
              // `fromEvent` so that we can ensure that they're bound outside of the NgZone.


              _window.addEventListener('resize', _this70._changeListener);

              _window.addEventListener('orientationchange', _this70._changeListener);
            } // We don't need to keep track of the subscription,
            // because we complete the `change` stream on destroy.


            _this70.change().subscribe(function () {
              return _this70._updateViewportSize();
            });
          });
        }

        _createClass(ViewportRuler, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._platform.isBrowser) {
              var _window2 = this._getWindow();

              _window2.removeEventListener('resize', this._changeListener);

              _window2.removeEventListener('orientationchange', this._changeListener);
            }

            this._change.complete();
          }
          /** Returns the viewport's width and height. */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }

            var output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize = null;
            }

            return output;
          }
          /** Gets a ClientRect for the viewport's bounds. */

        }, {
          key: "getViewportRect",
          value: function getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            var scrollPosition = this.getViewportScrollPosition();

            var _this$getViewportSize = this.getViewportSize(),
                width = _this$getViewportSize.width,
                height = _this$getViewportSize.height;

            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height: height,
              width: width
            };
          }
          /** Gets the (top, left) scroll position of the viewport. */

        }, {
          key: "getViewportScrollPosition",
          value: function getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.


            var document = this._getDocument();

            var window = this._getWindow();

            var documentElement = document.documentElement;
            var documentRect = documentElement.getBoundingClientRect();
            var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
            var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
            return {
              top: top,
              left: left
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * @param throttleTime Time in milliseconds to throttle the stream.
           */

        }, {
          key: "change",
          value: function change() {
            var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /** Updates the cached viewport size. */

        }, {
          key: "_updateViewportSize",
          value: function _updateViewportSize() {
            var window = this._getWindow();

            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            };
          }
        }]);

        return ViewportRuler;
      }();

      ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
        return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ViewportRuler_Factory() {
          return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
        },
        token: ViewportRuler,
        providedIn: "root"
      });

      ViewportRuler.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Checks if the given ranges are equal. */


      function rangesEqual(r1, r2) {
        return r1.start == r2.start && r1.end == r2.end;
      }
      /**
       * Scheduler to be used for scroll events. Needs to fall back to
       * something that doesn't rely on requestAnimationFrame on environments
       * that don't support it (e.g. server-side rendering).
       */


      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
      /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

      var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
        _inherits(CdkVirtualScrollViewport, _CdkScrollable);

        var _super27 = _createSuper(CdkVirtualScrollViewport);

        function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
        /**
         * @deprecated `viewportRuler` parameter to become required.
         * @breaking-change 11.0.0
         */
        viewportRuler) {
          var _this71;

          _classCallCheck(this, CdkVirtualScrollViewport);

          _this71 = _super27.call(this, elementRef, scrollDispatcher, ngZone, dir);
          _this71.elementRef = elementRef;
          _this71._changeDetectorRef = _changeDetectorRef;
          _this71._scrollStrategy = _scrollStrategy;
          /** Emits when the viewport is detached from a CdkVirtualForOf. */

          _this71._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Emits when the rendered range changes. */

          _this71._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this71._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
          // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
          // depending on how the strategy calculates the scrolled index, it may come at a cost to
          // performance.

          /** Emits when the index of the first element visible in the viewport changes. */

          _this71.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            return _this71._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
              return Promise.resolve().then(function () {
                return _this71.ngZone.run(function () {
                  return observer.next(index);
                });
              });
            });
          });
          /** A stream that emits whenever the rendered range changes. */

          _this71.renderedRangeStream = _this71._renderedRangeSubject;
          /**
           * The total size of all content (in pixels), including content that is not currently rendered.
           */

          _this71._totalContentSize = 0;
          /** A string representing the `style.width` property value to be used for the spacer element. */

          _this71._totalContentWidth = '';
          /** A string representing the `style.height` property value to be used for the spacer element. */

          _this71._totalContentHeight = '';
          /** The currently rendered range of indices. */

          _this71._renderedRange = {
            start: 0,
            end: 0
          };
          /** The length of the data bound to this viewport (in number of items). */

          _this71._dataLength = 0;
          /** The size of the viewport (in pixels). */

          _this71._viewportSize = 0;
          /** The last rendered content offset that was set. */

          _this71._renderedContentOffset = 0;
          /**
           * Whether the last rendered content offset was to the end of the content (and therefore needs to
           * be rewritten as an offset to the start of the content).
           */

          _this71._renderedContentOffsetNeedsRewrite = false;
          /** Whether there is a pending change detection cycle. */

          _this71._isChangeDetectionPending = false;
          /** A list of functions to run after the next change detection cycle. */

          _this71._runAfterChangeDetection = [];
          /** Subscription to changes in the viewport size. */

          _this71._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

          if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
          } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


          if (viewportRuler) {
            _this71._viewportChanges = viewportRuler.change().subscribe(function () {
              _this71.checkViewportSize();
            });
          }

          return _this71;
        }
        /** The direction the viewport scrolls. */


        _createClass(CdkVirtualScrollViewport, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this72 = this;

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.


            this.ngZone.runOutsideAngular(function () {
              return Promise.resolve().then(function () {
                _this72._measureViewportSize();

                _this72._scrollStrategy.attach(_this72);

                _this72.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(function () {
                  return _this72._scrollStrategy.onContentScrolled();
                });

                _this72._markChangeDetectionNeeded();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects


            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            this._viewportChanges.unsubscribe();

            _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
          }
          /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */

        }, {
          key: "attach",
          value: function attach(forOf) {
            var _this73 = this;

            if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('CdkVirtualScrollViewport is already attached.');
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.


            this.ngZone.runOutsideAngular(function () {
              _this73._forOf = forOf;

              _this73._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this73._detachedSubject)).subscribe(function (data) {
                var newLength = data.length;

                if (newLength !== _this73._dataLength) {
                  _this73._dataLength = newLength;

                  _this73._scrollStrategy.onDataLengthChanged();
                }

                _this73._doChangeDetection();
              });
            });
          }
          /** Detaches the current `CdkVirtualForOf`. */

        }, {
          key: "detach",
          value: function detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /** Gets the length of the data bound to this viewport (in number of items). */

        }, {
          key: "getDataLength",
          value: function getDataLength() {
            return this._dataLength;
          }
          /** Gets the size of the viewport (in pixels). */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /** Get the current rendered range of items. */

        }, {
          key: "getRenderedRange",
          value: function getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           */

        }, {
          key: "setTotalContentSize",
          value: function setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /** Sets the currently rendered range of indices. */

        }, {
          key: "setRenderedRange",
          value: function setRenderedRange(range) {
            var _this74 = this;

            if (!rangesEqual(this._renderedRange, range)) {
              this._renderedRangeSubject.next(this._renderedRange = range);

              this._markChangeDetectionNeeded(function () {
                return _this74._scrollStrategy.onContentRendered();
              });
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           */

        }, {
          key: "getOffsetToRenderedContentStart",
          value: function getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           */

        }, {
          key: "setRenderedContentOffset",
          value: function setRenderedContentOffset(offset) {
            var _this75 = this;

            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            var isRtl = this.dir && this.dir.value == 'rtl';
            var isHorizontal = this.orientation == 'horizontal';
            var axis = isHorizontal ? 'X' : 'Y';
            var axisDirection = isHorizontal && isRtl ? -1 : 1;
            var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
            this._renderedContentOffset = offset;

            if (to === 'to-end') {
              transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(function () {
                if (_this75._renderedContentOffsetNeedsRewrite) {
                  _this75._renderedContentOffset -= _this75.measureRenderedContentSize();
                  _this75._renderedContentOffsetNeedsRewrite = false;

                  _this75.setRenderedContentOffset(_this75._renderedContentOffset);
                } else {
                  _this75._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param offset The offset to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
            var options = {
              behavior: behavior
            };

            if (this.orientation === 'horizontal') {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
          }
          /** Measure the combined size of all of the rendered items. */

        }, {
          key: "measureRenderedContentSize",
          value: function measureRenderedContentSize() {
            var contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /** Update the viewport dimensions and re-render. */

        }, {
          key: "checkViewportSize",
          value: function checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /** Measure the viewport size. */

        }, {
          key: "_measureViewportSize",
          value: function _measureViewportSize() {
            var viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
          }
          /** Queue up change detection to run. */

        }, {
          key: "_markChangeDetectionNeeded",
          value: function _markChangeDetectionNeeded(runAfter) {
            var _this76 = this;

            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.


            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(function () {
                return Promise.resolve().then(function () {
                  _this76._doChangeDetection();
                });
              });
            }
          }
          /** Run change detection. */

        }, {
          key: "_doChangeDetection",
          value: function _doChangeDetection() {
            var _this77 = this;

            this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(function () {
              return _this77._changeDetectorRef.markForCheck();
            });
            var runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            var _iterator5 = _createForOfIteratorHelper(runAfterChangeDetection),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var fn = _step5.value;
                fn();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          /** Calculates the `style.width` and `style.height` for the spacer element. */

        }, {
          key: "_calculateSpacerSize",
          value: function _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
            this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
          }
        }, {
          key: "orientation",
          get: function get() {
            return this._orientation;
          },
          set: function set(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
        }]);

        return CdkVirtualScrollViewport;
      }(CdkScrollable);

      CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
        return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler));
      };

      CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CdkVirtualScrollViewport,
        selectors: [["cdk-virtual-scroll-viewport"]],
        viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
          }
        },
        hostAttrs: [1, "cdk-virtual-scroll-viewport"],
        hostVars: 4,
        hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
          }
        },
        inputs: {
          orientation: "orientation"
        },
        outputs: {
          scrolledIndexChange: "scrolledIndexChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: CdkScrollable,
          useExisting: CdkVirtualScrollViewport
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 4,
        consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
        template: function CdkVirtualScrollViewport_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
          }
        },
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      CdkVirtualScrollViewport.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler
        }];
      };

      CdkVirtualScrollViewport.propDecorators = {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'cdk-virtual-scroll-viewport',
            template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
            host: {
              'class': 'cdk-virtual-scroll-viewport',
              '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
              '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: CdkScrollable,
              useExisting: CdkVirtualScrollViewport
            }],
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [VIRTUAL_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: ScrollDispatcher
          }, {
            type: ViewportRuler
          }];
        }, {
          scrolledIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contentWrapper', {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Helper to extract the offset of a DOM Node in a certain direction. */


      function getOffset(orientation, direction, node) {
        var el = node;

        if (!el.getBoundingClientRect) {
          return 0;
        }

        var rect = el.getBoundingClientRect();

        if (orientation === 'horizontal') {
          return direction === 'start' ? rect.left : rect.right;
        }

        return direction === 'start' ? rect.top : rect.bottom;
      }
      /**
       * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
       * container.
       */


      var CdkVirtualForOf = /*#__PURE__*/function () {
        function CdkVirtualForOf(
        /** The view container to add items to. */
        _viewContainerRef,
        /** The template to use when stamping out new items. */
        _template,
        /** The set of available differs. */
        _differs,
        /** The strategy used to render items in the virtual scroll viewport. */
        _viewRepeater,
        /** The virtual scrolling viewport that these items are being rendered in. */
        _viewport, ngZone) {
          var _this78 = this;

          _classCallCheck(this, CdkVirtualForOf);

          this._viewContainerRef = _viewContainerRef;
          this._template = _template;
          this._differs = _differs;
          this._viewRepeater = _viewRepeater;
          this._viewport = _viewport;
          /** Emits when the rendered view of the data changes. */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Subject that emits when a new DataSource instance is given. */

          this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Emits whenever the data in the current DataSource changes. */

          this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Bundle up the previous and current data sources so we can work with both.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
          // new one, passing back a stream of data changes which we run through `switchMap` to give
          // us a data stream that emits the latest data from whatever the current `DataSource` is.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                prev = _ref5[0],
                cur = _ref5[1];

            return _this78._changeDataSource(prev, cur);
          }), // Replay the last emitted data when someone subscribes.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
          /** The differ used to calculate changes to the data. */

          this._differ = null;
          /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

          this._needsUpdate = false;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.dataStream.subscribe(function (data) {
            _this78._data = data;

            _this78._onRenderedDataChange();
          });

          this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this78._renderedRange = range;
            ngZone.run(function () {
              return _this78.viewChange.next(_this78._renderedRange);
            });

            _this78._onRenderedDataChange();
          });

          this._viewport.attach(this);
        }
        /** The DataSource to display. */


        _createClass(CdkVirtualForOf, [{
          key: "measureRangeSize",

          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           */
          value: function measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Error: attempted to measure an item that isn't rendered.");
            } // The index into the list of rendered views for the first item in the range.


            var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            var rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
            // the top of the first node from the bottom of the last one.

            var firstNode;
            var lastNode; // Find the first node by starting from the beginning and going forwards.

            for (var i = 0; i < rangeLen; i++) {
              var view = this._viewContainerRef.get(i + renderedStartIndex);

              if (view && view.rootNodes.length) {
                firstNode = lastNode = view.rootNodes[0];
                break;
              }
            } // Find the last node by starting from the end and going backwards.


            for (var _i3 = rangeLen - 1; _i3 > -1; _i3--) {
              var _view = this._viewContainerRef.get(_i3 + renderedStartIndex);

              if (_view && _view.rootNodes.length) {
                lastNode = _view.rootNodes[_view.rootNodes.length - 1];
                break;
              }
            }

            return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).
              var changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next(undefined);

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            this._viewRepeater.detach();
          }
          /** React to scroll state changes in the viewport. */

        }, {
          key: "_onRenderedDataChange",
          value: function _onRenderedDataChange() {
            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

            if (!this._differ) {
              this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
            }

            this._needsUpdate = true;
          }
          /** Swap out one `DataSource` for another. */

        }, {
          key: "_changeDataSource",
          value: function _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }
          /** Update the `CdkVirtualForOfContext` for all views. */

        }, {
          key: "_updateContext",
          value: function _updateContext() {
            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /** Apply changes to the DOM. */

        }, {
          key: "_applyChanges",
          value: function _applyChanges(changes) {
            var _this79 = this;

            this._viewRepeater.applyChanges(changes, this._viewContainerRef, function (record, adjustedPreviousIndex, currentIndex) {
              return _this79._getEmbeddedViewArgs(record, currentIndex);
            }, function (record) {
              return record.item;
            }); // Update $implicit for any items that had an identity change.


            changes.forEachIdentityChange(function (record) {
              var view = _this79._viewContainerRef.get(record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /** Update the computed properties on the `CdkVirtualForOfContext`. */

        }, {
          key: "_updateComputedContextProperties",
          value: function _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }
        }, {
          key: "_getEmbeddedViewArgs",
          value: function _getEmbeddedViewArgs(record, index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return {
              templateRef: this._template,
              context: {
                $implicit: record.item,
                // It's guaranteed that the iterable is not "undefined" or "null" because we only
                // generate views for elements if the "cdkVirtualForOf" iterable has elements.
                cdkVirtualForOf: this._cdkVirtualForOf,
                index: -1,
                count: -1,
                first: false,
                last: false,
                odd: false,
                even: false
              },
              index: index
            };
          }
        }, {
          key: "cdkVirtualForOf",
          get: function get() {
            return this._cdkVirtualForOf;
          },
          set: function set(value) {
            this._cdkVirtualForOf = value;

            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
              this._dataSourceChanges.next(value);
            } else {
              // If value is an an NgIterable, convert it to an array.
              this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.from(value || [])));
            }
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           */

        }, {
          key: "cdkVirtualForTrackBy",
          get: function get() {
            return this._cdkVirtualForTrackBy;
          },
          set: function set(fn) {
            var _this80 = this;

            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ? function (index, item) {
              return fn(index + (_this80._renderedRange ? _this80._renderedRange.start : 0), item);
            } : undefined;
          }
          /** The template used to stamp out new elements. */

        }, {
          key: "cdkVirtualForTemplate",
          set: function set(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

        }, {
          key: "cdkVirtualForTemplateCacheSize",
          get: function get() {
            return this._viewRepeater.viewCacheSize;
          },
          set: function set(size) {
            this._viewRepeater.viewCacheSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);
          }
        }]);

        return CdkVirtualForOf;
      }();

      CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
        return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkVirtualForOf,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate",
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"],
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"]
        }])]
      });

      CdkVirtualForOf.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]]
          }]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkVirtualFor][cdkVirtualForOf]',
            providers: [{
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"],
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"]
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]]
            }]
          }, {
            type: CdkVirtualScrollViewport,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          cdkVirtualForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdkVirtualForTemplateCacheSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkScrollableModule = function CdkScrollableModule() {
        _classCallCheck(this, CdkScrollableModule);
      };

      CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CdkScrollableModule
      });
      CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CdkScrollableModule_Factory(t) {
          return new (t || CdkScrollableModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
          declarations: [CdkScrollable],
          exports: [CdkScrollable]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkScrollable],
            declarations: [CdkScrollable]
          }]
        }], null, null);
      })();
      /**
       * @docs-primary-export
       */


      var ScrollingModule = function ScrollingModule() {
        _classCallCheck(this, ScrollingModule);
      };

      ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ScrollingModule
      });
      ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ScrollingModule_Factory(t) {
          return new (t || ScrollingModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
          declarations: function declarations() {
            return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
            declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=scrolling.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~features-home-home-module~features-warehouse-warehouse-module-es5.js.map