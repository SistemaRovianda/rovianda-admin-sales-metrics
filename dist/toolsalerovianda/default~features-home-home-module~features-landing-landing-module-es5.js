(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-home-home-module~features-landing-landing-module"], {
    /***/
    "/6Yf":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/component/dist/index.esm.js ***!
      \************************************************************/

    /*! exports provided: Component, ComponentContainer, Provider */

    /***/
    function Yf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Component", function () {
        return Component;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentContainer", function () {
        return ComponentContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Provider", function () {
        return Provider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "30Go");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/util */
      "qOnz");
      /**
       * Component for service name T, e.g. `auth`, `auth-internal`
       */


      var Component =
      /** @class */
      function () {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        function Component(name, instanceFactory, type) {
          this.name = name;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          /**
           * Properties to be added to the service namespace
           */

          this.serviceProps = {};
          this.instantiationMode = "LAZY"
          /* LAZY */
          ;
        }

        Component.prototype.setInstantiationMode = function (mode) {
          this.instantiationMode = mode;
          return this;
        };

        Component.prototype.setMultipleInstances = function (multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
        };

        Component.prototype.setServiceProps = function (props) {
          this.serviceProps = props;
          return this;
        };

        return Component;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_ENTRY_NAME = '[DEFAULT]';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
       * NameServiceMapping[T] is an alias for the type of the instance
       */

      var Provider =
      /** @class */
      function () {
        function Provider(name, container) {
          this.name = name;
          this.container = container;
          this.component = null;
          this.instances = new Map();
          this.instancesDeferred = new Map();
        }
        /**
         * @param identifier A provider can provide mulitple instances of a service
         * if this.component.multipleInstances is true.
         */


        Provider.prototype.get = function (identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          } // if multipleInstances is not supported, use the default name


          var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

          if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_1__["Deferred"]();
            this.instancesDeferred.set(normalizedIdentifier, deferred); // If the service instance is available, resolve the promise with it immediately

            try {
              var instance = this.getOrInitializeService(normalizedIdentifier);

              if (instance) {
                deferred.resolve(instance);
              }
            } catch (e) {// when the instance factory throws an exception during get(), it should not cause
              // a fatal error. We just return the unresolved promise in this case.
            }
          }

          return this.instancesDeferred.get(normalizedIdentifier).promise;
        };

        Provider.prototype.getImmediate = function (options) {
          var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
            identifier: DEFAULT_ENTRY_NAME,
            optional: false
          }, options),
              identifier = _a.identifier,
              optional = _a.optional; // if multipleInstances is not supported, use the default name


          var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

          try {
            var instance = this.getOrInitializeService(normalizedIdentifier);

            if (!instance) {
              if (optional) {
                return null;
              }

              throw Error("Service " + this.name + " is not available");
            }

            return instance;
          } catch (e) {
            if (optional) {
              return null;
            } else {
              throw e;
            }
          }
        };

        Provider.prototype.getComponent = function () {
          return this.component;
        };

        Provider.prototype.setComponent = function (component) {
          var e_1, _a;

          if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
          }

          if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
          }

          this.component = component; // if the service is eager, initialize the default instance

          if (isComponentEager(component)) {
            try {
              this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
              // initialization, it should not cause a fatal error.
              // TODO: Investigate if we need to make it configurable, because some component may want to cause
              // a fatal error in this case?
            }
          }

          try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_c.value, 2),
                  instanceIdentifier = _d[0],
                  instanceDeferred = _d[1];

              var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

              try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                var instance = this.getOrInitializeService(normalizedIdentifier);
                instanceDeferred.resolve(instance);
              } catch (e) {// when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        };

        Provider.prototype.clearInstance = function (identifier) {
          if (identifier === void 0) {
            identifier = DEFAULT_ENTRY_NAME;
          }

          this.instancesDeferred["delete"](identifier);
          this.instances["delete"](identifier);
        }; // app.delete() will call this method on every provider to delete the services
        // TODO: should we mark the provider as deleted?


        Provider.prototype["delete"] = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var services;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  services = Array.from(this.instances.values());
                  return [4
                  /*yield*/
                  , Promise.all(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(services.filter(function (service) {
                    return 'INTERNAL' in service;
                  }) // legacy services
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .map(function (service) {
                    return service.INTERNAL["delete"]();
                  }), services.filter(function (service) {
                    return '_delete' in service;
                  }) // modularized services
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .map(function (service) {
                    return service._delete();
                  })))];

                case 1:
                  _a.sent();

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        Provider.prototype.isComponentSet = function () {
          return this.component != null;
        };

        Provider.prototype.getOrInitializeService = function (identifier) {
          var instance = this.instances.get(identifier);

          if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
          }

          return instance || null;
        };

        Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
          if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
          } else {
            return identifier; // assume multiple instances are supported before the component is provided.
          }
        };

        return Provider;
      }(); // undefined should be passed to the service factory for the default instance


      function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
      }

      function isComponentEager(component) {
        return component.instantiationMode === "EAGER"
        /* EAGER */
        ;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
       */


      var ComponentContainer =
      /** @class */
      function () {
        function ComponentContainer(name) {
          this.name = name;
          this.providers = new Map();
        }
        /**
         *
         * @param component Component being added
         * @param overwrite When a component with the same name has already been registered,
         * if overwrite is true: overwrite the existing component with the new component and create a new
         * provider with the new component. It can be useful in tests where you want to use different mocks
         * for different tests.
         * if overwrite is false: throw an exception
         */


        ComponentContainer.prototype.addComponent = function (component) {
          var provider = this.getProvider(component.name);

          if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
          }

          provider.setComponent(component);
        };

        ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
          var provider = this.getProvider(component.name);

          if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers["delete"](component.name);
          }

          this.addComponent(component);
        };
        /**
         * getProvider provides a type safe interface where it can only be called with a field name
         * present in NameServiceMapping interface.
         *
         * Firebase SDKs providing services should extend NameServiceMapping interface to register
         * themselves.
         */


        ComponentContainer.prototype.getProvider = function (name) {
          if (this.providers.has(name)) {
            return this.providers.get(name);
          } // create a Provider for a service that hasn't registered with Firebase


          var provider = new Provider(name, this);
          this.providers.set(name, provider);
          return provider;
        };

        ComponentContainer.prototype.getProviders = function () {
          return Array.from(this.providers.values());
        };

        return ComponentContainer;
      }(); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "30Go":
    /*!********************************************************************!*\
      !*** ./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js ***!
      \********************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function Go(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "6nsN":
    /*!******************************************************!*\
      !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
      \******************************************************/

    /*! no exports provided */

    /***/
    function nsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/auth */
      "t6oF"); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "Jgta":
    /*!*****************************************************!*\
      !*** ./node_modules/firebase/app/dist/index.esm.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Jgta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "zIRd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"];
      });

      var name = "firebase";
      var version = "8.1.1";
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion(name, version, 'app'); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "NFeN":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
      \**********************************************************************/

    /*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, ɵ0 */

    /***/
    function NFeN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () {
        return ICON_REGISTRY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () {
        return ICON_REGISTRY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () {
        return MAT_ICON_LOCATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () {
        return MAT_ICON_LOCATION_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIcon", function () {
        return MatIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIconModule", function () {
        return MatIconModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () {
        return MatIconRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () {
        return getMatIconFailedToSanitizeLiteralError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () {
        return getMatIconFailedToSanitizeUrlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () {
        return getMatIconNameNotFoundError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () {
        return getMatIconNoHttpProviderError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an exception to be thrown in the case when attempting to
       * load an icon with a name that cannot be found.
       * @docs-private
       */


      var _c0 = ["*"];

      function getMatIconNameNotFoundError(iconName) {
        return Error("Unable to find icon with the name \"".concat(iconName, "\""));
      }
      /**
       * Returns an exception to be thrown when the consumer attempts to use
       * `<mat-icon>` without including @angular/common/http.
       * @docs-private
       */


      function getMatIconNoHttpProviderError() {
        return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
      }
      /**
       * Returns an exception to be thrown when a URL couldn't be sanitized.
       * @param url URL that was attempted to be sanitized.
       * @docs-private
       */


      function getMatIconFailedToSanitizeUrlError(url) {
        return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
      }
      /**
       * Returns an exception to be thrown when a HTML string couldn't be sanitized.
       * @param literal HTML that was attempted to be sanitized.
       * @docs-private
       */


      function getMatIconFailedToSanitizeLiteralError(literal) {
        return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
      }
      /**
       * Configuration for an icon, including the URL and possibly the cached SVG element.
       * @docs-private
       */


      var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
        _classCallCheck(this, SvgIconConfig);

        this.url = url;
        this.svgText = svgText;
        this.options = options;
      };
      /**
       * Service to register and display icons used by the `<mat-icon>` component.
       * - Registers icon URLs by namespace and name.
       * - Registers icon set URLs by namespace.
       * - Registers aliases for CSS classes, for use with icon fonts.
       * - Loads icons from URLs and extracts individual icons from icon sets.
       */


      var MatIconRegistry = /*#__PURE__*/function () {
        function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
          _classCallCheck(this, MatIconRegistry);

          this._httpClient = _httpClient;
          this._sanitizer = _sanitizer;
          this._errorHandler = _errorHandler;
          /**
           * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
           */

          this._svgIconConfigs = new Map();
          /**
           * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
           * Multiple icon sets can be registered under the same namespace.
           */

          this._iconSetConfigs = new Map();
          /** Cache for icons loaded by direct URLs. */

          this._cachedIconsByUrl = new Map();
          /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

          this._inProgressUrlFetches = new Map();
          /** Map from font identifiers to their CSS class names. Used for icon fonts. */

          this._fontCssClassesByAlias = new Map();
          /**
           * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
           * The default 'material-icons' value assumes that the material icon font has been loaded as
           * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
           */

          this._defaultFontSetClass = 'material-icons';
          this._document = document;
        }
        /**
         * Registers an icon by URL in the default namespace.
         * @param iconName Name under which the icon should be registered.
         * @param url
         */


        _createClass(MatIconRegistry, [{
          key: "addSvgIcon",
          value: function addSvgIcon(iconName, url, options) {
            return this.addSvgIconInNamespace('', iconName, url, options);
          }
          /**
           * Registers an icon using an HTML string in the default namespace.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteral",
          value: function addSvgIconLiteral(iconName, literal, options) {
            return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
          }
          /**
           * Registers an icon by URL in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param url
           */

        }, {
          key: "addSvgIconInNamespace",
          value: function addSvgIconInNamespace(namespace, iconName, url, options) {
            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon using an HTML string in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteralInNamespace",
          value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal); // TODO: add an ngDevMode check


            if (!cleanLiteral) {
              throw getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Registers an icon set by URL in the default namespace.
           * @param url
           */

        }, {
          key: "addSvgIconSet",
          value: function addSvgIconSet(url, options) {
            return this.addSvgIconSetInNamespace('', url, options);
          }
          /**
           * Registers an icon set using an HTML string in the default namespace.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteral",
          value: function addSvgIconSetLiteral(literal, options) {
            return this.addSvgIconSetLiteralInNamespace('', literal, options);
          }
          /**
           * Registers an icon set by URL in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param url
           */

        }, {
          key: "addSvgIconSetInNamespace",
          value: function addSvgIconSetInNamespace(namespace, url, options) {
            return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon set using an HTML string in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteralInNamespace",
          value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

            if (!cleanLiteral) {
              throw getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
           * component with the alias as the fontSet input will cause the class name to be applied
           * to the `<mat-icon>` element.
           *
           * @param alias Alias for the font.
           * @param className Class name override to be used instead of the alias.
           */

        }, {
          key: "registerFontClassAlias",
          value: function registerFontClassAlias(alias) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

            this._fontCssClassesByAlias.set(alias, className);

            return this;
          }
          /**
           * Returns the CSS class name associated with the alias by a previous call to
           * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
           */

        }, {
          key: "classNameForFontAlias",
          value: function classNameForFontAlias(alias) {
            return this._fontCssClassesByAlias.get(alias) || alias;
          }
          /**
           * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           *
           * @param className
           */

        }, {
          key: "setDefaultFontSetClass",
          value: function setDefaultFontSetClass(className) {
            this._defaultFontSetClass = className;
            return this;
          }
          /**
           * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           */

        }, {
          key: "getDefaultFontSetClass",
          value: function getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
           * The response from the URL may be cached so this will not always cause an HTTP request, but
           * the produced element will always be a new copy of the originally fetched icon. (That is,
           * it will not contain any modifications made to elements previously returned).
           *
           * @param safeUrl URL from which to fetch the SVG icon.
           */

        }, {
          key: "getSvgIconFromUrl",
          value: function getSvgIconFromUrl(safeUrl) {
            var _this2 = this;

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

            if (!url) {
              throw getMatIconFailedToSanitizeUrlError(safeUrl);
            }

            var cachedIcon = this._cachedIconsByUrl.get(url);

            if (cachedIcon) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
            }

            return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svg) {
              return _this2._cachedIconsByUrl.set(url, svg);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) {
              return cloneSvg(svg);
            }));
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
           * and namespace. The icon must have been previously registered with addIcon or addIconSet;
           * if not, the Observable will throw an error.
           *
           * @param name Name of the icon to be retrieved.
           * @param namespace Namespace in which to look for the icon.
           */

        }, {
          key: "getNamedSvgIcon",
          value: function getNamedSvgIcon(name) {
            var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            // Return (copy of) cached icon if possible.
            var key = iconKey(namespace, name);

            var config = this._svgIconConfigs.get(key);

            if (config) {
              return this._getSvgFromConfig(config);
            } // See if we have any icon sets registered for the namespace.


            var iconSetConfigs = this._iconSetConfigs.get(namespace);

            if (iconSetConfigs) {
              return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._svgIconConfigs.clear();

            this._iconSetConfigs.clear();

            this._cachedIconsByUrl.clear();
          }
          /**
           * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
           */

        }, {
          key: "_getSvgFromConfig",
          value: function _getSvgFromConfig(config) {
            if (config.svgText) {
              // We already have the SVG element for this icon, return a copy.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(this._svgElementFromConfig(config)));
            } else {
              // Fetch the icon from the config's URL, cache it, and return a copy.
              return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) {
                return cloneSvg(svg);
              }));
            }
          }
          /**
           * Attempts to find an icon with the specified name in any of the SVG icon sets.
           * First searches the available cached icons for a nested element with a matching name, and
           * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
           * that have not been cached, and searches again after all fetches are completed.
           * The returned Observable produces the SVG element if possible, and throws
           * an error if no icon with the specified name can be found.
           */

        }, {
          key: "_getSvgFromIconSetConfigs",
          value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
            var _this3 = this;

            // For all the icon set SVG elements we've fetched, see if any contain an icon with the
            // requested name.
            var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (namedIcon) {
              // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
              // time anyway, there's probably not much advantage compared to just always extracting
              // it from the icon set.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
            } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
            // fetched, fetch them now and look for iconName in the results.


            var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
              return !iconSetConfig.svgText;
            }).map(function (iconSetConfig) {
              return _this3._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                var url = _this3._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.


                var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

                _this3._errorHandler.handleError(new Error(errorMessage));

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }));
            }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
            // cached SVG element (unless the request failed), and we can check again for the icon.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              var foundIcon = _this3._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


              if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
              }

              return foundIcon;
            }));
          }
          /**
           * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractIconWithNameFromAnySet",
          value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
            // Iterate backwards, so icon sets added later have precedence.
            for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
              var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
              // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
              // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
              // some of the parsing.

              if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                var svg = this._svgElementFromConfig(config);

                var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

                if (foundIcon) {
                  return foundIcon;
                }
              }
            }

            return null;
          }
          /**
           * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
           * from it.
           */

        }, {
          key: "_loadSvgIconFromConfig",
          value: function _loadSvgIconFromConfig(config) {
            var _this4 = this;

            return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svgText) {
              return config.svgText = svgText;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return _this4._svgElementFromConfig(config);
            }));
          }
          /**
           * Loads the content of the icon set URL specified in the
           * SvgIconConfig and attaches it to the config.
           */

        }, {
          key: "_loadSvgIconSetFromConfig",
          value: function _loadSvgIconSetFromConfig(config) {
            if (config.svgText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }

            return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svgText) {
              return config.svgText = svgText;
            }));
          }
          /**
           * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractSvgIconFromSet",
          value: function _extractSvgIconFromSet(iconSet, iconName, options) {
            // Use the `id="iconName"` syntax in order to escape special
            // characters in the ID (versus using the #iconName syntax).
            var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

            if (!iconSource) {
              return null;
            } // Clone the element and remove the ID to prevent multiple elements from being added
            // to the page with the same ID.


            var iconElement = iconSource.cloneNode(true);
            iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
            // the content of a new <svg> node.

            if (iconElement.nodeName.toLowerCase() === 'svg') {
              return this._setSvgAttributes(iconElement, options);
            } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
            // that the same could be achieved by referring to it via <use href="#id">, however the <use>
            // tag is problematic on Firefox, because it needs to include the current page path.


            if (iconElement.nodeName.toLowerCase() === 'symbol') {
              return this._setSvgAttributes(this._toSvgElement(iconElement), options);
            } // createElement('SVG') doesn't work as expected; the DOM ends up with
            // the correct nodes, but the SVG content doesn't render. Instead we
            // have to create an empty SVG node using innerHTML and append its content.
            // Elements created using DOMParser.parseFromString have the same problem.
            // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


            var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


            svg.appendChild(iconElement);
            return this._setSvgAttributes(svg, options);
          }
          /**
           * Creates a DOM element from the given SVG string.
           */

        }, {
          key: "_svgElementFromString",
          value: function _svgElementFromString(str) {
            var div = this._document.createElement('DIV');

            div.innerHTML = str;
            var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

            if (!svg) {
              throw Error('<svg> tag not found');
            }

            return svg;
          }
          /**
           * Converts an element into an SVG node by cloning all of its children.
           */

        }, {
          key: "_toSvgElement",
          value: function _toSvgElement(element) {
            var svg = this._svgElementFromString('<svg></svg>');

            var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

            for (var i = 0; i < attributes.length; i++) {
              var _attributes$i = attributes[i],
                  _name = _attributes$i.name,
                  value = _attributes$i.value;

              if (_name !== 'id') {
                svg.setAttribute(_name, value);
              }
            }

            for (var _i2 = 0; _i2 < element.childNodes.length; _i2++) {
              if (element.childNodes[_i2].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[_i2].cloneNode(true));
              }
            }

            return svg;
          }
          /**
           * Sets the default attributes for an SVG element to be used as an icon.
           */

        }, {
          key: "_setSvgAttributes",
          value: function _setSvgAttributes(svg, options) {
            svg.setAttribute('fit', '');
            svg.setAttribute('height', '100%');
            svg.setAttribute('width', '100%');
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

            if (options && options.viewBox) {
              svg.setAttribute('viewBox', options.viewBox);
            }

            return svg;
          }
          /**
           * Returns an Observable which produces the string contents of the given icon. Results may be
           * cached, so future calls with the same URL may not cause another HTTP request.
           */

        }, {
          key: "_fetchIcon",
          value: function _fetchIcon(iconConfig) {
            var _this5 = this;

            var _a;

            var safeUrl = iconConfig.url,
                options = iconConfig.options;
            var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

            if (!this._httpClient) {
              throw getMatIconNoHttpProviderError();
            } // TODO: add an ngDevMode check


            if (safeUrl == null) {
              throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
            }

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


            if (!url) {
              throw getMatIconFailedToSanitizeUrlError(safeUrl);
            } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
            // already a request in progress for that URL. It's necessary to call share() on the
            // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


            var inProgressFetch = this._inProgressUrlFetches.get(url);

            if (inProgressFetch) {
              return inProgressFetch;
            }

            var req = this._httpClient.get(url, {
              responseType: 'text',
              withCredentials: withCredentials
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this5._inProgressUrlFetches["delete"](url);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());

            this._inProgressUrlFetches.set(url, req);

            return req;
          }
          /**
           * Registers an icon config by name in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param iconName Name under which to register the config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconConfig",
          value: function _addSvgIconConfig(namespace, iconName, config) {
            this._svgIconConfigs.set(iconKey(namespace, iconName), config);

            return this;
          }
          /**
           * Registers an icon set config in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconSetConfig",
          value: function _addSvgIconSetConfig(namespace, config) {
            var configNamespace = this._iconSetConfigs.get(namespace);

            if (configNamespace) {
              configNamespace.push(config);
            } else {
              this._iconSetConfigs.set(namespace, [config]);
            }

            return this;
          }
          /** Parses a config's text into an SVG element. */

        }, {
          key: "_svgElementFromConfig",
          value: function _svgElementFromConfig(config) {
            if (!config.svgElement) {
              var svg = this._svgElementFromString(config.svgText);

              this._setSvgAttributes(svg, config.options);

              config.svgElement = svg;
            }

            return config.svgElement;
          }
        }]);

        return MatIconRegistry;
      }();

      MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
        return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
      };

      MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatIconRegistry_Factory() {
          return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
        },
        token: MatIconRegistry,
        providedIn: "root"
      });

      MatIconRegistry.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
          }];
        }, null);
      })();
      /** @docs-private */


      function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
        return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
      }
      /** @docs-private */


      var ICON_REGISTRY_PROVIDER = {
        // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
        provide: MatIconRegistry,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]],
        useFactory: ICON_REGISTRY_PROVIDER_FACTORY
      };
      /** Clones an SVGElement while preserving type information. */

      function cloneSvg(svg) {
        return svg.cloneNode(true);
      }
      /** Returns the cache key to use for an icon namespace and name. */


      function iconKey(namespace, name) {
        return namespace + ':' + name;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatIcon.

      /** @docs-private */


      var MatIconBase = function MatIconBase(_elementRef) {
        _classCallCheck(this, MatIconBase);

        this._elementRef = _elementRef;
      };

      var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatIconBase);
      /**
       * Injection token used to provide the current location to `MatIcon`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-icon-location', {
        providedIn: 'root',
        factory: MAT_ICON_LOCATION_FACTORY
      });
      /** @docs-private */

      function MAT_ICON_LOCATION_FACTORY() {
        var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


      var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

      var ɵ0 = function ɵ0(attr) {
        return "[".concat(attr, "]");
      };
      /** Selector that can be used to find all elements that are using a `FuncIRI`. */


      var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
      /** Regex that can be used to extract the id out of a FuncIRI. */

      var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
      /**
       * Component to display an icon. It can be used in the following ways:
       *
       * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
       *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
       *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
       *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
       *   Examples:
       *     `<mat-icon svgIcon="left-arrow"></mat-icon>
       *     <mat-icon svgIcon="animals:cat"></mat-icon>`
       *
       * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
       *   component. By default the Material icons font is used as described at
       *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
       *   alternate font by setting the fontSet input to either the CSS class to apply to use the
       *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
       *   Examples:
       *     `<mat-icon>home</mat-icon>
       *     <mat-icon fontSet="myfont">sun</mat-icon>`
       *
       * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
       *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
       *   CSS class which causes the glyph to be displayed via a :before selector, as in
       *   https://fortawesome.github.io/Font-Awesome/examples/
       *   Example:
       *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
       */

      var MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
        _inherits(MatIcon, _MatIconMixinBase2);

        var _super2 = _createSuper(MatIcon);

        function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
          var _this6;

          _classCallCheck(this, MatIcon);

          _this6 = _super2.call(this, elementRef);
          _this6._iconRegistry = _iconRegistry;
          _this6._location = _location;
          _this6._errorHandler = _errorHandler;
          _this6._inline = false;
          /** Subscription to the current in-progress SVG icon request. */

          _this6._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
          // the right thing to do for the majority of icon use-cases.

          if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
          }

          return _this6;
        }
        /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         */


        _createClass(MatIcon, [{
          key: "_splitIconName",

          /**
           * Splits an svgIcon binding value into its icon set and icon name components.
           * Returns a 2-element array of [(icon set), (icon name)].
           * The separator for the two fields is ':'. If there is no separator, an empty
           * string is returned for the icon set and the entire value is returned for
           * the icon name. If the argument is falsy, returns an array of two empty strings.
           * Throws an error if the name contains two or more ':' separators.
           * Examples:
           *   `'social:cake' -> ['social', 'cake']
           *   'penguin' -> ['', 'penguin']
           *   null -> ['', '']
           *   'a:b:c' -> (throws Error)`
           */
          value: function _splitIconName(iconName) {
            if (!iconName) {
              return ['', ''];
            }

            var parts = iconName.split(':');

            switch (parts.length) {
              case 1:
                return ['', parts[0]];
              // Use default namespace.

              case 2:
                return parts;

              default:
                throw Error("Invalid icon name: \"".concat(iconName, "\""));
              // TODO: add an ngDevMode check
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // Update font classes because ngOnChanges won't be called if none of the inputs are present,
            // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
            this._updateFontIconClasses();
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var cachedElements = this._elementsWithExternalReferences;

            if (cachedElements && cachedElements.size) {
              var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
              // the browser doesn't have an API that will let us react on link clicks and
              // we can't depend on the Angular router. The references need to be updated,
              // because while most browsers don't care whether the URL is correct after
              // the first render, Safari will break if the user navigates to a different
              // page and the SVG isn't re-rendered.


              if (newPath !== this._previousPath) {
                this._previousPath = newPath;

                this._prependPathToReferences(newPath);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._currentIconFetch.unsubscribe();

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            }
          }
        }, {
          key: "_usingFontIcon",
          value: function _usingFontIcon() {
            return !this.svgIcon;
          }
        }, {
          key: "_setSvgElement",
          value: function _setSvgElement(svg) {
            this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
            // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
            // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


            var styleTags = svg.querySelectorAll('style');

            for (var i = 0; i < styleTags.length; i++) {
              styleTags[i].textContent += ' ';
            } // Note: we do this fix here, rather than the icon registry, because the
            // references have to point to the URL at the time that the icon was created.


            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);

            this._elementRef.nativeElement.appendChild(svg);
          }
        }, {
          key: "_clearSvgElement",
          value: function _clearSvgElement() {
            var layoutElement = this._elementRef.nativeElement;
            var childCount = layoutElement.childNodes.length;

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
            // we can't use innerHTML, because IE will throw if the element has a data binding.


            while (childCount--) {
              var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
              // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

              if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
              }
            }
          }
        }, {
          key: "_updateFontIconClasses",
          value: function _updateFontIconClasses() {
            if (!this._usingFontIcon()) {
              return;
            }

            var elem = this._elementRef.nativeElement;
            var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

            if (fontSetClass != this._previousFontSetClass) {
              if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
              }

              if (fontSetClass) {
                elem.classList.add(fontSetClass);
              }

              this._previousFontSetClass = fontSetClass;
            }

            if (this.fontIcon != this._previousFontIconClass) {
              if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
              }

              if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
              }

              this._previousFontIconClass = this.fontIcon;
            }
          }
          /**
           * Cleans up a value to be used as a fontIcon or fontSet.
           * Since the value ends up being assigned as a CSS class, we
           * have to trim the value and omit space-separated values.
           */

        }, {
          key: "_cleanupFontValue",
          value: function _cleanupFontValue(value) {
            return typeof value === 'string' ? value.trim().split(' ')[0] : value;
          }
          /**
           * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
           * reference. This is required because WebKit browsers require references to be prefixed with
           * the current path, if the page has a `base` tag.
           */

        }, {
          key: "_prependPathToReferences",
          value: function _prependPathToReferences(path) {
            var elements = this._elementsWithExternalReferences;

            if (elements) {
              elements.forEach(function (attrs, element) {
                attrs.forEach(function (attr) {
                  element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
                });
              });
            }
          }
          /**
           * Caches the children of an SVG element that have `url()`
           * references that we need to prefix with the current path.
           */

        }, {
          key: "_cacheChildrenWithExternalReferences",
          value: function _cacheChildrenWithExternalReferences(element) {
            var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
            var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

            var _loop = function _loop(i) {
              funcIriAttributes.forEach(function (attr) {
                var elementWithReference = elementsWithFuncIri[i];
                var value = elementWithReference.getAttribute(attr);
                var match = value ? value.match(funcIriPattern) : null;

                if (match) {
                  var attributes = elements.get(elementWithReference);

                  if (!attributes) {
                    attributes = [];
                    elements.set(elementWithReference, attributes);
                  }

                  attributes.push({
                    name: attr,
                    value: match[1]
                  });
                }
              });
            };

            for (var i = 0; i < elementsWithFuncIri.length; i++) {
              _loop(i);
            }
          }
          /** Sets a new SVG icon with a particular name. */

        }, {
          key: "_updateSvgIcon",
          value: function _updateSvgIcon(rawName) {
            var _this7 = this;

            this._svgNamespace = null;
            this._svgName = null;

            this._currentIconFetch.unsubscribe();

            if (rawName) {
              var _this$_splitIconName = this._splitIconName(rawName),
                  _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                  namespace = _this$_splitIconName2[0],
                  iconName = _this$_splitIconName2[1];

              if (namespace) {
                this._svgNamespace = namespace;
              }

              if (iconName) {
                this._svgName = iconName;
              }

              this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (svg) {
                return _this7._setSvgElement(svg);
              }, function (err) {
                var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

                _this7._errorHandler.handleError(new Error(errorMessage));
              });
            }
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          },
          set: function set(inline) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(inline);
          }
          /** Name of the icon in the SVG icon set. */

        }, {
          key: "svgIcon",
          get: function get() {
            return this._svgIcon;
          },
          set: function set(value) {
            if (value !== this._svgIcon) {
              if (value) {
                this._updateSvgIcon(value);
              } else if (this._svgIcon) {
                this._clearSvgElement();
              }

              this._svgIcon = value;
            }
          }
          /** Font set that the icon is a part of. */

        }, {
          key: "fontSet",
          get: function get() {
            return this._fontSet;
          },
          set: function set(value) {
            var newValue = this._cleanupFontValue(value);

            if (newValue !== this._fontSet) {
              this._fontSet = newValue;

              this._updateFontIconClasses();
            }
          }
          /** Name of an icon within a font set. */

        }, {
          key: "fontIcon",
          get: function get() {
            return this._fontIcon;
          },
          set: function set(value) {
            var newValue = this._cleanupFontValue(value);

            if (newValue !== this._fontIcon) {
              this._fontIcon = newValue;

              this._updateFontIconClasses();
            }
          }
        }]);

        return MatIcon;
      }(_MatIconMixinBase);

      MatIcon.ɵfac = function MatIcon_Factory(t) {
        return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
      };

      MatIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatIcon,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 7,
        hostBindings: function MatIcon_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
          }
        },
        inputs: {
          color: "color",
          inline: "inline",
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon"
        },
        exportAs: ["matIcon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatIcon_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };

      MatIcon.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: '<ng-content></ng-content>',
            selector: 'mat-icon',
            exportAs: 'matIcon',
            inputs: ['color'],
            host: {
              'role': 'img',
              'class': 'mat-icon notranslate',
              '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
              '[attr.data-mat-icon-name]': '_svgName || fontIcon',
              '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
              '[class.mat-icon-inline]': 'inline',
              '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: MatIconRegistry
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['aria-hidden']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_ICON_LOCATION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          svgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fontSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fontIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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


      var MatIconModule = function MatIconModule() {
        _classCallCheck(this, MatIconModule);
      };

      MatIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatIconModule
      });
      MatIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatIconModule_Factory(t) {
          return new (t || MatIconModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatIconModule, {
          declarations: function declarations() {
            return [MatIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatIcon]
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
      //# sourceMappingURL=icon.js.map

      /***/

    },

    /***/
    "WSJP":
    /*!****************************************************!*\
      !*** ./src/app/providers/services/Auth.Service.ts ***!
      \****************************************************/

    /*! exports provided: AuthService */

    /***/
    function WSJP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3"); // import { SessionStorageService } from '../services/session-storage-service';


      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].initializeApp({
            /*apiKey: 'AIzaSyDaoKnC-MSM0b069pawJ5KI1eWlbmng99o',
             authDomain: 'rovianda-88249.firebaseapp.com',*/
            apiKey: "AIzaSyDtp99_k4WaCJWR8d4FncfRpkA4sJTt23c",
            authDomain: "sistema-rovianda.firebaseapp.com"
          });
          this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].app().auth();
          this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].basePath);
        }

        _createClass(AuthService, [{
          key: "signIn",
          value: function signIn(email, password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.auth.signInWithEmailAndPassword(email, password).then(function (userCredentials) {
              return userCredentials.user.uid;
            })["catch"](function (err) {
              return null;
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (uid) {
              if (uid != null) {
                localStorage.setItem('user', uid);
              } // this.sessionStorage.set('uid',`${uid}`);


              return uid;
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.auth.signOut());
          } // this.auth.authState.subscribe(user => {
          //   if (user) {
          //     this.userData = user; // Setting up user data in userData var
          //     localStorage.setItem('user', JSON.stringify(this.userData));
          //     JSON.parse(localStorage.getItem('user'));
          //   } else {
          //     localStorage.setItem('user', null);
          //     JSON.parse(localStorage.getItem('user'));
          //   }
          // })

        }, {
          key: "getUserData",
          value: function getUserData(uid) {
            //console.log(localStorage.getItem('uid'))
            return this.http.get("".concat(this.url, "/user/").concat(uid));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Xa2L":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
      \**********************************************************************************/

    /*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */

    /***/
    function Xa2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
        return MatProgressSpinner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
        return MatProgressSpinnerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
        return MatSpinner;
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


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base reference size of the spinner.
       * @docs-private
       */


      function MatProgressSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      var _c0 = ".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";
      var BASE_SIZE = 100;
      /**
       * Base reference stroke width of the spinner.
       * @docs-private
       */

      var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

      /** @docs-private */

      var MatProgressSpinnerBase = function MatProgressSpinnerBase(_elementRef) {
        _classCallCheck(this, MatProgressSpinnerBase);

        this._elementRef = _elementRef;
      };

      var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
      /** Injection token to be used to override the default options for `mat-progress-spinner`. */


      var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
        providedIn: 'root',
        factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
        return {
          diameter: BASE_SIZE
        };
      } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
      // for example because the animation duration is 4 seconds, .1% accounts to 4ms
      // which are enough to see the flicker described in
      // https://github.com/angular/components/issues/8984


      var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
      /**
       * `<mat-progress-spinner>` component.
       */

      var MatProgressSpinner = /*#__PURE__*/function (_MatProgressSpinnerMi) {
        _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

        var _super3 = _createSuper(MatProgressSpinner);

        function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
          var _this8;

          _classCallCheck(this, MatProgressSpinner);

          _this8 = _super3.call(this, _elementRef);
          _this8._elementRef = _elementRef;
          _this8._document = _document;
          _this8._diameter = BASE_SIZE;
          _this8._value = 0;
          _this8._fallbackAnimation = false;
          /** Mode of the progress circle */

          _this8.mode = 'determinate';
          var trackedDiameters = MatProgressSpinner._diameters;
          _this8._spinnerAnimationLabel = _this8._getSpinnerAnimationLabel(); // The base size is already inserted via the component's structural styles. We still
          // need to track it so we don't end up adding the same styles again.

          if (!trackedDiameters.has(_document.head)) {
            trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
          }

          _this8._fallbackAnimation = platform.EDGE || platform.TRIDENT;
          _this8._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

          if (defaults) {
            if (defaults.diameter) {
              _this8.diameter = defaults.diameter;
            }

            if (defaults.strokeWidth) {
              _this8.strokeWidth = defaults.strokeWidth;
            }
          }

          return _this8;
        }
        /** The diameter of the progress spinner (will set width and height of svg). */


        _createClass(MatProgressSpinner, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
            // Angular seems to create the element outside the shadow root and then moves it inside, if the
            // node is inside an `ngIf` and a ShadowDom-encapsulated component.

            this._styleRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["_getShadowRoot"])(element) || this._document.head;

            this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
            // reliably so we fall back to a non-spec animation.


            var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
            element.classList.add(animationClass);
          }
          /** The radius of the spinner, adjusted for stroke width. */

        }, {
          key: "_getCircleRadius",
          value: function _getCircleRadius() {
            return (this.diameter - BASE_STROKE_WIDTH) / 2;
          }
          /** The view box of the spinner's svg element. */

        }, {
          key: "_getViewBox",
          value: function _getViewBox() {
            var viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
            return "0 0 ".concat(viewBox, " ").concat(viewBox);
          }
          /** The stroke circumference of the svg circle. */

        }, {
          key: "_getStrokeCircumference",
          value: function _getStrokeCircumference() {
            return 2 * Math.PI * this._getCircleRadius();
          }
          /** The dash offset of the svg circle. */

        }, {
          key: "_getStrokeDashOffset",
          value: function _getStrokeDashOffset() {
            if (this.mode === 'determinate') {
              return this._getStrokeCircumference() * (100 - this._value) / 100;
            } // In fallback mode set the circle to 80% and rotate it with CSS.


            if (this._fallbackAnimation && this.mode === 'indeterminate') {
              return this._getStrokeCircumference() * 0.2;
            }

            return null;
          }
          /** Stroke width of the circle in percent. */

        }, {
          key: "_getCircleStrokeWidth",
          value: function _getCircleStrokeWidth() {
            return this.strokeWidth / this.diameter * 100;
          }
          /** Dynamically generates a style tag containing the correct animation for this diameter. */

        }, {
          key: "_attachStyleNode",
          value: function _attachStyleNode() {
            var styleRoot = this._styleRoot;
            var currentDiameter = this._diameter;
            var diameters = MatProgressSpinner._diameters;
            var diametersForElement = diameters.get(styleRoot);

            if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
              var styleTag = this._document.createElement('style');

              styleTag.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel);
              styleTag.textContent = this._getAnimationText();
              styleRoot.appendChild(styleTag);

              if (!diametersForElement) {
                diametersForElement = new Set();
                diameters.set(styleRoot, diametersForElement);
              }

              diametersForElement.add(currentDiameter);
            }
          }
          /** Generates animation styles adjusted for the spinner's diameter. */

        }, {
          key: "_getAnimationText",
          value: function _getAnimationText() {
            var strokeCircumference = this._getStrokeCircumference();

            return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, "".concat(0.95 * strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * strokeCircumference)).replace(/DIAMETER/g, "".concat(this._spinnerAnimationLabel));
          }
          /** Returns the circle diameter formatted for use with the animation-name CSS property. */

        }, {
          key: "_getSpinnerAnimationLabel",
          value: function _getSpinnerAnimationLabel() {
            // The string of a float point number will include a period ‘.’ character,
            // which is not valid for a CSS animation-name.
            return this.diameter.toString().replace('.', '_');
          }
        }, {
          key: "diameter",
          get: function get() {
            return this._diameter;
          },
          set: function set(size) {
            this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
            this._spinnerAnimationLabel = this._getSpinnerAnimationLabel(); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

            if (!this._fallbackAnimation && this._styleRoot) {
              this._attachStyleNode();
            }
          }
          /** Stroke width of the progress spinner. */

        }, {
          key: "strokeWidth",
          get: function get() {
            return this._strokeWidth || this.diameter / 10;
          },
          set: function set(value) {
            this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
          }
          /** Value of the progress circle. */

        }, {
          key: "value",
          get: function get() {
            return this.mode === 'determinate' ? this._value : 0;
          },
          set: function set(newValue) {
            this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
          }
        }]);

        return MatProgressSpinner;
      }(_MatProgressSpinnerMixinBase);

      MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
        return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressSpinner,
        selectors: [["mat-progress-spinner"]],
        hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"],
        hostVars: 10,
        hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          diameter: "diameter",
          strokeWidth: "strokeWidth",
          value: "value"
        },
        exportAs: ["matProgressSpinner"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatProgressSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });
      /**
       * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
       * We need to keep track of which elements the diameters were attached to, because for
       * elements in the Shadow DOM the style tags are attached to the shadow root, rather
       * than the document head.
       */

      MatProgressSpinner._diameters = new WeakMap();

      MatProgressSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatProgressSpinner.propDecorators = {
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-progress-spinner',
            exportAs: 'matProgressSpinner',
            host: {
              'role': 'progressbar',
              'class': 'mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter',
              '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
              '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
              '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
              '[attr.mode]': 'mode'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * `<mat-spinner>` component.
       *
       * This is a component definition to be used as a convenience reference to create an
       * indeterminate `<mat-progress-spinner>` instance.
       */


      var MatSpinner = /*#__PURE__*/function (_MatProgressSpinner) {
        _inherits(MatSpinner, _MatProgressSpinner);

        var _super4 = _createSuper(MatSpinner);

        function MatSpinner(elementRef, platform, document, animationMode, defaults) {
          var _this9;

          _classCallCheck(this, MatSpinner);

          _this9 = _super4.call(this, elementRef, platform, document, animationMode, defaults);
          _this9.mode = 'indeterminate';
          return _this9;
        }

        return MatSpinner;
      }(MatProgressSpinner);

      MatSpinner.ɵfac = function MatSpinner_Factory(t) {
        return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSpinner,
        selectors: [["mat-spinner"]],
        hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"],
        hostVars: 6,
        hostBindings: function MatSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-spinner',
            host: {
              'role': 'progressbar',
              'mode': 'indeterminate',
              'class': 'mat-spinner mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
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


      var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
        _classCallCheck(this, MatProgressSpinnerModule);
      };

      MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressSpinnerModule
      });
      MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatProgressSpinnerModule_Factory(t) {
          return new (t || MatProgressSpinnerModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, {
          declarations: function declarations() {
            return [MatProgressSpinner, MatSpinner];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatProgressSpinner, MatSpinner]
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
      //# sourceMappingURL=progress-spinner.js.map

      /***/

    },

    /***/
    "q/0M":
    /*!*********************************************************!*\
      !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
      \*********************************************************/

    /*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */

    /***/
    function q0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogLevel", function () {
        return LogLevel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Logger", function () {
        return Logger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLogLevel", function () {
        return setLogLevel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function () {
        return setUserLogHandler;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
      
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
      
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */


      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;
      /**
       * A container for all of the Logger instances
       */


      var instances = [];
      /**
       * The JS SDK supports 5 log levels and also allows a user the ability to
       * silence the logs altogether.
       *
       * The order is a follows:
       * DEBUG < VERBOSE < INFO < WARN < ERROR
       *
       * All of the log types above the current log level will be captured (i.e. if
       * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
       * `VERBOSE` logs will not)
       */

      var LogLevel;

      (function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
      })(LogLevel || (LogLevel = {}));

      var levelStringToEnum = {
        'debug': LogLevel.DEBUG,
        'verbose': LogLevel.VERBOSE,
        'info': LogLevel.INFO,
        'warn': LogLevel.WARN,
        'error': LogLevel.ERROR,
        'silent': LogLevel.SILENT
      };
      /**
       * The default log level
       */

      var defaultLogLevel = LogLevel.INFO;
      /**
       * By default, `console.debug` is not displayed in the developer console (in
       * chrome). To avoid forcing users to have to opt-in to these logs twice
       * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
       * logs to the `console.log` function.
       */

      var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
      /**
       * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
       * messages on to their corresponding console counterparts (if the log method
       * is supported by the current log level)
       */

      var defaultLogHandler = function defaultLogHandler(instance, logType) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        if (logType < instance.logLevel) {
          return;
        }

        var now = new Date().toISOString();
        var method = ConsoleMethod[logType];

        if (method) {
          console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
        } else {
          throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
        }
      };

      var Logger =
      /** @class */
      function () {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        function Logger(name) {
          this.name = name;
          /**
           * The log level of the given Logger instance.
           */

          this._logLevel = defaultLogLevel;
          /**
           * The main (internal) log handler for the Logger instance.
           * Can be set to a new function in internal package code but not by user.
           */

          this._logHandler = defaultLogHandler;
          /**
           * The optional, additional, user-defined log handler for the Logger instance.
           */

          this._userLogHandler = null;
          /**
           * Capture the current instance for later use
           */

          instances.push(this);
        }

        Object.defineProperty(Logger.prototype, "logLevel", {
          get: function get() {
            return this._logLevel;
          },
          set: function set(val) {
            if (!(val in LogLevel)) {
              throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }

            this._logLevel = val;
          },
          enumerable: false,
          configurable: true
        }); // Workaround for setter/getter having to be the same type.

        Logger.prototype.setLogLevel = function (val) {
          this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
        };

        Object.defineProperty(Logger.prototype, "logHandler", {
          get: function get() {
            return this._logHandler;
          },
          set: function set(val) {
            if (typeof val !== 'function') {
              throw new TypeError('Value assigned to `logHandler` must be a function');
            }

            this._logHandler = val;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Logger.prototype, "userLogHandler", {
          get: function get() {
            return this._userLogHandler;
          },
          set: function set(val) {
            this._userLogHandler = val;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * The functions below are all based on the `console` interface
         */

        Logger.prototype.debug = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        };

        Logger.prototype.log = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        };

        Logger.prototype.info = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        };

        Logger.prototype.warn = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        };

        Logger.prototype.error = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

          this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        };

        return Logger;
      }();

      function setLogLevel(level) {
        instances.forEach(function (inst) {
          inst.setLogLevel(level);
        });
      }

      function setUserLogHandler(logCallback, options) {
        var _loop_1 = function _loop_1(instance) {
          var customLogLevel = null;

          if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
          }

          if (logCallback === null) {
            instance.userLogHandler = null;
          } else {
            instance.userLogHandler = function (instance, level) {
              var args = [];

              for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
              }

              var message = args.map(function (arg) {
                if (arg == null) {
                  return null;
                } else if (typeof arg === 'string') {
                  return arg;
                } else if (typeof arg === 'number' || typeof arg === 'boolean') {
                  return arg.toString();
                } else if (arg instanceof Error) {
                  return arg.message;
                } else {
                  try {
                    return JSON.stringify(arg);
                  } catch (ignored) {
                    return null;
                  }
                }
              }).filter(function (arg) {
                return arg;
              }).join(' ');

              if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                logCallback({
                  level: LogLevel[level].toLowerCase(),
                  message: message,
                  args: args,
                  type: instance.name
                });
              }
            };
          }
        };

        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
          var instance = instances_1[_i];

          _loop_1(instance);
        }
      } //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "qOnz":
    /*!*******************************************************!*\
      !*** ./node_modules/@firebase/util/dist/index.esm.js ***!
      \*******************************************************/

    /*! exports provided: CONSTANTS, Deferred, ErrorFactory, FirebaseError, MAX_VALUE_MILLIS, RANDOM_FACTOR, Sha1, areCookiesEnabled, assert, assertionError, async, base64, base64Decode, base64Encode, calculateBackoffMillis, contains, createSubscribe, decode, deepCopy, deepExtend, errorPrefix, getUA, isAdmin, isBrowser, isBrowserExtension, isElectron, isEmpty, isIE, isIndexedDBAvailable, isMobileCordova, isNode, isNodeSdk, isReactNative, isSafari, isUWP, isValidFormat, isValidTimestamp, issuedAtTime, jsonEval, map, ordinal, querystring, querystringDecode, safeGet, stringLength, stringToByteArray, stringify, validateArgCount, validateCallback, validateContextObject, validateIndexedDBOpenable, validateNamespace */

    /***/
    function qOnz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSTANTS", function () {
        return CONSTANTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Deferred", function () {
        return Deferred;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorFactory", function () {
        return ErrorFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseError", function () {
        return FirebaseError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_VALUE_MILLIS", function () {
        return MAX_VALUE_MILLIS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RANDOM_FACTOR", function () {
        return RANDOM_FACTOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sha1", function () {
        return Sha1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "areCookiesEnabled", function () {
        return areCookiesEnabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "assert", function () {
        return assert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "assertionError", function () {
        return assertionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "async", function () {
        return async;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "base64", function () {
        return base64;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "base64Decode", function () {
        return base64Decode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "base64Encode", function () {
        return base64Encode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateBackoffMillis", function () {
        return calculateBackoffMillis;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contains", function () {
        return contains;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSubscribe", function () {
        return createSubscribe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decode", function () {
        return decode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deepCopy", function () {
        return deepCopy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deepExtend", function () {
        return deepExtend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPrefix", function () {
        return errorPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUA", function () {
        return getUA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAdmin", function () {
        return isAdmin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isBrowser", function () {
        return isBrowser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isBrowserExtension", function () {
        return isBrowserExtension;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isElectron", function () {
        return isElectron;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return isEmpty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isIE", function () {
        return isIE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isIndexedDBAvailable", function () {
        return isIndexedDBAvailable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMobileCordova", function () {
        return isMobileCordova;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNode", function () {
        return isNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNodeSdk", function () {
        return isNodeSdk;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isReactNative", function () {
        return isReactNative;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSafari", function () {
        return isSafari;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isUWP", function () {
        return isUWP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValidFormat", function () {
        return isValidFormat;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValidTimestamp", function () {
        return isValidTimestamp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "issuedAtTime", function () {
        return issuedAtTime;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jsonEval", function () {
        return jsonEval;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "map", function () {
        return map;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ordinal", function () {
        return ordinal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "querystring", function () {
        return querystring;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "querystringDecode", function () {
        return querystringDecode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "safeGet", function () {
        return safeGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stringLength", function () {
        return stringLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stringToByteArray", function () {
        return stringToByteArray$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stringify", function () {
        return stringify;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateArgCount", function () {
        return validateArgCount;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateCallback", function () {
        return validateCallback;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateContextObject", function () {
        return validateContextObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateIndexedDBOpenable", function () {
        return validateIndexedDBOpenable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateNamespace", function () {
        return validateNamespace;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "30Go");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
       */


      var CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,

        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,

        /**
         * Firebase SDK Version
         */
        SDK_VERSION: '${JSCORE_VERSION}'
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Throws an error if the provided assertion is falsy
       */

      var assert = function assert(assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      /**
       * Returns an Error object suitable for throwing.
       */


      var assertionError = function assertionError(message) {
        return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var stringToByteArray = function stringToByteArray(str) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);

          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }

        return out;
      };
      /**
       * Turns an array of numbers into the string given by the concatenation of the
       * characters to which the numbers correspond.
       * @param bytes Array of numbers representing characters.
       * @return Stringification of the array.
       */


      var byteArrayToString = function byteArrayToString(bytes) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var pos = 0,
            c = 0;

        while (pos < bytes.length) {
          var c1 = bytes[pos++];

          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
          } else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }

        return out.join('');
      }; // We define it as an object literal instead of a class because a class compiled down to es5 can't
      // be treeshaked. https://github.com/rollup/rollup/issues/1691
      // Static lookup maps, lazily populated by init_()


      var base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,

        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,

        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,

        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,

        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + '+/=';
        },

        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + '-_.';
        },

        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === 'function',

        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray: function encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
          }

          this.init_();
          var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          var output = [];

          for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            var outByte4 = byte3 & 0x3f;

            if (!haveByte3) {
              outByte4 = 64;

              if (!haveByte2) {
                outByte3 = 64;
              }
            }

            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }

          return output.join('');
        },

        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString: function encodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }

          return this.encodeByteArray(stringToByteArray(input), webSafe);
        },

        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString: function decodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }

          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },

        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
          this.init_();
          var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          var output = [];

          for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;

            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw Error();
            }

            var outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);

            if (byte3 !== 64) {
              var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
              output.push(outByte2);

              if (byte4 !== 64) {
                var outByte3 = byte3 << 6 & 0xc0 | byte4;
                output.push(outByte3);
              }
            }
          }

          return output;
        },

        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_: function init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      /**
       * URL-safe base64 encoding
       */

      var base64Encode = function base64Encode(str) {
        var utf8Bytes = stringToByteArray(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      /**
       * URL-safe base64 decoding
       *
       * NOTE: DO NOT use the global atob() function - it does NOT support the
       * base64Url variant encoding.
       *
       * @param str To be decoded
       * @return Decoded result, if possible
       */


      var base64Decode = function base64Decode(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error('base64Decode failed: ', e);
        }

        return null;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Do a deep-copy of basic JavaScript Objects or Arrays.
       */


      function deepCopy(value) {
        return deepExtend(undefined, value);
      }
      /**
       * Copy properties from source to target (recursively allows extension
       * of Objects and Arrays).  Scalar values in the target are over-written.
       * If target is undefined, an object of the appropriate type will be created
       * (and returned).
       *
       * We recursively copy all child properties of plain Objects in the source- so
       * that namespace- like dictionaries are merged.
       *
       * Note that the target can be a function, in which case the properties in
       * the source Object are copied onto it as static properties of the Function.
       *
       * Note: we don't merge __proto__ to prevent prototype pollution
       */


      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }

        switch (source.constructor) {
          case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());

          case Object:
            if (target === undefined) {
              target = {};
            }

            break;

          case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;

          default:
            // Not a plain Object - treat it as a scalar.
            return source;
        }

        for (var prop in source) {
          // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
          if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
          }

          target[prop] = deepExtend(target[prop], source[prop]);
        }

        return target;
      }

      function isValidKey(key) {
        return key !== '__proto__';
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Deferred =
      /** @class */
      function () {
        function Deferred() {
          var _this = this;

          this.reject = function () {};

          this.resolve = function () {};

          this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
          });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */


        Deferred.prototype.wrapCallback = function (callback) {
          var _this = this;

          return function (error, value) {
            if (error) {
              _this.reject(error);
            } else {
              _this.resolve(value);
            }

            if (typeof callback === 'function') {
              // Attaching noop handler just in case developer wasn't expecting
              // promises
              _this.promise["catch"](function () {}); // Some of our callbacks don't expect a value and our own tests
              // assert that the parameter length is 1


              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        };

        return Deferred;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns navigator.userAgent string or '' if it's not defined.
       * @return user agent string
       */


      function getUA() {
        if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
          return navigator['userAgent'];
        } else {
          return '';
        }
      }
      /**
       * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
       *
       * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
       * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
       * wait for a callback.
       */


      function isMobileCordova() {
        return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      /**
       * Detect Node.js.
       *
       * @return true if Node.js environment is detected.
       */
      // Node detection logic from: https://github.com/iliakan/detect-node/


      function isNode() {
        try {
          return Object.prototype.toString.call(global.process) === '[object process]';
        } catch (e) {
          return false;
        }
      }
      /**
       * Detect Browser Environment
       */


      function isBrowser() {
        return typeof self === 'object' && self.self === self;
      }

      function isBrowserExtension() {
        var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
      }
      /**
       * Detect React Native.
       *
       * @return true if ReactNative environment is detected.
       */


      function isReactNative() {
        return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
      }
      /** Detects Electron apps. */


      function isElectron() {
        return getUA().indexOf('Electron/') >= 0;
      }
      /** Detects Internet Explorer. */


      function isIE() {
        var ua = getUA();
        return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      }
      /** Detects Universal Windows Platform apps. */


      function isUWP() {
        return getUA().indexOf('MSAppHost/') >= 0;
      }
      /**
       * Detect whether the current SDK build is the Node version.
       *
       * @return true if it's the Node SDK build.
       */


      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      /** Returns true if we are running in Safari. */


      function isSafari() {
        return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
      }
      /**
       * This method checks if indexedDB is supported by current browser/service worker context
       * @return true if indexedDB is supported by current browser/service worker context
       */


      function isIndexedDBAvailable() {
        return 'indexedDB' in self && indexedDB != null;
      }
      /**
       * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
       * if errors occur during the database open operation.
       */


      function validateIndexedDBOpenable() {
        return new Promise(function (resolve, reject) {
          try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);

            request_1.onsuccess = function () {
              request_1.result.close(); // delete database only when it doesn't pre-exist

              if (!preExist_1) {
                window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
              }

              resolve(true);
            };

            request_1.onupgradeneeded = function () {
              preExist_1 = false;
            };

            request_1.onerror = function () {
              var _a;

              reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      /**
       *
       * This method checks whether cookie is enabled within current browser
       * @return true if cookie is enabled within current browser
       */


      function areCookiesEnabled() {
        if (!navigator || !navigator.cookieEnabled) {
          return false;
        }

        return true;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ERROR_NAME = 'FirebaseError'; // Based on code from:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

      var FirebaseError =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FirebaseError, _super);

        function FirebaseError(code, message, customData) {
          var _this = _super.call(this, message) || this;

          _this.code = code;
          _this.customData = customData;
          _this.name = ERROR_NAME; // Fix For ES5
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

          Object.setPrototypeOf(_this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
          // Only available on V8.

          if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
          }

          return _this;
        }

        return FirebaseError;
      }(Error);

      var ErrorFactory =
      /** @class */
      function () {
        function ErrorFactory(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }

        ErrorFactory.prototype.create = function (code) {
          var data = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
          }

          var customData = data[0] || {};
          var fullCode = this.service + "/" + code;
          var template = this.errors[code];
          var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

          var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
          var error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
        };

        return ErrorFactory;
      }();

      function replaceTemplate(template, data) {
        return template.replace(PATTERN, function (_, key) {
          var value = data[key];
          return value != null ? String(value) : "<" + key + "?>";
        });
      }

      var PATTERN = /\{\$([^}]+)}/g;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Evaluates a JSON string into a javascript object.
       *
       * @param {string} str A string containing JSON.
       * @return {*} The javascript object representing the specified JSON.
       */

      function jsonEval(str) {
        return JSON.parse(str);
      }
      /**
       * Returns JSON representing a javascript object.
       * @param {*} data Javascript object to be stringified.
       * @return {string} The JSON contents of the object.
       */


      function stringify(data) {
        return JSON.stringify(data);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Decodes a Firebase auth. token into constituent parts.
       *
       * Notes:
       * - May return with invalid / incomplete claims if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var decode = function decode(token) {
        var header = {},
            claims = {},
            data = {},
            signature = '';

        try {
          var parts = token.split('.');
          header = jsonEval(base64Decode(parts[0]) || '');
          claims = jsonEval(base64Decode(parts[1]) || '');
          signature = parts[2];
          data = claims['d'] || {};
          delete claims['d'];
        } catch (e) {}

        return {
          header: header,
          claims: claims,
          data: data,
          signature: signature
        };
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
       * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isValidTimestamp = function isValidTimestamp(token) {
        var claims = decode(token).claims;
        var now = Math.floor(new Date().getTime() / 1000);
        var validSince = 0,
            validUntil = 0;

        if (typeof claims === 'object') {
          if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
          } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
          }

          if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
          } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
          }
        }

        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      /**
       * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
       *
       * Notes:
       * - May return null if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var issuedAtTime = function issuedAtTime(token) {
        var claims = decode(token).claims;

        if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
          return claims['iat'];
        }

        return null;
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isValidFormat = function isValidFormat(token) {
        var decoded = decode(token),
            claims = decoded.claims;
        return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
      };
      /**
       * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isAdmin = function isAdmin(token) {
        var claims = decode(token).claims;
        return typeof claims === 'object' && claims['admin'] === true;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }

      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return undefined;
        }
      }

      function isEmpty(obj) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }

        return true;
      }

      function map(obj, fn, contextObj) {
        var res = {};

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }

        return res;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
       * params object (e.g. {arg: 'val', arg2: 'val2'})
       * Note: You must prepend it with ? when adding it to a URL.
       */


      function querystring(querystringParams) {
        var params = [];

        var _loop_1 = function _loop_1(key, value) {
          if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
              params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
          } else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        };

        for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
          var _b = _a[_i],
              key = _b[0],
              value = _b[1];

          _loop_1(key, value);
        }

        return params.length ? '&' + params.join('&') : '';
      }
      /**
       * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
       * (e.g. {arg: 'val', arg2: 'val2'})
       */


      function querystringDecode(querystring) {
        var obj = {};
        var tokens = querystring.replace(/^\?/, '').split('&');
        tokens.forEach(function (token) {
          if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
          }
        });
        return obj;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview SHA-1 cryptographic hash.
       * Variable names follow the notation in FIPS PUB 180-3:
       * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
       *
       * Usage:
       *   var sha1 = new sha1();
       *   sha1.update(bytes);
       *   var hash = sha1.digest();
       *
       * Performance:
       *   Chrome 23:   ~400 Mbit/s
       *   Firefox 16:  ~250 Mbit/s
       *
       */

      /**
       * SHA-1 cryptographic hash constructor.
       *
       * The properties declared here are discussed in the above algorithm document.
       * @constructor
       * @final
       * @struct
       */


      var Sha1 =
      /** @class */
      function () {
        function Sha1() {
          /**
           * Holds the previous values of accumulated variables a-e in the compress_
           * function.
           * @private
           */
          this.chain_ = [];
          /**
           * A buffer holding the partially computed hash result.
           * @private
           */

          this.buf_ = [];
          /**
           * An array of 80 bytes, each a part of the message to be hashed.  Referred to
           * as the message schedule in the docs.
           * @private
           */

          this.W_ = [];
          /**
           * Contains data needed to pad messages less than 64 bytes.
           * @private
           */

          this.pad_ = [];
          /**
           * @private {number}
           */

          this.inbuf_ = 0;
          /**
           * @private {number}
           */

          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;

          for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }

          this.reset();
        }

        Sha1.prototype.reset = function () {
          this.chain_[0] = 0x67452301;
          this.chain_[1] = 0xefcdab89;
          this.chain_[2] = 0x98badcfe;
          this.chain_[3] = 0x10325476;
          this.chain_[4] = 0xc3d2e1f0;
          this.inbuf_ = 0;
          this.total_ = 0;
        };
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */


        Sha1.prototype.compress_ = function (buf, offset) {
          if (!offset) {
            offset = 0;
          }

          var W = this.W_; // get 16 big endian words

          if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
              // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
              // have a bug that turns the post-increment ++ operator into pre-increment
              // during JIT compilation.  We have code that depends heavily on SHA-1 for
              // correctness and which is affected by this bug, so I've removed all uses
              // of post-increment ++ in which the result value is used.  We can revert
              // this change once the Safari bug
              // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
              // most clients have been updated.
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (var i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          } // expand to 80 words


          for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 0xffffffff;
          }

          var a = this.chain_[0];
          var b = this.chain_[1];
          var c = this.chain_[2];
          var d = this.chain_[3];
          var e = this.chain_[4];
          var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

          for (var i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 0x5a827999;
              } else {
                f = b ^ c ^ d;
                k = 0x6ed9eba1;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 0x8f1bbcdc;
              } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
              }
            }

            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t;
          }

          this.chain_[0] = this.chain_[0] + a & 0xffffffff;
          this.chain_[1] = this.chain_[1] + b & 0xffffffff;
          this.chain_[2] = this.chain_[2] + c & 0xffffffff;
          this.chain_[3] = this.chain_[3] + d & 0xffffffff;
          this.chain_[4] = this.chain_[4] + e & 0xffffffff;
        };

        Sha1.prototype.update = function (bytes, length) {
          // TODO(johnlenz): tighten the function signature and remove this check
          if (bytes == null) {
            return;
          }

          if (length === undefined) {
            length = bytes.length;
          }

          var lengthMinusBlock = length - this.blockSize;
          var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

          var buf = this.buf_;
          var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

          while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }

            if (typeof bytes === 'string') {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;

                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;

                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

                  break;
                }
              }
            }
          }

          this.inbuf_ = inbuf;
          this.total_ += length;
        };
        /** @override */


        Sha1.prototype.digest = function () {
          var digest = [];
          var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          } // Add # bits.


          for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
          }

          this.compress_(this.buf_);
          var n = 0;

          for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }

          return digest;
        };

        return Sha1;
      }();
      /**
       * Helper to make a Subscribe function (just like Promise helps make a
       * Thenable).
       *
       * @param executor Function which can make calls to a single Observer
       *     as a proxy.
       * @param onNoObservers Callback when count of Observers goes to zero.
       */


      function createSubscribe(executor, onNoObservers) {
        var proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      /**
       * Implement fan-out for any number of Observers attached via a subscribe
       * function.
       */


      var ObserverProxy =
      /** @class */
      function () {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        function ObserverProxy(executor, onNoObservers) {
          var _this = this;

          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0; // Micro-task scheduling by calling task.then().

          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
          // synchronously after the creation of the subscribe function
          // can still receive the very first value generated in the executor.

          this.task.then(function () {
            executor(_this);
          })["catch"](function (e) {
            _this.error(e);
          });
        }

        ObserverProxy.prototype.next = function (value) {
          this.forEachObserver(function (observer) {
            observer.next(value);
          });
        };

        ObserverProxy.prototype.error = function (error) {
          this.forEachObserver(function (observer) {
            observer.error(error);
          });
          this.close(error);
        };

        ObserverProxy.prototype.complete = function () {
          this.forEachObserver(function (observer) {
            observer.complete();
          });
          this.close();
        };
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */


        ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
          var _this = this;

          var observer;

          if (nextOrObserver === undefined && error === undefined && complete === undefined) {
            throw new Error('Missing Observer.');
          } // Assemble an Observer object when passed as callback functions.


          if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error: error,
              complete: complete
            };
          }

          if (observer.next === undefined) {
            observer.next = noop;
          }

          if (observer.error === undefined) {
            observer.error = noop;
          }

          if (observer.complete === undefined) {
            observer.complete = noop;
          }

          var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
          // just respond to the Observer with the final error or complete
          // event.

          if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
              try {
                if (_this.finalError) {
                  observer.error(_this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {// nothing
              }

              return;
            });
          }

          this.observers.push(observer);
          return unsub;
        }; // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.


        ObserverProxy.prototype.unsubscribeOne = function (i) {
          if (this.observers === undefined || this.observers[i] === undefined) {
            return;
          }

          delete this.observers[i];
          this.observerCount -= 1;

          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
          }
        };

        ObserverProxy.prototype.forEachObserver = function (fn) {
          if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
          } // Since sendOne calls asynchronously - there is no chance that
          // this.observers will become undefined.


          for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        }; // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.


        ObserverProxy.prototype.sendOne = function (i, fn) {
          var _this = this; // Execute the callback asynchronously
          // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
              try {
                fn(_this.observers[i]);
              } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) {
                  console.error(e);
                }
              }
            }
          });
        };

        ObserverProxy.prototype.close = function (err) {
          var _this = this;

          if (this.finalized) {
            return;
          }

          this.finalized = true;

          if (err !== undefined) {
            this.finalError = err;
          } // Proxy is no longer needed - garbage collect references
          // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
          });
        };

        return ObserverProxy;
      }();
      /** Turn synchronous function into one called asynchronously. */
      // eslint-disable-next-line @typescript-eslint/ban-types


      function async(fn, onError) {
        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          Promise.resolve(true).then(function () {
            fn.apply(void 0, args);
          })["catch"](function (error) {
            if (onError) {
              onError(error);
            }
          });
        };
      }
      /**
       * Return true if the object passed in implements any of the named methods.
       */


      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== 'object' || obj === null) {
          return false;
        }

        for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
          var method = methods_1[_i];

          if (method in obj && typeof obj[method] === 'function') {
            return true;
          }
        }

        return false;
      }

      function noop() {// do nothing
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Check to make sure the appropriate number of arguments are provided for a public function.
       * Throws an error if it fails.
       *
       * @param fnName The function name
       * @param minCount The minimum number of arguments to allow for the function call
       * @param maxCount The maximum number of argument to allow for the function call
       * @param argCount The actual number of arguments provided.
       */


      var validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
        var argError;

        if (argCount < minCount) {
          argError = 'at least ' + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
        }

        if (argError) {
          var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
          throw new Error(error);
        }
      };
      /**
       * Generates a string to prefix an error message about failed argument validation
       *
       * @param fnName The function name
       * @param argumentNumber The index of the argument
       * @param optional Whether or not the argument is optional
       * @return The prefix to add to the error thrown for validation.
       */


      function errorPrefix(fnName, argumentNumber, optional) {
        var argName = '';

        switch (argumentNumber) {
          case 1:
            argName = optional ? 'first' : 'First';
            break;

          case 2:
            argName = optional ? 'second' : 'Second';
            break;

          case 3:
            argName = optional ? 'third' : 'Third';
            break;

          case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;

          default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
        }

        var error = fnName + ' failed: ';
        error += argName + ' argument ';
        return error;
      }
      /**
       * @param fnName
       * @param argumentNumber
       * @param namespace
       * @param optional
       */


      function validateNamespace(fnName, argumentNumber, namespace, optional) {
        if (optional && !namespace) {
          return;
        }

        if (typeof namespace !== 'string') {
          //TODO: I should do more validation here. We only allow certain chars in namespaces.
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
        }
      }

      function validateCallback(fnName, argumentNumber, // eslint-disable-next-line @typescript-eslint/ban-types
      callback, optional) {
        if (optional && !callback) {
          return;
        }

        if (typeof callback !== 'function') {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
        }
      }

      function validateContextObject(fnName, argumentNumber, context, optional) {
        if (optional && !context) {
          return;
        }

        if (typeof context !== 'object' || context === null) {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
      // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
      // so it's been modified.
      // Note that not all Unicode characters appear as single characters in JavaScript strings.
      // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
      // use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
      // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
      // pair).
      // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

      /**
       * @param {string} str
       * @return {Array}
       */


      var stringToByteArray$1 = function stringToByteArray$1(str) {
        var out = [];
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

          if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.

            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

            c = 0x10000 + (high << 10) + low;
          }

          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }

        return out;
      };
      /**
       * Calculate length without actually converting; useful for doing cheaper validation.
       * @param {string} str
       * @return {number}
       */


      var stringLength = function stringLength(str) {
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);

          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
          } else {
            p += 3;
          }
        }

        return p;
      };
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * The amount of milliseconds to exponentially increase.
       */


      var DEFAULT_INTERVAL_MILLIS = 1000;
      /**
       * The factor to backoff by.
       * Should be a number greater than 1.
       */

      var DEFAULT_BACKOFF_FACTOR = 2;
      /**
       * The maximum milliseconds to increase to.
       *
       * <p>Visible for testing
       */

      var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.

      /**
       * The percentage of backoff time to randomize by.
       * See
       * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
       * for context.
       *
       * <p>Visible for testing
       */

      var RANDOM_FACTOR = 0.5;
      /**
       * Based on the backoff method from
       * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
       * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
       */

      function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
        if (intervalMillis === void 0) {
          intervalMillis = DEFAULT_INTERVAL_MILLIS;
        }

        if (backoffFactor === void 0) {
          backoffFactor = DEFAULT_BACKOFF_FACTOR;
        } // Calculates an exponentially increasing value.
        // Deviation: calculates value from count and a constant interval, so we only need to save value
        // and count to restore state.


        var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount); // A random "fuzz" to avoid waves of retries.
        // Deviation: randomFactor is required.

        var randomWait = Math.round( // A fraction of the backoff value to add/subtract.
        // Deviation: changes multiplication order to improve readability.
        RANDOM_FACTOR * currBaseValue * ( // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        Math.random() - 0.5) * 2); // Limits backoff to max to avoid effectively permanent backoff.

        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provide English ordinal letters after a number
       */


      function ordinal(i) {
        if (!Number.isFinite(i)) {
          return "" + i;
        }

        return i + indicator(i);
      }

      function indicator(i) {
        i = Math.abs(i);
        var cent = i % 100;

        if (cent >= 10 && cent <= 20) {
          return 'th';
        }

        var dec = i % 10;

        if (dec === 1) {
          return 'st';
        }

        if (dec === 2) {
          return 'nd';
        }

        if (dec === 3) {
          return 'rd';
        }

        return 'th';
      } //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "t6oF":
    /*!******************************************************!*\
      !*** ./node_modules/@firebase/auth/dist/auth.esm.js ***!
      \******************************************************/

    /*! no exports provided */

    /***/
    function t6oF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "zIRd");

      (function () {
        /*
        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
        */
        var k,
            aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
          a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };

        function ba(a) {
          a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];

          for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c;
          }

          return globalThis;
        }

        var ca = ba(this);

        function da(a, b) {
          if (b) {
            var c = ca;
            a = a.split(".");

            for (var d = 0; d < a.length - 1; d++) {
              var e = a[d];
              e in c || (c[e] = {});
              c = c[e];
            }

            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && aa(c, a, {
              configurable: !0,
              writable: !0,
              value: b
            });
          }
        }

        function ea(a) {
          var b = 0;
          return function () {
            return b < a.length ? {
              done: !1,
              value: a[b++]
            } : {
              done: !0
            };
          };
        }

        function fa(a) {
          var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
          return b ? b.call(a) : {
            next: ea(a)
          };
        }

        da("Promise", function (a) {
          function b(g) {
            this.b = 0;
            this.c = void 0;
            this.a = [];
            var h = this.f();

            try {
              g(h.resolve, h.reject);
            } catch (n) {
              h.reject(n);
            }
          }

          function c() {
            this.a = null;
          }

          function d(g) {
            return g instanceof b ? g : new b(function (h) {
              h(g);
            });
          }

          if (a) return a;

          c.prototype.b = function (g) {
            if (null == this.a) {
              this.a = [];
              var h = this;
              this.c(function () {
                h.g();
              });
            }

            this.a.push(g);
          };

          var e = ca.setTimeout;

          c.prototype.c = function (g) {
            e(g, 0);
          };

          c.prototype.g = function () {
            for (; this.a && this.a.length;) {
              var g = this.a;
              this.a = [];

              for (var h = 0; h < g.length; ++h) {
                var n = g[h];
                g[h] = null;

                try {
                  n();
                } catch (p) {
                  this.f(p);
                }
              }
            }

            this.a = null;
          };

          c.prototype.f = function (g) {
            this.c(function () {
              throw g;
            });
          };

          b.prototype.f = function () {
            function g(p) {
              return function (v) {
                n || (n = !0, p.call(h, v));
              };
            }

            var h = this,
                n = !1;
            return {
              resolve: g(this.v),
              reject: g(this.g)
            };
          };

          b.prototype.v = function (g) {
            if (g === this) this.g(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof b) this.o(g);else {
              a: switch (typeof g) {
                case "object":
                  var h = null != g;
                  break a;

                case "function":
                  h = !0;
                  break a;

                default:
                  h = !1;
              }

              h ? this.m(g) : this.h(g);
            }
          };

          b.prototype.m = function (g) {
            var h = void 0;

            try {
              h = g.then;
            } catch (n) {
              this.g(n);
              return;
            }

            "function" == typeof h ? this.u(h, g) : this.h(g);
          };

          b.prototype.g = function (g) {
            this.i(2, g);
          };

          b.prototype.h = function (g) {
            this.i(1, g);
          };

          b.prototype.i = function (g, h) {
            if (0 != this.b) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
            this.b = g;
            this.c = h;
            this.l();
          };

          b.prototype.l = function () {
            if (null != this.a) {
              for (var g = 0; g < this.a.length; ++g) {
                f.b(this.a[g]);
              }

              this.a = null;
            }
          };

          var f = new c();

          b.prototype.o = function (g) {
            var h = this.f();
            g.Pa(h.resolve, h.reject);
          };

          b.prototype.u = function (g, h) {
            var n = this.f();

            try {
              g.call(h, n.resolve, n.reject);
            } catch (p) {
              n.reject(p);
            }
          };

          b.prototype.then = function (g, h) {
            function n(A, Q) {
              return "function" == typeof A ? function (xa) {
                try {
                  p(A(xa));
                } catch (Ad) {
                  v(Ad);
                }
              } : Q;
            }

            var p,
                v,
                B = new b(function (A, Q) {
              p = A;
              v = Q;
            });
            this.Pa(n(g, p), n(h, v));
            return B;
          };

          b.prototype["catch"] = function (g) {
            return this.then(void 0, g);
          };

          b.prototype.Pa = function (g, h) {
            function n() {
              switch (p.b) {
                case 1:
                  g(p.c);
                  break;

                case 2:
                  h(p.c);
                  break;

                default:
                  throw Error("Unexpected state: " + p.b);
              }
            }

            var p = this;
            null == this.a ? f.b(n) : this.a.push(n);
          };

          b.resolve = d;

          b.reject = function (g) {
            return new b(function (h, n) {
              n(g);
            });
          };

          b.race = function (g) {
            return new b(function (h, n) {
              for (var p = fa(g), v = p.next(); !v.done; v = p.next()) {
                d(v.value).Pa(h, n);
              }
            });
          };

          b.all = function (g) {
            var h = fa(g),
                n = h.next();
            return n.done ? d([]) : new b(function (p, v) {
              function B(xa) {
                return function (Ad) {
                  A[xa] = Ad;
                  Q--;
                  0 == Q && p(A);
                };
              }

              var A = [],
                  Q = 0;

              do {
                A.push(void 0), Q++, d(n.value).Pa(B(A.length - 1), v), n = h.next();
              } while (!n.done);
            });
          };

          return b;
        });
        var ha = ha || {},
            l = this || self,
            ia = /^[\w+/_-]+[=]{0,2}$/,
            ja = null;

        function ka(a) {
          return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ia.test(a) ? a : "";
        }

        function la() {}

        function ma(a) {
          var b = typeof a;
          return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        }

        function na(a) {
          var b = ma(a);
          return "array" == b || "object" == b && "number" == typeof a.length;
        }

        function oa(a) {
          return "function" == ma(a);
        }

        function m(a) {
          var b = typeof a;
          return "object" == b && null != a || "function" == b;
        }

        function pa(a) {
          return Object.prototype.hasOwnProperty.call(a, qa) && a[qa] || (a[qa] = ++ra);
        }

        var qa = "closure_uid_" + (1E9 * Math.random() >>> 0),
            ra = 0;

        function sa(a, b, c) {
          return a.call.apply(a.bind, arguments);
        }

        function ta(a, b, c) {
          if (!a) throw Error();

          if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
              var e = Array.prototype.slice.call(arguments);
              Array.prototype.unshift.apply(e, d);
              return a.apply(b, e);
            };
          }

          return function () {
            return a.apply(b, arguments);
          };
        }

        function q(a, b, c) {
          Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = sa : q = ta;
          return q.apply(null, arguments);
        }

        function ua(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
          };
        }

        var va = Date.now;

        function r(a, b) {
          function c() {}

          c.prototype = b.prototype;
          a.$a = b.prototype;
          a.prototype = new c();
          a.prototype.constructor = a;
        }

        function wa(a) {
          return a;
        }

        ;
        /*
        Copyright 2017 Google Inc.
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function t(a, b, c) {
          this.code = ya + a;
          this.message = b || za[a] || "";
          this.a = c || null;
        }

        r(t, Error);

        t.prototype.w = function () {
          var a = {
            code: this.code,
            message: this.message
          };
          this.a && (a.serverResponse = this.a);
          return a;
        };

        t.prototype.toJSON = function () {
          return this.w();
        };

        function Aa(a) {
          var b = a && a.code;
          return b ? new t(b.substring(ya.length), a.message, a.serverResponse) : null;
        }

        var ya = "auth/",
            za = {
          "admin-restricted-operation": "This operation is restricted to administrators only.",
          "argument-error": "",
          "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
          "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
          "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
          "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
          "cordova-not-ready": "Cordova framework is not ready.",
          "cors-unsupported": "This browser is not supported.",
          "credential-already-in-use": "This credential is already associated with a different user account.",
          "custom-token-mismatch": "The custom token corresponds to a different audience.",
          "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
          "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
          "email-change-needs-verification": "Multi-factor users must always have a verified email.",
          "email-already-in-use": "The email address is already in use by another account.",
          "expired-action-code": "The action code has expired. ",
          "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
          "internal-error": "An internal error has occurred.",
          "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
          "invalid-app-id": "The mobile app identifier is not registed for the current project.",
          "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
          "invalid-auth-event": "An internal error has occurred.",
          "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
          "invalid-continue-uri": "The continue URL provided in the request is invalid.",
          "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
          "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
          "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
          "invalid-email": "The email address is badly formatted.",
          "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
          "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
          "invalid-credential": "The supplied auth credential is malformed or has expired.",
          "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
          "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
          "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
          "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
          "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
          "wrong-password": "The password is invalid or the user does not have a password.",
          "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
          "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
          "invalid-provider-id": "The specified provider ID is invalid.",
          "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
          "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
          "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
          "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
          "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
          "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
          "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
          "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
          "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
          "missing-continue-uri": "A continue URL must be provided in the request.",
          "missing-iframe-start": "An internal error has occurred.",
          "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
          "missing-multi-factor-info": "No second factor identifier is provided.",
          "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
          "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
          "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
          "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
          "app-deleted": "This instance of FirebaseApp has been deleted.",
          "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
          "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
          "no-auth-event": "An internal error has occurred.",
          "no-such-provider": "User was not linked to an account with the given provider.",
          "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
          "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
          "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
          "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
          "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
          "provider-already-linked": "User can only be linked to one identity for the given provider.",
          "quota-exceeded": "The project's quota for this operation has been exceeded.",
          "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
          "redirect-operation-pending": "A redirect sign-in operation is already pending.",
          "rejected-credential": "The request contains malformed or mismatching credentials.",
          "second-factor-already-in-use": "The second factor is already enrolled on this account.",
          "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
          "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
          timeout: "The operation has timed out.",
          "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
          "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
          "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
          "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
          "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
          "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
          "unverified-email": "The operation requires a verified email.",
          "user-cancelled": "The user did not grant your application the permissions it requested.",
          "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
          "user-disabled": "The user account has been disabled by an administrator.",
          "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
          "user-signed-out": "",
          "weak-password": "The password must be 6 characters long or more.",
          "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
        };
        /*
        Copyright 2017 Google LLC
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        var Ba = {
          kd: {
            Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "b"
          },
          rd: {
            Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://securetoken.googleapis.com/v1/token",
            Va: "https://identitytoolkit.googleapis.com/v2/",
            id: "p"
          },
          td: {
            Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "s"
          },
          ud: {
            Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token",
            Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "t"
          }
        };

        function Ca(a) {
          for (var b in Ba) {
            if (Ba[b].id === a) return a = Ba[b], {
              firebaseEndpoint: a.Sa,
              secureTokenEndpoint: a.Ya,
              identityPlatformEndpoint: a.Va
            };
          }

          return null;
        }

        var Da;
        Da = Ca("__EID__") ? "__EID__" : void 0;

        function Ea(a) {
          if (!a) return !1;

          try {
            return !!a.$goog_Thenable;
          } catch (b) {
            return !1;
          }
        }

        ;

        function u(a) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, u);else {
            var b = Error().stack;
            b && (this.stack = b);
          }
          a && (this.message = String(a));
        }

        r(u, Error);
        u.prototype.name = "CustomError";

        function Fa(a, b) {
          a = a.split("%s");

          for (var c = "", d = a.length - 1, e = 0; e < d; e++) {
            c += a[e] + (e < b.length ? b[e] : "%s");
          }

          u.call(this, c + a[d]);
        }

        r(Fa, u);
        Fa.prototype.name = "AssertionError";

        function Ga(a, b) {
          throw new Fa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        }

        ;

        function Ha(a, b) {
          this.c = a;
          this.f = b;
          this.b = 0;
          this.a = null;
        }

        Ha.prototype.get = function () {
          if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null;
          } else a = this.c();

          return a;
        };

        function Ia(a, b) {
          a.f(b);
          100 > a.b && (a.b++, b.next = a.a, a.a = b);
        }

        ;

        function Ja() {
          this.b = this.a = null;
        }

        var La = new Ha(function () {
          return new Ka();
        }, function (a) {
          a.reset();
        });

        Ja.prototype.add = function (a, b) {
          var c = La.get();
          c.set(a, b);
          this.b ? this.b.next = c : this.a = c;
          this.b = c;
        };

        function Ma() {
          var a = Na,
              b = null;
          a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
          return b;
        }

        function Ka() {
          this.next = this.b = this.a = null;
        }

        Ka.prototype.set = function (a, b) {
          this.a = a;
          this.b = b;
          this.next = null;
        };

        Ka.prototype.reset = function () {
          this.next = this.b = this.a = null;
        };

        var Oa = Array.prototype.indexOf ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        } : function (a, b) {
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

          for (var c = 0; c < a.length; c++) {
            if (c in a && a[c] === b) return c;
          }

          return -1;
        },
            w = Array.prototype.forEach ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        } : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) {
            f in e && b.call(c, e[f], f, a);
          }
        };

        function Pa(a, b) {
          for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
            d in c && b.call(void 0, c[d], d, a);
          }
        }

        var Qa = Array.prototype.filter ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        } : function (a, b) {
          for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++) {
            if (g in f) {
              var h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h);
            }
          }

          return d;
        },
            Ra = Array.prototype.map ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        } : function (a, b) {
          for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) {
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          }

          return d;
        },
            Sa = Array.prototype.some ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        } : function (a, b) {
          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          }

          return !1;
        };

        function Ta(a) {
          a: {
            var b = Ua;

            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
              if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a;
              }
            }

            b = -1;
          }

          return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
        }

        function Va(a, b) {
          return 0 <= Oa(a, b);
        }

        function Wa(a, b) {
          b = Oa(a, b);
          var c;
          (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
          return c;
        }

        function Xa(a, b) {
          var c = 0;
          Pa(a, function (d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++;
          });
        }

        function Ya(a) {
          return Array.prototype.concat.apply([], arguments);
        }

        function Za(a) {
          var b = a.length;

          if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) {
              c[d] = a[d];
            }

            return c;
          }

          return [];
        }

        ;
        var $a = String.prototype.trim ? function (a) {
          return a.trim();
        } : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
            ab = /&/g,
            bb = /</g,
            cb = />/g,
            db = /"/g,
            eb = /'/g,
            fb = /\x00/g,
            gb = /[\x00&<>"']/;

        function x(a, b) {
          return -1 != a.indexOf(b);
        }

        function hb(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }

        ;
        var ib;

        a: {
          var jb = l.navigator;

          if (jb) {
            var kb = jb.userAgent;

            if (kb) {
              ib = kb;
              break a;
            }
          }

          ib = "";
        }

        function y(a) {
          return x(ib, a);
        }

        ;

        function lb(a, b) {
          for (var c in a) {
            b.call(void 0, a[c], c, a);
          }
        }

        function mb(a) {
          for (var b in a) {
            return !1;
          }

          return !0;
        }

        function nb(a) {
          var b = {},
              c;

          for (c in a) {
            b[c] = a[c];
          }

          return b;
        }

        var ob = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function z(a, b) {
          for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];

            for (c in d) {
              a[c] = d[c];
            }

            for (var f = 0; f < ob.length; f++) {
              c = ob[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
            }
          }
        }

        ;

        function pb(a, b) {
          a: {
            try {
              var c = a && a.ownerDocument,
                  d = c && (c.defaultView || c.parentWindow);
              d = d || l;

              if (d.Element && d.Location) {
                var e = d;
                break a;
              }
            } catch (g) {}

            e = null;
          }

          if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
            if (m(a)) try {
              var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
            } catch (g) {
              f = "<object could not be stringified>";
            } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            Ga("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f);
          }
        }

        ;

        function qb(a, b) {
          this.a = a === rb && b || "";
          this.b = sb;
        }

        qb.prototype.sa = !0;

        qb.prototype.ra = function () {
          return this.a;
        };

        qb.prototype.toString = function () {
          return "Const{" + this.a + "}";
        };

        function tb(a) {
          if (a instanceof qb && a.constructor === qb && a.b === sb) return a.a;
          Ga("expected object of type Const, got '" + a + "'");
          return "type_error:Const";
        }

        var sb = {},
            rb = {};
        var ub;

        function vb() {
          if (void 0 === ub) {
            var a = null,
                b = l.trustedTypes;

            if (b && b.createPolicy) {
              try {
                a = b.createPolicy("goog#html", {
                  createHTML: wa,
                  createScript: wa,
                  createScriptURL: wa
                });
              } catch (c) {
                l.console && l.console.error(c.message);
              }

              ub = a;
            } else ub = a;
          }

          return ub;
        }

        ;

        function wb(a, b) {
          this.a = b === xb ? a : "";
        }

        wb.prototype.sa = !0;

        wb.prototype.ra = function () {
          return this.a.toString();
        };

        wb.prototype.toString = function () {
          return "TrustedResourceUrl{" + this.a + "}";
        };

        function yb(a) {
          if (a instanceof wb && a.constructor === wb) return a.a;
          Ga("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ma(a));
          return "type_error:TrustedResourceUrl";
        }

        function zb(a, b) {
          var c = tb(a);
          if (!Ab.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
          a = c.replace(Bb, function (d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof qb ? tb(d) : encodeURIComponent(String(d));
          });
          return Cb(a);
        }

        var Bb = /%{(\w+)}/g,
            Ab = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            xb = {};

        function Cb(a) {
          var b = vb();
          a = b ? b.createScriptURL(a) : a;
          return new wb(a, xb);
        }

        ;

        function C(a, b) {
          this.a = b === Db ? a : "";
        }

        C.prototype.sa = !0;

        C.prototype.ra = function () {
          return this.a.toString();
        };

        C.prototype.toString = function () {
          return "SafeUrl{" + this.a + "}";
        };

        function Eb(a) {
          if (a instanceof C && a.constructor === C) return a.a;
          Ga("expected object of type SafeUrl, got '" + a + "' of type " + ma(a));
          return "type_error:SafeUrl";
        }

        var Fb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
            Gb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
            Hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

        function Ib(a) {
          if (a instanceof C) return a;
          a = "object" == typeof a && a.sa ? a.ra() : String(a);
          if (Hb.test(a)) a = new C(a, Db);else {
            a = String(a);
            a = a.replace(/(%0A|%0D)/g, "");
            var b = a.match(Gb);
            a = b && Fb.test(b[1]) ? new C(a, Db) : null;
          }
          return a;
        }

        function Jb(a) {
          if (a instanceof C) return a;
          a = "object" == typeof a && a.sa ? a.ra() : String(a);
          Hb.test(a) || (a = "about:invalid#zClosurez");
          return new C(a, Db);
        }

        var Db = {},
            Kb = new C("about:invalid#zClosurez", Db);

        function Lb(a, b, c) {
          this.a = c === Mb ? a : "";
        }

        Lb.prototype.sa = !0;

        Lb.prototype.ra = function () {
          return this.a.toString();
        };

        Lb.prototype.toString = function () {
          return "SafeHtml{" + this.a + "}";
        };

        function Nb(a) {
          if (a instanceof Lb && a.constructor === Lb) return a.a;
          Ga("expected object of type SafeHtml, got '" + a + "' of type " + ma(a));
          return "type_error:SafeHtml";
        }

        var Mb = {};

        function Ob(a, b) {
          pb(a, "HTMLScriptElement");
          a.src = yb(b);
          (b = a.ownerDocument && a.ownerDocument.defaultView) && b != l ? b = ka(b.document) : (null === ja && (ja = ka(l.document)), b = ja);
          b && a.setAttribute("nonce", b);
        }

        function Pb(a, b, c, d) {
          a = a instanceof C ? a : Jb(a);
          b = b || l;
          c = c instanceof qb ? tb(c) : c || "";
          return b.open(Eb(a), c, d, void 0);
        }

        ;

        function Qb(a, b) {
          for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
            d += c.shift() + e.shift();
          }

          return d + c.join("%s");
        }

        function Rb(a) {
          gb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ab, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(bb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(cb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(db, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(eb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(fb, "&#0;")));
          return a;
        }

        ;

        function Sb(a) {
          Sb[" "](a);
          return a;
        }

        Sb[" "] = la;

        function Tb(a, b) {
          var c = Ub;
          return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
        }

        ;
        var Vb = y("Opera"),
            Wb = y("Trident") || y("MSIE"),
            Xb = y("Edge"),
            Yb = Xb || Wb,
            Zb = y("Gecko") && !(x(ib.toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
            $b = x(ib.toLowerCase(), "webkit") && !y("Edge");

        function ac() {
          var a = l.document;
          return a ? a.documentMode : void 0;
        }

        var bc;

        a: {
          var cc = "",
              dc = function () {
            var a = ib;
            if (Zb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Xb) return /Edge\/([\d\.]+)/.exec(a);
            if (Wb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if ($b) return /WebKit\/(\S+)/.exec(a);
            if (Vb) return /(?:Version)[ \/]?(\S+)/.exec(a);
          }();

          dc && (cc = dc ? dc[1] : "");

          if (Wb) {
            var ec = ac();

            if (null != ec && ec > parseFloat(cc)) {
              bc = String(ec);
              break a;
            }
          }

          bc = cc;
        }

        var Ub = {};

        function fc(a) {
          return Tb(a, function () {
            for (var b = 0, c = $a(String(bc)).split("."), d = $a(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
              var g = c[f] || "",
                  h = d[f] || "";

              do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                b = hb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || hb(0 == g[2].length, 0 == h[2].length) || hb(g[2], h[2]);
                g = g[3];
                h = h[3];
              } while (0 == b);
            }

            return 0 <= b;
          });
        }

        var gc;

        if (l.document && Wb) {
          var hc = ac();
          gc = hc ? hc : parseInt(bc, 10) || void 0;
        } else gc = void 0;

        var ic = gc;

        try {
          new self.OffscreenCanvas(0, 0).getContext("2d");
        } catch (a) {}

        var jc = !Wb || 9 <= Number(ic);

        function kc(a) {
          var b = document;
          return "string" === typeof a ? b.getElementById(a) : a;
        }

        function lc(a, b) {
          lb(b, function (c, d) {
            c && "object" == typeof c && c.sa && (c = c.ra());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : mc.hasOwnProperty(d) ? a.setAttribute(mc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
          });
        }

        var mc = {
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          colspan: "colSpan",
          frameborder: "frameBorder",
          height: "height",
          maxlength: "maxLength",
          nonce: "nonce",
          role: "role",
          rowspan: "rowSpan",
          type: "type",
          usemap: "useMap",
          valign: "vAlign",
          width: "width"
        };

        function nc(a, b, c) {
          var d = arguments,
              e = document,
              f = String(d[0]),
              g = d[1];

          if (!jc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Rb(g.name), '"');

            if (g.type) {
              f.push(' type="', Rb(g.type), '"');
              var h = {};
              z(h, g);
              delete h.type;
              g = h;
            }

            f.push(">");
            f = f.join("");
          }

          f = oc(e, f);
          g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : lc(f, g));
          2 < d.length && pc(e, f, d);
          return f;
        }

        function pc(a, b, c) {
          function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
          }

          for (var e = 2; e < c.length; e++) {
            var f = c[e];
            if (!na(f) || m(f) && 0 < f.nodeType) d(f);else {
              a: {
                if (f && "number" == typeof f.length) {
                  if (m(f)) {
                    var g = "function" == typeof f.item || "string" == typeof f.item;
                    break a;
                  }

                  if (oa(f)) {
                    g = "function" == typeof f.item;
                    break a;
                  }
                }

                g = !1;
              }

              w(g ? Za(f) : f, d);
            }
          }
        }

        function oc(a, b) {
          b = String(b);
          "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
          return a.createElement(b);
        }

        ;

        function qc(a) {
          l.setTimeout(function () {
            throw a;
          }, 0);
        }

        var rc;

        function sc() {
          var a = l.MessageChannel;
          "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function a() {
            var e = oc(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = q(function (n) {
              if (("*" == h || n.origin == h) && n.data == g) this.port1.onmessage();
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
              postMessage: function postMessage() {
                f.postMessage(g, h);
              }
            };
          });

          if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
            var b = new a(),
                c = {},
                d = c;

            b.port1.onmessage = function () {
              if (void 0 !== c.next) {
                c = c.next;
                var e = c.Fb;
                c.Fb = null;
                e();
              }
            };

            return function (e) {
              d.next = {
                Fb: e
              };
              d = d.next;
              b.port2.postMessage(0);
            };
          }

          return function (e) {
            l.setTimeout(e, 0);
          };
        }

        ;

        function tc(a, b) {
          uc || vc();
          wc || (uc(), wc = !0);
          Na.add(a, b);
        }

        var uc;

        function vc() {
          if (l.Promise && l.Promise.resolve) {
            var a = l.Promise.resolve(void 0);

            uc = function uc() {
              a.then(xc);
            };
          } else uc = function uc() {
            var b = xc;
            !oa(l.setImmediate) || l.Window && l.Window.prototype && !y("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (rc || (rc = sc()), rc(b)) : l.setImmediate(b);
          };
        }

        var wc = !1,
            Na = new Ja();

        function xc() {
          for (var a; a = Ma();) {
            try {
              a.a.call(a.b);
            } catch (b) {
              qc(b);
            }

            Ia(La, a);
          }

          wc = !1;
        }

        ;

        function D(a, b) {
          this.a = yc;
          this.i = void 0;
          this.f = this.b = this.c = null;
          this.g = this.h = !1;
          if (a != la) try {
            var c = this;
            a.call(b, function (d) {
              zc(c, Ac, d);
            }, function (d) {
              if (!(d instanceof Bc)) try {
                if (d instanceof Error) throw d;
                throw Error("Promise rejected.");
              } catch (e) {}
              zc(c, Cc, d);
            });
          } catch (d) {
            zc(this, Cc, d);
          }
        }

        var yc = 0,
            Ac = 2,
            Cc = 3;

        function Dc() {
          this.next = this.f = this.b = this.g = this.a = null;
          this.c = !1;
        }

        Dc.prototype.reset = function () {
          this.f = this.b = this.g = this.a = null;
          this.c = !1;
        };

        var Ec = new Ha(function () {
          return new Dc();
        }, function (a) {
          a.reset();
        });

        function Fc(a, b, c) {
          var d = Ec.get();
          d.g = a;
          d.b = b;
          d.f = c;
          return d;
        }

        function E(a) {
          if (a instanceof D) return a;
          var b = new D(la);
          zc(b, Ac, a);
          return b;
        }

        function F(a) {
          return new D(function (b, c) {
            c(a);
          });
        }

        function Gc(a, b, c) {
          Hc(a, b, c, null) || tc(ua(b, a));
        }

        function Ic(a) {
          return new D(function (b, c) {
            var d = a.length,
                e = [];
            if (d) for (var f = function f(p, v) {
              d--;
              e[p] = v;
              0 == d && b(e);
            }, g = function g(p) {
              c(p);
            }, h = 0, n; h < a.length; h++) {
              n = a[h], Gc(n, ua(f, h), g);
            } else b(e);
          });
        }

        function Jc(a) {
          return new D(function (b) {
            var c = a.length,
                d = [];
            if (c) for (var e = function e(h, n, p) {
              c--;
              d[h] = n ? {
                Ob: !0,
                value: p
              } : {
                Ob: !1,
                reason: p
              };
              0 == c && b(d);
            }, f = 0, g; f < a.length; f++) {
              g = a[f], Gc(g, ua(e, f, !0), ua(e, f, !1));
            } else b(d);
          });
        }

        D.prototype.then = function (a, b, c) {
          return Kc(this, oa(a) ? a : null, oa(b) ? b : null, c);
        };

        D.prototype.$goog_Thenable = !0;
        k = D.prototype;

        k.na = function (a, b) {
          a = Fc(a, a, b);
          a.c = !0;
          Lc(this, a);
          return this;
        };

        k.s = function (a, b) {
          return Kc(this, null, a, b);
        };

        k.cancel = function (a) {
          if (this.a == yc) {
            var b = new Bc(a);
            tc(function () {
              Mc(this, b);
            }, this);
          }
        };

        function Mc(a, b) {
          if (a.a == yc) if (a.c) {
            var c = a.c;

            if (c.b) {
              for (var d = 0, e = null, f = null, g = c.b; g && (g.c || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) {
                e || (f = g);
              }

              e && (c.a == yc && 1 == d ? Mc(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Nc(c), Oc(c, e, Cc, b)));
            }

            a.c = null;
          } else zc(a, Cc, b);
        }

        function Lc(a, b) {
          a.b || a.a != Ac && a.a != Cc || Pc(a);
          a.f ? a.f.next = b : a.b = b;
          a.f = b;
        }

        function Kc(a, b, c, d) {
          var e = Fc(null, null, null);
          e.a = new D(function (f, g) {
            e.g = b ? function (h) {
              try {
                var n = b.call(d, h);
                f(n);
              } catch (p) {
                g(p);
              }
            } : f;
            e.b = c ? function (h) {
              try {
                var n = c.call(d, h);
                void 0 === n && h instanceof Bc ? g(h) : f(n);
              } catch (p) {
                g(p);
              }
            } : g;
          });
          e.a.c = a;
          Lc(a, e);
          return e.a;
        }

        k.Zc = function (a) {
          this.a = yc;
          zc(this, Ac, a);
        };

        k.$c = function (a) {
          this.a = yc;
          zc(this, Cc, a);
        };

        function zc(a, b, c) {
          a.a == yc && (a === c && (b = Cc, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Hc(c, a.Zc, a.$c, a) || (a.i = c, a.a = b, a.c = null, Pc(a), b != Cc || c instanceof Bc || Qc(a, c)));
        }

        function Hc(a, b, c, d) {
          if (a instanceof D) return Lc(a, Fc(b || la, c || null, d)), !0;
          if (Ea(a)) return a.then(b, c, d), !0;
          if (m(a)) try {
            var e = a.then;
            if (oa(e)) return Rc(a, e, b, c, d), !0;
          } catch (f) {
            return c.call(d, f), !0;
          }
          return !1;
        }

        function Rc(a, b, c, d, e) {
          function f(n) {
            h || (h = !0, d.call(e, n));
          }

          function g(n) {
            h || (h = !0, c.call(e, n));
          }

          var h = !1;

          try {
            b.call(a, g, f);
          } catch (n) {
            f(n);
          }
        }

        function Pc(a) {
          a.h || (a.h = !0, tc(a.fc, a));
        }

        function Nc(a) {
          var b = null;
          a.b && (b = a.b, a.b = b.next, b.next = null);
          a.b || (a.f = null);
          return b;
        }

        k.fc = function () {
          for (var a; a = Nc(this);) {
            Oc(this, a, this.a, this.i);
          }

          this.h = !1;
        };

        function Oc(a, b, c, d) {
          if (c == Cc && b.b && !b.c) for (; a && a.g; a = a.c) {
            a.g = !1;
          }
          if (b.a) b.a.c = null, Sc(b, c, d);else try {
            b.c ? b.g.call(b.f) : Sc(b, c, d);
          } catch (e) {
            Tc.call(null, e);
          }
          Ia(Ec, b);
        }

        function Sc(a, b, c) {
          b == Ac ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
        }

        function Qc(a, b) {
          a.g = !0;
          tc(function () {
            a.g && Tc.call(null, b);
          });
        }

        var Tc = qc;

        function Bc(a) {
          u.call(this, a);
        }

        r(Bc, u);
        Bc.prototype.name = "cancel";

        function Uc() {
          0 != Vc && (Wc[pa(this)] = this);
          this.xa = this.xa;
          this.oa = this.oa;
        }

        var Vc = 0,
            Wc = {};
        Uc.prototype.xa = !1;

        function Xc(a) {
          if (!a.xa && (a.xa = !0, a.Da(), 0 != Vc)) {
            var b = pa(a);
            if (0 != Vc && a.oa && 0 < a.oa.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
            delete Wc[b];
          }
        }

        Uc.prototype.Da = function () {
          if (this.oa) for (; this.oa.length;) {
            this.oa.shift()();
          }
        };

        var Yc = Object.freeze || function (a) {
          return a;
        };

        var Zc = !Wb || 9 <= Number(ic),
            $c = Wb && !fc("9"),
            ad = function () {
          if (!l.addEventListener || !Object.defineProperty) return !1;
          var a = !1,
              b = Object.defineProperty({}, "passive", {
            get: function get() {
              a = !0;
            }
          });

          try {
            l.addEventListener("test", la, b), l.removeEventListener("test", la, b);
          } catch (c) {}

          return a;
        }();

        function G(a, b) {
          this.type = a;
          this.b = this.target = b;
          this.defaultPrevented = !1;
        }

        G.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        };

        function bd(a, b) {
          G.call(this, a ? a.type : "");
          this.relatedTarget = this.b = this.target = null;
          this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
          this.key = "";
          this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
          this.pointerId = 0;
          this.pointerType = "";
          this.a = null;

          if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;

            if (b = a.relatedTarget) {
              if (Zb) {
                a: {
                  try {
                    Sb(b.nodeName);
                    var e = !0;
                    break a;
                  } catch (f) {}

                  e = !1;
                }

                e || (b = null);
              }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : cd[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.preventDefault();
          }
        }

        r(bd, G);
        var cd = Yc({
          2: "touch",
          3: "pen",
          4: "mouse"
        });

        bd.prototype.preventDefault = function () {
          bd.$a.preventDefault.call(this);
          var a = this.a;
          if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, $c) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
          } catch (b) {}
        };

        bd.prototype.g = function () {
          return this.a;
        };

        var dd = "closure_listenable_" + (1E6 * Math.random() | 0),
            ed = 0;

        function fd(a, b, c, d, e) {
          this.listener = a;
          this.proxy = null;
          this.src = b;
          this.type = c;
          this.capture = !!d;
          this.Ua = e;
          this.key = ++ed;
          this.va = this.Oa = !1;
        }

        function gd(a) {
          a.va = !0;
          a.listener = null;
          a.proxy = null;
          a.src = null;
          a.Ua = null;
        }

        ;

        function hd(a) {
          this.src = a;
          this.a = {};
          this.b = 0;
        }

        hd.prototype.add = function (a, b, c, d, e) {
          var f = a.toString();
          a = this.a[f];
          a || (a = this.a[f] = [], this.b++);
          var g = id(a, b, d, e);
          -1 < g ? (b = a[g], c || (b.Oa = !1)) : (b = new fd(b, this.src, f, !!d, e), b.Oa = c, a.push(b));
          return b;
        };

        function jd(a, b) {
          var c = b.type;
          c in a.a && Wa(a.a[c], b) && (gd(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        }

        function id(a, b, c, d) {
          for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.va && f.listener == b && f.capture == !!c && f.Ua == d) return e;
          }

          return -1;
        }

        ;
        var kd = "closure_lm_" + (1E6 * Math.random() | 0),
            ld = {},
            md = 0;

        function nd(a, b, c, d, e) {
          if (d && d.once) od(a, b, c, d, e);else if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
            nd(a, b[f], c, d, e);
          } else c = pd(c), a && a[dd] ? qd(a, b, c, m(d) ? !!d.capture : !!d, e) : rd(a, b, c, !1, d, e);
        }

        function rd(a, b, c, d, e, f) {
          if (!b) throw Error("Invalid event type");
          var g = m(e) ? !!e.capture : !!e,
              h = sd(a);
          h || (a[kd] = h = new hd(a));
          c = h.add(b, c, d, g, f);

          if (!c.proxy) {
            d = td();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) ad || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(ud(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
            md++;
          }
        }

        function td() {
          var a = vd,
              b = Zc ? function (c) {
            return a.call(b.src, b.listener, c);
          } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
          return b;
        }

        function od(a, b, c, d, e) {
          if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
            od(a, b[f], c, d, e);
          } else c = pd(c), a && a[dd] ? wd(a, b, c, m(d) ? !!d.capture : !!d, e) : rd(a, b, c, !0, d, e);
        }

        function H(a, b, c, d, e) {
          if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
            H(a, b[f], c, d, e);
          } else (d = m(d) ? !!d.capture : !!d, c = pd(c), a && a[dd]) ? (a = a.v, b = String(b).toString(), b in a.a && (f = a.a[b], c = id(f, c, d, e), -1 < c && (gd(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = sd(a)) && (b = a.a[b.toString()], a = -1, b && (a = id(b, c, d, e)), (c = -1 < a ? b[a] : null) && xd(c));
        }

        function xd(a) {
          if ("number" !== typeof a && a && !a.va) {
            var b = a.src;
            if (b && b[dd]) jd(b.v, a);else {
              var c = a.type,
                  d = a.proxy;
              b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ud(c), d) : b.addListener && b.removeListener && b.removeListener(d);
              md--;
              (c = sd(b)) ? (jd(c, a), 0 == c.b && (c.src = null, b[kd] = null)) : gd(a);
            }
          }
        }

        function ud(a) {
          return a in ld ? ld[a] : ld[a] = "on" + a;
        }

        function yd(a, b, c, d) {
          var e = !0;
          if (a = sd(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.va && (f = zd(f, d), e = e && !1 !== f);
          }
          return e;
        }

        function zd(a, b) {
          var c = a.listener,
              d = a.Ua || a.src;
          a.Oa && xd(a);
          return c.call(d, b);
        }

        function vd(a, b) {
          if (a.va) return !0;

          if (!Zc) {
            if (!b) a: {
              b = ["window", "event"];

              for (var c = l, d = 0; d < b.length; d++) {
                if (c = c[b[d]], null == c) {
                  b = null;
                  break a;
                }
              }

              b = c;
            }
            d = b;
            b = new bd(d, this);
            c = !0;

            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
              a: {
                var e = !1;
                if (0 == d.keyCode) try {
                  d.keyCode = -1;
                  break a;
                } catch (g) {
                  e = !0;
                }
                if (e || void 0 == d.returnValue) d.returnValue = !0;
              }

              d = [];

              for (e = b.b; e; e = e.parentNode) {
                d.push(e);
              }

              a = a.type;

              for (e = d.length - 1; 0 <= e; e--) {
                b.b = d[e];
                var f = yd(d[e], a, !0, b);
                c = c && f;
              }

              for (e = 0; e < d.length; e++) {
                b.b = d[e], f = yd(d[e], a, !1, b), c = c && f;
              }
            }

            return c;
          }

          return zd(a, new bd(b, this));
        }

        function sd(a) {
          a = a[kd];
          return a instanceof hd ? a : null;
        }

        var Bd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

        function pd(a) {
          if (oa(a)) return a;
          a[Bd] || (a[Bd] = function (b) {
            return a.handleEvent(b);
          });
          return a[Bd];
        }

        ;

        function I() {
          Uc.call(this);
          this.v = new hd(this);
          this.$b = this;
          this.fb = null;
        }

        r(I, Uc);
        I.prototype[dd] = !0;

        I.prototype.addEventListener = function (a, b, c, d) {
          nd(this, a, b, c, d);
        };

        I.prototype.removeEventListener = function (a, b, c, d) {
          H(this, a, b, c, d);
        };

        I.prototype.dispatchEvent = function (a) {
          var b,
              c = this.fb;
          if (c) for (b = []; c; c = c.fb) {
            b.push(c);
          }
          c = this.$b;
          var d = a.type || a;
          if ("string" === typeof a) a = new G(a, c);else if (a instanceof G) a.target = a.target || c;else {
            var e = a;
            a = new G(d, c);
            z(a, e);
          }
          e = !0;
          if (b) for (var f = b.length - 1; 0 <= f; f--) {
            var g = a.b = b[f];
            e = Cd(g, d, !0, a) && e;
          }
          g = a.b = c;
          e = Cd(g, d, !0, a) && e;
          e = Cd(g, d, !1, a) && e;
          if (b) for (f = 0; f < b.length; f++) {
            g = a.b = b[f], e = Cd(g, d, !1, a) && e;
          }
          return e;
        };

        I.prototype.Da = function () {
          I.$a.Da.call(this);

          if (this.v) {
            var a = this.v,
                b = 0,
                c;

            for (c in a.a) {
              for (var d = a.a[c], e = 0; e < d.length; e++) {
                ++b, gd(d[e]);
              }

              delete a.a[c];
              a.b--;
            }
          }

          this.fb = null;
        };

        function qd(a, b, c, d, e) {
          a.v.add(String(b), c, !1, d, e);
        }

        function wd(a, b, c, d, e) {
          a.v.add(String(b), c, !0, d, e);
        }

        function Cd(a, b, c, d) {
          b = a.v.a[String(b)];
          if (!b) return !0;
          b = b.concat();

          for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];

            if (g && !g.va && g.capture == c) {
              var h = g.listener,
                  n = g.Ua || g.src;
              g.Oa && jd(a.v, g);
              e = !1 !== h.call(n, d) && e;
            }
          }

          return e && !d.defaultPrevented;
        }

        ;

        function Dd(a, b, c) {
          if (oa(a)) c && (a = q(a, c));else if (a && "function" == typeof a.handleEvent) a = q(a.handleEvent, a);else throw Error("Invalid listener argument");
          return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
        }

        function Ed(a) {
          var b = null;
          return new D(function (c, d) {
            b = Dd(function () {
              c(void 0);
            }, a);
            -1 == b && d(Error("Failed to schedule timer."));
          }).s(function (c) {
            l.clearTimeout(b);
            throw c;
          });
        }

        ;

        function Fd(a) {
          if (a.V && "function" == typeof a.V) return a.V();
          if ("string" === typeof a) return a.split("");

          if (na(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) {
              b.push(a[d]);
            }

            return b;
          }

          b = [];
          c = 0;

          for (d in a) {
            b[c++] = a[d];
          }

          return b;
        }

        function Gd(a) {
          if (a.Y && "function" == typeof a.Y) return a.Y();

          if (!a.V || "function" != typeof a.V) {
            if (na(a) || "string" === typeof a) {
              var b = [];
              a = a.length;

              for (var c = 0; c < a; c++) {
                b.push(c);
              }

              return b;
            }

            b = [];
            c = 0;

            for (var d in a) {
              b[c++] = d;
            }

            return b;
          }
        }

        function Hd(a, b) {
          if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (na(a) || "string" === typeof a) w(a, b, void 0);else for (var c = Gd(a), d = Fd(a), e = d.length, f = 0; f < e; f++) {
            b.call(void 0, d[f], c && c[f], a);
          }
        }

        ;

        function Id(a, b) {
          this.b = {};
          this.a = [];
          this.c = 0;
          var c = arguments.length;

          if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");

            for (var d = 0; d < c; d += 2) {
              this.set(arguments[d], arguments[d + 1]);
            }
          } else if (a) if (a instanceof Id) for (c = a.Y(), d = 0; d < c.length; d++) {
            this.set(c[d], a.get(c[d]));
          } else for (d in a) {
            this.set(d, a[d]);
          }
        }

        k = Id.prototype;

        k.V = function () {
          Jd(this);

          for (var a = [], b = 0; b < this.a.length; b++) {
            a.push(this.b[this.a[b]]);
          }

          return a;
        };

        k.Y = function () {
          Jd(this);
          return this.a.concat();
        };

        k.clear = function () {
          this.b = {};
          this.c = this.a.length = 0;
        };

        function Jd(a) {
          if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
              var d = a.a[b];
              Kd(a.b, d) && (a.a[c++] = d);
              b++;
            }

            a.a.length = c;
          }

          if (a.c != a.a.length) {
            var e = {};

            for (c = b = 0; b < a.a.length;) {
              d = a.a[b], Kd(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            }

            a.a.length = c;
          }
        }

        k.get = function (a, b) {
          return Kd(this.b, a) ? this.b[a] : b;
        };

        k.set = function (a, b) {
          Kd(this.b, a) || (this.c++, this.a.push(a));
          this.b[a] = b;
        };

        k.forEach = function (a, b) {
          for (var c = this.Y(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this);
          }
        };

        function Kd(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }

        ;
        var Ld = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

        function Md(a, b) {
          if (a) {
            a = a.split("&");

            for (var c = 0; c < a.length; c++) {
              var d = a[c].indexOf("="),
                  e = null;

              if (0 <= d) {
                var f = a[c].substring(0, d);
                e = a[c].substring(d + 1);
              } else f = a[c];

              b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
            }
          }
        }

        ;

        function Nd(a, b) {
          this.a = this.l = this.f = "";
          this.g = null;
          this.h = this.c = "";
          this.i = !1;
          var c;
          a instanceof Nd ? (this.i = void 0 !== b ? b : a.i, Od(this, a.f), this.l = a.l, this.a = a.a, Pd(this, a.g), this.c = a.c, Qd(this, Rd(a.b)), this.h = a.h) : a && (c = String(a).match(Ld)) ? (this.i = !!b, Od(this, c[1] || "", !0), this.l = Sd(c[2] || ""), this.a = Sd(c[3] || "", !0), Pd(this, c[4]), this.c = Sd(c[5] || "", !0), Qd(this, c[6] || "", !0), this.h = Sd(c[7] || "")) : (this.i = !!b, this.b = new Td(null, this.i));
        }

        Nd.prototype.toString = function () {
          var a = [],
              b = this.f;
          b && a.push(Ud(b, Vd, !0), ":");
          var c = this.a;
          if (c || "file" == b) a.push("//"), (b = this.l) && a.push(Ud(b, Vd, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.g, null != c && a.push(":", String(c));
          if (c = this.c) this.a && "/" != c.charAt(0) && a.push("/"), a.push(Ud(c, "/" == c.charAt(0) ? Wd : Xd, !0));
          (c = this.b.toString()) && a.push("?", c);
          (c = this.h) && a.push("#", Ud(c, Yd));
          return a.join("");
        };

        Nd.prototype.resolve = function (a) {
          var b = new Nd(this),
              c = !!a.f;
          c ? Od(b, a.f) : c = !!a.l;
          c ? b.l = a.l : c = !!a.a;
          c ? b.a = a.a : c = null != a.g;
          var d = a.c;
          if (c) Pd(b, a.g);else if (c = !!a.c) {
            if ("/" != d.charAt(0)) if (this.a && !this.c) d = "/" + d;else {
              var e = b.c.lastIndexOf("/");
              -1 != e && (d = b.c.substr(0, e + 1) + d);
            }
            e = d;
            if (".." == e || "." == e) d = "";else if (x(e, "./") || x(e, "/.")) {
              d = 0 == e.lastIndexOf("/", 0);
              e = e.split("/");

              for (var f = [], g = 0; g < e.length;) {
                var h = e[g++];
                "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0);
              }

              d = f.join("/");
            } else d = e;
          }
          c ? b.c = d : c = "" !== a.b.toString();
          c ? Qd(b, Rd(a.b)) : c = !!a.h;
          c && (b.h = a.h);
          return b;
        };

        function Od(a, b, c) {
          a.f = c ? Sd(b, !0) : b;
          a.f && (a.f = a.f.replace(/:$/, ""));
        }

        function Pd(a, b) {
          if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.g = b;
          } else a.g = null;
        }

        function Qd(a, b, c) {
          b instanceof Td ? (a.b = b, Zd(a.b, a.i)) : (c || (b = Ud(b, $d)), a.b = new Td(b, a.i));
        }

        function J(a, b, c) {
          a.b.set(b, c);
        }

        function ae(a, b) {
          return a.b.get(b);
        }

        function be(a) {
          return a instanceof Nd ? new Nd(a) : new Nd(a, void 0);
        }

        function ce(a, b, c, d) {
          var e = new Nd(null, void 0);
          a && Od(e, a);
          b && (e.a = b);
          c && Pd(e, c);
          d && (e.c = d);
          return e;
        }

        function Sd(a, b) {
          return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
        }

        function Ud(a, b, c) {
          return "string" === typeof a ? (a = encodeURI(a).replace(b, de), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
        }

        function de(a) {
          a = a.charCodeAt(0);
          return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
        }

        var Vd = /[#\/\?@]/g,
            Xd = /[#\?:]/g,
            Wd = /[#\?]/g,
            $d = /[#\?@]/g,
            Yd = /#/g;

        function Td(a, b) {
          this.b = this.a = null;
          this.c = a || null;
          this.f = !!b;
        }

        function ee(a) {
          a.a || (a.a = new Id(), a.b = 0, a.c && Md(a.c, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
        }

        function fe(a) {
          var b = Gd(a);
          if ("undefined" == typeof b) throw Error("Keys are undefined");
          var c = new Td(null, void 0);
          a = Fd(a);

          for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = a[d];
            Array.isArray(f) ? ge(c, e, f) : c.add(e, f);
          }

          return c;
        }

        k = Td.prototype;

        k.add = function (a, b) {
          ee(this);
          this.c = null;
          a = he(this, a);
          var c = this.a.get(a);
          c || this.a.set(a, c = []);
          c.push(b);
          this.b += 1;
          return this;
        };

        function ie(a, b) {
          ee(a);
          b = he(a, b);
          Kd(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, Kd(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Jd(a)));
        }

        k.clear = function () {
          this.a = this.c = null;
          this.b = 0;
        };

        function je(a, b) {
          ee(a);
          b = he(a, b);
          return Kd(a.a.b, b);
        }

        k.forEach = function (a, b) {
          ee(this);
          this.a.forEach(function (c, d) {
            w(c, function (e) {
              a.call(b, e, d, this);
            }, this);
          }, this);
        };

        k.Y = function () {
          ee(this);

          for (var a = this.a.V(), b = this.a.Y(), c = [], d = 0; d < b.length; d++) {
            for (var e = a[d], f = 0; f < e.length; f++) {
              c.push(b[d]);
            }
          }

          return c;
        };

        k.V = function (a) {
          ee(this);
          var b = [];
          if ("string" === typeof a) je(this, a) && (b = Ya(b, this.a.get(he(this, a))));else {
            a = this.a.V();

            for (var c = 0; c < a.length; c++) {
              b = Ya(b, a[c]);
            }
          }
          return b;
        };

        k.set = function (a, b) {
          ee(this);
          this.c = null;
          a = he(this, a);
          je(this, a) && (this.b -= this.a.get(a).length);
          this.a.set(a, [b]);
          this.b += 1;
          return this;
        };

        k.get = function (a, b) {
          if (!a) return b;
          a = this.V(a);
          return 0 < a.length ? String(a[0]) : b;
        };

        function ge(a, b, c) {
          ie(a, b);
          0 < c.length && (a.c = null, a.a.set(he(a, b), Za(c)), a.b += c.length);
        }

        k.toString = function () {
          if (this.c) return this.c;
          if (!this.a) return "";

          for (var a = [], b = this.a.Y(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.V(d);

            for (var f = 0; f < d.length; f++) {
              var g = e;
              "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
              a.push(g);
            }
          }

          return this.c = a.join("&");
        };

        function Rd(a) {
          var b = new Td();
          b.c = a.c;
          a.a && (b.a = new Id(a.a), b.b = a.b);
          return b;
        }

        function he(a, b) {
          b = String(b);
          a.f && (b = b.toLowerCase());
          return b;
        }

        function Zd(a, b) {
          b && !a.f && (ee(a), a.c = null, a.a.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (ie(this, d), ge(this, e, c));
          }, a));
          a.f = b;
        }

        ;

        function ke(a) {
          var b = [];
          le(new me(), a, b);
          return b.join("");
        }

        function me() {}

        function le(a, b, c) {
          if (null == b) c.push("null");else {
            if ("object" == typeof b) {
              if (Array.isArray(b)) {
                var d = b;
                b = d.length;
                c.push("[");

                for (var e = "", f = 0; f < b; f++) {
                  c.push(e), le(a, d[f], c), e = ",";
                }

                c.push("]");
                return;
              }

              if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
                c.push("{");
                e = "";

                for (d in b) {
                  Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), ne(d, c), c.push(":"), le(a, f, c), e = ","));
                }

                c.push("}");
                return;
              }
            }

            switch (typeof b) {
              case "string":
                ne(b, c);
                break;

              case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;

              case "boolean":
                c.push(String(b));
                break;

              case "function":
                c.push("null");
                break;

              default:
                throw Error("Unknown type: " + typeof b);
            }
          }
        }

        var oe = {
          '"': '\\"',
          "\\": "\\\\",
          "/": "\\/",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\x0B": "\\u000b"
        },
            pe = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

        function ne(a, b) {
          b.push('"', a.replace(pe, function (c) {
            var d = oe[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), oe[c] = d);
            return d;
          }), '"');
        }

        ;

        function qe() {
          var a = K();
          return Wb && !!ic && 11 == ic || /Edge\/\d+/.test(a);
        }

        function re() {
          return l.window && l.window.location.href || self && self.location && self.location.href || "";
        }

        function se(a, b) {
          b = b || l.window;
          var c = "about:blank";
          a && (c = Eb(Ib(a) || Kb));
          b.location.href = c;
        }

        function te(a, b) {
          var c = [],
              d;

          for (d in a) {
            d in b ? typeof a[d] != typeof b[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < te(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
          }

          for (d in b) {
            d in a || c.push(d);
          }

          return c;
        }

        function ue() {
          var a = K();
          a = ve(a) != we ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
          return a && 30 > a ? !1 : !Wb || !ic || 9 < ic;
        }

        function xe(a) {
          a = (a || K()).toLowerCase();
          return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
        }

        function ye(a) {
          a = a || l.window;

          try {
            a.close();
          } catch (b) {}
        }

        function ze(a, b, c) {
          var d = Math.floor(1E9 * Math.random()).toString();
          b = b || 500;
          c = c || 600;
          var e = (window.screen.availHeight - c) / 2,
              f = (window.screen.availWidth - b) / 2;
          b = {
            width: b,
            height: c,
            top: 0 < e ? e : 0,
            left: 0 < f ? f : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1
          };
          c = K().toLowerCase();
          d && (b.target = d, x(c, "crios/") && (b.target = "_blank"));
          ve(K()) == Ae && (a = a || "http://localhost", b.scrollbars = !0);
          c = a || "";
          (a = b) || (a = {});
          d = window;
          b = c instanceof C ? c : Ib("undefined" != typeof c.href ? c.href : String(c)) || Kb;
          c = a.target || c.target;
          e = [];

          for (g in a) {
            switch (g) {
              case "width":
              case "height":
              case "top":
              case "left":
                e.push(g + "=" + a[g]);
                break;

              case "target":
              case "noopener":
              case "noreferrer":
                break;

              default:
                e.push(g + "=" + (a[g] ? 1 : 0));
            }
          }

          var g = e.join(",");
          if ((y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c) g = oc(document, "A"), pb(g, "HTMLAnchorElement"), b = b instanceof C ? b : Jb(b), g.href = Eb(b), g.setAttribute("target", c), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, d, 1), g.dispatchEvent(a), g = {};else if (a.noreferrer) {
            if (g = Pb("", d, c, g), a = Eb(b), g && (Yb && x(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, a = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Rb(a) + '">', a = (d = vb()) ? d.createHTML(a) : a, a = new Lb(a, null, Mb), d = g.document)) d.write(Nb(a)), d.close();
          } else (g = Pb(b, d, c, g)) && a.noopener && (g.opener = null);
          if (g) try {
            g.focus();
          } catch (h) {}
          return g;
        }

        function Be(a) {
          return new D(function (b) {
            function c() {
              Ed(2E3).then(function () {
                if (!a || a.closed) b();else return c();
              });
            }

            return c();
          });
        }

        var Ce = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            De = /^[^@]+@[^@]+$/;

        function Ee() {
          var a = null;
          return new D(function (b) {
            "complete" == l.document.readyState ? b() : (a = function a() {
              b();
            }, od(window, "load", a));
          }).s(function (b) {
            H(window, "load", a);
            throw b;
          });
        }

        function Fe() {
          return Ge(void 0) ? Ee().then(function () {
            return new D(function (a, b) {
              var c = l.document,
                  d = setTimeout(function () {
                b(Error("Cordova framework is not ready."));
              }, 1E3);
              c.addEventListener("deviceready", function () {
                clearTimeout(d);
                a();
              }, !1);
            });
          }) : F(Error("Cordova must run in an Android or iOS file scheme."));
        }

        function Ge(a) {
          a = a || K();
          return !("file:" !== He() && "ionic:" !== He() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
        }

        function Ie() {
          var a = l.window;

          try {
            return !(!a || a == a.top);
          } catch (b) {
            return !1;
          }
        }

        function Je() {
          return "undefined" !== typeof l.WorkerGlobalScope && "function" === typeof l.importScripts;
        }

        function Ke() {
          return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.hasOwnProperty("node") ? "Node" : Je() ? "Worker" : "Browser";
        }

        function Le() {
          var a = Ke();
          return "ReactNative" === a || "Node" === a;
        }

        function Me() {
          for (var a = 50, b = []; 0 < a;) {
            b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
          }

          return b.join("");
        }

        var Ae = "Firefox",
            we = "Chrome";

        function ve(a) {
          var b = a.toLowerCase();
          if (x(b, "opera/") || x(b, "opr/") || x(b, "opios/")) return "Opera";
          if (x(b, "iemobile")) return "IEMobile";
          if (x(b, "msie") || x(b, "trident/")) return "IE";
          if (x(b, "edge/")) return "Edge";
          if (x(b, "firefox/")) return Ae;
          if (x(b, "silk/")) return "Silk";
          if (x(b, "blackberry")) return "Blackberry";
          if (x(b, "webos")) return "Webos";
          if (!x(b, "safari/") || x(b, "chrome/") || x(b, "crios/") || x(b, "android")) {
            if (!x(b, "chrome/") && !x(b, "crios/") || x(b, "edge/")) {
              if (x(b, "android")) return "Android";
              if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
            } else return we;
          } else return "Safari";
          return "Other";
        }

        var Ne = {
          ld: "FirebaseCore-web",
          nd: "FirebaseUI-web"
        };

        function Oe(a, b) {
          b = b || [];
          var c = [],
              d = {},
              e;

          for (e in Ne) {
            d[Ne[e]] = !0;
          }

          for (e = 0; e < b.length; e++) {
            "undefined" !== typeof d[b[e]] && (delete d[b[e]], c.push(b[e]));
          }

          c.sort();
          b = c;
          b.length || (b = ["FirebaseCore-web"]);
          c = Ke();
          "Browser" === c ? (d = K(), c = ve(d)) : "Worker" === c && (d = K(), c = ve(d) + "-" + c);
          return c + "/JsCore/" + a + "/" + b.join(",");
        }

        function K() {
          return l.navigator && l.navigator.userAgent || "";
        }

        function L(a, b) {
          a = a.split(".");
          b = b || l;

          for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) {
            b = b[a[c]];
          }

          c != a.length && (b = void 0);
          return b;
        }

        function Pe() {
          try {
            var a = l.localStorage,
                b = Qe();
            if (a) return a.setItem(b, "1"), a.removeItem(b), qe() ? !!l.indexedDB : !0;
          } catch (c) {
            return Je() && !!l.indexedDB;
          }

          return !1;
        }

        function Re() {
          return (Se() || "chrome-extension:" === He() || Ge()) && !Le() && Pe() && !Je();
        }

        function Se() {
          return "http:" === He() || "https:" === He();
        }

        function He() {
          return l.location && l.location.protocol || null;
        }

        function Te(a) {
          a = a || K();
          return xe(a) || ve(a) == Ae ? !1 : !0;
        }

        function Ue(a) {
          return "undefined" === typeof a ? null : ke(a);
        }

        function Ve(a) {
          var b = {},
              c;

          for (c in a) {
            a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
          }

          return b;
        }

        function We(a) {
          if (null !== a) return JSON.parse(a);
        }

        function Qe(a) {
          return a ? a : Math.floor(1E9 * Math.random()).toString();
        }

        function Xe(a) {
          a = a || K();
          return "Safari" == ve(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
        }

        function Ye() {
          var a = l.___jsl;
          if (a && a.H) for (var b in a.H) {
            if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
              a.CP[c] = null;
            }
          }
        }

        function Ze(a, b) {
          if (a > b) throw Error("Short delay should be less than long delay!");
          this.a = a;
          this.c = b;
          a = K();
          b = Ke();
          this.b = xe(a) || "ReactNative" === b;
        }

        Ze.prototype.get = function () {
          var a = l.navigator;
          return (a && "boolean" === typeof a.onLine && (Se() || "chrome-extension:" === He() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5E3, this.a);
        };

        function $e() {
          var a = l.document;
          return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
        }

        function af() {
          var a = l.document,
              _b2 = null;
          return $e() || !a ? E() : new D(function (c) {
            _b2 = function b() {
              $e() && (a.removeEventListener("visibilitychange", _b2, !1), c());
            };

            a.addEventListener("visibilitychange", _b2, !1);
          }).s(function (c) {
            a.removeEventListener("visibilitychange", _b2, !1);
            throw c;
          });
        }

        function bf(a) {
          "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a);
        }

        function cf(a) {
          try {
            var b = new Date(parseInt(a, 10));
            if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString();
          } catch (c) {}

          return null;
        }

        function df() {
          return !(!L("fireauth.oauthhelper", l) && !L("fireauth.iframe", l));
        }

        function ef() {
          var a = l.navigator;
          return a && a.serviceWorker && a.serviceWorker.controller || null;
        }

        function ff() {
          var a = l.navigator;
          return a && a.serviceWorker ? E().then(function () {
            return a.serviceWorker.ready;
          }).then(function (b) {
            return b.active || null;
          }).s(function () {
            return null;
          }) : E(null);
        }

        ;
        var gf = {};

        function hf(a) {
          gf[a] || (gf[a] = !0, bf(a));
        }

        ;
        var jf;

        try {
          var kf = {};
          Object.defineProperty(kf, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 1
          });
          Object.defineProperty(kf, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 2
          });
          jf = 2 == kf.abcd;
        } catch (a) {
          jf = !1;
        }

        function M(a, b, c) {
          jf ? Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            value: c
          }) : a[b] = c;
        }

        function N(a, b) {
          if (b) for (var c in b) {
            b.hasOwnProperty(c) && M(a, c, b[c]);
          }
        }

        function lf(a) {
          var b = {};
          N(b, a);
          return b;
        }

        function mf(a) {
          var b = {},
              c;

          for (c in a) {
            a.hasOwnProperty(c) && (b[c] = a[c]);
          }

          return b;
        }

        function nf(a, b) {
          if (!b || !b.length) return !0;
          if (!a) return !1;

          for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (void 0 === d || null === d || "" === d) return !1;
          }

          return !0;
        }

        function of(a) {
          var b = a;

          if ("object" == typeof a && null != a) {
            b = "length" in a ? [] : {};

            for (var c in a) {
              M(b, c, of(a[c]));
            }
          }

          return b;
        }

        ;
        /*
        Copyright 2019 Google Inc.
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function pf(a) {
          var b = a && (a[qf] ? "phone" : null);

          if (b && a && a[rf]) {
            M(this, "uid", a[rf]);
            M(this, "displayName", a[sf] || null);
            var c = null;
            a[tf] && (c = new Date(a[tf]).toUTCString());
            M(this, "enrollmentTime", c);
            M(this, "factorId", b);
          } else throw new t("internal-error", "Internal assert: invalid MultiFactorInfo object");
        }

        pf.prototype.w = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime
          };
        };

        function uf(a) {
          try {
            var b = new vf(a);
          } catch (c) {
            b = null;
          }

          return b;
        }

        var sf = "displayName",
            tf = "enrolledAt",
            rf = "mfaEnrollmentId",
            qf = "phoneInfo";

        function vf(a) {
          pf.call(this, a);
          M(this, "phoneNumber", a[qf]);
        }

        r(vf, pf);

        vf.prototype.w = function () {
          var a = vf.$a.w.call(this);
          a.phoneNumber = this.phoneNumber;
          return a;
        };

        function wf(a) {
          var b = {},
              c = a[xf],
              d = a[yf],
              e = a[zf];
          a = uf(a[Af]);
          if (!e || e != Bf && e != Cf && !c || e == Cf && !d || e == Df && !a) throw Error("Invalid checkActionCode response!");
          e == Cf ? (b[Ef] = c || null, b[Ff] = c || null, b[Gf] = d) : (b[Ef] = d || null, b[Ff] = d || null, b[Gf] = c || null);
          b[Hf] = a || null;
          M(this, If, e);
          M(this, Jf, of(b));
        }

        var Df = "REVERT_SECOND_FACTOR_ADDITION",
            Bf = "EMAIL_SIGNIN",
            Cf = "VERIFY_AND_CHANGE_EMAIL",
            xf = "email",
            Af = "mfaInfo",
            yf = "newEmail",
            zf = "requestType",
            Gf = "email",
            Ef = "fromEmail",
            Hf = "multiFactorInfo",
            Ff = "previousEmail",
            Jf = "data",
            If = "operation";

        function Kf(a) {
          a = be(a);
          var b = ae(a, Lf) || null,
              c = ae(a, Mf) || null,
              d = ae(a, Nf) || null;
          d = d ? Of[d] || null : null;
          if (!b || !c || !d) throw new t("argument-error", Lf + ", " + Mf + "and " + Nf + " are required in a valid action code URL.");
          N(this, {
            apiKey: b,
            operation: d,
            code: c,
            continueUrl: ae(a, Pf) || null,
            languageCode: ae(a, Qf) || null,
            tenantId: ae(a, Rf) || null
          });
        }

        var Lf = "apiKey",
            Mf = "oobCode",
            Pf = "continueUrl",
            Qf = "languageCode",
            Nf = "mode",
            Rf = "tenantId",
            Of = {
          recoverEmail: "RECOVER_EMAIL",
          resetPassword: "PASSWORD_RESET",
          revertSecondFactorAddition: Df,
          signIn: Bf,
          verifyAndChangeEmail: Cf,
          verifyEmail: "VERIFY_EMAIL"
        };

        function Sf(a) {
          try {
            return new Kf(a);
          } catch (b) {
            return null;
          }
        }

        ;

        function Tf(a) {
          var b = a[Uf];
          if ("undefined" === typeof b) throw new t("missing-continue-uri");
          if ("string" !== typeof b || "string" === typeof b && !b.length) throw new t("invalid-continue-uri");
          this.h = b;
          this.b = this.a = null;
          this.g = !1;
          var c = a[Vf];

          if (c && "object" === typeof c) {
            b = c[Wf];
            var d = c[Xf];
            c = c[Yf];

            if ("string" === typeof b && b.length) {
              this.a = b;
              if ("undefined" !== typeof d && "boolean" !== typeof d) throw new t("argument-error", Xf + " property must be a boolean when specified.");
              this.g = !!d;
              if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length)) throw new t("argument-error", Yf + " property must be a non empty string when specified.");
              this.b = c || null;
            } else {
              if ("undefined" !== typeof b) throw new t("argument-error", Wf + " property must be a non empty string when specified.");
              if ("undefined" !== typeof d || "undefined" !== typeof c) throw new t("missing-android-pkg-name");
            }
          } else if ("undefined" !== typeof c) throw new t("argument-error", Vf + " property must be a non null object when specified.");

          this.f = null;
          if ((b = a[Zf]) && "object" === typeof b) {
            if (b = b[$f], "string" === typeof b && b.length) this.f = b;else {
              if ("undefined" !== typeof b) throw new t("argument-error", $f + " property must be a non empty string when specified.");
            }
          } else if ("undefined" !== typeof b) throw new t("argument-error", Zf + " property must be a non null object when specified.");
          b = a[ag];
          if ("undefined" !== typeof b && "boolean" !== typeof b) throw new t("argument-error", ag + " property must be a boolean when specified.");
          this.c = !!b;
          a = a[bg];
          if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length)) throw new t("argument-error", bg + " property must be a non empty string when specified.");
          this.i = a || null;
        }

        var Vf = "android",
            bg = "dynamicLinkDomain",
            ag = "handleCodeInApp",
            Zf = "iOS",
            Uf = "url",
            Xf = "installApp",
            Yf = "minimumVersion",
            Wf = "packageName",
            $f = "bundleId";

        function cg(a) {
          var b = {};
          b.continueUrl = a.h;
          b.canHandleCodeInApp = a.c;
          if (b.androidPackageName = a.a) b.androidMinimumVersion = a.b, b.androidInstallApp = a.g;
          b.iOSBundleId = a.f;
          b.dynamicLinkDomain = a.i;

          for (var c in b) {
            null === b[c] && delete b[c];
          }

          return b;
        }

        ;

        function dg(a) {
          return Ra(a, function (b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b;
          }).join("");
        }

        ;
        var eg = null;

        function fg(a) {
          var b = "";
          gg(a, function (c) {
            b += String.fromCharCode(c);
          });
          return b;
        }

        function gg(a, b) {
          function c(n) {
            for (; d < a.length;) {
              var p = a.charAt(d++),
                  v = eg[p];
              if (null != v) return v;
              if (!/^[\s\xa0]*$/.test(p)) throw Error("Unknown base64 encoding at char: " + p);
            }

            return n;
          }

          hg();

          for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
          }
        }

        function hg() {
          if (!eg) {
            eg = {};

            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
              for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === eg[f] && (eg[f] = e);
              }
            }
          }
        }

        ;

        function ig(a) {
          var b = jg(a);
          if (!(b && b.sub && b.iss && b.aud && b.exp)) throw Error("Invalid JWT");
          this.g = a;
          this.c = b.exp;
          this.h = b.sub;
          va();
          this.a = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
          this.f = b.firebase && b.firebase.tenant || null;
          this.b = !!b.is_anonymous || "anonymous" == this.a;
        }

        ig.prototype.S = function () {
          return this.f;
        };

        ig.prototype.i = function () {
          return this.b;
        };

        ig.prototype.toString = function () {
          return this.g;
        };

        function kg(a) {
          try {
            return new ig(a);
          } catch (b) {
            return null;
          }
        }

        function jg(a) {
          if (!a) return null;
          a = a.split(".");
          if (3 != a.length) return null;
          a = a[1];

          for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) {
            a += ".";
          }

          try {
            return JSON.parse(fg(a));
          } catch (d) {}

          return null;
        }

        ;
        var lg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
            mg = ["client_id", "response_type", "scope", "redirect_uri", "state"],
            ng = {
          md: {
            Ja: "locale",
            ua: 700,
            ta: 600,
            fa: "facebook.com",
            Wa: mg
          },
          od: {
            Ja: null,
            ua: 500,
            ta: 750,
            fa: "github.com",
            Wa: mg
          },
          pd: {
            Ja: "hl",
            ua: 515,
            ta: 680,
            fa: "google.com",
            Wa: mg
          },
          vd: {
            Ja: "lang",
            ua: 485,
            ta: 705,
            fa: "twitter.com",
            Wa: lg
          },
          jd: {
            Ja: "locale",
            ua: 640,
            ta: 600,
            fa: "apple.com",
            Wa: []
          }
        };

        function og(a) {
          for (var b in ng) {
            if (ng[b].fa == a) return ng[b];
          }

          return null;
        }

        ;

        function pg(a) {
          var b = {};
          b["facebook.com"] = qg;
          b["google.com"] = rg;
          b["github.com"] = sg;
          b["twitter.com"] = tg;
          var c = a && a[ug];

          try {
            if (c) return b[c] ? new b[c](a) : new vg(a);
            if ("undefined" !== typeof a[wg]) return new xg(a);
          } catch (d) {}

          return null;
        }

        var wg = "idToken",
            ug = "providerId";

        function xg(a) {
          var b = a[ug];

          if (!b && a[wg]) {
            var c = kg(a[wg]);
            c && c.a && (b = c.a);
          }

          if (!b) throw Error("Invalid additional user info!");
          if ("anonymous" == b || "custom" == b) b = null;
          c = !1;
          "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
          M(this, "providerId", b);
          M(this, "isNewUser", c);
        }

        function vg(a) {
          xg.call(this, a);
          a = We(a.rawUserInfo || "{}");
          M(this, "profile", of(a || {}));
        }

        r(vg, xg);

        function qg(a) {
          vg.call(this, a);
          if ("facebook.com" != this.providerId) throw Error("Invalid provider ID!");
        }

        r(qg, vg);

        function sg(a) {
          vg.call(this, a);
          if ("github.com" != this.providerId) throw Error("Invalid provider ID!");
          M(this, "username", this.profile && this.profile.login || null);
        }

        r(sg, vg);

        function rg(a) {
          vg.call(this, a);
          if ("google.com" != this.providerId) throw Error("Invalid provider ID!");
        }

        r(rg, vg);

        function tg(a) {
          vg.call(this, a);
          if ("twitter.com" != this.providerId) throw Error("Invalid provider ID!");
          M(this, "username", a.screenName || null);
        }

        r(tg, vg);

        function yg(a) {
          var b = be(a),
              c = ae(b, "link"),
              d = ae(be(c), "link");
          b = ae(b, "deep_link_id");
          return ae(be(b), "link") || b || d || c || a;
        }

        ;

        function zg(a, b) {
          if (!a && !b) throw new t("internal-error", "Internal assert: no raw session string available");
          if (a && b) throw new t("internal-error", "Internal assert: unable to determine the session type");
          this.a = a || null;
          this.b = b || null;
          this.type = this.a ? Ag : Bg;
        }

        var Ag = "enroll",
            Bg = "signin";

        zg.prototype.Ha = function () {
          return this.a ? E(this.a) : E(this.b);
        };

        zg.prototype.w = function () {
          return this.type == Ag ? {
            multiFactorSession: {
              idToken: this.a
            }
          } : {
            multiFactorSession: {
              pendingCredential: this.b
            }
          };
        };

        function Cg() {}

        Cg.prototype.ja = function () {};

        Cg.prototype.b = function () {};

        Cg.prototype.c = function () {};

        Cg.prototype.w = function () {};

        function Dg(a, b) {
          return a.then(function (c) {
            if (c[Eg]) {
              var d = kg(c[Eg]);
              if (!d || b != d.h) throw new t("user-mismatch");
              return c;
            }

            throw new t("user-mismatch");
          }).s(function (c) {
            throw c && c.code && c.code == ya + "user-not-found" ? new t("user-mismatch") : c;
          });
        }

        function Fg(a, b) {
          if (b) this.a = b;else throw new t("internal-error", "failed to construct a credential");
          M(this, "providerId", a);
          M(this, "signInMethod", a);
        }

        Fg.prototype.ja = function (a) {
          return Gg(a, Hg(this));
        };

        Fg.prototype.b = function (a, b) {
          var c = Hg(this);
          c.idToken = b;
          return Ig(a, c);
        };

        Fg.prototype.c = function (a, b) {
          return Dg(Jg(a, Hg(this)), b);
        };

        function Hg(a) {
          return {
            pendingToken: a.a,
            requestUri: "http://localhost"
          };
        }

        Fg.prototype.w = function () {
          return {
            providerId: this.providerId,
            signInMethod: this.signInMethod,
            pendingToken: this.a
          };
        };

        function Kg(a) {
          if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken) try {
            return new Fg(a.providerId, a.pendingToken);
          } catch (b) {}
          return null;
        }

        function Lg(a, b, c) {
          this.a = null;
          if (b.idToken || b.accessToken) b.idToken && M(this, "idToken", b.idToken), b.accessToken && M(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && M(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);else if (b.oauthToken && b.oauthTokenSecret) M(this, "accessToken", b.oauthToken), M(this, "secret", b.oauthTokenSecret);else throw new t("internal-error", "failed to construct a credential");
          M(this, "providerId", a);
          M(this, "signInMethod", c);
        }

        Lg.prototype.ja = function (a) {
          return Gg(a, Mg(this));
        };

        Lg.prototype.b = function (a, b) {
          var c = Mg(this);
          c.idToken = b;
          return Ig(a, c);
        };

        Lg.prototype.c = function (a, b) {
          var c = Mg(this);
          return Dg(Jg(a, c), b);
        };

        function Mg(a) {
          var b = {};
          a.idToken && (b.id_token = a.idToken);
          a.accessToken && (b.access_token = a.accessToken);
          a.secret && (b.oauth_token_secret = a.secret);
          b.providerId = a.providerId;
          a.nonce && !a.a && (b.nonce = a.nonce);
          b = {
            postBody: fe(b).toString(),
            requestUri: "http://localhost"
          };
          a.a && (delete b.postBody, b.pendingToken = a.a);
          return b;
        }

        Lg.prototype.w = function () {
          var a = {
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
          this.idToken && (a.oauthIdToken = this.idToken);
          this.accessToken && (a.oauthAccessToken = this.accessToken);
          this.secret && (a.oauthTokenSecret = this.secret);
          this.nonce && (a.nonce = this.nonce);
          this.a && (a.pendingToken = this.a);
          return a;
        };

        function Ng(a) {
          if (a && a.providerId && a.signInMethod) {
            var b = {
              idToken: a.oauthIdToken,
              accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
              oauthTokenSecret: a.oauthTokenSecret,
              oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
              nonce: a.nonce,
              pendingToken: a.pendingToken
            };

            try {
              return new Lg(a.providerId, b, a.signInMethod);
            } catch (c) {}
          }

          return null;
        }

        function Og(a, b) {
          this.Pc = b || [];
          N(this, {
            providerId: a,
            isOAuthProvider: !0
          });
          this.Hb = {};
          this.ob = (og(a) || {}).Ja || null;
          this.nb = null;
        }

        Og.prototype.Ka = function (a) {
          this.Hb = nb(a);
          return this;
        };

        function Pg(a) {
          if ("string" !== typeof a || 0 != a.indexOf("saml.")) throw new t("argument-error", 'SAML provider IDs must be prefixed with "saml."');
          Og.call(this, a, []);
        }

        r(Pg, Og);

        function Qg(a) {
          Og.call(this, a, mg);
          this.a = [];
        }

        r(Qg, Og);

        Qg.prototype.Ca = function (a) {
          Va(this.a, a) || this.a.push(a);
          return this;
        };

        Qg.prototype.Pb = function () {
          return Za(this.a);
        };

        Qg.prototype.credential = function (a, b) {
          var c;
          m(a) ? c = {
            idToken: a.idToken || null,
            accessToken: a.accessToken || null,
            nonce: a.rawNonce || null
          } : c = {
            idToken: a || null,
            accessToken: b || null
          };
          if (!c.idToken && !c.accessToken) throw new t("argument-error", "credential failed: must provide the ID token and/or the access token.");
          return new Lg(this.providerId, c, this.providerId);
        };

        function Rg() {
          Qg.call(this, "facebook.com");
        }

        r(Rg, Qg);
        M(Rg, "PROVIDER_ID", "facebook.com");
        M(Rg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");

        function Sg(a) {
          if (!a) throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          var b = a;
          m(a) && (b = a.accessToken);
          return new Rg().credential({
            accessToken: b
          });
        }

        function Tg() {
          Qg.call(this, "github.com");
        }

        r(Tg, Qg);
        M(Tg, "PROVIDER_ID", "github.com");
        M(Tg, "GITHUB_SIGN_IN_METHOD", "github.com");

        function Ug(a) {
          if (!a) throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          var b = a;
          m(a) && (b = a.accessToken);
          return new Tg().credential({
            accessToken: b
          });
        }

        function Vg() {
          Qg.call(this, "google.com");
          this.Ca("profile");
        }

        r(Vg, Qg);
        M(Vg, "PROVIDER_ID", "google.com");
        M(Vg, "GOOGLE_SIGN_IN_METHOD", "google.com");

        function Wg(a, b) {
          var c = a;
          m(a) && (c = a.idToken, b = a.accessToken);
          return new Vg().credential({
            idToken: c,
            accessToken: b
          });
        }

        function Xg() {
          Og.call(this, "twitter.com", lg);
        }

        r(Xg, Og);
        M(Xg, "PROVIDER_ID", "twitter.com");
        M(Xg, "TWITTER_SIGN_IN_METHOD", "twitter.com");

        function Yg(a, b) {
          var c = a;
          m(c) || (c = {
            oauthToken: a,
            oauthTokenSecret: b
          });
          if (!c.oauthToken || !c.oauthTokenSecret) throw new t("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
          return new Lg("twitter.com", c, "twitter.com");
        }

        function Zg(a, b, c) {
          this.a = a;
          this.f = b;
          M(this, "providerId", "password");
          M(this, "signInMethod", c === $g.EMAIL_LINK_SIGN_IN_METHOD ? $g.EMAIL_LINK_SIGN_IN_METHOD : $g.EMAIL_PASSWORD_SIGN_IN_METHOD);
        }

        Zg.prototype.ja = function (a) {
          return this.signInMethod == $g.EMAIL_LINK_SIGN_IN_METHOD ? O(a, ah, {
            email: this.a,
            oobCode: this.f
          }) : O(a, bh, {
            email: this.a,
            password: this.f
          });
        };

        Zg.prototype.b = function (a, b) {
          return this.signInMethod == $g.EMAIL_LINK_SIGN_IN_METHOD ? O(a, ch, {
            idToken: b,
            email: this.a,
            oobCode: this.f
          }) : O(a, dh, {
            idToken: b,
            email: this.a,
            password: this.f
          });
        };

        Zg.prototype.c = function (a, b) {
          return Dg(this.ja(a), b);
        };

        Zg.prototype.w = function () {
          return {
            email: this.a,
            password: this.f,
            signInMethod: this.signInMethod
          };
        };

        function eh(a) {
          return a && a.email && a.password ? new Zg(a.email, a.password, a.signInMethod) : null;
        }

        function $g() {
          N(this, {
            providerId: "password",
            isOAuthProvider: !1
          });
        }

        function fh(a, b) {
          b = gh(b);
          if (!b) throw new t("argument-error", "Invalid email link!");
          return new Zg(a, b.code, $g.EMAIL_LINK_SIGN_IN_METHOD);
        }

        function gh(a) {
          a = yg(a);
          return (a = Sf(a)) && a.operation === Bf ? a : null;
        }

        N($g, {
          PROVIDER_ID: "password"
        });
        N($g, {
          EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
        });
        N($g, {
          EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
        });

        function hh(a) {
          if (!(a.cb && a.bb || a.La && a.ea)) throw new t("internal-error");
          this.a = a;
          M(this, "providerId", "phone");
          this.fa = "phone";
          M(this, "signInMethod", "phone");
        }

        hh.prototype.ja = function (a) {
          return a.eb(ih(this));
        };

        hh.prototype.b = function (a, b) {
          var c = ih(this);
          c.idToken = b;
          return O(a, jh, c);
        };

        hh.prototype.c = function (a, b) {
          var c = ih(this);
          c.operation = "REAUTH";
          a = O(a, kh, c);
          return Dg(a, b);
        };

        hh.prototype.w = function () {
          var a = {
            providerId: "phone"
          };
          this.a.cb && (a.verificationId = this.a.cb);
          this.a.bb && (a.verificationCode = this.a.bb);
          this.a.La && (a.temporaryProof = this.a.La);
          this.a.ea && (a.phoneNumber = this.a.ea);
          return a;
        };

        function lh(a) {
          if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
            var b = {};
            w(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function (c) {
              a[c] && (b[c] = a[c]);
            });
            return new hh(b);
          }

          return null;
        }

        function ih(a) {
          return a.a.La && a.a.ea ? {
            temporaryProof: a.a.La,
            phoneNumber: a.a.ea
          } : {
            sessionInfo: a.a.cb,
            code: a.a.bb
          };
        }

        function mh(a) {
          try {
            this.a = a || _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth();
          } catch (b) {
            throw new t("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
          }

          N(this, {
            providerId: "phone",
            isOAuthProvider: !1
          });
        }

        mh.prototype.eb = function (a, b) {
          var c = this.a.a;
          return E(b.verify()).then(function (d) {
            if ("string" !== typeof d) throw new t("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");

            switch (b.type) {
              case "recaptcha":
                var e = m(a) ? a.session : null,
                    f = m(a) ? a.phoneNumber : a,
                    g;
                e && e.type == Ag ? g = e.Ha().then(function (h) {
                  return nh(c, {
                    idToken: h,
                    phoneEnrollmentInfo: {
                      phoneNumber: f,
                      recaptchaToken: d
                    }
                  });
                }) : e && e.type == Bg ? g = e.Ha().then(function (h) {
                  return oh(c, {
                    mfaPendingCredential: h,
                    mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid,
                    phoneSignInInfo: {
                      recaptchaToken: d
                    }
                  });
                }) : g = ph(c, {
                  phoneNumber: f,
                  recaptchaToken: d
                });
                return g.then(function (h) {
                  "function" === typeof b.reset && b.reset();
                  return h;
                }, function (h) {
                  "function" === typeof b.reset && b.reset();
                  throw h;
                });

              default:
                throw new t("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
            }
          });
        };

        function qh(a, b) {
          if (!a) throw new t("missing-verification-id");
          if (!b) throw new t("missing-verification-code");
          return new hh({
            cb: a,
            bb: b
          });
        }

        N(mh, {
          PROVIDER_ID: "phone"
        });
        N(mh, {
          PHONE_SIGN_IN_METHOD: "phone"
        });

        function rh(a) {
          if (a.temporaryProof && a.phoneNumber) return new hh({
            La: a.temporaryProof,
            ea: a.phoneNumber
          });
          var b = a && a.providerId;
          if (!b || "password" === b) return null;
          var c = a && a.oauthAccessToken,
              d = a && a.oauthTokenSecret,
              e = a && a.nonce,
              f = a && a.oauthIdToken,
              g = a && a.pendingToken;

          try {
            switch (b) {
              case "google.com":
                return Wg(f, c);

              case "facebook.com":
                return Sg(c);

              case "github.com":
                return Ug(c);

              case "twitter.com":
                return Yg(c, d);

              default:
                return c || d || f || g ? g ? 0 == b.indexOf("saml.") ? new Fg(b, g) : new Lg(b, {
                  pendingToken: g,
                  idToken: a.oauthIdToken,
                  accessToken: a.oauthAccessToken
                }, b) : new Qg(b).credential({
                  idToken: f,
                  accessToken: c,
                  rawNonce: e
                }) : null;
            }
          } catch (h) {
            return null;
          }
        }

        function sh(a) {
          if (!a.isOAuthProvider) throw new t("invalid-oauth-provider");
        }

        ;

        function th(a, b, c, d, e, f, g) {
          this.c = a;
          this.b = b || null;
          this.g = c || null;
          this.f = d || null;
          this.i = f || null;
          this.h = g || null;
          this.a = e || null;

          if (this.g || this.a) {
            if (this.g && this.a) throw new t("invalid-auth-event");
            if (this.g && !this.f) throw new t("invalid-auth-event");
          } else throw new t("invalid-auth-event");
        }

        th.prototype.getUid = function () {
          var a = [];
          a.push(this.c);
          this.b && a.push(this.b);
          this.f && a.push(this.f);
          this.h && a.push(this.h);
          return a.join("-");
        };

        th.prototype.S = function () {
          return this.h;
        };

        th.prototype.w = function () {
          return {
            type: this.c,
            eventId: this.b,
            urlResponse: this.g,
            sessionId: this.f,
            postBody: this.i,
            tenantId: this.h,
            error: this.a && this.a.w()
          };
        };

        function uh(a) {
          a = a || {};
          return a.type ? new th(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Aa(a.error), a.postBody, a.tenantId) : null;
        }

        ;
        /*
        Copyright 2018 Google Inc.
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function vh() {
          this.b = null;
          this.a = [];
        }

        var wh = null;

        function xh(a) {
          var b = wh;
          b.a.push(a);
          b.b || (b.b = function (c) {
            for (var d = 0; d < b.a.length; d++) {
              b.a[d](c);
            }
          }, a = L("universalLinks.subscribe", l), "function" === typeof a && a(null, b.b));
        }

        ;

        function yh(a) {
          var b = "unauthorized-domain",
              c = void 0,
              d = be(a);
          a = d.a;
          d = d.f;
          "chrome-extension" == d ? c = Qb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Qb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
          t.call(this, b, c);
        }

        r(yh, t);

        function zh(a, b, c) {
          t.call(this, a, c);
          a = b || {};
          a.Ib && M(this, "email", a.Ib);
          a.ea && M(this, "phoneNumber", a.ea);
          a.credential && M(this, "credential", a.credential);
          a.Yb && M(this, "tenantId", a.Yb);
        }

        r(zh, t);

        zh.prototype.w = function () {
          var a = {
            code: this.code,
            message: this.message
          };
          this.email && (a.email = this.email);
          this.phoneNumber && (a.phoneNumber = this.phoneNumber);
          this.tenantId && (a.tenantId = this.tenantId);
          var b = this.credential && this.credential.w();
          b && z(a, b);
          return a;
        };

        zh.prototype.toJSON = function () {
          return this.w();
        };

        function Ah(a) {
          if (a.code) {
            var b = a.code || "";
            0 == b.indexOf(ya) && (b = b.substring(ya.length));
            var c = {
              credential: rh(a),
              Yb: a.tenantId
            };
            if (a.email) c.Ib = a.email;else if (a.phoneNumber) c.ea = a.phoneNumber;else if (!c.credential) return new t(b, a.message || void 0);
            return new zh(b, c, a.message);
          }

          return null;
        }

        ;

        function Bh() {}

        Bh.prototype.c = null;

        function Ch(a) {
          return a.c || (a.c = a.b());
        }

        ;
        var Dh;

        function Eh() {}

        r(Eh, Bh);

        Eh.prototype.a = function () {
          var a = Fh(this);
          return a ? new ActiveXObject(a) : new XMLHttpRequest();
        };

        Eh.prototype.b = function () {
          var a = {};
          Fh(this) && (a[0] = !0, a[1] = !0);
          return a;
        };

        function Fh(a) {
          if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
              var d = b[c];

              try {
                return new ActiveXObject(d), a.f = d;
              } catch (e) {}
            }

            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
          }

          return a.f;
        }

        Dh = new Eh();

        function Gh() {}

        r(Gh, Bh);

        Gh.prototype.a = function () {
          var a = new XMLHttpRequest();
          if ("withCredentials" in a) return a;
          if ("undefined" != typeof XDomainRequest) return new Hh();
          throw Error("Unsupported browser");
        };

        Gh.prototype.b = function () {
          return {};
        };

        function Hh() {
          this.a = new XDomainRequest();
          this.readyState = 0;
          this.onreadystatechange = null;
          this.responseType = this.responseText = this.response = "";
          this.status = -1;
          this.statusText = "";
          this.a.onload = q(this.pc, this);
          this.a.onerror = q(this.Rb, this);
          this.a.onprogress = q(this.qc, this);
          this.a.ontimeout = q(this.uc, this);
        }

        k = Hh.prototype;

        k.open = function (a, b, c) {
          if (null != c && !c) throw Error("Only async requests are supported.");
          this.a.open(a, b);
        };

        k.send = function (a) {
          if (a) {
            if ("string" == typeof a) this.a.send(a);else throw Error("Only string data is supported");
          } else this.a.send();
        };

        k.abort = function () {
          this.a.abort();
        };

        k.setRequestHeader = function () {};

        k.getResponseHeader = function (a) {
          return "content-type" == a.toLowerCase() ? this.a.contentType : "";
        };

        k.pc = function () {
          this.status = 200;
          this.response = this.responseText = this.a.responseText;
          Ih(this, 4);
        };

        k.Rb = function () {
          this.status = 500;
          this.response = this.responseText = "";
          Ih(this, 4);
        };

        k.uc = function () {
          this.Rb();
        };

        k.qc = function () {
          this.status = 200;
          Ih(this, 1);
        };

        function Ih(a, b) {
          a.readyState = b;
          if (a.onreadystatechange) a.onreadystatechange();
        }

        k.getAllResponseHeaders = function () {
          return "content-type: " + this.a.contentType;
        };

        function Jh(a, b, c) {
          this.reset(a, b, c, void 0, void 0);
        }

        Jh.prototype.a = null;
        var Kh = 0;

        Jh.prototype.reset = function (a, b, c, d, e) {
          "number" == typeof e || Kh++;
          d || va();
          delete this.a;
        };

        function Lh(a) {
          this.f = a;
          this.b = this.c = this.a = null;
        }

        function Mh(a, b) {
          this.name = a;
          this.value = b;
        }

        Mh.prototype.toString = function () {
          return this.name;
        };

        var Nh = new Mh("SEVERE", 1E3),
            Oh = new Mh("WARNING", 900),
            Ph = new Mh("CONFIG", 700),
            Qh = new Mh("FINE", 500);

        function Rh(a) {
          if (a.c) return a.c;
          if (a.a) return Rh(a.a);
          Ga("Root logger has no level set.");
          return null;
        }

        Lh.prototype.log = function (a, b, c) {
          if (a.value >= Rh(this).value) for (oa(b) && (b = b()), a = new Jh(a, String(b), this.f), c && (a.a = c), c = this; c;) {
            c = c.a;
          }
        };

        var Sh = {},
            Th = null;

        function Uh(a) {
          Th || (Th = new Lh(""), Sh[""] = Th, Th.c = Ph);
          var b;

          if (!(b = Sh[a])) {
            b = new Lh(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = Uh(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            Sh[a] = b;
          }

          return b;
        }

        ;

        function Vh(a, b) {
          a && a.log(Qh, b, void 0);
        }

        ;

        function Wh(a) {
          this.f = a;
        }

        r(Wh, Bh);

        Wh.prototype.a = function () {
          return new Xh(this.f);
        };

        Wh.prototype.b = function (a) {
          return function () {
            return a;
          };
        }({});

        function Xh(a) {
          I.call(this);
          this.u = a;
          this.h = void 0;
          this.readyState = Yh;
          this.status = 0;
          this.responseType = this.responseText = this.response = this.statusText = "";
          this.onreadystatechange = null;
          this.l = new Headers();
          this.b = null;
          this.o = "GET";
          this.f = "";
          this.a = !1;
          this.i = Uh("goog.net.FetchXmlHttp");
          this.m = this.c = this.g = null;
        }

        r(Xh, I);
        var Yh = 0;
        k = Xh.prototype;

        k.open = function (a, b) {
          if (this.readyState != Yh) throw this.abort(), Error("Error reopening a connection");
          this.o = a;
          this.f = b;
          this.readyState = 1;
          Zh(this);
        };

        k.send = function (a) {
          if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
          this.a = !0;
          var b = {
            headers: this.l,
            method: this.o,
            credentials: this.h,
            cache: void 0
          };
          a && (b.body = a);
          this.u.fetch(new Request(this.f, b)).then(this.tc.bind(this), this.Ta.bind(this));
        };

        k.abort = function () {
          this.response = this.responseText = "";
          this.l = new Headers();
          this.status = 0;
          this.c && this.c.cancel("Request was aborted.");
          1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, $h(this));
          this.readyState = Yh;
        };

        k.tc = function (a) {
          this.a && (this.g = a, this.b || (this.status = this.g.status, this.statusText = this.g.statusText, this.b = a.headers, this.readyState = 2, Zh(this)), this.a && (this.readyState = 3, Zh(this), this.a && ("arraybuffer" === this.responseType ? a.arrayBuffer().then(this.rc.bind(this), this.Ta.bind(this)) : "undefined" !== typeof l.ReadableStream && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.m = new TextDecoder(), ai(this)) : a.text().then(this.sc.bind(this), this.Ta.bind(this)))));
        };

        function ai(a) {
          a.c.read().then(a.oc.bind(a))["catch"](a.Ta.bind(a));
        }

        k.oc = function (a) {
          if (this.a) {
            var b = this.m.decode(a.value ? a.value : new Uint8Array(0), {
              stream: !a.done
            });
            b && (this.response = this.responseText += b);
            a.done ? $h(this) : Zh(this);
            3 == this.readyState && ai(this);
          }
        };

        k.sc = function (a) {
          this.a && (this.response = this.responseText = a, $h(this));
        };

        k.rc = function (a) {
          this.a && (this.response = a, $h(this));
        };

        k.Ta = function (a) {
          var b = this.i;
          b && b.log(Oh, "Failed to fetch url " + this.f, a instanceof Error ? a : Error(a));
          this.a && $h(this);
        };

        function $h(a) {
          a.readyState = 4;
          a.g = null;
          a.c = null;
          a.m = null;
          Zh(a);
        }

        k.setRequestHeader = function (a, b) {
          this.l.append(a, b);
        };

        k.getResponseHeader = function (a) {
          return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.i) && a.log(Oh, "Attempting to get response header but no headers have been received for url: " + this.f, void 0), "");
        };

        k.getAllResponseHeaders = function () {
          if (!this.b) {
            var a = this.i;
            a && a.log(Oh, "Attempting to get all response headers but no headers have been received for url: " + this.f, void 0);
            return "";
          }

          a = [];

          for (var b = this.b.entries(), c = b.next(); !c.done;) {
            c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
          }

          return a.join("\r\n");
        };

        function Zh(a) {
          a.onreadystatechange && a.onreadystatechange.call(a);
        }

        Object.defineProperty(Xh.prototype, "withCredentials", {
          get: function get() {
            return "include" === this.h;
          },
          set: function set(a) {
            this.h = a ? "include" : "same-origin";
          }
        });

        function bi(a) {
          I.call(this);
          this.headers = new Id();
          this.O = a || null;
          this.c = !1;
          this.A = this.a = null;
          this.h = this.P = this.l = "";
          this.f = this.N = this.i = this.G = !1;
          this.g = 0;
          this.o = null;
          this.m = ci;
          this.u = this.R = !1;
        }

        r(bi, I);
        var ci = "";
        bi.prototype.b = Uh("goog.net.XhrIo");
        var di = /^https?$/i,
            ei = ["POST", "PUT"];

        function fi(a, b, c, d, e) {
          if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b);
          c = c ? c.toUpperCase() : "GET";
          a.l = b;
          a.h = "";
          a.P = c;
          a.G = !1;
          a.c = !0;
          a.a = a.O ? a.O.a() : Dh.a();
          a.A = a.O ? Ch(a.O) : Ch(Dh);
          a.a.onreadystatechange = q(a.Ub, a);

          try {
            Vh(a.b, gi(a, "Opening Xhr")), a.N = !0, a.a.open(c, String(b), !0), a.N = !1;
          } catch (g) {
            Vh(a.b, gi(a, "Error opening Xhr: " + g.message));
            hi(a, g);
            return;
          }

          b = d || "";
          var f = new Id(a.headers);
          e && Hd(e, function (g, h) {
            f.set(h, g);
          });
          e = Ta(f.Y());
          d = l.FormData && b instanceof l.FormData;
          !Va(ei, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
          f.forEach(function (g, h) {
            this.a.setRequestHeader(h, g);
          }, a);
          a.m && (a.a.responseType = a.m);
          "withCredentials" in a.a && a.a.withCredentials !== a.R && (a.a.withCredentials = a.R);

          try {
            ii(a), 0 < a.g && (a.u = ji(a.a), Vh(a.b, gi(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.u)), a.u ? (a.a.timeout = a.g, a.a.ontimeout = q(a.Ma, a)) : a.o = Dd(a.Ma, a.g, a)), Vh(a.b, gi(a, "Sending request")), a.i = !0, a.a.send(b), a.i = !1;
          } catch (g) {
            Vh(a.b, gi(a, "Send error: " + g.message)), hi(a, g);
          }
        }

        function ji(a) {
          return Wb && fc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
        }

        function Ua(a) {
          return "content-type" == a.toLowerCase();
        }

        k = bi.prototype;

        k.Ma = function () {
          "undefined" != typeof ha && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Vh(this.b, gi(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
        };

        function hi(a, b) {
          a.c = !1;
          a.a && (a.f = !0, a.a.abort(), a.f = !1);
          a.h = b;
          ki(a);
          li(a);
        }

        function ki(a) {
          a.G || (a.G = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
        }

        k.abort = function () {
          this.a && this.c && (Vh(this.b, gi(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), li(this));
        };

        k.Da = function () {
          this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), li(this, !0));
          bi.$a.Da.call(this);
        };

        k.Ub = function () {
          this.xa || (this.N || this.i || this.f ? mi(this) : this.Ic());
        };

        k.Ic = function () {
          mi(this);
        };

        function mi(a) {
          if (a.c && "undefined" != typeof ha) if (a.A[1] && 4 == ni(a) && 2 == oi(a)) Vh(a.b, gi(a, "Local request error detected and ignored"));else if (a.i && 4 == ni(a)) Dd(a.Ub, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == ni(a)) {
            Vh(a.b, gi(a, "Request complete"));
            a.c = !1;

            try {
              var b = oi(a);

              a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var c = !0;
                  break a;

                default:
                  c = !1;
              }

              var d;

              if (!(d = c)) {
                var e;

                if (e = 0 === b) {
                  var f = String(a.l).match(Ld)[1] || null;

                  if (!f && l.self && l.self.location) {
                    var g = l.self.location.protocol;
                    f = g.substr(0, g.length - 1);
                  }

                  e = !di.test(f ? f.toLowerCase() : "");
                }

                d = e;
              }

              if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
                try {
                  var h = 2 < ni(a) ? a.a.statusText : "";
                } catch (n) {
                  Vh(a.b, "Can not get status: " + n.message), h = "";
                }

                a.h = h + " [" + oi(a) + "]";
                ki(a);
              }
            } finally {
              li(a);
            }
          }
        }

        function li(a, b) {
          if (a.a) {
            ii(a);
            var c = a.a,
                d = a.A[0] ? la : null;
            a.a = null;
            a.A = null;
            b || a.dispatchEvent("ready");

            try {
              c.onreadystatechange = d;
            } catch (e) {
              (a = a.b) && a.log(Nh, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
            }
          }
        }

        function ii(a) {
          a.a && a.u && (a.a.ontimeout = null);
          a.o && (l.clearTimeout(a.o), a.o = null);
        }

        function ni(a) {
          return a.a ? a.a.readyState : 0;
        }

        function oi(a) {
          try {
            return 2 < ni(a) ? a.a.status : -1;
          } catch (b) {
            return -1;
          }
        }

        function pi(a) {
          try {
            return a.a ? a.a.responseText : "";
          } catch (b) {
            return Vh(a.b, "Can not get responseText: " + b.message), "";
          }
        }

        k.getResponse = function () {
          try {
            if (!this.a) return null;
            if ("response" in this.a) return this.a.response;

            switch (this.m) {
              case ci:
              case "text":
                return this.a.responseText;

              case "arraybuffer":
                if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer;
            }

            var a = this.b;
            a && a.log(Nh, "Response type " + this.m + " is not supported on this browser", void 0);
            return null;
          } catch (b) {
            return Vh(this.b, "Can not get response: " + b.message), null;
          }
        };

        function gi(a, b) {
          return b + " [" + a.P + " " + a.l + " " + oi(a) + "]";
        }

        ;
        /*
        Portions of this code are from MochiKit, received by
        The Closure Authors under the MIT license. All other code is Copyright
        2005-2009 The Closure Authors. All Rights Reserved.
        */

        function qi(a) {
          var b = ri;
          this.g = [];
          this.u = b;
          this.o = a || null;
          this.f = this.a = !1;
          this.c = void 0;
          this.m = this.A = this.i = !1;
          this.h = 0;
          this.b = null;
          this.l = 0;
        }

        qi.prototype.cancel = function (a) {
          if (this.a) this.c instanceof qi && this.c.cancel();else {
            if (this.b) {
              var b = this.b;
              delete this.b;
              a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel());
            }

            this.u ? this.u.call(this.o, this) : this.m = !0;
            this.a || (a = new si(this), ti(this), ui(this, !1, a));
          }
        };

        qi.prototype.v = function (a, b) {
          this.i = !1;
          ui(this, a, b);
        };

        function ui(a, b, c) {
          a.a = !0;
          a.c = c;
          a.f = !b;
          vi(a);
        }

        function ti(a) {
          if (a.a) {
            if (!a.m) throw new wi(a);
            a.m = !1;
          }
        }

        function xi(a, b) {
          yi(a, null, b, void 0);
        }

        function yi(a, b, c, d) {
          a.g.push([b, c, d]);
          a.a && vi(a);
        }

        qi.prototype.then = function (a, b, c) {
          var d,
              e,
              f = new D(function (g, h) {
            d = g;
            e = h;
          });
          yi(this, d, function (g) {
            g instanceof si ? f.cancel() : e(g);
          });
          return f.then(a, b, c);
        };

        qi.prototype.$goog_Thenable = !0;

        function zi(a) {
          return Sa(a.g, function (b) {
            return oa(b[1]);
          });
        }

        function vi(a) {
          if (a.h && a.a && zi(a)) {
            var b = a.h,
                c = Ai[b];
            c && (l.clearTimeout(c.a), delete Ai[b]);
            a.h = 0;
          }

          a.b && (a.b.l--, delete a.b);
          b = a.c;

          for (var d = c = !1; a.g.length && !a.i;) {
            var e = a.g.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.f ? g : f) try {
              var h = f.call(e || a.o, b);
              void 0 !== h && (a.f = a.f && (h == b || h instanceof Error), a.c = b = h);
              if (Ea(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.i = !0;
            } catch (n) {
              b = n, a.f = !0, zi(a) || (c = !0);
            }
          }

          a.c = b;
          d && (h = q(a.v, a, !0), d = q(a.v, a, !1), b instanceof qi ? (yi(b, h, d), b.A = !0) : b.then(h, d));
          c && (b = new Bi(b), Ai[b.a] = b, a.h = b.a);
        }

        function wi() {
          u.call(this);
        }

        r(wi, u);
        wi.prototype.message = "Deferred has already fired";
        wi.prototype.name = "AlreadyCalledError";

        function si() {
          u.call(this);
        }

        r(si, u);
        si.prototype.message = "Deferred was canceled";
        si.prototype.name = "CanceledError";

        function Bi(a) {
          this.a = l.setTimeout(q(this.c, this), 0);
          this.b = a;
        }

        Bi.prototype.c = function () {
          delete Ai[this.a];
          throw this.b;
        };

        var Ai = {};

        function Ci(a) {
          var b = {},
              c = b.document || document,
              d = yb(a).toString(),
              e = oc(document, "SCRIPT"),
              f = {
            Vb: e,
            Ma: void 0
          },
              g = new qi(f),
              h = null,
              n = null != b.timeout ? b.timeout : 5E3;
          0 < n && (h = window.setTimeout(function () {
            Di(e, !0);
            var p = new Ei(Fi, "Timeout reached for loading script " + d);
            ti(g);
            ui(g, !1, p);
          }, n), f.Ma = h);

          e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Di(e, b.wd || !1, h), ti(g), ui(g, !0, null));
          };

          e.onerror = function () {
            Di(e, !0, h);
            var p = new Ei(Gi, "Error while loading script " + d);
            ti(g);
            ui(g, !1, p);
          };

          f = b.attributes || {};
          z(f, {
            type: "text/javascript",
            charset: "UTF-8"
          });
          lc(e, f);
          Ob(e, a);
          Hi(c).appendChild(e);
          return g;
        }

        function Hi(a) {
          var b;
          return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
        }

        function ri() {
          if (this && this.Vb) {
            var a = this.Vb;
            a && "SCRIPT" == a.tagName && Di(a, !0, this.Ma);
          }
        }

        function Di(a, b, c) {
          null != c && l.clearTimeout(c);
          a.onload = la;
          a.onerror = la;
          a.onreadystatechange = la;
          b && window.setTimeout(function () {
            a && a.parentNode && a.parentNode.removeChild(a);
          }, 0);
        }

        var Gi = 0,
            Fi = 1;

        function Ei(a, b) {
          var c = "Jsloader error (code #" + a + ")";
          b && (c += ": " + b);
          u.call(this, c);
          this.code = a;
        }

        r(Ei, u);

        function Ii(a) {
          this.f = a;
        }

        r(Ii, Bh);

        Ii.prototype.a = function () {
          return new this.f();
        };

        Ii.prototype.b = function () {
          return {};
        };

        function Ji(a, b, c) {
          this.c = a;
          a = b || {};
          this.l = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
          this.v = a.secureTokenTimeout || Ki;
          this.g = nb(a.secureTokenHeaders || Li);
          this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
          this.i = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
          this.m = a.firebaseTimeout || Mi;
          this.a = nb(a.firebaseHeaders || Ni);
          c && (this.a["X-Client-Version"] = c, this.g["X-Client-Version"] = c);
          c = "Node" == Ke();
          c = l.XMLHttpRequest || c && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node.XMLHttpRequest;
          if (!c && !Je()) throw new t("internal-error", "The XMLHttpRequest compatibility library was not found.");
          this.f = void 0;
          Je() ? this.f = new Wh(self) : Le() ? this.f = new Ii(c) : this.f = new Gh();
          this.b = null;
        }

        var Oi,
            Eg = "idToken",
            Ki = new Ze(3E4, 6E4),
            Li = {
          "Content-Type": "application/x-www-form-urlencoded"
        },
            Mi = new Ze(3E4, 6E4),
            Ni = {
          "Content-Type": "application/json"
        };

        function Pi(a, b) {
          b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"];
        }

        function Qi(a, b) {
          b && (a.l = Ri("https://securetoken.googleapis.com/v1/token", b), a.h = Ri("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b), a.i = Ri("https://identitytoolkit.googleapis.com/v2/", b));
        }

        function Ri(a, b) {
          a = be(a);
          b = be(b.url);
          a.c = a.a + a.c;
          Od(a, b.f);
          a.a = b.a;
          Pd(a, b.g);
          return a.toString();
        }

        function Si(a, b) {
          b ? (a.a["X-Client-Version"] = b, a.g["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"]);
        }

        Ji.prototype.S = function () {
          return this.b;
        };

        function Ti(a, b, c, d, e, f, g) {
          ue() || Je() ? a = q(a.u, a) : (Oi || (Oi = new D(function (h, n) {
            Ui(h, n);
          })), a = q(a.o, a));
          a(b, c, d, e, f, g);
        }

        Ji.prototype.u = function (a, b, c, d, e, f) {
          if (Je() && ("undefined" === typeof l.fetch || "undefined" === typeof l.Headers || "undefined" === typeof l.Request)) throw new t("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
          var g = new bi(this.f);

          if (f) {
            g.g = Math.max(0, f);
            var h = setTimeout(function () {
              g.dispatchEvent("timeout");
            }, f);
          }

          qd(g, "complete", function () {
            h && clearTimeout(h);
            var n = null;

            try {
              n = JSON.parse(pi(this)) || null;
            } catch (p) {
              n = null;
            }

            b && b(n);
          });
          wd(g, "ready", function () {
            h && clearTimeout(h);
            Xc(this);
          });
          wd(g, "timeout", function () {
            h && clearTimeout(h);
            Xc(this);
            b && b(null);
          });
          fi(g, a, c, d, e);
        };

        var Vi = new qb(rb, "https://apis.google.com/js/client.js?onload=%{onload}"),
            Wi = "__fcb" + Math.floor(1E6 * Math.random()).toString();

        function Ui(a, b) {
          if (((window.gapi || {}).client || {}).request) a();else {
            l[Wi] = function () {
              ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
            };

            var c = zb(Vi, {
              onload: Wi
            });
            xi(Ci(c), function () {
              b(Error("CORS_UNSUPPORTED"));
            });
          }
        }

        Ji.prototype.o = function (a, b, c, d, e) {
          var f = this;
          Oi.then(function () {
            window.gapi.client.setApiKey(f.c);
            var g = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null);
            window.gapi.client.request({
              path: a,
              method: c,
              body: d,
              headers: e,
              authType: "none",
              callback: function callback(h) {
                window.gapi.auth.setToken(g);
                b && b(h);
              }
            });
          }).s(function (g) {
            b && b({
              error: {
                message: g && g.message || "CORS_UNSUPPORTED"
              }
            });
          });
        };

        function Xi(a, b) {
          return new D(function (c, d) {
            "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Ti(a, a.l + "?key=" + encodeURIComponent(a.c), function (e) {
              e ? e.error ? d(Yi(e)) : e.access_token && e.refresh_token ? c(e) : d(new t("internal-error")) : d(new t("network-request-failed"));
            }, "POST", fe(b).toString(), a.g, a.v.get()) : d(new t("internal-error"));
          });
        }

        function Zi(a, b, c, d, e, f, g) {
          var h = be(b + c);
          J(h, "key", a.c);
          g && J(h, "cb", va().toString());
          var n = "GET" == d;
          if (n) for (var p in e) {
            e.hasOwnProperty(p) && J(h, p, e[p]);
          }
          return new D(function (v, B) {
            Ti(a, h.toString(), function (A) {
              A ? A.error ? B(Yi(A, f || {})) : v(A) : B(new t("network-request-failed"));
            }, d, n ? void 0 : ke(Ve(e)), a.a, a.m.get());
          });
        }

        function $i(a) {
          a = a.email;
          if ("string" !== typeof a || !De.test(a)) throw new t("invalid-email");
        }

        function aj(a) {
          "email" in a && $i(a);
        }

        function bj(a, b) {
          return O(a, cj, {
            identifier: b,
            continueUri: Se() ? re() : "http://localhost"
          }).then(function (c) {
            return c.signinMethods || [];
          });
        }

        function dj(a) {
          return O(a, ej, {}).then(function (b) {
            return b.authorizedDomains || [];
          });
        }

        function P(a) {
          if (!a[Eg]) {
            if (a.mfaPendingCredential) throw new t("multi-factor-auth-required", null, nb(a));
            throw new t("internal-error");
          }
        }

        function fj(a) {
          if (a.phoneNumber || a.temporaryProof) {
            if (!a.phoneNumber || !a.temporaryProof) throw new t("internal-error");
          } else {
            if (!a.sessionInfo) throw new t("missing-verification-id");
            if (!a.code) throw new t("missing-verification-code");
          }
        }

        Ji.prototype.yb = function () {
          return O(this, gj, {});
        };

        Ji.prototype.Ab = function (a, b) {
          return O(this, hj, {
            idToken: a,
            email: b
          });
        };

        Ji.prototype.Bb = function (a, b) {
          return O(this, dh, {
            idToken: a,
            password: b
          });
        };

        var ij = {
          displayName: "DISPLAY_NAME",
          photoUrl: "PHOTO_URL"
        };
        k = Ji.prototype;

        k.Cb = function (a, b) {
          var c = {
            idToken: a
          },
              d = [];
          lb(ij, function (e, f) {
            var g = b[f];
            null === g ? d.push(e) : f in b && (c[f] = g);
          });
          d.length && (c.deleteAttribute = d);
          return O(this, hj, c);
        };

        k.ub = function (a, b) {
          a = {
            requestType: "PASSWORD_RESET",
            email: a
          };
          z(a, b);
          return O(this, jj, a);
        };

        k.vb = function (a, b) {
          a = {
            requestType: "EMAIL_SIGNIN",
            email: a
          };
          z(a, b);
          return O(this, kj, a);
        };

        k.tb = function (a, b) {
          a = {
            requestType: "VERIFY_EMAIL",
            idToken: a
          };
          z(a, b);
          return O(this, lj, a);
        };

        k.Db = function (a, b, c) {
          a = {
            requestType: "VERIFY_AND_CHANGE_EMAIL",
            idToken: a,
            newEmail: b
          };
          z(a, c);
          return O(this, mj, a);
        };

        function ph(a, b) {
          return O(a, nj, b);
        }

        k.eb = function (a) {
          return O(this, oj, a);
        };

        function nh(a, b) {
          return O(a, pj, b).then(function (c) {
            return c.phoneSessionInfo.sessionInfo;
          });
        }

        function qj(a) {
          if (!a.phoneVerificationInfo) throw new t("internal-error");
          if (!a.phoneVerificationInfo.sessionInfo) throw new t("missing-verification-id");
          if (!a.phoneVerificationInfo.code) throw new t("missing-verification-code");
        }

        function oh(a, b) {
          return O(a, rj, b).then(function (c) {
            return c.phoneResponseInfo.sessionInfo;
          });
        }

        function sj(a, b, c) {
          return O(a, tj, {
            idToken: b,
            deleteProvider: c
          });
        }

        function uj(a) {
          if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken) throw new t("internal-error");
        }

        function vj(a, b) {
          b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Td(a.postBody), je(a, "nonce") && (b.nonce = a.get("nonce"))));
          return b;
        }

        function wj(a) {
          var b = null;
          a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Ah(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Ah(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b = Ah(a)) : a.errorMessage && (b = xj(a.errorMessage));
          if (b) throw b;
          P(a);
        }

        function Gg(a, b) {
          b.returnIdpCredential = !0;
          return O(a, yj, b);
        }

        function Ig(a, b) {
          b.returnIdpCredential = !0;
          return O(a, zj, b);
        }

        function Jg(a, b) {
          b.returnIdpCredential = !0;
          b.autoCreate = !1;
          return O(a, Aj, b);
        }

        function Bj(a) {
          if (!a.oobCode) throw new t("invalid-action-code");
        }

        k.mb = function (a, b) {
          return O(this, Cj, {
            oobCode: a,
            newPassword: b
          });
        };

        k.Qa = function (a) {
          return O(this, Dj, {
            oobCode: a
          });
        };

        k.ib = function (a) {
          return O(this, Ej, {
            oobCode: a
          });
        };

        var Ej = {
          endpoint: "setAccountInfo",
          B: Bj,
          Z: "email",
          C: !0
        },
            Dj = {
          endpoint: "resetPassword",
          B: Bj,
          F: function F(a) {
            var b = a.requestType;
            if (!b || !a.email && "EMAIL_SIGNIN" != b && "VERIFY_AND_CHANGE_EMAIL" != b) throw new t("internal-error");
          },
          C: !0
        },
            Fj = {
          endpoint: "signupNewUser",
          B: function B(a) {
            $i(a);
            if (!a.password) throw new t("weak-password");
          },
          F: P,
          U: !0,
          C: !0
        },
            cj = {
          endpoint: "createAuthUri",
          C: !0
        },
            Gj = {
          endpoint: "deleteAccount",
          M: ["idToken"]
        },
            tj = {
          endpoint: "setAccountInfo",
          M: ["idToken", "deleteProvider"],
          B: function B(a) {
            if (!Array.isArray(a.deleteProvider)) throw new t("internal-error");
          }
        },
            ah = {
          endpoint: "emailLinkSignin",
          M: ["email", "oobCode"],
          B: $i,
          F: P,
          U: !0,
          C: !0
        },
            ch = {
          endpoint: "emailLinkSignin",
          M: ["idToken", "email", "oobCode"],
          B: $i,
          F: P,
          U: !0
        },
            Hj = {
          endpoint: "accounts/mfaEnrollment:finalize",
          M: ["idToken", "phoneVerificationInfo"],
          B: qj,
          F: P,
          C: !0,
          Na: !0
        },
            Ij = {
          endpoint: "accounts/mfaSignIn:finalize",
          M: ["mfaPendingCredential", "phoneVerificationInfo"],
          B: qj,
          F: P,
          C: !0,
          Na: !0
        },
            Jj = {
          endpoint: "getAccountInfo"
        },
            kj = {
          endpoint: "getOobConfirmationCode",
          M: ["requestType"],
          B: function B(a) {
            if ("EMAIL_SIGNIN" != a.requestType) throw new t("internal-error");
            $i(a);
          },
          Z: "email",
          C: !0
        },
            lj = {
          endpoint: "getOobConfirmationCode",
          M: ["idToken", "requestType"],
          B: function B(a) {
            if ("VERIFY_EMAIL" != a.requestType) throw new t("internal-error");
          },
          Z: "email",
          C: !0
        },
            mj = {
          endpoint: "getOobConfirmationCode",
          M: ["idToken", "newEmail", "requestType"],
          B: function B(a) {
            if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType) throw new t("internal-error");
          },
          Z: "email",
          C: !0
        },
            jj = {
          endpoint: "getOobConfirmationCode",
          M: ["requestType"],
          B: function B(a) {
            if ("PASSWORD_RESET" != a.requestType) throw new t("internal-error");
            $i(a);
          },
          Z: "email",
          C: !0
        },
            ej = {
          kb: !0,
          endpoint: "getProjectConfig",
          Tb: "GET"
        },
            Kj = {
          kb: !0,
          endpoint: "getRecaptchaParam",
          Tb: "GET",
          F: function F(a) {
            if (!a.recaptchaSiteKey) throw new t("internal-error");
          }
        },
            Cj = {
          endpoint: "resetPassword",
          B: Bj,
          Z: "email",
          C: !0
        },
            nj = {
          endpoint: "sendVerificationCode",
          M: ["phoneNumber", "recaptchaToken"],
          Z: "sessionInfo",
          C: !0
        },
            hj = {
          endpoint: "setAccountInfo",
          M: ["idToken"],
          B: aj,
          U: !0
        },
            dh = {
          endpoint: "setAccountInfo",
          M: ["idToken"],
          B: function B(a) {
            aj(a);
            if (!a.password) throw new t("weak-password");
          },
          F: P,
          U: !0
        },
            gj = {
          endpoint: "signupNewUser",
          F: P,
          U: !0,
          C: !0
        },
            pj = {
          endpoint: "accounts/mfaEnrollment:start",
          M: ["idToken", "phoneEnrollmentInfo"],
          B: function B(a) {
            if (!a.phoneEnrollmentInfo) throw new t("internal-error");
            if (!a.phoneEnrollmentInfo.phoneNumber) throw new t("missing-phone-number");
            if (!a.phoneEnrollmentInfo.recaptchaToken) throw new t("missing-app-credential");
          },
          F: function F(a) {
            if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo) throw new t("internal-error");
          },
          C: !0,
          Na: !0
        },
            rj = {
          endpoint: "accounts/mfaSignIn:start",
          M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
          B: function B(a) {
            if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken) throw new t("missing-app-credential");
          },
          F: function F(a) {
            if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo) throw new t("internal-error");
          },
          C: !0,
          Na: !0
        },
            yj = {
          endpoint: "verifyAssertion",
          B: uj,
          Xa: vj,
          F: wj,
          U: !0,
          C: !0
        },
            Aj = {
          endpoint: "verifyAssertion",
          B: uj,
          Xa: vj,
          F: function F(a) {
            if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new t("user-not-found");
            if (a.errorMessage) throw xj(a.errorMessage);
            P(a);
          },
          U: !0,
          C: !0
        },
            zj = {
          endpoint: "verifyAssertion",
          B: function B(a) {
            uj(a);
            if (!a.idToken) throw new t("internal-error");
          },
          Xa: vj,
          F: wj,
          U: !0
        },
            Lj = {
          endpoint: "verifyCustomToken",
          B: function B(a) {
            if (!a.token) throw new t("invalid-custom-token");
          },
          F: P,
          U: !0,
          C: !0
        },
            bh = {
          endpoint: "verifyPassword",
          B: function B(a) {
            $i(a);
            if (!a.password) throw new t("wrong-password");
          },
          F: P,
          U: !0,
          C: !0
        },
            oj = {
          endpoint: "verifyPhoneNumber",
          B: fj,
          F: P,
          C: !0
        },
            jh = {
          endpoint: "verifyPhoneNumber",
          B: function B(a) {
            if (!a.idToken) throw new t("internal-error");
            fj(a);
          },
          F: function F(a) {
            if (a.temporaryProof) throw a.code = "credential-already-in-use", Ah(a);
            P(a);
          }
        },
            kh = {
          Gb: {
            USER_NOT_FOUND: "user-not-found"
          },
          endpoint: "verifyPhoneNumber",
          B: fj,
          F: P,
          C: !0
        },
            Mj = {
          endpoint: "accounts/mfaEnrollment:withdraw",
          M: ["idToken", "mfaEnrollmentId"],
          F: function F(a) {
            if (!!a[Eg] ^ !!a.refreshToken) throw new t("internal-error");
          },
          C: !0,
          Na: !0
        };

        function O(a, b, c) {
          if (!nf(c, b.M)) return F(new t("internal-error"));
          var d = !!b.Na,
              e = b.Tb || "POST",
              f;
          return E(c).then(b.B).then(function () {
            b.U && (c.returnSecureToken = !0);
            b.C && a.b && "undefined" === typeof c.tenantId && (c.tenantId = a.b);
            return d ? Zi(a, a.i, b.endpoint, e, c, b.Gb, b.kb || !1) : Zi(a, a.h, b.endpoint, e, c, b.Gb, b.kb || !1);
          }).then(function (g) {
            f = g;
            return b.Xa ? b.Xa(c, f) : f;
          }).then(b.F).then(function () {
            if (!b.Z) return f;
            if (!(b.Z in f)) throw new t("internal-error");
            return f[b.Z];
          });
        }

        function xj(a) {
          return Yi({
            error: {
              errors: [{
                message: a
              }],
              code: 400,
              message: a
            }
          });
        }

        function Yi(a, b) {
          var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
          var d = {
            keyInvalid: "invalid-api-key",
            ipRefererBlocked: "app-not-authorized"
          };
          if (c = d[c] ? new t(d[c]) : null) return c;
          c = a.error && a.error.message || "";
          d = {
            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_EMAIL: "invalid-email",
            INVALID_PASSWORD: "wrong-password",
            USER_DISABLED: "user-disabled",
            MISSING_PASSWORD: "internal-error",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
            INVALID_SENDER: "invalid-sender",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            INVALID_PROVIDER_ID: "invalid-provider-id",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            CORS_UNSUPPORTED: "cors-unsupported",
            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
            INVALID_APP_ID: "invalid-app-id",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            WEAK_PASSWORD: "weak-password",
            OPERATION_NOT_ALLOWED: "operation-not-allowed",
            USER_CANCELLED: "user-cancelled",
            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
            INVALID_APP_CREDENTIAL: "invalid-app-credential",
            INVALID_CODE: "invalid-verification-code",
            INVALID_PHONE_NUMBER: "invalid-phone-number",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_APP_CREDENTIAL: "missing-app-credential",
            MISSING_CODE: "missing-verification-code",
            MISSING_PHONE_NUMBER: "missing-phone-number",
            MISSING_SESSION_INFO: "missing-verification-id",
            QUOTA_EXCEEDED: "quota-exceeded",
            SESSION_EXPIRED: "code-expired",
            REJECTED_CREDENTIAL: "rejected-credential",
            INVALID_CONTINUE_URI: "invalid-continue-uri",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            INVALID_CERT_HASH: "invalid-cert-hash",
            UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
            INVALID_TENANT_ID: "invalid-tenant-id",
            TENANT_ID_MISMATCH: "tenant-id-mismatch",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
            UNVERIFIED_EMAIL: "unverified-email"
          };
          z(d, b || {});
          b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;

          for (var e in d) {
            if (0 === c.indexOf(e)) return new t(d[e], b);
          }

          !b && a && (b = Ue(a));
          return new t("internal-error", b);
        }

        ;

        function Nj(a) {
          this.b = a;
          this.a = null;
          this.qb = Oj(this);
        }

        function Oj(a) {
          return Pj().then(function () {
            return new D(function (b, c) {
              L("gapi.iframes.getContext")().open({
                where: document.body,
                url: a.b,
                messageHandlersFilter: L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                attributes: {
                  style: {
                    position: "absolute",
                    top: "-100px",
                    width: "1px",
                    height: "1px"
                  }
                },
                dontclear: !0
              }, function (d) {
                function e() {
                  clearTimeout(f);
                  b();
                }

                a.a = d;
                a.a.restyle({
                  setHideOnLeave: !1
                });
                var f = setTimeout(function () {
                  c(Error("Network Error"));
                }, Qj.get());
                d.ping(e).then(e, function () {
                  c(Error("Network Error"));
                });
              });
            });
          });
        }

        function Rj(a, b) {
          return a.qb.then(function () {
            return new D(function (c) {
              a.a.send(b.type, b, c, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
            });
          });
        }

        function Sj(a, b) {
          a.qb.then(function () {
            a.a.register("authEvent", b, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
          });
        }

        var Tj = new qb(rb, "https://apis.google.com/js/api.js?onload=%{onload}"),
            Uj = new Ze(3E4, 6E4),
            Qj = new Ze(5E3, 15E3),
            Vj = null;

        function Pj() {
          return Vj ? Vj : Vj = new D(function (a, b) {
            function c() {
              Ye();
              L("gapi.load")("gapi.iframes", {
                callback: a,
                ontimeout: function ontimeout() {
                  Ye();
                  b(Error("Network Error"));
                },
                timeout: Uj.get()
              });
            }

            if (L("gapi.iframes.Iframe")) a();else if (L("gapi.load")) c();else {
              var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();

              l[d] = function () {
                L("gapi.load") ? c() : b(Error("Network Error"));
              };

              d = zb(Tj, {
                onload: d
              });
              E(Ci(d)).s(function () {
                b(Error("Network Error"));
              });
            }
          }).s(function (a) {
            Vj = null;
            throw a;
          });
        }

        ;

        function Wj(a, b, c, d) {
          this.l = a;
          this.h = b;
          this.i = c;
          this.g = d;
          this.f = null;
          this.g ? (a = be(this.g.url), a = ce(a.f, a.a, a.g, "/emulator/auth/iframe")) : a = ce("https", this.l, null, "/__/auth/iframe");
          this.a = a;
          J(this.a, "apiKey", this.h);
          J(this.a, "appName", this.i);
          this.b = null;
          this.c = [];
        }

        Wj.prototype.toString = function () {
          this.f ? J(this.a, "v", this.f) : ie(this.a.b, "v");
          this.b ? J(this.a, "eid", this.b) : ie(this.a.b, "eid");
          this.c.length ? J(this.a, "fw", this.c.join(",")) : ie(this.a.b, "fw");
          return this.a.toString();
        };

        function Xj(a, b, c, d, e, f) {
          this.u = a;
          this.o = b;
          this.c = c;
          this.v = d;
          this.m = f;
          this.i = this.g = this.l = null;
          this.a = e;
          this.h = this.f = null;
        }

        Xj.prototype.xb = function (a) {
          this.h = a;
          return this;
        };

        Xj.prototype.toString = function () {
          if (this.m) {
            var a = be(this.m.url);
            a = ce(a.f, a.a, a.g, "/emulator/auth/handler");
          } else a = ce("https", this.u, null, "/__/auth/handler");

          J(a, "apiKey", this.o);
          J(a, "appName", this.c);
          J(a, "authType", this.v);

          if (this.a.isOAuthProvider) {
            var b = this.a;

            try {
              var c = _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].app(this.c).auth().ka();
            } catch (h) {
              c = null;
            }

            b.nb = c;
            J(a, "providerId", this.a.providerId);
            c = this.a;
            b = Ve(c.Hb);

            for (var d in b) {
              b[d] = b[d].toString();
            }

            d = c.Pc;
            b = nb(b);

            for (var e = 0; e < d.length; e++) {
              var f = d[e];
              f in b && delete b[f];
            }

            c.ob && c.nb && !b[c.ob] && (b[c.ob] = c.nb);
            mb(b) || J(a, "customParameters", Ue(b));
          }

          "function" === typeof this.a.Pb && (c = this.a.Pb(), c.length && J(a, "scopes", c.join(",")));
          this.l ? J(a, "redirectUrl", this.l) : ie(a.b, "redirectUrl");
          this.g ? J(a, "eventId", this.g) : ie(a.b, "eventId");
          this.i ? J(a, "v", this.i) : ie(a.b, "v");
          if (this.b) for (var g in this.b) {
            this.b.hasOwnProperty(g) && !ae(a, g) && J(a, g, this.b[g]);
          }
          this.h ? J(a, "tid", this.h) : ie(a.b, "tid");
          this.f ? J(a, "eid", this.f) : ie(a.b, "eid");
          g = Yj(this.c);
          g.length && J(a, "fw", g.join(","));
          return a.toString();
        };

        function Yj(a) {
          try {
            return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].app(a).auth().Ga();
          } catch (b) {
            return [];
          }
        }

        function Zj(a, b, c, d, e, f) {
          this.o = a;
          this.g = b;
          this.b = c;
          this.f = f;
          this.c = d || null;
          this.i = e || null;
          this.l = this.u = this.A = null;
          this.h = [];
          this.v = this.a = null;
        }

        function ak(a) {
          var b = re();
          return dj(a).then(function (c) {
            a: {
              var d = be(b),
                  e = d.f;
              d = d.a;

              for (var f = 0; f < c.length; f++) {
                var g = c[f];
                var h = d;
                var n = e;
                0 == g.indexOf("chrome-extension://") ? h = be(g).a == h && "chrome-extension" == n : "http" != n && "https" != n ? h = !1 : Ce.test(g) ? h = h == g : (g = g.split(".").join("\\."), h = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(h));

                if (h) {
                  c = !0;
                  break a;
                }
              }

              c = !1;
            }

            if (!c) throw new yh(re());
          });
        }

        function bk(a) {
          if (a.v) return a.v;
          a.v = Ee().then(function () {
            if (!a.u) {
              var b = a.c,
                  c = a.i,
                  d = Yj(a.b),
                  e = new Wj(a.o, a.g, a.b, a.f);
              e.f = b;
              e.b = c;
              e.c = Za(d || []);
              a.u = e.toString();
            }

            a.m = new Nj(a.u);
            ck(a);
          });
          return a.v;
        }

        k = Zj.prototype;

        k.Nb = function (a, b, c) {
          var d = new t("popup-closed-by-user"),
              e = new t("web-storage-unsupported"),
              f = this,
              g = !1;
          return this.la().then(function () {
            dk(f).then(function (h) {
              h || (a && ye(a), b(e), g = !0);
            });
          }).s(function () {}).then(function () {
            if (!g) return Be(a);
          }).then(function () {
            if (!g) return Ed(c).then(function () {
              b(d);
            });
          });
        };

        k.Wb = function () {
          var a = K();
          return !Te(a) && !Xe(a);
        };

        k.Sb = function () {
          return !1;
        };

        k.Lb = function (a, b, c, d, e, f, g, h) {
          if (!a) return F(new t("popup-blocked"));
          if (g && !Te()) return this.la().s(function (p) {
            ye(a);
            e(p);
          }), d(), E();
          this.a || (this.a = ak(ek(this)));
          var n = this;
          return this.a.then(function () {
            var p = n.la().s(function (v) {
              ye(a);
              e(v);
              throw v;
            });
            d();
            return p;
          }).then(function () {
            sh(c);

            if (!g) {
              var p = fk(n.o, n.g, n.b, b, c, null, f, n.c, void 0, n.i, h, n.f);
              se(p, a);
            }
          }).s(function (p) {
            "auth/network-request-failed" == p.code && (n.a = null);
            throw p;
          });
        };

        function ek(a) {
          a.l || (a.A = a.c ? Oe(a.c, Yj(a.b)) : null, a.l = new Ji(a.g, Ca(a.i), a.A), a.f && Qi(a.l, a.f));
          return a.l;
        }

        k.Mb = function (a, b, c, d) {
          this.a || (this.a = ak(ek(this)));
          var e = this;
          return this.a.then(function () {
            sh(b);
            var f = fk(e.o, e.g, e.b, a, b, re(), c, e.c, void 0, e.i, d, e.f);
            se(f);
          }).s(function (f) {
            "auth/network-request-failed" == f.code && (e.a = null);
            throw f;
          });
        };

        k.la = function () {
          var a = this;
          return bk(this).then(function () {
            return a.m.qb;
          }).s(function () {
            a.a = null;
            throw new t("network-request-failed");
          });
        };

        k.Zb = function () {
          return !0;
        };

        function fk(a, b, c, d, e, f, g, h, n, p, v, B) {
          a = new Xj(a, b, c, d, e, B);
          a.l = f;
          a.g = g;
          a.i = h;
          a.b = nb(n || null);
          a.f = p;
          return a.xb(v).toString();
        }

        function ck(a) {
          if (!a.m) throw Error("IfcHandler must be initialized!");
          Sj(a.m, function (b) {
            var c = {};

            if (b && b.authEvent) {
              var d = !1;
              b = uh(b.authEvent);

              for (c = 0; c < a.h.length; c++) {
                d = a.h[c](b) || d;
              }

              c = {};
              c.status = d ? "ACK" : "ERROR";
              return E(c);
            }

            c.status = "ERROR";
            return E(c);
          });
        }

        function dk(a) {
          var b = {
            type: "webStorageSupport"
          };
          return bk(a).then(function () {
            return Rj(a.m, b);
          }).then(function (c) {
            if (c && c.length && "undefined" !== typeof c[0].webStorageSupport) return c[0].webStorageSupport;
            throw Error();
          });
        }

        k.Ea = function (a) {
          this.h.push(a);
        };

        k.Ra = function (a) {
          Xa(this.h, function (b) {
            return b == a;
          });
        };

        function gk(a) {
          this.a = a || _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.reactNative && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.reactNative.AsyncStorage;
          if (!this.a) throw new t("internal-error", "The React Native compatibility library was not found.");
          this.type = "asyncStorage";
        }

        k = gk.prototype;

        k.get = function (a) {
          return E(this.a.getItem(a)).then(function (b) {
            return b && We(b);
          });
        };

        k.set = function (a, b) {
          return E(this.a.setItem(a, Ue(b)));
        };

        k.T = function (a) {
          return E(this.a.removeItem(a));
        };

        k.ca = function () {};

        k.ia = function () {};

        function hk(a) {
          this.b = a;
          this.a = {};
          this.f = q(this.c, this);
        }

        var ik = [];

        function jk() {
          var a = Je() ? self : null;
          w(ik, function (c) {
            c.b == a && (b = c);
          });

          if (!b) {
            var b = new hk(a);
            ik.push(b);
          }

          return b;
        }

        hk.prototype.c = function (a) {
          var b = a.data.eventType,
              c = a.data.eventId,
              d = this.a[b];

          if (d && 0 < d.length) {
            a.ports[0].postMessage({
              status: "ack",
              eventId: c,
              eventType: b,
              response: null
            });
            var e = [];
            w(d, function (f) {
              e.push(E().then(function () {
                return f(a.origin, a.data.data);
              }));
            });
            Jc(e).then(function (f) {
              var g = [];
              w(f, function (h) {
                g.push({
                  fulfilled: h.Ob,
                  value: h.value,
                  reason: h.reason ? h.reason.message : void 0
                });
              });
              w(g, function (h) {
                for (var n in h) {
                  "undefined" === typeof h[n] && delete h[n];
                }
              });
              a.ports[0].postMessage({
                status: "done",
                eventId: c,
                eventType: b,
                response: g
              });
            });
          }
        };

        function kk(a, b, c) {
          mb(a.a) && a.b.addEventListener("message", a.f);
          "undefined" === typeof a.a[b] && (a.a[b] = []);
          a.a[b].push(c);
        }

        ;

        function lk(a) {
          this.a = a;
        }

        lk.prototype.postMessage = function (a, b) {
          this.a.postMessage(a, b);
        };

        function mk(a) {
          this.c = a;
          this.b = !1;
          this.a = [];
        }

        function nk(a, b, c, d) {
          var e,
              f = c || {},
              g,
              h,
              n,
              p = null;
          if (a.b) return F(Error("connection_unavailable"));
          var v = d ? 800 : 50,
              B = "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
          return new D(function (A, Q) {
            B ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), B.port1.start(), h = setTimeout(function () {
              Q(Error("unsupported_event"));
            }, v), g = function g(xa) {
              xa.data.eventId === e && ("ack" === xa.data.status ? (clearTimeout(h), n = setTimeout(function () {
                Q(Error("timeout"));
              }, 3E3)) : "done" === xa.data.status ? (clearTimeout(n), "undefined" !== typeof xa.data.response ? A(xa.data.response) : Q(Error("unknown_error"))) : (clearTimeout(h), clearTimeout(n), Q(Error("invalid_response"))));
            }, p = {
              messageChannel: B,
              onMessage: g
            }, a.a.push(p), B.port1.addEventListener("message", g), a.c.postMessage({
              eventType: b,
              eventId: e,
              data: f
            }, [B.port2])) : Q(Error("connection_unavailable"));
          }).then(function (A) {
            ok(a, p);
            return A;
          }).s(function (A) {
            ok(a, p);
            throw A;
          });
        }

        function ok(a, b) {
          if (b) {
            var c = b.messageChannel,
                d = b.onMessage;
            c && (c.port1.removeEventListener("message", d), c.port1.close());
            Xa(a.a, function (e) {
              return e == b;
            });
          }
        }

        mk.prototype.close = function () {
          for (; 0 < this.a.length;) {
            ok(this, this.a[0]);
          }

          this.b = !0;
        };

        function pk() {
          if (!qk()) throw new t("web-storage-unsupported");
          this.c = {};
          this.a = [];
          this.b = 0;
          this.v = l.indexedDB;
          this.type = "indexedDB";
          this.g = this.m = this.f = this.l = null;
          this.o = !1;
          this.h = null;
          var a = this;
          Je() && self ? (this.m = jk(), kk(this.m, "keyChanged", function (b, c) {
            return rk(a).then(function (d) {
              0 < d.length && w(a.a, function (e) {
                e(d);
              });
              return {
                keyProcessed: Va(d, c.key)
              };
            });
          }), kk(this.m, "ping", function () {
            return E(["keyChanged"]);
          })) : ff().then(function (b) {
            if (a.h = b) a.g = new mk(new lk(b)), nk(a.g, "ping", null, !0).then(function (c) {
              c[0].fulfilled && Va(c[0].value, "keyChanged") && (a.o = !0);
            }).s(function () {});
          });
        }

        var sk;

        function tk(a) {
          return new D(function (b, c) {
            var d = a.v.deleteDatabase("firebaseLocalStorageDb");

            d.onsuccess = function () {
              b();
            };

            d.onerror = function (e) {
              c(Error(e.target.error));
            };
          });
        }

        function uk(a) {
          return new D(function (b, c) {
            var d = a.v.open("firebaseLocalStorageDb", 1);

            d.onerror = function (e) {
              try {
                e.preventDefault();
              } catch (f) {}

              c(Error(e.target.error));
            };

            d.onupgradeneeded = function (e) {
              e = e.target.result;

              try {
                e.createObjectStore("firebaseLocalStorage", {
                  keyPath: "fbase_key"
                });
              } catch (f) {
                c(f);
              }
            };

            d.onsuccess = function (e) {
              e = e.target.result;
              e.objectStoreNames.contains("firebaseLocalStorage") ? b(e) : tk(a).then(function () {
                return uk(a);
              }).then(function (f) {
                b(f);
              }).s(function (f) {
                c(f);
              });
            };
          });
        }

        function vk(a) {
          a.i || (a.i = uk(a));
          return a.i;
        }

        function wk(a, b) {
          function c(e, f) {
            vk(a).then(b).then(e).s(function (g) {
              if (3 < ++d) f(g);else return vk(a).then(function (h) {
                h.close();
                a.i = void 0;
                return c(e, f);
              });
            });
          }

          var d = 0;
          return new D(c);
        }

        function qk() {
          try {
            return !!l.indexedDB;
          } catch (a) {
            return !1;
          }
        }

        function xk(a) {
          return a.objectStore("firebaseLocalStorage");
        }

        function yk(a, b) {
          return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly");
        }

        function zk(a) {
          return new D(function (b, c) {
            a.onsuccess = function (d) {
              d && d.target ? b(d.target.result) : b();
            };

            a.onerror = function (d) {
              c(d.target.error);
            };
          });
        }

        k = pk.prototype;

        k.set = function (a, b) {
          var c = this,
              d = !1;
          return wk(this, function (e) {
            e = xk(yk(e, !0));
            return zk(e.get(a));
          }).then(function (e) {
            return wk(c, function (f) {
              f = xk(yk(f, !0));
              if (e) return e.value = b, zk(f.put(e));
              c.b++;
              d = !0;
              var g = {};
              g.fbase_key = a;
              g.value = b;
              return zk(f.add(g));
            });
          }).then(function () {
            c.c[a] = b;
            return Ak(c, a);
          }).na(function () {
            d && c.b--;
          });
        };

        function Ak(a, b) {
          return a.g && a.h && ef() === a.h ? nk(a.g, "keyChanged", {
            key: b
          }, a.o).then(function () {}).s(function () {}) : E();
        }

        k.get = function (a) {
          return wk(this, function (b) {
            return zk(xk(yk(b, !1)).get(a));
          }).then(function (b) {
            return b && b.value;
          });
        };

        k.T = function (a) {
          var b = this,
              c = !1;
          return wk(this, function (d) {
            c = !0;
            b.b++;
            return zk(xk(yk(d, !0))["delete"](a));
          }).then(function () {
            delete b.c[a];
            return Ak(b, a);
          }).na(function () {
            c && b.b--;
          });
        };

        function rk(a) {
          return vk(a).then(function (b) {
            var c = xk(yk(b, !1));
            return c.getAll ? zk(c.getAll()) : new D(function (d, e) {
              var f = [],
                  g = c.openCursor();

              g.onsuccess = function (h) {
                (h = h.target.result) ? (f.push(h.value), h["continue"]()) : d(f);
              };

              g.onerror = function (h) {
                e(h.target.error);
              };
            });
          }).then(function (b) {
            var c = {},
                d = [];

            if (0 == a.b) {
              for (d = 0; d < b.length; d++) {
                c[b[d].fbase_key] = b[d].value;
              }

              d = te(a.c, c);
              a.c = c;
            }

            return d;
          });
        }

        k.ca = function (a) {
          0 == this.a.length && Bk(this);
          this.a.push(a);
        };

        k.ia = function (a) {
          Xa(this.a, function (b) {
            return b == a;
          });
          0 == this.a.length && Ck(this);
        };

        function Bk(a) {
          function b() {
            a.f = setTimeout(function () {
              a.l = rk(a).then(function (c) {
                0 < c.length && w(a.a, function (d) {
                  d(c);
                });
              }).then(function () {
                b();
              }).s(function (c) {
                "STOP_EVENT" != c.message && b();
              });
            }, 800);
          }

          Ck(a);
          b();
        }

        function Ck(a) {
          a.l && a.l.cancel("STOP_EVENT");
          a.f && (clearTimeout(a.f), a.f = null);
        }

        ;

        function Dk(a) {
          var b = this,
              c = null;
          this.a = [];
          this.type = "indexedDB";
          this.c = a;
          this.b = E().then(function () {
            if (qk()) {
              var d = Qe(),
                  e = "__sak" + d;
              sk || (sk = new pk());
              c = sk;
              return c.set(e, d).then(function () {
                return c.get(e);
              }).then(function (f) {
                if (f !== d) throw Error("indexedDB not supported!");
                return c.T(e);
              }).then(function () {
                return c;
              }).s(function () {
                return b.c;
              });
            }

            return b.c;
          }).then(function (d) {
            b.type = d.type;
            d.ca(function (e) {
              w(b.a, function (f) {
                f(e);
              });
            });
            return d;
          });
        }

        k = Dk.prototype;

        k.get = function (a) {
          return this.b.then(function (b) {
            return b.get(a);
          });
        };

        k.set = function (a, b) {
          return this.b.then(function (c) {
            return c.set(a, b);
          });
        };

        k.T = function (a) {
          return this.b.then(function (b) {
            return b.T(a);
          });
        };

        k.ca = function (a) {
          this.a.push(a);
        };

        k.ia = function (a) {
          Xa(this.a, function (b) {
            return b == a;
          });
        };

        function Ek() {
          this.a = {};
          this.type = "inMemory";
        }

        k = Ek.prototype;

        k.get = function (a) {
          return E(this.a[a]);
        };

        k.set = function (a, b) {
          this.a[a] = b;
          return E();
        };

        k.T = function (a) {
          delete this.a[a];
          return E();
        };

        k.ca = function () {};

        k.ia = function () {};

        function Fk() {
          if (!Gk()) {
            if ("Node" == Ke()) throw new t("internal-error", "The LocalStorage compatibility library was not found.");
            throw new t("web-storage-unsupported");
          }

          this.a = Hk() || _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node.localStorage;
          this.type = "localStorage";
        }

        function Hk() {
          try {
            var a = l.localStorage,
                b = Qe();
            a && (a.setItem(b, "1"), a.removeItem(b));
            return a;
          } catch (c) {
            return null;
          }
        }

        function Gk() {
          var a = "Node" == Ke();
          a = Hk() || a && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node.localStorage;
          if (!a) return !1;

          try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
          } catch (b) {
            return !1;
          }
        }

        k = Fk.prototype;

        k.get = function (a) {
          var b = this;
          return E().then(function () {
            var c = b.a.getItem(a);
            return We(c);
          });
        };

        k.set = function (a, b) {
          var c = this;
          return E().then(function () {
            var d = Ue(b);
            null === d ? c.T(a) : c.a.setItem(a, d);
          });
        };

        k.T = function (a) {
          var b = this;
          return E().then(function () {
            b.a.removeItem(a);
          });
        };

        k.ca = function (a) {
          l.window && nd(l.window, "storage", a);
        };

        k.ia = function (a) {
          l.window && H(l.window, "storage", a);
        };

        function Ik() {
          this.type = "nullStorage";
        }

        k = Ik.prototype;

        k.get = function () {
          return E(null);
        };

        k.set = function () {
          return E();
        };

        k.T = function () {
          return E();
        };

        k.ca = function () {};

        k.ia = function () {};

        function Jk() {
          if (!Kk()) {
            if ("Node" == Ke()) throw new t("internal-error", "The SessionStorage compatibility library was not found.");
            throw new t("web-storage-unsupported");
          }

          this.a = Lk() || _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node.sessionStorage;
          this.type = "sessionStorage";
        }

        function Lk() {
          try {
            var a = l.sessionStorage,
                b = Qe();
            a && (a.setItem(b, "1"), a.removeItem(b));
            return a;
          } catch (c) {
            return null;
          }
        }

        function Kk() {
          var a = "Node" == Ke();
          a = Lk() || a && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.node.sessionStorage;
          if (!a) return !1;

          try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
          } catch (b) {
            return !1;
          }
        }

        k = Jk.prototype;

        k.get = function (a) {
          var b = this;
          return E().then(function () {
            var c = b.a.getItem(a);
            return We(c);
          });
        };

        k.set = function (a, b) {
          var c = this;
          return E().then(function () {
            var d = Ue(b);
            null === d ? c.T(a) : c.a.setItem(a, d);
          });
        };

        k.T = function (a) {
          var b = this;
          return E().then(function () {
            b.a.removeItem(a);
          });
        };

        k.ca = function () {};

        k.ia = function () {};

        function Mk() {
          var a = {};
          a.Browser = Nk;
          a.Node = Ok;
          a.ReactNative = Pk;
          a.Worker = Qk;
          this.a = a[Ke()];
        }

        var Rk,
            Nk = {
          D: Fk,
          ab: Jk
        },
            Ok = {
          D: Fk,
          ab: Jk
        },
            Pk = {
          D: gk,
          ab: Ik
        },
            Qk = {
          D: Fk,
          ab: Ik
        };
        var Sk = {
          qd: "local",
          NONE: "none",
          sd: "session"
        };

        function Tk(a) {
          var b = new t("invalid-persistence-type"),
              c = new t("unsupported-persistence-type");

          a: {
            for (d in Sk) {
              if (Sk[d] == a) {
                var d = !0;
                break a;
              }
            }

            d = !1;
          }

          if (!d || "string" !== typeof a) throw b;

          switch (Ke()) {
            case "ReactNative":
              if ("session" === a) throw c;
              break;

            case "Node":
              if ("none" !== a) throw c;
              break;

            case "Worker":
              if ("session" === a || !qk() && "none" !== a) throw c;
              break;

            default:
              if (!Pe() && "none" !== a) throw c;
          }
        }

        function Uk() {
          var a = !Xe(K()) && Ie() ? !0 : !1,
              b = Te(),
              c = Pe();
          this.v = a;
          this.h = b;
          this.l = c;
          this.a = {};
          Rk || (Rk = new Mk());
          a = Rk;

          try {
            this.g = !qe() && df() || !l.indexedDB ? new a.a.D() : new Dk(Je() ? new Ek() : new a.a.D());
          } catch (d) {
            this.g = new Ek(), this.h = !0;
          }

          try {
            this.i = new a.a.ab();
          } catch (d) {
            this.i = new Ek();
          }

          this.m = new Ek();
          this.f = q(this.Xb, this);
          this.b = {};
        }

        var Vk;

        function Wk() {
          Vk || (Vk = new Uk());
          return Vk;
        }

        function Xk(a, b) {
          switch (b) {
            case "session":
              return a.i;

            case "none":
              return a.m;

            default:
              return a.g;
          }
        }

        function Yk(a, b) {
          return "firebase:" + a.name + (b ? ":" + b : "");
        }

        function Zk(a, b, c) {
          var d = Yk(b, c),
              e = Xk(a, b.D);
          return a.get(b, c).then(function (f) {
            var g = null;

            try {
              g = We(l.localStorage.getItem(d));
            } catch (h) {}

            if (g && !f) return l.localStorage.removeItem(d), a.set(b, g, c);
            g && f && "localStorage" != e.type && l.localStorage.removeItem(d);
          });
        }

        k = Uk.prototype;

        k.get = function (a, b) {
          return Xk(this, a.D).get(Yk(a, b));
        };

        function $k(a, b, c) {
          c = Yk(b, c);
          "local" == b.D && (a.b[c] = null);
          return Xk(a, b.D).T(c);
        }

        k.set = function (a, b, c) {
          var d = Yk(a, c),
              e = this,
              f = Xk(this, a.D);
          return f.set(d, b).then(function () {
            return f.get(d);
          }).then(function (g) {
            "local" == a.D && (e.b[d] = g);
          });
        };

        k.addListener = function (a, b, c) {
          a = Yk(a, b);
          this.l && (this.b[a] = l.localStorage.getItem(a));
          mb(this.a) && (Xk(this, "local").ca(this.f), this.h || (qe() || !df()) && l.indexedDB || !this.l || al(this));
          this.a[a] || (this.a[a] = []);
          this.a[a].push(c);
        };

        k.removeListener = function (a, b, c) {
          a = Yk(a, b);
          this.a[a] && (Xa(this.a[a], function (d) {
            return d == c;
          }), 0 == this.a[a].length && delete this.a[a]);
          mb(this.a) && (Xk(this, "local").ia(this.f), bl(this));
        };

        function al(a) {
          bl(a);
          a.c = setInterval(function () {
            for (var b in a.a) {
              var c = l.localStorage.getItem(b),
                  d = a.b[b];
              c != d && (a.b[b] = c, c = new bd({
                type: "storage",
                key: b,
                target: window,
                oldValue: d,
                newValue: c,
                a: !0
              }), a.Xb(c));
            }
          }, 1E3);
        }

        function bl(a) {
          a.c && (clearInterval(a.c), a.c = null);
        }

        k.Xb = function (a) {
          if (a && a.g) {
            var b = a.a.key;
            if (null == b) for (var c in this.a) {
              var d = this.b[c];
              "undefined" === typeof d && (d = null);
              var e = l.localStorage.getItem(c);
              e !== d && (this.b[c] = e, this.lb(c));
            } else if (0 == b.indexOf("firebase:") && this.a[b]) {
              "undefined" !== typeof a.a.a ? Xk(this, "local").ia(this.f) : bl(this);
              if (this.v) if (c = l.localStorage.getItem(b), d = a.a.newValue, d !== c) null !== d ? l.localStorage.setItem(b, d) : l.localStorage.removeItem(b);else if (this.b[b] === d && "undefined" === typeof a.a.a) return;
              var f = this;

              c = function c() {
                if ("undefined" !== typeof a.a.a || f.b[b] !== l.localStorage.getItem(b)) f.b[b] = l.localStorage.getItem(b), f.lb(b);
              };

              Wb && ic && 10 == ic && l.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
            }
          } else w(a, q(this.lb, this));
        };

        k.lb = function (a) {
          this.a[a] && w(this.a[a], function (b) {
            b();
          });
        };

        function cl(a) {
          this.a = a;
          this.b = Wk();
        }

        var dl = {
          name: "authEvent",
          D: "local"
        };

        function el(a) {
          return a.b.get(dl, a.a).then(function (b) {
            return uh(b);
          });
        }

        ;

        function fl() {
          this.a = Wk();
        }

        ;

        function gl() {
          this.b = -1;
        }

        ;

        function hl(a, b) {
          this.b = il;
          this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
          this.g = this.c = 0;
          this.a = [];
          this.i = a;
          this.h = b;
          this.l = l.Int32Array ? new Int32Array(64) : Array(64);
          void 0 === jl && (l.Int32Array ? jl = new Int32Array(kl) : jl = kl);
          this.reset();
        }

        var jl;
        r(hl, gl);

        for (var il = 64, ll = il - 1, ml = [], nl = 0; nl < ll; nl++) {
          ml[nl] = 0;
        }

        var ol = Ya(128, ml);

        hl.prototype.reset = function () {
          this.g = this.c = 0;
          this.a = l.Int32Array ? new Int32Array(this.h) : Za(this.h);
        };

        function pl(a) {
          for (var b = a.f, c = a.l, d = 0, e = 0; e < b.length;) {
            c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
          }

          for (b = 16; 64 > b; b++) {
            e = c[b - 15] | 0;
            d = c[b - 2] | 0;
            var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
                g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = f + g | 0;
          }

          d = a.a[0] | 0;
          e = a.a[1] | 0;
          var h = a.a[2] | 0,
              n = a.a[3] | 0,
              p = a.a[4] | 0,
              v = a.a[5] | 0,
              B = a.a[6] | 0;
          f = a.a[7] | 0;

          for (b = 0; 64 > b; b++) {
            var A = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
            g = p & v ^ ~p & B;
            f = f + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) | 0;
            g = g + (jl[b] | 0) | 0;
            g = f + (g + (c[b] | 0) | 0) | 0;
            f = B;
            B = v;
            v = p;
            p = n + g | 0;
            n = h;
            h = e;
            e = d;
            d = g + A | 0;
          }

          a.a[0] = a.a[0] + d | 0;
          a.a[1] = a.a[1] + e | 0;
          a.a[2] = a.a[2] + h | 0;
          a.a[3] = a.a[3] + n | 0;
          a.a[4] = a.a[4] + p | 0;
          a.a[5] = a.a[5] + v | 0;
          a.a[6] = a.a[6] + B | 0;
          a.a[7] = a.a[7] + f | 0;
        }

        function ql(a, b, c) {
          void 0 === c && (c = b.length);
          var d = 0,
              e = a.c;
          if ("string" === typeof b) for (; d < c;) {
            a.f[e++] = b.charCodeAt(d++), e == a.b && (pl(a), e = 0);
          } else if (na(b)) for (; d < c;) {
            var f = b[d++];
            if (!("number" == typeof f && 0 <= f && 255 >= f && f == (f | 0))) throw Error("message must be a byte array");
            a.f[e++] = f;
            e == a.b && (pl(a), e = 0);
          } else throw Error("message must be string or array");
          a.c = e;
          a.g += c;
        }

        var kl = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function rl() {
          hl.call(this, 8, sl);
        }

        r(rl, hl);
        var sl = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

        function tl(a, b, c, d, e, f) {
          this.m = a;
          this.i = b;
          this.l = c;
          this.v = d || null;
          this.u = e || null;
          this.o = f;
          this.h = b + ":" + c;
          this.A = new fl();
          this.g = new cl(this.h);
          this.f = null;
          this.b = [];
          this.a = this.c = null;
        }

        function ul(a) {
          return new t("invalid-cordova-configuration", a);
        }

        k = tl.prototype;

        k.la = function () {
          return this.Ia ? this.Ia : this.Ia = Fe().then(function () {
            if ("function" !== typeof L("universalLinks.subscribe", l)) throw ul("cordova-universal-links-plugin-fix is not installed");
            if ("undefined" === typeof L("BuildInfo.packageName", l)) throw ul("cordova-plugin-buildinfo is not installed");
            if ("function" !== typeof L("cordova.plugins.browsertab.openUrl", l)) throw ul("cordova-plugin-browsertab is not installed");
            if ("function" !== typeof L("cordova.InAppBrowser.open", l)) throw ul("cordova-plugin-inappbrowser is not installed");
          }, function () {
            throw new t("cordova-not-ready");
          });
        };

        function vl() {
          for (var a = 20, b = []; 0 < a;) {
            b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
          }

          return b.join("");
        }

        function wl(a) {
          var b = new rl();
          ql(b, a);
          a = [];
          var c = 8 * b.g;
          56 > b.c ? ql(b, ol, 56 - b.c) : ql(b, ol, b.b - (b.c - 56));

          for (var d = 63; 56 <= d; d--) {
            b.f[d] = c & 255, c /= 256;
          }

          pl(b);

          for (d = c = 0; d < b.i; d++) {
            for (var e = 24; 0 <= e; e -= 8) {
              a[c++] = b.a[d] >> e & 255;
            }
          }

          return dg(a);
        }

        k.Nb = function (a, b) {
          b(new t("operation-not-supported-in-this-environment"));
          return E();
        };

        k.Lb = function () {
          return F(new t("operation-not-supported-in-this-environment"));
        };

        k.Zb = function () {
          return !1;
        };

        k.Wb = function () {
          return !0;
        };

        k.Sb = function () {
          return !0;
        };

        k.Mb = function (a, b, c, d) {
          if (this.c) return F(new t("redirect-operation-pending"));
          var e = this,
              f = l.document,
              g = null,
              h = null,
              n = null,
              p = null;
          return this.c = E().then(function () {
            sh(b);
            return xl(e);
          }).then(function () {
            return yl(e, a, b, c, d);
          }).then(function () {
            return new D(function (v, B) {
              h = function h() {
                var A = L("cordova.plugins.browsertab.close", l);
                v();
                "function" === typeof A && A();
                e.a && "function" === typeof e.a.close && (e.a.close(), e.a = null);
                return !1;
              };

              e.Ea(h);

              n = function n() {
                g || (g = Ed(2E3).then(function () {
                  B(new t("redirect-cancelled-by-user"));
                }));
              };

              p = function p() {
                $e() && n();
              };

              f.addEventListener("resume", n, !1);
              K().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p, !1);
            }).s(function (v) {
              return zl(e).then(function () {
                throw v;
              });
            });
          }).na(function () {
            n && f.removeEventListener("resume", n, !1);
            p && f.removeEventListener("visibilitychange", p, !1);
            g && g.cancel();
            h && e.Ra(h);
            e.c = null;
          });
        };

        function yl(a, b, c, d, e) {
          var f = vl(),
              g = new th(b, d, null, f, new t("no-auth-event"), null, e),
              h = L("BuildInfo.packageName", l);
          if ("string" !== typeof h) throw new t("invalid-cordova-configuration");
          var n = L("BuildInfo.displayName", l),
              p = {};
          if (K().toLowerCase().match(/iphone|ipad|ipod/)) p.ibi = h;else if (K().toLowerCase().match(/android/)) p.apn = h;else return F(new t("operation-not-supported-in-this-environment"));
          n && (p.appDisplayName = n);
          f = wl(f);
          p.sessionId = f;
          var v = fk(a.m, a.i, a.l, b, c, null, d, a.v, p, a.u, e, a.o);
          return a.la().then(function () {
            var B = a.h;
            return a.A.a.set(dl, g.w(), B);
          }).then(function () {
            var B = L("cordova.plugins.browsertab.isAvailable", l);
            if ("function" !== typeof B) throw new t("invalid-cordova-configuration");
            var A = null;
            B(function (Q) {
              if (Q) {
                A = L("cordova.plugins.browsertab.openUrl", l);
                if ("function" !== typeof A) throw new t("invalid-cordova-configuration");
                A(v);
              } else {
                A = L("cordova.InAppBrowser.open", l);
                if ("function" !== typeof A) throw new t("invalid-cordova-configuration");
                Q = K();
                a.a = A(v, Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
              }
            });
          });
        }

        function Al(a, b) {
          for (var c = 0; c < a.b.length; c++) {
            try {
              a.b[c](b);
            } catch (d) {}
          }
        }

        function xl(a) {
          a.f || (a.f = a.la().then(function () {
            return new D(function (b) {
              function c(d) {
                b(d);
                a.Ra(c);
                return !1;
              }

              a.Ea(c);
              Bl(a);
            });
          }));
          return a.f;
        }

        function zl(a) {
          var b = null;
          return el(a.g).then(function (c) {
            b = c;
            c = a.g;
            return $k(c.b, dl, c.a);
          }).then(function () {
            return b;
          });
        }

        function Bl(a) {
          function b(g) {
            d = !0;
            e && e.cancel();
            zl(a).then(function (h) {
              var n = c;

              if (h && g && g.url) {
                var p = null;
                n = yg(g.url);
                -1 != n.indexOf("/__/auth/callback") && (p = be(n), p = We(ae(p, "firebaseError") || null), p = (p = "object" === typeof p ? Aa(p) : null) ? new th(h.c, h.b, null, null, p, null, h.S()) : new th(h.c, h.b, n, h.f, null, null, h.S()));
                n = p || c;
              }

              Al(a, n);
            });
          }

          var c = new th("unknown", null, null, null, new t("no-auth-event")),
              d = !1,
              e = Ed(500).then(function () {
            return zl(a).then(function () {
              d || Al(a, c);
            });
          }),
              f = l.handleOpenURL;

          l.handleOpenURL = function (g) {
            0 == g.toLowerCase().indexOf(L("BuildInfo.packageName", l).toLowerCase() + "://") && b({
              url: g
            });
            if ("function" === typeof f) try {
              f(g);
            } catch (h) {
              console.error(h);
            }
          };

          wh || (wh = new vh());
          xh(b);
        }

        k.Ea = function (a) {
          this.b.push(a);
          xl(this).s(function (b) {
            "auth/invalid-cordova-configuration" === b.code && (b = new th("unknown", null, null, null, new t("no-auth-event")), a(b));
          });
        };

        k.Ra = function (a) {
          Xa(this.b, function (b) {
            return b == a;
          });
        };

        function Cl(a) {
          this.a = a;
          this.b = Wk();
        }

        var Dl = {
          name: "pendingRedirect",
          D: "session"
        };

        function El(a) {
          return a.b.set(Dl, "pending", a.a);
        }

        function Fl(a) {
          return $k(a.b, Dl, a.a);
        }

        function Gl(a) {
          return a.b.get(Dl, a.a).then(function (b) {
            return "pending" == b;
          });
        }

        ;

        function Hl(a, b, c, d) {
          this.i = {};
          this.u = 0;
          this.O = a;
          this.m = b;
          this.v = c;
          this.G = d;
          this.h = [];
          this.f = !1;
          this.l = q(this.o, this);
          this.b = new Il();
          this.A = new Jl();
          this.g = new Cl(Kl(this.m, this.v));
          this.c = {};
          this.c.unknown = this.b;
          this.c.signInViaRedirect = this.b;
          this.c.linkViaRedirect = this.b;
          this.c.reauthViaRedirect = this.b;
          this.c.signInViaPopup = this.A;
          this.c.linkViaPopup = this.A;
          this.c.reauthViaPopup = this.A;
          this.a = Ll(this.O, this.m, this.v, Da, this.G);
        }

        function Ll(a, b, c, d, e) {
          var f = _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION || null;
          return Ge() ? new tl(a, b, c, f, d, e) : new Zj(a, b, c, f, d, e);
        }

        Hl.prototype.reset = function () {
          this.f = !1;
          this.a.Ra(this.l);
          this.a = Ll(this.O, this.m, this.v, null, this.G);
          this.i = {};
        };

        function Ml(a) {
          a.f || (a.f = !0, a.a.Ea(a.l));
          var b = a.a;
          return a.a.la().s(function (c) {
            a.a == b && a.reset();
            throw c;
          });
        }

        function Nl(a) {
          a.a.Wb() && Ml(a).s(function (b) {
            var c = new th("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
            Ol(b) && a.o(c);
          });
          a.a.Sb() || Pl(a.b);
        }

        function Ql(a, b) {
          Va(a.h, b) || a.h.push(b);
          a.f || Gl(a.g).then(function (c) {
            c ? Fl(a.g).then(function () {
              Ml(a).s(function (d) {
                var e = new th("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
                Ol(d) && a.o(e);
              });
            }) : Nl(a);
          }).s(function () {
            Nl(a);
          });
        }

        function Rl(a, b) {
          Xa(a.h, function (c) {
            return c == b;
          });
        }

        Hl.prototype.o = function (a) {
          if (!a) throw new t("invalid-auth-event");
          6E5 <= va() - this.u && (this.i = {}, this.u = 0);
          if (a && a.getUid() && this.i.hasOwnProperty(a.getUid())) return !1;

          for (var b = !1, c = 0; c < this.h.length; c++) {
            var d = this.h[c];

            if (d.Eb(a.c, a.b)) {
              if (b = this.c[a.c]) b.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = !0, this.u = va());
              b = !0;
              break;
            }
          }

          Pl(this.b);
          return b;
        };

        var Sl = new Ze(2E3, 1E4),
            Tl = new Ze(3E4, 6E4);

        Hl.prototype.qa = function () {
          return this.b.qa();
        };

        function Ul(a, b, c, d, e, f, g) {
          return a.a.Lb(b, c, d, function () {
            a.f || (a.f = !0, a.a.Ea(a.l));
          }, function () {
            a.reset();
          }, e, f, g);
        }

        function Ol(a) {
          return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
        }

        function Vl(a, b, c, d, e) {
          var f;
          return El(a.g).then(function () {
            return a.a.Mb(b, c, d, e).s(function (g) {
              if (Ol(g)) throw new t("operation-not-supported-in-this-environment");
              f = g;
              return Fl(a.g).then(function () {
                throw f;
              });
            }).then(function () {
              return a.a.Zb() ? new D(function () {}) : Fl(a.g).then(function () {
                return a.qa();
              }).then(function () {}).s(function () {});
            });
          });
        }

        function Wl(a, b, c, d, e) {
          return a.a.Nb(d, function (f) {
            b.ma(c, null, f, e);
          }, Sl.get());
        }

        var Xl = {};

        function Kl(a, b, c) {
          a = a + ":" + b;
          c && (a = a + ":" + c.url);
          return a;
        }

        function Yl(a, b, c, d) {
          var e = Kl(b, c, d);
          Xl[e] || (Xl[e] = new Hl(a, b, c, d));
          return Xl[e];
        }

        function Il() {
          this.b = null;
          this.f = [];
          this.c = [];
          this.a = null;
          this.i = this.g = !1;
        }

        Il.prototype.reset = function () {
          this.b = null;
          this.a && (this.a.cancel(), this.a = null);
        };

        Il.prototype.h = function (a, b) {
          if (a) {
            this.reset();
            this.g = !0;
            var c = a.c,
                d = a.b,
                e = a.a && "auth/web-storage-unsupported" == a.a.code,
                f = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
            this.i = !(!e && !f);
            "unknown" != c || e || f ? a.a ? (Zl(this, !0, null, a.a), E()) : b.Fa(c, d) ? $l(this, a, b) : F(new t("invalid-auth-event")) : (Zl(this, !1, null, null), E());
          } else F(new t("invalid-auth-event"));
        };

        function Pl(a) {
          a.g || (a.g = !0, Zl(a, !1, null, null));
        }

        function am(a) {
          a.g && !a.i && Zl(a, !1, null, null);
        }

        function $l(a, b, c) {
          c = c.Fa(b.c, b.b);
          var d = b.g,
              e = b.f,
              f = b.i,
              g = b.S(),
              h = !!b.c.match(/Redirect$/);
          c(d, e, g, f).then(function (n) {
            Zl(a, h, n, null);
          }).s(function (n) {
            Zl(a, h, null, n);
          });
        }

        function bm(a, b) {
          a.b = function () {
            return F(b);
          };

          if (a.c.length) for (var c = 0; c < a.c.length; c++) {
            a.c[c](b);
          }
        }

        function cm(a, b) {
          a.b = function () {
            return E(b);
          };

          if (a.f.length) for (var c = 0; c < a.f.length; c++) {
            a.f[c](b);
          }
        }

        function Zl(a, b, c, d) {
          b ? d ? bm(a, d) : cm(a, c) : cm(a, {
            user: null
          });
          a.f = [];
          a.c = [];
        }

        Il.prototype.qa = function () {
          var a = this;
          return new D(function (b, c) {
            a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), dm(a));
          });
        };

        function dm(a) {
          var b = new t("timeout");
          a.a && a.a.cancel();
          a.a = Ed(Tl.get()).then(function () {
            a.b || (a.g = !0, Zl(a, !0, null, b));
          });
        }

        function Jl() {}

        Jl.prototype.h = function (a, b) {
          if (a) {
            var c = a.c,
                d = a.b;
            a.a ? (b.ma(a.c, null, a.a, a.b), E()) : b.Fa(c, d) ? em(a, b) : F(new t("invalid-auth-event"));
          } else F(new t("invalid-auth-event"));
        };

        function em(a, b) {
          var c = a.b,
              d = a.c;
          b.Fa(d, c)(a.g, a.f, a.S(), a.i).then(function (e) {
            b.ma(d, e, null, c);
          }).s(function (e) {
            b.ma(d, null, e, c);
          });
        }

        ;

        function fm() {
          this.hb = !1;
          Object.defineProperty(this, "appVerificationDisabled", {
            get: function get() {
              return this.hb;
            },
            set: function set(a) {
              this.hb = a;
            },
            enumerable: !1
          });
        }

        ;

        function gm(a, b) {
          this.a = b;
          M(this, "verificationId", a);
        }

        gm.prototype.confirm = function (a) {
          a = qh(this.verificationId, a);
          return this.a(a);
        };

        function hm(a, b, c, d) {
          return new mh(a).eb(b, c).then(function (e) {
            return new gm(e, d);
          });
        }

        ;

        function im(a) {
          var b = jg(a);
          if (!(b && b.exp && b.auth_time && b.iat)) throw new t("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
          N(this, {
            token: a,
            expirationTime: cf(1E3 * b.exp),
            authTime: cf(1E3 * b.auth_time),
            issuedAtTime: cf(1E3 * b.iat),
            signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
            signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null,
            claims: b
          });
        }

        ;

        function jm(a, b, c) {
          var d = b && b[km];
          if (!d) throw new t("argument-error", "Internal assert: Invalid MultiFactorResolver");
          this.a = a;
          this.f = nb(b);
          this.g = c;
          this.c = new zg(null, d);
          this.b = [];
          var e = this;
          w(b[lm] || [], function (f) {
            (f = uf(f)) && e.b.push(f);
          });
          M(this, "auth", this.a);
          M(this, "session", this.c);
          M(this, "hints", this.b);
        }

        var lm = "mfaInfo",
            km = "mfaPendingCredential";

        jm.prototype.Qc = function (a) {
          var b = this;
          return a.rb(this.a.a, this.c).then(function (c) {
            var d = nb(b.f);
            delete d[lm];
            delete d[km];
            z(d, c);
            return b.g(d);
          });
        };

        function mm(a, b, c, d) {
          t.call(this, "multi-factor-auth-required", d, b);
          this.b = new jm(a, b, c);
          M(this, "resolver", this.b);
        }

        r(mm, t);

        function nm(a, b, c) {
          if (a && m(a.serverResponse) && "auth/multi-factor-auth-required" === a.code) try {
            return new mm(b, a.serverResponse, c, a.message);
          } catch (d) {}
          return null;
        }

        ;

        function om() {}

        om.prototype.rb = function (a, b, c) {
          return b.type == Ag ? pm(this, a, b, c) : qm(this, a, b);
        };

        function pm(a, b, c, d) {
          return c.Ha().then(function (e) {
            e = {
              idToken: e
            };
            "undefined" !== typeof d && (e.displayName = d);
            z(e, {
              phoneVerificationInfo: ih(a.a)
            });
            return O(b, Hj, e);
          });
        }

        function qm(a, b, c) {
          return c.Ha().then(function (d) {
            d = {
              mfaPendingCredential: d
            };
            z(d, {
              phoneVerificationInfo: ih(a.a)
            });
            return O(b, Ij, d);
          });
        }

        function rm(a) {
          M(this, "factorId", a.fa);
          this.a = a;
        }

        r(rm, om);

        function sm(a) {
          rm.call(this, a);
          if (this.a.fa != mh.PROVIDER_ID) throw new t("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
        }

        r(sm, rm);

        function tm(a, b) {
          G.call(this, a);

          for (var c in b) {
            this[c] = b[c];
          }
        }

        r(tm, G);

        function um(a, b) {
          this.a = a;
          this.b = [];
          this.c = q(this.xc, this);
          nd(this.a, "userReloaded", this.c);
          var c = [];
          b && b.multiFactor && b.multiFactor.enrolledFactors && w(b.multiFactor.enrolledFactors, function (d) {
            var e = null,
                f = {};

            if (d) {
              d.uid && (f[rf] = d.uid);
              d.displayName && (f[sf] = d.displayName);
              d.enrollmentTime && (f[tf] = new Date(d.enrollmentTime).toISOString());
              d.phoneNumber && (f[qf] = d.phoneNumber);

              try {
                e = new vf(f);
              } catch (g) {}

              d = e;
            } else d = null;

            d && c.push(d);
          });
          vm(this, c);
        }

        function wm(a) {
          var b = [];
          w(a.mfaInfo || [], function (c) {
            (c = uf(c)) && b.push(c);
          });
          return b;
        }

        k = um.prototype;

        k.xc = function (a) {
          vm(this, wm(a.gd));
        };

        function vm(a, b) {
          a.b = b;
          M(a, "enrolledFactors", b);
        }

        k.Qb = function () {
          return this.a.I().then(function (a) {
            return new zg(a, null);
          });
        };

        k.ec = function (a, b) {
          var c = this,
              d = this.a.a;
          return this.Qb().then(function (e) {
            return a.rb(d, e, b);
          }).then(function (e) {
            xm(c.a, e);
            return c.a.reload();
          });
        };

        k.ad = function (a) {
          var b = this,
              c = "string" === typeof a ? a : a.uid,
              d = this.a.a;
          return this.a.I().then(function (e) {
            return O(d, Mj, {
              idToken: e,
              mfaEnrollmentId: c
            });
          }).then(function (e) {
            var f = Qa(b.b, function (g) {
              return g.uid != c;
            });
            vm(b, f);
            xm(b.a, e);
            return b.a.reload().s(function (g) {
              if ("auth/user-token-expired" != g.code) throw g;
            });
          });
        };

        k.w = function () {
          return {
            multiFactor: {
              enrolledFactors: Ra(this.b, function (a) {
                return a.w();
              })
            }
          };
        };

        function ym(a, b, c) {
          this.h = a;
          this.i = b;
          this.g = c;
          this.c = 3E4;
          this.f = 96E4;
          this.b = null;
          this.a = this.c;
          if (this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!");
        }

        ym.prototype.start = function () {
          this.a = this.c;
          zm(this, !0);
        };

        function Am(a, b) {
          if (b) return a.a = a.c, a.g();
          b = a.a;
          a.a *= 2;
          a.a > a.f && (a.a = a.f);
          return b;
        }

        function zm(a, b) {
          a.stop();
          a.b = Ed(Am(a, b)).then(function () {
            return af();
          }).then(function () {
            return a.h();
          }).then(function () {
            zm(a, !0);
          }).s(function (c) {
            a.i(c) && zm(a, !1);
          });
        }

        ym.prototype.stop = function () {
          this.b && (this.b.cancel(), this.b = null);
        };

        function Bm(a) {
          this.c = a;
          this.b = this.a = null;
        }

        Bm.prototype.w = function () {
          return {
            apiKey: this.c.c,
            refreshToken: this.a,
            accessToken: this.b && this.b.toString(),
            expirationTime: Cm(this)
          };
        };

        function Cm(a) {
          return a.b && 1E3 * a.b.c || 0;
        }

        function Dm(a, b) {
          var c = b.refreshToken;
          a.b = kg(b[Eg] || "");
          a.a = c;
        }

        function Em(a, b) {
          a.b = b.b;
          a.a = b.a;
        }

        function Fm(a, b) {
          return Xi(a.c, b).then(function (c) {
            a.b = kg(c.access_token);
            a.a = c.refresh_token;
            return {
              accessToken: a.b.toString(),
              refreshToken: a.a
            };
          }).s(function (c) {
            "auth/user-token-expired" == c.code && (a.a = null);
            throw c;
          });
        }

        Bm.prototype.getToken = function (a) {
          a = !!a;
          return this.b && !this.a ? F(new t("user-token-expired")) : a || !this.b || va() > Cm(this) - 3E4 ? this.a ? Fm(this, {
            grant_type: "refresh_token",
            refresh_token: this.a
          }) : E(null) : E({
            accessToken: this.b.toString(),
            refreshToken: this.a
          });
        };

        function Gm(a, b) {
          this.a = a || null;
          this.b = b || null;
          N(this, {
            lastSignInTime: cf(b || null),
            creationTime: cf(a || null)
          });
        }

        function Hm(a) {
          return new Gm(a.a, a.b);
        }

        Gm.prototype.w = function () {
          return {
            lastLoginAt: this.b,
            createdAt: this.a
          };
        };

        function Im(a, b, c, d, e, f) {
          N(this, {
            uid: a,
            displayName: d || null,
            photoURL: e || null,
            email: c || null,
            phoneNumber: f || null,
            providerId: b
          });
        }

        function Jm(a, b, c) {
          this.G = [];
          this.l = a.apiKey;
          this.m = a.appName;
          this.o = a.authDomain || null;
          var d = _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION ? Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION) : null;
          this.a = new Ji(this.l, Ca(Da), d);
          a.emulatorConfig && Qi(this.a, a.emulatorConfig);
          this.b = new Bm(this.a);
          Km(this, b[Eg]);
          Dm(this.b, b);
          M(this, "refreshToken", this.b.a);
          Lm(this, c || {});
          I.call(this);
          this.P = !1;
          this.o && Re() && (this.i = Yl(this.o, this.l, this.m));
          this.R = [];
          this.f = null;
          this.u = Mm(this);
          this.$ = q(this.gb, this);
          var e = this;
          this.pa = null;

          this.Ba = function (f) {
            e.wa(f.h);
          };

          this.ba = null;

          this.za = function (f) {
            Qi(e.a, f.c);
          };

          this.W = null;
          this.X = [];

          this.Aa = function (f) {
            Nm(e, f.f);
          };

          this.aa = null;
          this.N = new um(this, c);
          M(this, "multiFactor", this.N);
        }

        r(Jm, I);

        Jm.prototype.wa = function (a) {
          this.pa = a;
          Pi(this.a, a);
        };

        Jm.prototype.ka = function () {
          return this.pa;
        };

        function Om(a, b) {
          a.ba && H(a.ba, "languageCodeChanged", a.Ba);
          (a.ba = b) && nd(b, "languageCodeChanged", a.Ba);
        }

        function Pm(a, b) {
          a.W && H(a.W, "emulatorConfigChanged", a.za);
          (a.W = b) && nd(b, "emulatorConfigChanged", a.za);
        }

        function Nm(a, b) {
          a.X = b;
          Si(a.a, _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION ? Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION, a.X) : null);
        }

        Jm.prototype.Ga = function () {
          return Za(this.X);
        };

        function Qm(a, b) {
          a.aa && H(a.aa, "frameworkChanged", a.Aa);
          (a.aa = b) && nd(b, "frameworkChanged", a.Aa);
        }

        Jm.prototype.gb = function () {
          this.u.b && (this.u.stop(), this.u.start());
        };

        function Rm(a) {
          try {
            return _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].app(a.m).auth();
          } catch (b) {
            throw new t("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!");
          }
        }

        function Mm(a) {
          return new ym(function () {
            return a.I(!0);
          }, function (b) {
            return b && "auth/network-request-failed" == b.code ? !0 : !1;
          }, function () {
            var b = Cm(a.b) - va() - 3E5;
            return 0 < b ? b : 0;
          });
        }

        function Sm(a) {
          a.A || a.u.b || (a.u.start(), H(a, "tokenChanged", a.$), nd(a, "tokenChanged", a.$));
        }

        function Tm(a) {
          H(a, "tokenChanged", a.$);
          a.u.stop();
        }

        function Km(a, b) {
          a.ya = b;
          M(a, "_lat", b);
        }

        function Um(a, b) {
          Xa(a.R, function (c) {
            return c == b;
          });
        }

        function Vm(a) {
          for (var b = [], c = 0; c < a.R.length; c++) {
            b.push(a.R[c](a));
          }

          return Jc(b).then(function () {
            return a;
          });
        }

        function Wm(a) {
          a.i && !a.P && (a.P = !0, Ql(a.i, a));
        }

        function Lm(a, b) {
          N(a, {
            uid: b.uid,
            displayName: b.displayName || null,
            photoURL: b.photoURL || null,
            email: b.email || null,
            emailVerified: b.emailVerified || !1,
            phoneNumber: b.phoneNumber || null,
            isAnonymous: b.isAnonymous || !1,
            tenantId: b.tenantId || null,
            metadata: new Gm(b.createdAt, b.lastLoginAt),
            providerData: []
          });
          a.a.b = a.tenantId;
        }

        M(Jm.prototype, "providerId", "firebase");

        function Xm() {}

        function Ym(a) {
          return E().then(function () {
            if (a.A) throw new t("app-deleted");
          });
        }

        function Zm(a) {
          return Ra(a.providerData, function (b) {
            return b.providerId;
          });
        }

        function $m(a, b) {
          b && (an(a, b.providerId), a.providerData.push(b));
        }

        function an(a, b) {
          Xa(a.providerData, function (c) {
            return c.providerId == b;
          });
        }

        function bn(a, b, c) {
          ("uid" != b || c) && a.hasOwnProperty(b) && M(a, b, c);
        }

        function cn(a, b) {
          a != b && (N(a, {
            uid: b.uid,
            displayName: b.displayName,
            photoURL: b.photoURL,
            email: b.email,
            emailVerified: b.emailVerified,
            phoneNumber: b.phoneNumber,
            isAnonymous: b.isAnonymous,
            tenantId: b.tenantId,
            providerData: []
          }), b.metadata ? M(a, "metadata", Hm(b.metadata)) : M(a, "metadata", new Gm()), w(b.providerData, function (c) {
            $m(a, c);
          }), Em(a.b, b.b), M(a, "refreshToken", a.b.a), vm(a.N, b.N.b));
        }

        k = Jm.prototype;

        k.reload = function () {
          var a = this;
          return R(this, Ym(this).then(function () {
            return dn(a).then(function () {
              return Vm(a);
            }).then(Xm);
          }));
        };

        function dn(a) {
          return a.I().then(function (b) {
            var c = a.isAnonymous;
            return en(a, b).then(function () {
              c || bn(a, "isAnonymous", !1);
              return b;
            });
          });
        }

        k.nc = function (a) {
          return this.I(a).then(function (b) {
            return new im(b);
          });
        };

        k.I = function (a) {
          var b = this;
          return R(this, Ym(this).then(function () {
            return b.b.getToken(a);
          }).then(function (c) {
            if (!c) throw new t("internal-error");
            c.accessToken != b.ya && (Km(b, c.accessToken), b.dispatchEvent(new tm("tokenChanged")));
            bn(b, "refreshToken", c.refreshToken);
            return c.accessToken;
          }));
        };

        function xm(a, b) {
          b[Eg] && a.ya != b[Eg] && (Dm(a.b, b), a.dispatchEvent(new tm("tokenChanged")), Km(a, b[Eg]), bn(a, "refreshToken", a.b.a));
        }

        function en(a, b) {
          return O(a.a, Jj, {
            idToken: b
          }).then(q(a.Jc, a));
        }

        k.Jc = function (a) {
          a = a.users;
          if (!a || !a.length) throw new t("internal-error");
          a = a[0];
          Lm(this, {
            uid: a.localId,
            displayName: a.displayName,
            photoURL: a.photoUrl,
            email: a.email,
            emailVerified: !!a.emailVerified,
            phoneNumber: a.phoneNumber,
            lastLoginAt: a.lastLoginAt,
            createdAt: a.createdAt,
            tenantId: a.tenantId
          });

          for (var b = fn(a), c = 0; c < b.length; c++) {
            $m(this, b[c]);
          }

          bn(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
          this.dispatchEvent(new tm("userReloaded", {
            gd: a
          }));
        };

        function fn(a) {
          return (a = a.providerUserInfo) && a.length ? Ra(a, function (b) {
            return new Im(b.rawId, b.providerId, b.email, b.displayName, b.photoUrl, b.phoneNumber);
          }) : [];
        }

        k.Kc = function (a) {
          hf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
          return this.sb(a);
        };

        k.sb = function (a) {
          var b = this,
              c = null;
          return R(this, a.c(this.a, this.uid).then(function (d) {
            xm(b, d);
            c = gn(b, d, "reauthenticate");
            b.f = null;
            return b.reload();
          }).then(function () {
            return c;
          }), !0);
        };

        function hn(a, b) {
          return dn(a).then(function () {
            if (Va(Zm(a), b)) return Vm(a).then(function () {
              throw new t("provider-already-linked");
            });
          });
        }

        k.Bc = function (a) {
          hf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
          return this.pb(a);
        };

        k.pb = function (a) {
          var b = this,
              c = null;
          return R(this, hn(this, a.providerId).then(function () {
            return b.I();
          }).then(function (d) {
            return a.b(b.a, d);
          }).then(function (d) {
            c = gn(b, d, "link");
            return jn(b, d);
          }).then(function () {
            return c;
          }));
        };

        k.Cc = function (a, b) {
          var c = this;
          return R(this, hn(this, "phone").then(function () {
            return hm(Rm(c), a, b, q(c.pb, c));
          }));
        };

        k.Lc = function (a, b) {
          var c = this;
          return R(this, E().then(function () {
            return hm(Rm(c), a, b, q(c.sb, c));
          }), !0);
        };

        function gn(a, b, c) {
          var d = rh(b);
          b = pg(b);
          return lf({
            user: a,
            credential: d,
            additionalUserInfo: b,
            operationType: c
          });
        }

        function jn(a, b) {
          xm(a, b);
          return a.reload().then(function () {
            return a;
          });
        }

        k.Ab = function (a) {
          var b = this;
          return R(this, this.I().then(function (c) {
            return b.a.Ab(c, a);
          }).then(function (c) {
            xm(b, c);
            return b.reload();
          }));
        };

        k.dd = function (a) {
          var b = this;
          return R(this, this.I().then(function (c) {
            return a.b(b.a, c);
          }).then(function (c) {
            xm(b, c);
            return b.reload();
          }));
        };

        k.Bb = function (a) {
          var b = this;
          return R(this, this.I().then(function (c) {
            return b.a.Bb(c, a);
          }).then(function (c) {
            xm(b, c);
            return b.reload();
          }));
        };

        k.Cb = function (a) {
          if (void 0 === a.displayName && void 0 === a.photoURL) return Ym(this);
          var b = this;
          return R(this, this.I().then(function (c) {
            return b.a.Cb(c, {
              displayName: a.displayName,
              photoUrl: a.photoURL
            });
          }).then(function (c) {
            xm(b, c);
            bn(b, "displayName", c.displayName || null);
            bn(b, "photoURL", c.photoUrl || null);
            w(b.providerData, function (d) {
              "password" === d.providerId && (M(d, "displayName", b.displayName), M(d, "photoURL", b.photoURL));
            });
            return Vm(b);
          }).then(Xm));
        };

        k.bd = function (a) {
          var b = this;
          return R(this, dn(this).then(function (c) {
            return Va(Zm(b), a) ? sj(b.a, c, [a]).then(function (d) {
              var e = {};
              w(d.providerUserInfo || [], function (f) {
                e[f.providerId] = !0;
              });
              w(Zm(b), function (f) {
                e[f] || an(b, f);
              });
              e[mh.PROVIDER_ID] || M(b, "phoneNumber", null);
              return Vm(b);
            }) : Vm(b).then(function () {
              throw new t("no-such-provider");
            });
          }));
        };

        k["delete"] = function () {
          var a = this;
          return R(this, this.I().then(function (b) {
            return O(a.a, Gj, {
              idToken: b
            });
          }).then(function () {
            a.dispatchEvent(new tm("userDeleted"));
          })).then(function () {
            for (var b = 0; b < a.G.length; b++) {
              a.G[b].cancel("app-deleted");
            }

            Om(a, null);
            Pm(a, null);
            Qm(a, null);
            a.G = [];
            a.A = !0;
            Tm(a);
            M(a, "refreshToken", null);
            a.i && Rl(a.i, a);
          });
        };

        k.Eb = function (a, b) {
          return "linkViaPopup" == a && (this.h || null) == b && this.g || "reauthViaPopup" == a && (this.h || null) == b && this.g || "linkViaRedirect" == a && (this.ga || null) == b || "reauthViaRedirect" == a && (this.ga || null) == b ? !0 : !1;
        };

        k.ma = function (a, b, c, d) {
          "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.h || null) || (c && this.O ? this.O(c) : b && !c && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
        };

        k.Fa = function (a, b) {
          return "linkViaPopup" == a && b == (this.h || null) ? q(this.Jb, this) : "reauthViaPopup" == a && b == (this.h || null) ? q(this.Kb, this) : "linkViaRedirect" == a && (this.ga || null) == b ? q(this.Jb, this) : "reauthViaRedirect" == a && (this.ga || null) == b ? q(this.Kb, this) : null;
        };

        k.Dc = function (a) {
          var b = this;
          return kn(this, "linkViaPopup", a, function () {
            return hn(b, a.providerId).then(function () {
              return Vm(b);
            });
          }, !1);
        };

        k.Mc = function (a) {
          return kn(this, "reauthViaPopup", a, function () {
            return E();
          }, !0);
        };

        function kn(a, b, c, d, e) {
          if (!Re()) return F(new t("operation-not-supported-in-this-environment"));
          if (a.f && !e) return F(a.f);
          var f = og(c.providerId),
              g = Qe(a.uid + ":::"),
              h = null;
          (!Te() || Ie()) && a.o && c.isOAuthProvider && (h = fk(a.o, a.l, a.m, b, c, null, g, _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION || null, null, null, a.tenantId));
          var n = ze(h, f && f.ua, f && f.ta);
          d = d().then(function () {
            ln(a);
            if (!e) return a.I().then(function () {});
          }).then(function () {
            return Ul(a.i, n, b, c, g, !!h, a.tenantId);
          }).then(function () {
            return new D(function (p, v) {
              a.ma(b, null, new t("cancelled-popup-request"), a.h || null);
              a.g = p;
              a.O = v;
              a.h = g;
              a.c = Wl(a.i, a, b, n, g);
            });
          }).then(function (p) {
            n && ye(n);
            return p ? lf(p) : null;
          }).s(function (p) {
            n && ye(n);
            throw p;
          });
          return R(a, d, e);
        }

        k.Ec = function (a) {
          var b = this;
          return mn(this, "linkViaRedirect", a, function () {
            return hn(b, a.providerId);
          }, !1);
        };

        k.Nc = function (a) {
          return mn(this, "reauthViaRedirect", a, function () {
            return E();
          }, !0);
        };

        function mn(a, b, c, d, e) {
          if (!Re()) return F(new t("operation-not-supported-in-this-environment"));
          if (a.f && !e) return F(a.f);
          var f = null,
              g = Qe(a.uid + ":::");
          d = d().then(function () {
            ln(a);
            if (!e) return a.I().then(function () {});
          }).then(function () {
            a.ga = g;
            return Vm(a);
          }).then(function (h) {
            a.ha && (h = a.ha, h = h.b.set(nn, a.w(), h.a));
            return h;
          }).then(function () {
            return Vl(a.i, b, c, g, a.tenantId);
          }).s(function (h) {
            f = h;
            if (a.ha) return on(a.ha);
            throw f;
          }).then(function () {
            if (f) throw f;
          });
          return R(a, d, e);
        }

        function ln(a) {
          if (!a.i || !a.P) {
            if (a.i && !a.P) throw new t("internal-error");
            throw new t("auth-domain-config-required");
          }
        }

        k.Jb = function (a, b, c, d) {
          var e = this;
          this.c && (this.c.cancel(), this.c = null);
          var f = null;
          c = this.I().then(function (g) {
            return Ig(e.a, {
              requestUri: a,
              postBody: d,
              sessionId: b,
              idToken: g
            });
          }).then(function (g) {
            f = gn(e, g, "link");
            return jn(e, g);
          }).then(function () {
            return f;
          });
          return R(this, c);
        };

        k.Kb = function (a, b, c, d) {
          var e = this;
          this.c && (this.c.cancel(), this.c = null);
          var f = null,
              g = E().then(function () {
            return Dg(Jg(e.a, {
              requestUri: a,
              sessionId: b,
              postBody: d,
              tenantId: c
            }), e.uid);
          }).then(function (h) {
            f = gn(e, h, "reauthenticate");
            xm(e, h);
            e.f = null;
            return e.reload();
          }).then(function () {
            return f;
          });
          return R(this, g, !0);
        };

        k.tb = function (a) {
          var b = this,
              c = null;
          return R(this, this.I().then(function (d) {
            c = d;
            return "undefined" === typeof a || mb(a) ? {} : cg(new Tf(a));
          }).then(function (d) {
            return b.a.tb(c, d);
          }).then(function (d) {
            if (b.email != d) return b.reload();
          }).then(function () {}));
        };

        k.Db = function (a, b) {
          var c = this,
              d = null;
          return R(this, this.I().then(function (e) {
            d = e;
            return "undefined" === typeof b || mb(b) ? {} : cg(new Tf(b));
          }).then(function (e) {
            return c.a.Db(d, a, e);
          }).then(function (e) {
            if (c.email != e) return c.reload();
          }).then(function () {}));
        };

        function R(a, b, c) {
          var d = pn(a, b, c);
          a.G.push(d);
          d.na(function () {
            Wa(a.G, d);
          });
          return d.s(function (e) {
            var f = null;
            e && "auth/multi-factor-auth-required" === e.code && (f = nm(e.w(), Rm(a), q(a.ic, a)));
            throw f || e;
          });
        }

        k.ic = function (a) {
          var b = null,
              c = this;
          a = Dg(E(a), c.uid).then(function (d) {
            b = gn(c, d, "reauthenticate");
            xm(c, d);
            c.f = null;
            return c.reload();
          }).then(function () {
            return b;
          });
          return R(this, a, !0);
        };

        function pn(a, b, c) {
          return a.f && !c ? (b.cancel(), F(a.f)) : b.s(function (d) {
            !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.f || a.dispatchEvent(new tm("userInvalidated")), a.f = d);
            throw d;
          });
        }

        k.toJSON = function () {
          return this.w();
        };

        k.w = function () {
          var a = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            isAnonymous: this.isAnonymous,
            tenantId: this.tenantId,
            providerData: [],
            apiKey: this.l,
            appName: this.m,
            authDomain: this.o,
            stsTokenManager: this.b.w(),
            redirectEventId: this.ga || null
          };
          this.metadata && z(a, this.metadata.w());
          w(this.providerData, function (b) {
            a.providerData.push(mf(b));
          });
          z(a, this.N.w());
          return a;
        };

        function qn(a) {
          if (!a.apiKey) return null;
          var b = {
            apiKey: a.apiKey,
            authDomain: a.authDomain,
            appName: a.appName,
            emulatorConfig: a.emulatorConfig
          },
              c = {};
          if (a.stsTokenManager && a.stsTokenManager.accessToken) c[Eg] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null;else return null;
          var d = new Jm(b, c, a);
          a.providerData && w(a.providerData, function (e) {
            e && $m(d, lf(e));
          });
          a.redirectEventId && (d.ga = a.redirectEventId);
          return d;
        }

        function rn(a, b, c, d) {
          var e = new Jm(a, b);
          c && (e.ha = c);
          d && Nm(e, d);
          return e.reload().then(function () {
            return e;
          });
        }

        function sn(a, b, c, d) {
          var e = a.b,
              f = {};
          f[Eg] = e.b && e.b.toString();
          f.refreshToken = e.a;
          b = new Jm(b || {
            apiKey: a.l,
            authDomain: a.o,
            appName: a.m
          }, f);
          c && (b.ha = c);
          d && Nm(b, d);
          cn(b, a);
          return b;
        }

        ;

        function tn(a) {
          this.a = a;
          this.b = Wk();
        }

        var nn = {
          name: "redirectUser",
          D: "session"
        };

        function on(a) {
          return $k(a.b, nn, a.a);
        }

        function un(a, b) {
          return a.b.get(nn, a.a).then(function (c) {
            c && b && (c.authDomain = b);
            return qn(c || {});
          });
        }

        ;

        function vn(a) {
          this.a = a;
          this.b = Wk();
          this.c = null;
          this.f = wn(this);
          this.b.addListener(xn("local"), this.a, q(this.g, this));
        }

        vn.prototype.g = function () {
          var a = this,
              b = xn("local");
          yn(this, function () {
            return E().then(function () {
              return a.c && "local" != a.c.D ? a.b.get(b, a.a) : null;
            }).then(function (c) {
              if (c) return zn(a, "local").then(function () {
                a.c = b;
              });
            });
          });
        };

        function zn(a, b) {
          var c = [],
              d;

          for (d in Sk) {
            Sk[d] !== b && c.push($k(a.b, xn(Sk[d]), a.a));
          }

          c.push($k(a.b, An, a.a));
          return Ic(c);
        }

        function wn(a) {
          var b = xn("local"),
              c = xn("session"),
              d = xn("none");
          return Zk(a.b, b, a.a).then(function () {
            return a.b.get(c, a.a);
          }).then(function (e) {
            return e ? c : a.b.get(d, a.a).then(function (f) {
              return f ? d : a.b.get(b, a.a).then(function (g) {
                return g ? b : a.b.get(An, a.a).then(function (h) {
                  return h ? xn(h) : b;
                });
              });
            });
          }).then(function (e) {
            a.c = e;
            return zn(a, e.D);
          }).s(function () {
            a.c || (a.c = b);
          });
        }

        var An = {
          name: "persistence",
          D: "session"
        };

        function xn(a) {
          return {
            name: "authUser",
            D: a
          };
        }

        vn.prototype.wb = function (a) {
          var b = null,
              c = this;
          Tk(a);
          return yn(this, function () {
            return a != c.c.D ? c.b.get(c.c, c.a).then(function (d) {
              b = d;
              return zn(c, a);
            }).then(function () {
              c.c = xn(a);
              if (b) return c.b.set(c.c, b, c.a);
            }) : E();
          });
        };

        function Bn(a) {
          return yn(a, function () {
            return a.b.set(An, a.c.D, a.a);
          });
        }

        function Cn(a, b) {
          return yn(a, function () {
            return a.b.set(a.c, b.w(), a.a);
          });
        }

        function Dn(a) {
          return yn(a, function () {
            return $k(a.b, a.c, a.a);
          });
        }

        function En(a, b, c) {
          return yn(a, function () {
            return a.b.get(a.c, a.a).then(function (d) {
              d && b && (d.authDomain = b);
              d && c && (d.emulatorConfig = c);
              return qn(d || {});
            });
          });
        }

        function yn(a, b) {
          a.f = a.f.then(b, b);
          return a.f;
        }

        ;

        function Fn(a) {
          this.m = !1;
          M(this, "settings", new fm());
          M(this, "app", a);
          if (S(this).options && S(this).options.apiKey) a = _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION ? Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION) : null, this.a = new Ji(S(this).options && S(this).options.apiKey, Ca(Da), a);else throw new t("invalid-api-key");
          this.R = [];
          this.u = [];
          this.P = [];
          this.ac = _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.createSubscribe(q(this.yc, this));
          this.X = void 0;
          this.bc = _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.createSubscribe(q(this.zc, this));
          Gn(this, null);
          this.l = new vn(S(this).options.apiKey + ":" + S(this).name);
          this.G = new tn(S(this).options.apiKey + ":" + S(this).name);
          this.$ = T(this, Hn(this));
          this.i = T(this, In(this));
          this.ba = !1;
          this.pa = q(this.Yc, this);
          this.Ba = q(this.da, this);
          this.ya = q(this.kc, this);
          this.za = q(this.vc, this);
          this.Aa = q(this.wc, this);
          this.b = null;
          Jn(this);
          this.INTERNAL = {};
          this.INTERNAL["delete"] = q(this["delete"], this);
          this.INTERNAL.logFramework = q(this.Fc, this);
          this.A = 0;
          I.call(this);
          Kn(this);
          this.N = [];
          this.f = null;
        }

        r(Fn, I);

        function Ln(a) {
          G.call(this, "languageCodeChanged");
          this.h = a;
        }

        r(Ln, G);

        function Mn(a) {
          G.call(this, "emulatorConfigChanged");
          this.c = a;
        }

        r(Mn, G);

        function Nn(a) {
          G.call(this, "frameworkChanged");
          this.f = a;
        }

        r(Nn, G);
        k = Fn.prototype;

        k.wb = function (a) {
          a = this.l.wb(a);
          return T(this, a);
        };

        k.wa = function (a) {
          this.aa === a || this.m || (this.aa = a, Pi(this.a, this.aa), this.dispatchEvent(new Ln(this.ka())));
        };

        k.ka = function () {
          return this.aa;
        };

        k.ed = function () {
          var a = l.navigator;
          this.wa(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
        };

        k.fd = function (a) {
          if (!this.f) {
            if (!/^https?:\/\//.test(a)) throw new t("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
            On();
            this.f = {
              url: a
            };
            this.settings.hb = !0;
            Qi(this.a, this.f);
            this.dispatchEvent(new Mn(this.f));
          }
        };

        function On() {
          bf("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
          l.document && Ee().then(function () {
            var a = l.document.createElement("div");
            a.innerText = "Running in emulator mode. Do not use with production credentials.";
            a.style.position = "fixed";
            a.style.width = "100%";
            a.style.backgroundColor = "#ffffff";
            a.style.border = ".1em solid #000000";
            a.style.color = "#ff0000";
            a.style.bottom = "0px";
            a.style.left = "0px";
            a.style.margin = "0px";
            a.style.zIndex = 1E4;
            a.style.textAlign = "center";
            a.classList.add("firebase-emulator-warning");
            l.document.body.appendChild(a);
          });
        }

        k.Fc = function (a) {
          this.N.push(a);
          Si(this.a, _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION ? Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION, this.N) : null);
          this.dispatchEvent(new Nn(this.N));
        };

        k.Ga = function () {
          return Za(this.N);
        };

        k.xb = function (a) {
          this.W === a || this.m || (this.W = a, this.a.b = this.W);
        };

        k.S = function () {
          return this.W;
        };

        function Kn(a) {
          Object.defineProperty(a, "lc", {
            get: function get() {
              return this.ka();
            },
            set: function set(b) {
              this.wa(b);
            },
            enumerable: !1
          });
          a.aa = null;
          Object.defineProperty(a, "ti", {
            get: function get() {
              return this.S();
            },
            set: function set(b) {
              this.xb(b);
            },
            enumerable: !1
          });
          a.W = null;
        }

        k.toJSON = function () {
          return {
            apiKey: S(this).options.apiKey,
            authDomain: S(this).options.authDomain,
            appName: S(this).name,
            currentUser: U(this) && U(this).w()
          };
        };

        function Pn(a) {
          return a.gb || F(new t("auth-domain-config-required"));
        }

        function Jn(a) {
          var b = S(a).options.authDomain,
              c = S(a).options.apiKey;
          b && Re() && (a.gb = a.$.then(function () {
            if (!a.m) {
              a.b = Yl(b, c, S(a).name, a.f);
              Ql(a.b, a);
              U(a) && Wm(U(a));

              if (a.o) {
                Wm(a.o);
                var d = a.o;
                d.wa(a.ka());
                Om(d, a);
                d = a.o;
                Nm(d, a.N);
                Qm(d, a);
                d = a.o;
                Qi(d.a, a.f);
                Pm(d, a);
                a.o = null;
              }

              return a.b;
            }
          }));
        }

        k.Eb = function (a, b) {
          switch (a) {
            case "unknown":
            case "signInViaRedirect":
              return !0;

            case "signInViaPopup":
              return this.h == b && !!this.g;

            default:
              return !1;
          }
        };

        k.ma = function (a, b, c, d) {
          "signInViaPopup" == a && this.h == d && (c && this.O ? this.O(c) : b && !c && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
        };

        k.Fa = function (a, b) {
          return "signInViaRedirect" == a || "signInViaPopup" == a && this.h == b && this.g ? q(this.hc, this) : null;
        };

        k.hc = function (a, b, c, d) {
          var e = this,
              f = {
            requestUri: a,
            postBody: d,
            sessionId: b,
            tenantId: c
          };
          this.c && (this.c.cancel(), this.c = null);
          return e.$.then(function () {
            return Qn(e, Gg(e.a, f));
          });
        };

        k.Wc = function (a) {
          if (!Re()) return F(new t("operation-not-supported-in-this-environment"));
          var b = this,
              c = og(a.providerId),
              d = Qe(),
              e = null;
          (!Te() || Ie()) && S(this).options.authDomain && a.isOAuthProvider && (e = fk(S(this).options.authDomain, S(this).options.apiKey, S(this).name, "signInViaPopup", a, null, d, _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION || null, null, null, this.S(), this.f));
          var f = ze(e, c && c.ua, c && c.ta);
          c = Pn(this).then(function (g) {
            return Ul(g, f, "signInViaPopup", a, d, !!e, b.S());
          }).then(function () {
            return new D(function (g, h) {
              b.ma("signInViaPopup", null, new t("cancelled-popup-request"), b.h);
              b.g = g;
              b.O = h;
              b.h = d;
              b.c = Wl(b.b, b, "signInViaPopup", f, d);
            });
          }).then(function (g) {
            f && ye(f);
            return g ? lf(g) : null;
          }).s(function (g) {
            f && ye(f);
            throw g;
          });
          return T(this, c);
        };

        k.Xc = function (a) {
          if (!Re()) return F(new t("operation-not-supported-in-this-environment"));
          var b = this,
              c = Pn(this).then(function () {
            return Bn(b.l);
          }).then(function () {
            return Vl(b.b, "signInViaRedirect", a, void 0, b.S());
          });
          return T(this, c);
        };

        function Rn(a) {
          if (!Re()) return F(new t("operation-not-supported-in-this-environment"));
          var b = Pn(a).then(function () {
            return a.b.qa();
          }).then(function (c) {
            return c ? lf(c) : null;
          });
          return T(a, b);
        }

        k.qa = function () {
          var a = this;
          return Rn(this).then(function (b) {
            a.b && am(a.b.b);
            return b;
          }).s(function (b) {
            a.b && am(a.b.b);
            throw b;
          });
        };

        k.cd = function (a) {
          if (!a) return F(new t("null-user"));
          if (this.W != a.tenantId) return F(new t("tenant-id-mismatch"));
          var b = this,
              c = {};
          c.apiKey = S(this).options.apiKey;
          c.authDomain = S(this).options.authDomain;
          c.appName = S(this).name;
          var d = sn(a, c, b.G, b.Ga());
          return T(this, this.i.then(function () {
            if (S(b).options.apiKey != a.l) return d.reload();
          }).then(function () {
            if (U(b) && a.uid == U(b).uid) return cn(U(b), a), b.da(a);
            Gn(b, d);
            Wm(d);
            return b.da(d);
          }).then(function () {
            Sn(b);
          }));
        };

        function Tn(a, b) {
          var c = {};
          c.apiKey = S(a).options.apiKey;
          c.authDomain = S(a).options.authDomain;
          c.appName = S(a).name;
          a.f && (c.emulatorConfig = a.f);
          return a.$.then(function () {
            return rn(c, b, a.G, a.Ga());
          }).then(function (d) {
            if (U(a) && d.uid == U(a).uid) return cn(U(a), d), a.da(d);
            Gn(a, d);
            Wm(d);
            return a.da(d);
          }).then(function () {
            Sn(a);
          });
        }

        function Gn(a, b) {
          U(a) && (Um(U(a), a.Ba), H(U(a), "tokenChanged", a.ya), H(U(a), "userDeleted", a.za), H(U(a), "userInvalidated", a.Aa), Tm(U(a)));
          b && (b.R.push(a.Ba), nd(b, "tokenChanged", a.ya), nd(b, "userDeleted", a.za), nd(b, "userInvalidated", a.Aa), 0 < a.A && Sm(b));
          M(a, "currentUser", b);
          b && (b.wa(a.ka()), Om(b, a), Nm(b, a.N), Qm(b, a), Qi(b.a, a.f), Pm(b, a));
        }

        k.zb = function () {
          var a = this,
              b = this.i.then(function () {
            a.b && am(a.b.b);
            if (!U(a)) return E();
            Gn(a, null);
            return Dn(a.l).then(function () {
              Sn(a);
            });
          });
          return T(this, b);
        };

        function Un(a) {
          var b = un(a.G, S(a).options.authDomain).then(function (c) {
            if (a.o = c) c.ha = a.G;
            return on(a.G);
          });
          return T(a, b);
        }

        function Hn(a) {
          var b = S(a).options.authDomain,
              c = Un(a).then(function () {
            return En(a.l, b, a.f);
          }).then(function (d) {
            return d ? (d.ha = a.G, a.o && (a.o.ga || null) == (d.ga || null) ? d : d.reload().then(function () {
              return Cn(a.l, d).then(function () {
                return d;
              });
            }).s(function (e) {
              return "auth/network-request-failed" == e.code ? d : Dn(a.l);
            })) : null;
          }).then(function (d) {
            Gn(a, d || null);
          });
          return T(a, c);
        }

        function In(a) {
          return a.$.then(function () {
            return Rn(a);
          }).s(function () {}).then(function () {
            if (!a.m) return a.pa();
          }).s(function () {}).then(function () {
            if (!a.m) {
              a.ba = !0;
              var b = a.l;
              b.b.addListener(xn("local"), b.a, a.pa);
            }
          });
        }

        k.Yc = function () {
          var a = this;
          return En(this.l, S(this).options.authDomain).then(function (b) {
            if (!a.m) {
              var c;

              if (c = U(a) && b) {
                c = U(a).uid;
                var d = b.uid;
                c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
              }

              if (c) return cn(U(a), b), U(a).I();
              if (U(a) || b) Gn(a, b), b && (Wm(b), b.ha = a.G), a.b && Ql(a.b, a), Sn(a);
            }
          });
        };

        k.da = function (a) {
          return Cn(this.l, a);
        };

        k.kc = function () {
          Sn(this);
          this.da(U(this));
        };

        k.vc = function () {
          this.zb();
        };

        k.wc = function () {
          this.zb();
        };

        function Qn(a, b) {
          var c = null,
              d = null;
          return T(a, b.then(function (e) {
            c = rh(e);
            d = pg(e);
            return Tn(a, e);
          }, function (e) {
            var f = null;
            e && "auth/multi-factor-auth-required" === e.code && (f = nm(e.w(), a, q(a.jc, a)));
            throw f || e;
          }).then(function () {
            return lf({
              user: U(a),
              credential: c,
              additionalUserInfo: d,
              operationType: "signIn"
            });
          }));
        }

        k.jc = function (a) {
          var b = this;
          return this.i.then(function () {
            return Qn(b, E(a));
          });
        };

        k.yc = function (a) {
          var b = this;
          this.addAuthTokenListener(function () {
            a.next(U(b));
          });
        };

        k.zc = function (a) {
          var b = this;
          Vn(this, function () {
            a.next(U(b));
          });
        };

        k.Hc = function (a, b, c) {
          var d = this;
          this.ba && Promise.resolve().then(function () {
            "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d));
          });
          return this.ac(a, b, c);
        };

        k.Gc = function (a, b, c) {
          var d = this;
          this.ba && Promise.resolve().then(function () {
            d.X = d.getUid();
            "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d));
          });
          return this.bc(a, b, c);
        };

        k.mc = function (a) {
          var b = this,
              c = this.i.then(function () {
            return U(b) ? U(b).I(a).then(function (d) {
              return {
                accessToken: d
              };
            }) : null;
          });
          return T(this, c);
        };

        k.Sc = function (a) {
          var b = this;
          return this.i.then(function () {
            return Qn(b, O(b.a, Lj, {
              token: a
            }));
          }).then(function (c) {
            var d = c.user;
            bn(d, "isAnonymous", !1);
            b.da(d);
            return c;
          });
        };

        k.Tc = function (a, b) {
          var c = this;
          return this.i.then(function () {
            return Qn(c, O(c.a, bh, {
              email: a,
              password: b
            }));
          });
        };

        k.dc = function (a, b) {
          var c = this;
          return this.i.then(function () {
            return Qn(c, O(c.a, Fj, {
              email: a,
              password: b
            }));
          });
        };

        k.Za = function (a) {
          var b = this;
          return this.i.then(function () {
            return Qn(b, a.ja(b.a));
          });
        };

        k.Rc = function (a) {
          hf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
          return this.Za(a);
        };

        k.yb = function () {
          var a = this;
          return this.i.then(function () {
            var b = U(a);

            if (b && b.isAnonymous) {
              var c = lf({
                providerId: null,
                isNewUser: !1
              });
              return lf({
                user: b,
                credential: null,
                additionalUserInfo: c,
                operationType: "signIn"
              });
            }

            return Qn(a, a.a.yb()).then(function (d) {
              var e = d.user;
              bn(e, "isAnonymous", !0);
              a.da(e);
              return d;
            });
          });
        };

        function S(a) {
          return a.app;
        }

        function U(a) {
          return a.currentUser;
        }

        k.getUid = function () {
          return U(this) && U(this).uid || null;
        };

        function Wn(a) {
          return U(a) && U(a)._lat || null;
        }

        function Sn(a) {
          if (a.ba) {
            for (var b = 0; b < a.u.length; b++) {
              if (a.u[b]) a.u[b](Wn(a));
            }

            if (a.X !== a.getUid() && a.P.length) for (a.X = a.getUid(), b = 0; b < a.P.length; b++) {
              if (a.P[b]) a.P[b](Wn(a));
            }
          }
        }

        k.cc = function (a) {
          this.addAuthTokenListener(a);
          this.A++;
          0 < this.A && U(this) && Sm(U(this));
        };

        k.Oc = function (a) {
          var b = this;
          w(this.u, function (c) {
            c == a && b.A--;
          });
          0 > this.A && (this.A = 0);
          0 == this.A && U(this) && Tm(U(this));
          this.removeAuthTokenListener(a);
        };

        k.addAuthTokenListener = function (a) {
          var b = this;
          this.u.push(a);
          T(this, this.i.then(function () {
            b.m || Va(b.u, a) && a(Wn(b));
          }));
        };

        k.removeAuthTokenListener = function (a) {
          Xa(this.u, function (b) {
            return b == a;
          });
        };

        function Vn(a, b) {
          a.P.push(b);
          T(a, a.i.then(function () {
            !a.m && Va(a.P, b) && a.X !== a.getUid() && (a.X = a.getUid(), b(Wn(a)));
          }));
        }

        k["delete"] = function () {
          this.m = !0;

          for (var a = 0; a < this.R.length; a++) {
            this.R[a].cancel("app-deleted");
          }

          this.R = [];
          this.l && (a = this.l, a.b.removeListener(xn("local"), a.a, this.pa));
          this.b && (Rl(this.b, this), am(this.b.b));
          return Promise.resolve();
        };

        function T(a, b) {
          a.R.push(b);
          b.na(function () {
            Wa(a.R, b);
          });
          return b;
        }

        k.gc = function (a) {
          return T(this, bj(this.a, a));
        };

        k.Ac = function (a) {
          return !!gh(a);
        };

        k.vb = function (a, b) {
          var c = this;
          return T(this, E().then(function () {
            var d = new Tf(b);
            if (!d.c) throw new t("argument-error", ag + " must be true when sending sign in link to email");
            return cg(d);
          }).then(function (d) {
            return c.a.vb(a, d);
          }).then(function () {}));
        };

        k.hd = function (a) {
          return this.Qa(a).then(function (b) {
            return b.data.email;
          });
        };

        k.mb = function (a, b) {
          return T(this, this.a.mb(a, b).then(function () {}));
        };

        k.Qa = function (a) {
          return T(this, this.a.Qa(a).then(function (b) {
            return new wf(b);
          }));
        };

        k.ib = function (a) {
          return T(this, this.a.ib(a).then(function () {}));
        };

        k.ub = function (a, b) {
          var c = this;
          return T(this, E().then(function () {
            return "undefined" === typeof b || mb(b) ? {} : cg(new Tf(b));
          }).then(function (d) {
            return c.a.ub(a, d);
          }).then(function () {}));
        };

        k.Vc = function (a, b) {
          return T(this, hm(this, a, b, q(this.Za, this)));
        };

        k.Uc = function (a, b) {
          var c = this;
          return T(this, E().then(function () {
            var d = b || re(),
                e = fh(a, d);
            d = gh(d);
            if (!d) throw new t("argument-error", "Invalid email link!");
            if (d.tenantId !== c.S()) throw new t("tenant-id-mismatch");
            return c.Za(e);
          }));
        };

        function Xn() {}

        Xn.prototype.render = function () {};

        Xn.prototype.reset = function () {};

        Xn.prototype.getResponse = function () {};

        Xn.prototype.execute = function () {};

        function Yn() {
          this.a = {};
          this.b = 1E12;
        }

        var Zn = null;

        Yn.prototype.render = function (a, b) {
          this.a[this.b.toString()] = new $n(a, b);
          return this.b++;
        };

        Yn.prototype.reset = function (a) {
          var b = ao(this, a);
          a = bo(a);
          b && a && (b["delete"](), delete this.a[a]);
        };

        Yn.prototype.getResponse = function (a) {
          return (a = ao(this, a)) ? a.getResponse() : null;
        };

        Yn.prototype.execute = function (a) {
          (a = ao(this, a)) && a.execute();
        };

        function ao(a, b) {
          return (b = bo(b)) ? a.a[b] || null : null;
        }

        function bo(a) {
          return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null;
        }

        function $n(a, b) {
          this.g = !1;
          this.c = b;
          this.a = this.b = null;
          this.h = "invisible" !== this.c.size;
          this.f = kc(a);
          var c = this;

          this.i = function () {
            c.execute();
          };

          this.h ? this.execute() : nd(this.f, "click", this.i);
        }

        $n.prototype.getResponse = function () {
          co(this);
          return this.b;
        };

        $n.prototype.execute = function () {
          co(this);
          var a = this;
          this.a || (this.a = setTimeout(function () {
            a.b = Me();
            var b = a.c.callback,
                c = a.c["expired-callback"];
            if (b) try {
              b(a.b);
            } catch (d) {}
            a.a = setTimeout(function () {
              a.a = null;
              a.b = null;
              if (c) try {
                c();
              } catch (d) {}
              a.h && a.execute();
            }, 6E4);
          }, 500));
        };

        $n.prototype["delete"] = function () {
          co(this);
          this.g = !0;
          clearTimeout(this.a);
          this.a = null;
          H(this.f, "click", this.i);
        };

        function co(a) {
          if (a.g) throw Error("reCAPTCHA mock was already deleted!");
        }

        ;

        function eo() {}

        M(eo, "FACTOR_ID", "phone");

        function fo() {}

        fo.prototype.g = function () {
          Zn || (Zn = new Yn());
          return E(Zn);
        };

        fo.prototype.c = function () {};

        var go = null;

        function ho() {
          this.b = l.grecaptcha ? Infinity : 0;
          this.f = null;
          this.a = "__rcb" + Math.floor(1E6 * Math.random()).toString();
        }

        var io = new qb(rb, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
            jo = new Ze(3E4, 6E4);

        ho.prototype.g = function (a) {
          var b = this;
          return new D(function (c, d) {
            var e = setTimeout(function () {
              d(new t("network-request-failed"));
            }, jo.get());

            if (!l.grecaptcha || a !== b.f && !b.b) {
              l[b.a] = function () {
                if (l.grecaptcha) {
                  b.f = a;
                  var g = l.grecaptcha.render;

                  l.grecaptcha.render = function (h, n) {
                    h = g(h, n);
                    b.b++;
                    return h;
                  };

                  clearTimeout(e);
                  c(l.grecaptcha);
                } else clearTimeout(e), d(new t("internal-error"));

                delete l[b.a];
              };

              var f = zb(io, {
                onload: b.a,
                hl: a || ""
              });
              E(Ci(f)).s(function () {
                clearTimeout(e);
                d(new t("internal-error", "Unable to load external reCAPTCHA dependencies!"));
              });
            } else clearTimeout(e), c(l.grecaptcha);
          });
        };

        ho.prototype.c = function () {
          this.b--;
        };

        var ko = null;

        function lo(a, b, c, d, e, f, g) {
          M(this, "type", "recaptcha");
          this.c = this.f = null;
          this.A = !1;
          this.m = b;
          this.g = null;
          g ? (go || (go = new fo()), g = go) : (ko || (ko = new ho()), g = ko);
          this.v = g;
          this.a = c || {
            theme: "light",
            type: "image"
          };
          this.h = [];
          if (this.a[mo]) throw new t("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
          this.i = "invisible" === this.a[no];
          if (!l.document) throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
          if (!kc(b) || !this.i && kc(b).hasChildNodes()) throw new t("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
          this.o = new Ji(a, f || null, e || null);

          this.u = d || function () {
            return null;
          };

          var h = this;
          this.l = [];
          var n = this.a[oo];

          this.a[oo] = function (v) {
            po(h, v);
            if ("function" === typeof n) n(v);else if ("string" === typeof n) {
              var B = L(n, l);
              "function" === typeof B && B(v);
            }
          };

          var p = this.a[qo];

          this.a[qo] = function () {
            po(h, null);
            if ("function" === typeof p) p();else if ("string" === typeof p) {
              var v = L(p, l);
              "function" === typeof v && v();
            }
          };
        }

        var oo = "callback",
            qo = "expired-callback",
            mo = "sitekey",
            no = "size";

        function po(a, b) {
          for (var c = 0; c < a.l.length; c++) {
            try {
              a.l[c](b);
            } catch (d) {}
          }
        }

        function ro(a, b) {
          Xa(a.l, function (c) {
            return c == b;
          });
        }

        function so(a, b) {
          a.h.push(b);
          b.na(function () {
            Wa(a.h, b);
          });
          return b;
        }

        k = lo.prototype;

        k.Ia = function () {
          var a = this;
          return this.f ? this.f : this.f = so(this, E().then(function () {
            if (Se() && !Je()) return Ee();
            throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
          }).then(function () {
            return a.v.g(a.u());
          }).then(function (b) {
            a.g = b;
            return O(a.o, Kj, {});
          }).then(function (b) {
            a.a[mo] = b.recaptchaSiteKey;
          }).s(function (b) {
            a.f = null;
            throw b;
          }));
        };

        k.render = function () {
          to(this);
          var a = this;
          return so(this, this.Ia().then(function () {
            if (null === a.c) {
              var b = a.m;

              if (!a.i) {
                var c = kc(b);
                b = nc("DIV");
                c.appendChild(b);
              }

              a.c = a.g.render(b, a.a);
            }

            return a.c;
          }));
        };

        k.verify = function () {
          to(this);
          var a = this;
          return so(this, this.render().then(function (b) {
            return new D(function (c) {
              var d = a.g.getResponse(b);
              if (d) c(d);else {
                var e = function e(f) {
                  f && (ro(a, e), c(f));
                };

                a.l.push(e);
                a.i && a.g.execute(a.c);
              }
            });
          }));
        };

        k.reset = function () {
          to(this);
          null !== this.c && this.g.reset(this.c);
        };

        function to(a) {
          if (a.A) throw new t("internal-error", "RecaptchaVerifier instance has been destroyed.");
        }

        k.clear = function () {
          to(this);
          this.A = !0;
          this.v.c();

          for (var a = 0; a < this.h.length; a++) {
            this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
          }

          if (!this.i) {
            a = kc(this.m);

            for (var b; b = a.firstChild;) {
              a.removeChild(b);
            }
          }
        };

        function uo(a, b, c) {
          var d = !1;

          try {
            this.b = c || _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].app();
          } catch (g) {
            throw new t("argument-error", "No firebase.app.App instance is currently initialized.");
          }

          if (this.b.options && this.b.options.apiKey) c = this.b.options.apiKey;else throw new t("invalid-api-key");
          var e = this,
              f = null;

          try {
            f = this.b.auth().Ga();
          } catch (g) {}

          try {
            d = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (g) {}

          f = _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION ? Oe(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION, f) : null;
          lo.call(this, c, a, b, function () {
            try {
              var g = e.b.auth().ka();
            } catch (h) {
              g = null;
            }

            return g;
          }, f, Ca(Da), d);
        }

        r(uo, lo);

        function vo(a, b, c, d) {
          a: {
            c = Array.prototype.slice.call(c);
            var e = 0;

            for (var f = !1, g = 0; g < b.length; g++) {
              if (b[g].optional) f = !0;else {
                if (f) throw new t("internal-error", "Argument validator encountered a required argument after an optional argument.");
                e++;
              }
            }

            f = b.length;
            if (c.length < e || f < c.length) d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";else {
              for (e = 0; e < c.length; e++) {
                if (f = b[e].optional && void 0 === c[e], !b[e].K(c[e]) && !f) {
                  b = b[e];
                  if (0 > e || e >= wo.length) throw new t("internal-error", "Argument validator received an unsupported number of arguments.");
                  c = wo[e];
                  d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.J + ".";
                  break a;
                }
              }

              d = null;
            }
          }

          if (d) throw new t("argument-error", a + " failed: " + d);
        }

        var wo = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

        function V(a, b) {
          return {
            name: a || "",
            J: "a valid string",
            optional: !!b,
            K: function K(c) {
              return "string" === typeof c;
            }
          };
        }

        function xo(a, b) {
          return {
            name: a || "",
            J: "a boolean",
            optional: !!b,
            K: function K(c) {
              return "boolean" === typeof c;
            }
          };
        }

        function W(a, b) {
          return {
            name: a || "",
            J: "a valid object",
            optional: !!b,
            K: m
          };
        }

        function yo(a, b) {
          return {
            name: a || "",
            J: "a function",
            optional: !!b,
            K: function K(c) {
              return "function" === typeof c;
            }
          };
        }

        function zo(a, b) {
          return {
            name: a || "",
            J: "null",
            optional: !!b,
            K: function K(c) {
              return null === c;
            }
          };
        }

        function Ao() {
          return {
            name: "",
            J: "an HTML element",
            optional: !1,
            K: function K(a) {
              return !!(a && a instanceof Element);
            }
          };
        }

        function Bo() {
          return {
            name: "auth",
            J: "an instance of Firebase Auth",
            optional: !0,
            K: function K(a) {
              return !!(a && a instanceof Fn);
            }
          };
        }

        function Co() {
          return {
            name: "app",
            J: "an instance of Firebase App",
            optional: !0,
            K: function K(a) {
              return !!(a && a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].app.App);
            }
          };
        }

        function Do(a) {
          return {
            name: a ? a + "Credential" : "credential",
            J: a ? "a valid " + a + " credential" : "a valid credential",
            optional: !1,
            K: function K(b) {
              if (!b) return !1;
              var c = !a || b.providerId === a;
              return !(!b.ja || !c);
            }
          };
        }

        function Eo() {
          return {
            name: "multiFactorAssertion",
            J: "a valid multiFactorAssertion",
            optional: !1,
            K: function K(a) {
              return a ? !!a.rb : !1;
            }
          };
        }

        function Fo() {
          return {
            name: "authProvider",
            J: "a valid Auth provider",
            optional: !1,
            K: function K(a) {
              return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
            }
          };
        }

        function Go(a, b) {
          return m(a) && "string" === typeof a.type && a.type === b && "function" === typeof a.Ha;
        }

        function Ho(a) {
          return m(a) && "string" === typeof a.uid;
        }

        function Io() {
          return {
            name: "applicationVerifier",
            J: "an implementation of firebase.auth.ApplicationVerifier",
            optional: !1,
            K: function K(a) {
              return !(!a || "string" !== typeof a.type || "function" !== typeof a.verify);
            }
          };
        }

        function X(a, b, c, d) {
          return {
            name: c || "",
            J: a.J + " or " + b.J,
            optional: !!d,
            K: function K(e) {
              return a.K(e) || b.K(e);
            }
          };
        }

        ;

        function Y(a, b) {
          for (var c in b) {
            var d = b[c].name;
            a[d] = Jo(d, a[c], b[c].j);
          }
        }

        function Ko(a, b) {
          for (var c in b) {
            var d = b[c].name;
            d !== c && Object.defineProperty(a, d, {
              get: ua(function (e) {
                return this[e];
              }, c),
              set: ua(function (e, f, g, h) {
                vo(e, [g], [h], !0);
                this[f] = h;
              }, d, c, b[c].jb),
              enumerable: !0
            });
          }
        }

        function Z(a, b, c, d) {
          a[b] = Jo(b, c, d);
        }

        function Jo(a, b, c) {
          function d() {
            var g = Array.prototype.slice.call(arguments);
            vo(e, c, g);
            return b.apply(this, g);
          }

          if (!c) return b;
          var e = Lo(a),
              f;

          for (f in b) {
            d[f] = b[f];
          }

          for (f in b.prototype) {
            d.prototype[f] = b.prototype[f];
          }

          return d;
        }

        function Lo(a) {
          a = a.split(".");
          return a[a.length - 1];
        }

        ;
        Y(Fn.prototype, {
          ib: {
            name: "applyActionCode",
            j: [V("code")]
          },
          Qa: {
            name: "checkActionCode",
            j: [V("code")]
          },
          mb: {
            name: "confirmPasswordReset",
            j: [V("code"), V("newPassword")]
          },
          dc: {
            name: "createUserWithEmailAndPassword",
            j: [V("email"), V("password")]
          },
          gc: {
            name: "fetchSignInMethodsForEmail",
            j: [V("email")]
          },
          qa: {
            name: "getRedirectResult",
            j: []
          },
          Ac: {
            name: "isSignInWithEmailLink",
            j: [V("emailLink")]
          },
          Gc: {
            name: "onAuthStateChanged",
            j: [X(W(), yo(), "nextOrObserver"), yo("opt_error", !0), yo("opt_completed", !0)]
          },
          Hc: {
            name: "onIdTokenChanged",
            j: [X(W(), yo(), "nextOrObserver"), yo("opt_error", !0), yo("opt_completed", !0)]
          },
          ub: {
            name: "sendPasswordResetEmail",
            j: [V("email"), X(W("opt_actionCodeSettings", !0), zo(null, !0), "opt_actionCodeSettings", !0)]
          },
          vb: {
            name: "sendSignInLinkToEmail",
            j: [V("email"), W("actionCodeSettings")]
          },
          wb: {
            name: "setPersistence",
            j: [V("persistence")]
          },
          Rc: {
            name: "signInAndRetrieveDataWithCredential",
            j: [Do()]
          },
          yb: {
            name: "signInAnonymously",
            j: []
          },
          Za: {
            name: "signInWithCredential",
            j: [Do()]
          },
          Sc: {
            name: "signInWithCustomToken",
            j: [V("token")]
          },
          Tc: {
            name: "signInWithEmailAndPassword",
            j: [V("email"), V("password")]
          },
          Uc: {
            name: "signInWithEmailLink",
            j: [V("email"), V("emailLink", !0)]
          },
          Vc: {
            name: "signInWithPhoneNumber",
            j: [V("phoneNumber"), Io()]
          },
          Wc: {
            name: "signInWithPopup",
            j: [Fo()]
          },
          Xc: {
            name: "signInWithRedirect",
            j: [Fo()]
          },
          cd: {
            name: "updateCurrentUser",
            j: [X(function (a) {
              return {
                name: "user",
                J: "an instance of Firebase User",
                optional: !!a,
                K: function K(b) {
                  return !!(b && b instanceof Jm);
                }
              };
            }(), zo(), "user")]
          },
          zb: {
            name: "signOut",
            j: []
          },
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          },
          ed: {
            name: "useDeviceLanguage",
            j: []
          },
          fd: {
            name: "useEmulator",
            j: [V("url")]
          },
          hd: {
            name: "verifyPasswordResetCode",
            j: [V("code")]
          }
        });
        Ko(Fn.prototype, {
          lc: {
            name: "languageCode",
            jb: X(V(), zo(), "languageCode")
          },
          ti: {
            name: "tenantId",
            jb: X(V(), zo(), "tenantId")
          }
        });
        Fn.Persistence = Sk;
        Fn.Persistence.LOCAL = "local";
        Fn.Persistence.SESSION = "session";
        Fn.Persistence.NONE = "none";
        Y(Jm.prototype, {
          "delete": {
            name: "delete",
            j: []
          },
          nc: {
            name: "getIdTokenResult",
            j: [xo("opt_forceRefresh", !0)]
          },
          I: {
            name: "getIdToken",
            j: [xo("opt_forceRefresh", !0)]
          },
          Bc: {
            name: "linkAndRetrieveDataWithCredential",
            j: [Do()]
          },
          pb: {
            name: "linkWithCredential",
            j: [Do()]
          },
          Cc: {
            name: "linkWithPhoneNumber",
            j: [V("phoneNumber"), Io()]
          },
          Dc: {
            name: "linkWithPopup",
            j: [Fo()]
          },
          Ec: {
            name: "linkWithRedirect",
            j: [Fo()]
          },
          Kc: {
            name: "reauthenticateAndRetrieveDataWithCredential",
            j: [Do()]
          },
          sb: {
            name: "reauthenticateWithCredential",
            j: [Do()]
          },
          Lc: {
            name: "reauthenticateWithPhoneNumber",
            j: [V("phoneNumber"), Io()]
          },
          Mc: {
            name: "reauthenticateWithPopup",
            j: [Fo()]
          },
          Nc: {
            name: "reauthenticateWithRedirect",
            j: [Fo()]
          },
          reload: {
            name: "reload",
            j: []
          },
          tb: {
            name: "sendEmailVerification",
            j: [X(W("opt_actionCodeSettings", !0), zo(null, !0), "opt_actionCodeSettings", !0)]
          },
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          },
          bd: {
            name: "unlink",
            j: [V("provider")]
          },
          Ab: {
            name: "updateEmail",
            j: [V("email")]
          },
          Bb: {
            name: "updatePassword",
            j: [V("password")]
          },
          dd: {
            name: "updatePhoneNumber",
            j: [Do("phone")]
          },
          Cb: {
            name: "updateProfile",
            j: [W("profile")]
          },
          Db: {
            name: "verifyBeforeUpdateEmail",
            j: [V("email"), X(W("opt_actionCodeSettings", !0), zo(null, !0), "opt_actionCodeSettings", !0)]
          }
        });
        Y(Yn.prototype, {
          execute: {
            name: "execute"
          },
          render: {
            name: "render"
          },
          reset: {
            name: "reset"
          },
          getResponse: {
            name: "getResponse"
          }
        });
        Y(Xn.prototype, {
          execute: {
            name: "execute"
          },
          render: {
            name: "render"
          },
          reset: {
            name: "reset"
          },
          getResponse: {
            name: "getResponse"
          }
        });
        Y(D.prototype, {
          na: {
            name: "finally"
          },
          s: {
            name: "catch"
          },
          then: {
            name: "then"
          }
        });
        Ko(fm.prototype, {
          appVerificationDisabled: {
            name: "appVerificationDisabledForTesting",
            jb: xo("appVerificationDisabledForTesting")
          }
        });
        Y(gm.prototype, {
          confirm: {
            name: "confirm",
            j: [V("verificationCode")]
          }
        });
        Z(Cg, "fromJSON", function (a) {
          a = "string" === typeof a ? JSON.parse(a) : a;

          for (var b, c = [Ng, eh, lh, Kg], d = 0; d < c.length; d++) {
            if (b = c[d](a)) return b;
          }

          return null;
        }, [X(V(), W(), "json")]);
        Z($g, "credential", function (a, b) {
          return new Zg(a, b);
        }, [V("email"), V("password")]);
        Y(Zg.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(Rg.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Rg, "credential", Sg, [X(V(), W(), "token")]);
        Z($g, "credentialWithLink", fh, [V("email"), V("emailLink")]);
        Y(Tg.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Tg, "credential", Ug, [X(V(), W(), "token")]);
        Y(Vg.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Vg, "credential", Wg, [X(V(), X(W(), zo()), "idToken"), X(V(), zo(), "accessToken", !0)]);
        Y(Xg.prototype, {
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Xg, "credential", Yg, [X(V(), W(), "token"), V("secret", !0)]);
        Y(Qg.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          credential: {
            name: "credential",
            j: [X(V(), X(W(), zo()), "optionsOrIdToken"), X(V(), zo(), "accessToken", !0)]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Y(Lg.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(Fg.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Z(mh, "credential", qh, [V("verificationId"), V("verificationCode")]);
        Y(mh.prototype, {
          eb: {
            name: "verifyPhoneNumber",
            j: [X(V(), function (a, b) {
              return {
                name: a || "phoneInfoOptions",
                J: "valid phone info options",
                optional: !!b,
                K: function K(c) {
                  return c ? c.session && c.phoneNumber ? Go(c.session, Ag) && "string" === typeof c.phoneNumber : c.session && c.multiFactorHint ? Go(c.session, Bg) && Ho(c.multiFactorHint) : c.session && c.multiFactorUid ? Go(c.session, Bg) && "string" === typeof c.multiFactorUid : c.phoneNumber ? "string" === typeof c.phoneNumber : !1 : !1;
                }
              };
            }(), "phoneInfoOptions"), Io()]
          }
        });
        Y(hh.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(t.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(zh.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(yh.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(mm.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(jm.prototype, {
          Qc: {
            name: "resolveSignIn",
            j: [Eo()]
          }
        });
        Y(um.prototype, {
          Qb: {
            name: "getSession",
            j: []
          },
          ec: {
            name: "enroll",
            j: [Eo(), V("displayName", !0)]
          },
          ad: {
            name: "unenroll",
            j: [X({
              name: "multiFactorInfo",
              J: "a valid multiFactorInfo",
              optional: !1,
              K: Ho
            }, V(), "multiFactorInfoIdentifier")]
          }
        });
        Y(uo.prototype, {
          clear: {
            name: "clear",
            j: []
          },
          render: {
            name: "render",
            j: []
          },
          verify: {
            name: "verify",
            j: []
          }
        });
        Z(Kf, "parseLink", Sf, [V("link")]);
        Z(eo, "assertion", function (a) {
          return new sm(a);
        }, [Do("phone")]);

        (function () {
          if ("undefined" !== typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"] && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL && _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.registerComponent) {
            var a = {
              ActionCodeInfo: {
                Operation: {
                  EMAIL_SIGNIN: Bf,
                  PASSWORD_RESET: "PASSWORD_RESET",
                  RECOVER_EMAIL: "RECOVER_EMAIL",
                  REVERT_SECOND_FACTOR_ADDITION: Df,
                  VERIFY_AND_CHANGE_EMAIL: Cf,
                  VERIFY_EMAIL: "VERIFY_EMAIL"
                }
              },
              Auth: Fn,
              AuthCredential: Cg,
              Error: t
            };
            Z(a, "EmailAuthProvider", $g, []);
            Z(a, "FacebookAuthProvider", Rg, []);
            Z(a, "GithubAuthProvider", Tg, []);
            Z(a, "GoogleAuthProvider", Vg, []);
            Z(a, "TwitterAuthProvider", Xg, []);
            Z(a, "OAuthProvider", Qg, [V("providerId")]);
            Z(a, "SAMLAuthProvider", Pg, [V("providerId")]);
            Z(a, "PhoneAuthProvider", mh, [Bo()]);
            Z(a, "RecaptchaVerifier", uo, [X(V(), Ao(), "recaptchaContainer"), W("recaptchaParameters", !0), Co()]);
            Z(a, "ActionCodeURL", Kf, []);
            Z(a, "PhoneMultiFactorGenerator", eo, []);

            _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.registerComponent({
              name: "auth",
              instanceFactory: function instanceFactory(b) {
                b = b.getProvider("app").getImmediate();
                return new Fn(b);
              },
              multipleInstances: !1,
              serviceProps: a,
              instantiationMode: "LAZY",
              type: "PUBLIC"
            });

            _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.registerComponent({
              name: "auth-internal",
              instanceFactory: function instanceFactory(b) {
                b = b.getProvider("auth").getImmediate();
                return {
                  getUid: q(b.getUid, b),
                  getToken: q(b.mc, b),
                  addAuthTokenListener: q(b.cc, b),
                  removeAuthTokenListener: q(b.Oc, b)
                };
              },
              multipleInstances: !1,
              instantiationMode: "LAZY",
              type: "PRIVATE"
            });

            _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion("@firebase/auth", "0.15.2");

            _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].INTERNAL.extendNamespace({
              User: Jm
            });
          } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
        })();
      }).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}); //# sourceMappingURL=auth.esm.js.map

      /***/
    },

    /***/
    "zIRd":
    /*!******************************************************!*\
      !*** ./node_modules/@firebase/app/dist/index.esm.js ***!
      \******************************************************/

    /*! exports provided: default, firebase */

    /***/
    function zIRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebase", function () {
        return firebase$1;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "30Go");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/util */
      "qOnz");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/component */
      "/6Yf");
      /* harmony import */


      var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/logger */
      "q/0M");
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERRORS = (_a = {}, _a["no-app"
      /* NO_APP */
      ] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a["bad-app-name"
      /* BAD_APP_NAME */
      ] = "Illegal App name: '{$appName}", _a["duplicate-app"
      /* DUPLICATE_APP */
      ] = "Firebase App named '{$appName}' already exists", _a["app-deleted"
      /* APP_DELETED */
      ] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"
      /* INVALID_APP_ARGUMENT */
      ] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a["invalid-log-argument"
      /* INVALID_LOG_ARGUMENT */
      ] = 'First argument to `onLog` must be null or a function.', _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_1__["ErrorFactory"]('app', 'Firebase', ERRORS);
      var name$1 = "@firebase/app";
      var version = "0.6.13";
      var name$2 = "@firebase/analytics";
      var name$3 = "@firebase/auth";
      var name$4 = "@firebase/database";
      var name$5 = "@firebase/functions";
      var name$6 = "@firebase/installations";
      var name$7 = "@firebase/messaging";
      var name$8 = "@firebase/performance";
      var name$9 = "@firebase/remote-config";
      var name$a = "@firebase/storage";
      var name$b = "@firebase/firestore";
      var name$c = "firebase-wrapper";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var _a$1;

      var DEFAULT_ENTRY_NAME = '[DEFAULT]';
      var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$1] = 'fire-core', _a$1[name$2] = 'fire-analytics', _a$1[name$3] = 'fire-auth', _a$1[name$4] = 'fire-rtdb', _a$1[name$5] = 'fire-fn', _a$1[name$6] = 'fire-iid', _a$1[name$7] = 'fire-fcm', _a$1[name$8] = 'fire-perf', _a$1[name$9] = 'fire-rc', _a$1[name$a] = 'fire-gcs', _a$1[name$b] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$c] = 'fire-js-all', _a$1);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('@firebase/app');
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Global context object for a collection of services using
       * a shared authentication state.
       */

      var FirebaseAppImpl =
      /** @class */
      function () {
        function FirebaseAppImpl(options, config, firebase_) {
          var e_1, _a;

          var _this = this;

          this.firebase_ = firebase_;
          this.isDeleted_ = false;
          this.name_ = config.name;
          this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
          this.options_ = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["deepCopy"])(options);
          this.container = new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["ComponentContainer"](config.name); // add itself to container

          this._addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"]('app', function () {
            return _this;
          }, "PUBLIC"
          /* PUBLIC */
          ));

          try {
            // populate ComponentContainer with existing components
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var component = _c.value;

              this._addComponent(component);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }

        Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
          get: function get() {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
          },
          set: function set(val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl.prototype, "name", {
          get: function get() {
            this.checkDestroyed_();
            return this.name_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseAppImpl.prototype, "options", {
          get: function get() {
            this.checkDestroyed_();
            return this.options_;
          },
          enumerable: false,
          configurable: true
        });

        FirebaseAppImpl.prototype["delete"] = function () {
          var _this = this;

          return new Promise(function (resolve) {
            _this.checkDestroyed_();

            resolve();
          }).then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);

            return Promise.all(_this.container.getProviders().map(function (provider) {
              return provider["delete"]();
            }));
          }).then(function () {
            _this.isDeleted_ = true;
          });
        };
        /**
         * Return a service instance associated with this app (creating it
         * on demand), identified by the passed instanceIdentifier.
         *
         * NOTE: Currently storage and functions are the only ones that are leveraging this
         * functionality. They invoke it by calling:
         *
         * ```javascript
         * firebase.app().storage('STORAGE BUCKET ID')
         * ```
         *
         * The service name is passed to this already
         * @internal
         */


        FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          }

          this.checkDestroyed_(); // getImmediate will always succeed because _getService is only called for registered components.

          return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
          });
        };
        /**
         * Remove a service instance from the cache, so we will create a new instance for this service
         * when people try to get this service again.
         *
         * NOTE: currently only firestore is using this functionality to support firestore shutdown.
         *
         * @param name The service name
         * @param instanceIdentifier instance identifier in case multiple instances are allowed
         * @internal
         */


        FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
          if (instanceIdentifier === void 0) {
            instanceIdentifier = DEFAULT_ENTRY_NAME;
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          this.container.getProvider(name).clearInstance(instanceIdentifier);
        };
        /**
         * @param component the component being added to this app's container
         */


        FirebaseAppImpl.prototype._addComponent = function (component) {
          try {
            this.container.addComponent(component);
          } catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
          }
        };

        FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
          this.container.addOrOverwriteComponent(component);
        };
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */


        FirebaseAppImpl.prototype.checkDestroyed_ = function () {
          if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted"
            /* APP_DELETED */
            , {
              appName: this.name_
            });
          }
        };

        return FirebaseAppImpl;
      }(); // Prevent dead-code elimination of these methods w/o invalid property
      // copying.


      FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype["delete"] || console.log('dc');
      var version$1 = "8.0.1";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Because auth can't share code with other components, we attach the utility functions
       * in an internal namespace to share code.
       * This function return a firebase namespace object without
       * any utility functions, so it can be shared between the regular firebaseNamespace and
       * the lite version.
       */

      function createFirebaseNamespaceCore(firebaseAppImpl) {
        var apps = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        var components = new Map(); // A namespace is a plain JavaScript Object.

        var namespace = {
          // Hack to prevent Babel from modifying the object returned
          // as the firebase namespace.
          // @ts-ignore
          __esModule: true,
          initializeApp: initializeApp,
          // @ts-ignore
          app: app,
          registerVersion: registerVersion,
          setLogLevel: _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["setLogLevel"],
          onLog: onLog,
          // @ts-ignore
          apps: null,
          SDK_VERSION: version$1,
          INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
          }
        }; // Inject a circular default export to allow Babel users who were previously
        // using:
        //
        //   import firebase from 'firebase';
        //   which becomes: var firebase = require('firebase').default;
        //
        // instead of
        //
        //   import * as firebase from 'firebase';
        //   which becomes: var firebase = require('firebase');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        namespace['default'] = namespace; // firebase.apps is a read-only getter.

        Object.defineProperty(namespace, 'apps', {
          get: getApps
        });
        /**
         * Called by App.delete() - but before any services associated with the App
         * are deleted.
         */

        function removeApp(name) {
          delete apps[name];
        }
        /**
         * Get the App object for a given name (or DEFAULT).
         */


        function app(name) {
          name = name || DEFAULT_ENTRY_NAME;

          if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["contains"])(apps, name)) {
            throw ERROR_FACTORY.create("no-app"
            /* NO_APP */
            , {
              appName: name
            });
          }

          return apps[name];
        } // @ts-ignore


        app['App'] = firebaseAppImpl;

        function initializeApp(options, rawConfig) {
          if (rawConfig === void 0) {
            rawConfig = {};
          }

          if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = {
              name: name_1
            };
          }

          var config = rawConfig;

          if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
          }

          var name = config.name;

          if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name"
            /* BAD_APP_NAME */
            , {
              appName: String(name)
            });
          }

          if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["contains"])(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app"
            /* DUPLICATE_APP */
            , {
              appName: name
            });
          }

          var app = new firebaseAppImpl(options, config, namespace);
          apps[name] = app;
          return app;
        }
        /*
         * Return an array of all the non-deleted FirebaseApps.
         */


        function getApps() {
          // Make a copy so caller cannot mutate the apps list.
          return Object.keys(apps).map(function (name) {
            return apps[name];
          });
        }

        function registerComponent(component) {
          var e_1, _a;

          var componentName = component.name;

          if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC"
            /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] : null;
          }

          components.set(componentName, component); // create service namespace for public components

          if (component.type === "PUBLIC"
          /* PUBLIC */
          ) {
              // The Service namespace is an accessor function ...
              var serviceNamespace = function serviceNamespace(appArg) {
                if (appArg === void 0) {
                  appArg = app();
                } // eslint-disable-next-line @typescript-eslint/no-explicit-any


                if (typeof appArg[componentName] !== 'function') {
                  // Invalid argument.
                  // This happens in the following case: firebase.storage('gs:/')
                  throw ERROR_FACTORY.create("invalid-app-argument"
                  /* INVALID_APP_ARGUMENT */
                  , {
                    appName: componentName
                  });
                } // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any


                return appArg[componentName]();
              }; // ... and a container for service-level properties.


              if (component.serviceProps !== undefined) {
                Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["deepExtend"])(serviceNamespace, component.serviceProps);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any


              namespace[componentName] = serviceNamespace; // Patch the FirebaseAppImpl prototype
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

              firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
              // option added to the no-explicit-any rule when ESlint releases it.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                var serviceFxn = this._getService.bind(this, componentName);

                return serviceFxn.apply(this, component.multipleInstances ? args : []);
              };
            }

          try {
            // add the component to existing app instances
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var appName = _c.value;

              apps[appName]._addComponent(component);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }

          return component.type === "PUBLIC"
          /* PUBLIC */
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          namespace[componentName] : null;
        }

        function registerVersion(libraryKeyOrName, version, variant) {
          var _a; // TODO: We can use this check to whitelist strings when/if we set up
          // a good whitelist system.


          var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

          if (variant) {
            library += "-" + variant;
          }

          var libraryMismatch = library.match(/\s|\//);
          var versionMismatch = version.match(/\s|\//);

          if (libraryMismatch || versionMismatch) {
            var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

            if (libraryMismatch) {
              warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }

            if (libraryMismatch && versionMismatch) {
              warning.push('and');
            }

            if (versionMismatch) {
              warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }

            logger.warn(warning.join(' '));
            return;
          }

          registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](library + "-version", function () {
            return {
              library: library,
              version: version
            };
          }, "VERSION"
          /* VERSION */
          ));
        }

        function onLog(logCallback, options) {
          if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument"
            /* INVALID_LOG_ARGUMENT */
            , {
              appName: name
            });
          }

          Object(_firebase_logger__WEBPACK_IMPORTED_MODULE_3__["setUserLogHandler"])(logCallback, options);
        } // Map the requested service to a registered service name
        // (used to map auth to serverAuth service when needed).


        function useAsService(app, name) {
          if (name === 'serverAuth') {
            return null;
          }

          var useService = name;
          return useService;
        }

        return namespace;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Return a firebase namespace object.
       *
       * In production, this will be called exactly once and the result
       * assigned to the 'firebase' global.  It may be called multiple times
       * in unit tests.
       */


      function createFirebaseNamespace() {
        var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
        namespace.INTERNAL = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, namespace.INTERNAL), {
          createFirebaseNamespace: createFirebaseNamespace,
          extendNamespace: extendNamespace,
          createSubscribe: _firebase_util__WEBPACK_IMPORTED_MODULE_1__["createSubscribe"],
          ErrorFactory: _firebase_util__WEBPACK_IMPORTED_MODULE_1__["ErrorFactory"],
          deepExtend: _firebase_util__WEBPACK_IMPORTED_MODULE_1__["deepExtend"]
        });
        /**
         * Patch the top-level firebase namespace with additional properties.
         *
         * firebase.INTERNAL.extendNamespace()
         */

        function extendNamespace(props) {
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["deepExtend"])(namespace, props);
        }

        return namespace;
      }

      var firebase = createFirebaseNamespace();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var PlatformLoggerService =
      /** @class */
      function () {
        function PlatformLoggerService(container) {
          this.container = container;
        } // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.


        PlatformLoggerService.prototype.getPlatformInfoString = function () {
          var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
          // version components.

          return providers.map(function (provider) {
            if (isVersionServiceProvider(provider)) {
              var service = provider.getImmediate();
              return service.library + "/" + service.version;
            } else {
              return null;
            }
          }).filter(function (logString) {
            return logString;
          }).join(' ');
        };

        return PlatformLoggerService;
      }();
      /**
       *
       * @param provider check if this provider provides a VersionService
       *
       * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
       * provides VersionService. The provider is not necessarily a 'app-version'
       * provider.
       */


      function isVersionServiceProvider(provider) {
        var component = provider.getComponent();
        return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
        /* VERSION */
        ;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function registerCoreComponents(firebase, variant) {
        firebase.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"]('platform-logger', function (container) {
          return new PlatformLoggerService(container);
        }, "PRIVATE"
        /* PRIVATE */
        )); // Register `app` package.

        firebase.registerVersion(name$1, version, variant); // Register platform SDK identifier (no version).

        firebase.registerVersion('fire-js', '');
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Firebase Lite detection test
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"])() && self.firebase !== undefined) {
        logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); // eslint-disable-next-line

        var sdkVersion = self.firebase.SDK_VERSION;

        if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
          logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
        }
      }

      var initializeApp = firebase.initializeApp; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
      // the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      firebase.initializeApp = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        } // Environment check before initializing app
        // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
        // in @firebase/logger


        if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isNode"])()) {
          logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
        }

        return initializeApp.apply(undefined, args);
      };

      var firebase$1 = firebase;
      registerCoreComponents(firebase$1);
      /* harmony default export */

      __webpack_exports__["default"] = firebase$1; //# sourceMappingURL=index.esm.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~features-home-home-module~features-landing-landing-module-es5.js.map