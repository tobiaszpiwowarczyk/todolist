webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_todo_list_page_todo_list_page_component__ = __webpack_require__("../../../../../src/app/pages/todo-list-page/todo-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: "register",
        component: __WEBPACK_IMPORTED_MODULE_5__pages_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: "todolist/:id",
        component: __WEBPACK_IMPORTED_MODULE_4__pages_todo_list_page_todo_list_page_component__["a" /* TodoListPageComponent */]
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_ls, router) {
        this._ls = _ls;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this._ls.isAuthenticated()) {
            if (window.location.pathname != "/register") {
                this.router.navigate(["/login"]);
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_todo_list_page_todo_list_page_component__ = __webpack_require__("../../../../../src/app/pages/todo-list-page/todo-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_todo_todo_component__ = __webpack_require__("../../../../../src/app/components/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_safe_style_safe_style_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe-style/safe-style.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_input_input_component__ = __webpack_require__("../../../../../src/app/components/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dropdown_dropdown_component__ = __webpack_require__("../../../../../src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_button_button_component__ = __webpack_require__("../../../../../src/app/components/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_switch_switch_component__ = __webpack_require__("../../../../../src/app/components/switch/switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_autofocus_autofocus_directive__ = __webpack_require__("../../../../../src/app/directives/autofocus/autofocus.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_todo_list_page_todo_list_page_component__["a" /* TodoListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_safe_style_safe_style_pipe__["a" /* SafeStylePipe */],
            __WEBPACK_IMPORTED_MODULE_14__pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_dropdown_dropdown_component__["a" /* DropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_button_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_switch_switch_component__["a" /* SwitchComponent */],
            __WEBPACK_IMPORTED_MODULE_21__directives_autofocus_autofocus_directive__["a" /* AutofocusDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/alert/AlertType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IAlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var IAlertType = (function () {
    function IAlertType() {
    }
    return IAlertType;
}());

var AlertType = (function () {
    function AlertType() {
    }
    return AlertType;
}());

AlertType.WARMING = { icon: "exclamation-triangle", name: "warming" };
AlertType.SUCCESS = { icon: "check-circle", name: "success" };
//# sourceMappingURL=AlertType.js.map

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert--{{alertType?.name}}\"\n     [ngClass]=\"{'alert--shown': shown}\">\n  <div class=\"fa fa-{{alertType?.icon}} alert__icon\"></div>\n  <div class=\"alert__message\">{{message}}</div>\n  <div class=\"fa fa-times\" (click)=\"hide()\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 10;\n  transition: height 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83);\n  font-size: 18px;\n  font-weight: 900; }\n  .alert .fa {\n    position: absolute;\n    height: 70px;\n    width: 70px;\n    text-align: center;\n    line-height: 70px;\n    font-size: 21px; }\n  .alert__icon {\n    left: 0; }\n  .alert__message {\n    position: relative;\n    width: calc(100% - 140px);\n    text-align: center;\n    padding: 0 15px; }\n  .alert .fa-times {\n    right: 0;\n    cursor: pointer; }\n  .alert--shown {\n    height: 70px; }\n  .alert--warming {\n    background: #FED766;\n    color: #977101; }\n    .alert--warming .alert__icon {\n      border-right: 1px solid rgba(151, 113, 1, 0.5); }\n    .alert--warming .fa-times {\n      border-left: 1px solid rgba(151, 113, 1, 0.5); }\n      .alert--warming .fa-times:hover {\n        color: #7e5e01; }\n  .alert--success {\n    background: #9ae832;\n    color: #2b4608; }\n    .alert--success .alert__icon {\n      border-right: 1px solid rgba(43, 70, 8, 0.5); }\n    .alert--success .fa-times {\n      border-left: 1px solid rgba(43, 70, 8, 0.5); }\n      .alert--success .fa-times:hover {\n        color: #1d2f05; }\n  @media all and (max-width: 425px) {\n    .alert {\n      font-size: 14px; }\n      .alert .fa {\n        font-size: 19px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlertType__ = __webpack_require__("../../../../../src/app/components/alert/AlertType.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent() {
        this.message = "";
        this.alertType = __WEBPACK_IMPORTED_MODULE_1__AlertType__["a" /* AlertType */].SUCCESS;
        this.shown = false;
    }
    AlertComponent.prototype.ngOnInit = function () { };
    AlertComponent.prototype.setAlertType = function (alertType) {
        this.alertType = alertType;
        return this;
    };
    AlertComponent.prototype.show = function (message) {
        var _this = this;
        if (this.alertType == null) {
            throw new Error("Nie podałeś typu powiadomienia");
        }
        this.message = message;
        this.shown = true;
        setTimeout(function () {
            _this.hide();
        }, 3000);
    };
    AlertComponent.prototype.hide = function () {
        this.shown = false;
    };
    return AlertComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], AlertComponent.prototype, "message", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__AlertType__["b" /* IAlertType */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__AlertType__["b" /* IAlertType */]) === "function" && _a || Object)
], AlertComponent.prototype, "alertType", void 0);
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/components/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/alert/alert.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<button [type]=\"type\" \n        class=\"button\"\n        [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'button--primary': primary,\n          'button--fluid': fluid,\n          'button--large': large,\n          'button--loading': loading\n        }\">\n  <ng-content></ng-content>\n</button>"

/***/ }),

/***/ "../../../../../src/app/components/button/button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  position: relative;\n  height: 50px;\n  background: #c3c3c3;\n  color: #263238;\n  font-size: 16px;\n  font-weight: 900;\n  border: 0;\n  cursor: pointer;\n  padding: 0 30px; }\n  .button--primary {\n    background: #2196F3;\n    color: #ffffff; }\n    .button--primary:not(.button--loading):hover {\n      background: #39a1f4; }\n    .button--primary.button--loading {\n      background: #6ab8f7; }\n  .button--large {\n    height: 60px; }\n  .button--fluid {\n    width: 100%; }\n  .button--loading {\n    color: transparent;\n    cursor: not-allowed; }\n    .button--loading::after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%) rotate(0deg);\n              transform: translate(-50%, -50%) rotate(0deg);\n      -webkit-transform-origin: 50% 50%;\n              transform-origin: 50% 50%;\n      width: 20px;\n      height: 20px;\n      border-top: 3px solid #2196F3;\n      border-left: 3px solid #2196F3;\n      border-right: 3px solid #2196F3;\n      border-bottom: 3px solid transparent;\n      border-radius: 40px;\n      -webkit-animation: rotate .5s linear infinite;\n              animation: rotate .5s linear infinite; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = (function () {
    function ButtonComponent() {
        this.type = "button";
        this.primary = true;
        this.large = false;
        this.fluid = false;
        this.loading = false;
        this.disabled = false;
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    return ButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "primary", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "large", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "fluid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "loading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "disabled", void 0);
ButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-button',
        template: __webpack_require__("../../../../../src/app/components/button/button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/button/button.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ButtonComponent);

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropdown/DropdownValue.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownValue; });
var DropdownValue = (function () {
    function DropdownValue(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return DropdownValue;
}());

//# sourceMappingURL=DropdownValue.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\"\n     [ngClass]=\"\n     {\n      'dropdown--opened': opened,\n      'dropdown--fluid': fluid,\n      'dropdown--no-border': noBorder\n     }\">\n\n  <div class=\"dropdown__label\" (click)=\"toggle()\">\n    <div class=\"dropdown__value\">{{value?.label}}</div>\n    <div class=\"dropdown__caret\">\n      <div *ngIf=\"!opened\" class=\"fa fa-angle-down\"></div>\n      <div *ngIf=\"opened\" class=\"fa fa-angle-up\"></div>\n    </div>\n  </div>\n  <div class=\"dropdown__options\"\n       [ngClass]=\"{'dropdown__options--up': dropup}\">\n    <div *ngFor=\"let o of options\"\n         class=\"dropdown__option\"\n         (click)=\"select(o)\">{{o.label}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dropdown/dropdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown {\n  position: relative;\n  width: 240px;\n  height: 60px;\n  background: #ffffff;\n  color: #263238;\n  cursor: pointer; }\n  .dropdown__label {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    padding: 0 15px;\n    line-height: 60px;\n    border: 2px solid #c3c3c3; }\n  .dropdown__caret {\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    font-size: 21px; }\n  .dropdown__options {\n    position: absolute;\n    top: 60px;\n    left: 0;\n    right: 0;\n    height: 0;\n    overflow: hidden;\n    z-index: 2; }\n    .dropdown__options--up {\n      top: 0;\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n  .dropdown__option {\n    background: #f2f2f2;\n    position: relative;\n    height: 60px;\n    padding: 0 15px;\n    line-height: 60px; }\n    .dropdown__option:hover {\n      background: #e6e5e5; }\n  .dropdown--opened {\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n    .dropdown--opened .dropdown__label {\n      border-color: #2196F3; }\n    .dropdown--opened .dropdown__options {\n      height: auto;\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n  .dropdown--fluid {\n    width: 100%; }\n  .dropdown--no-border .dropdown__label {\n    border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DropdownValue__ = __webpack_require__("../../../../../src/app/components/dropdown/DropdownValue.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownComponent = DropdownComponent_1 = (function () {
    function DropdownComponent(elRef) {
        this.elRef = elRef;
        this.fluid = false;
        this.noBorder = false;
        this.wrapper = {};
        this.opened = false;
        this.dropup = false;
        this.propagateChange = function (_) { };
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.wrapper = this.elRef.nativeElement;
        this.checkSize({
            target: {
                innerHeight: window.innerHeight
            }
        });
    };
    DropdownComponent.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    DropdownComponent.prototype.select = function (dropValue) {
        this.value = dropValue;
        this.opened = false;
        this.propagateChange(dropValue);
    };
    DropdownComponent.prototype.checkSize = function (evt) {
        var elTop = this.wrapper.getBoundingClientRect().top + window.scrollY;
        var elHeight = this.wrapper.querySelector(".dropdown").offsetHeight;
        var dropdownOptionsLength = this.wrapper.querySelector(".dropdown__options").childNodes.length - 3;
        this.dropup = (elTop + elHeight + (elHeight * dropdownOptionsLength)) > evt.target.innerHeight;
    };
    DropdownComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) { };
    return DropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__DropdownValue__["a" /* DropdownValue */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__DropdownValue__["a" /* DropdownValue */]) === "function" && _a || Object)
], DropdownComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], DropdownComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "fluid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "noBorder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])("window:resize", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropdownComponent.prototype, "checkSize", null);
DropdownComponent = DropdownComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dropdown',
        template: __webpack_require__("../../../../../src/app/components/dropdown/dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dropdown/dropdown.component.scss")],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return DropdownComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _b || Object])
], DropdownComponent);

var DropdownComponent_1, _a, _b;
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"container\">\n    <a [routerLink]=\"['/home']\" class=\"header__brand\">TODO List</a>\n    <button class=\"header__menu__opener\"\n            [ngClass]=\"{\n              'header__menu__opener--opened': menuOpened\n            }\"\n            (click)=\"openMenu()\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </button>\n  \n    <div class=\"header__menu\" \n         [ngClass]=\"{\n           'header__menu--opened': menuOpened\n         }\" \n         #menu>\n      <div class=\"header__menu__item\">\n        <div class=\"fa fa-fw fa-user\"></div>\n        <span>{{username}}</span>\n      </div>\n      <div class=\"header__menu__item header__menu__item--link\" (click)=\"logout()\">\n        <div class=\"fa fa-fw fa-sign-out\"></div>\n        <span>Wyloguj się</span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background: #ffffff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n  z-index: 9; }\n  .header .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .header__brand {\n    position: relative;\n    height: 100%;\n    background: #9ae832;\n    color: #ffffff;\n    padding: 0 20px;\n    font-size: 18px;\n    font-weight: 900;\n    line-height: 60px; }\n  .header__menu {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    transition: -webkit-transform 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83);\n    transition: transform 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83);\n    transition: transform 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83), -webkit-transform 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83); }\n    .header__menu__item {\n      position: relative;\n      height: 60px;\n      line-height: 60px;\n      margin: 0 10px;\n      padding: 0 10px; }\n      .header__menu__item--link {\n        cursor: pointer; }\n        .header__menu__item--link::after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          width: 0;\n          height: 5px;\n          background: #9ae832;\n          transition: 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83); }\n        .header__menu__item--link:hover::after {\n          width: 100%;\n          left: 0; }\n    .header__menu__opener {\n      position: relative;\n      width: 60px;\n      height: 60px;\n      padding: 20px;\n      background: none;\n      border: none;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n      transition: 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83);\n      display: none;\n      cursor: pointer; }\n      .header__menu__opener span {\n        position: relative;\n        background: #263238;\n        width: 100%;\n        height: 3px;\n        display: block;\n        margin: 3px 0;\n        border-radius: 3px;\n        transition: 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83); }\n      .header__menu__opener--opened {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n        .header__menu__opener--opened span:first-child {\n          -webkit-transform: rotate(45deg);\n                  transform: rotate(45deg);\n          top: 6px; }\n        .header__menu__opener--opened span:nth-child(2) {\n          opacity: 0; }\n        .header__menu__opener--opened span:last-child {\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          top: -6px; }\n      @media all and (max-width: 425px) {\n        .header__menu__opener {\n          display: block; } }\n    @media all and (max-width: 425px) {\n      .header__menu {\n        position: absolute;\n        right: 0;\n        top: 100%;\n        background: #ffffff;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: calc(100vh - 60px);\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%); }\n        .header__menu--opened {\n          -webkit-transform: translateX(0);\n                  transform: translateX(0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(_ls) {
        this._ls = _ls;
        this.menuOpened = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem("fullName");
    };
    HeaderComponent.prototype.logout = function () {
        this._ls.logout();
    };
    HeaderComponent.prototype.openMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    HeaderComponent.prototype.closeMenu = function (evt) {
        var className = evt.target.className.split(" ")[0];
        if (className != "header__menu" && className != "header__menu__opener" && this.menuOpened) {
            this.menuOpened = false;
            console.log(this.menuOpened);
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])("window:click", ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "closeMenu", null);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/input/InputErrors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputErrors; });
var InputErrors = (function () {
    function InputErrors() {
        this.errors = null;
        this.submitted = false;
    }
    return InputErrors;
}());

//# sourceMappingURL=InputErrors.js.map

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input\"\n     [ngClass]=\"{\n      'input--iconized': icon != null,\n      'input--invalid': inputErrors?.errors && inputErrors.submitted,\n      'input--active': focused,\n      'input--no-border': noBorder\n     }\">\n\n\n  <div *ngIf=\"icon != null\" class=\"input__wrapper\">\n    <div class=\"fa fa-{{icon}}\"></div>\n    <input [placeholder]=\"label\"\n           [type]=\"inputType\"\n           [disabled]=\"disabled\"\n           [ngModel]=\"value\"\n           [appAutofocus]=\"focused\"\n           (focus)=\"focus()\"\n           (blur)=\"blur()\"\n           (ngModelChange)=\"change($event)\"/>\n  </div>\n\n  <input *ngIf=\"icon == null\"\n         [placeholder]=\"label\"\n         [type]=\"inputType\"\n         [disabled]=\"disabled\"\n         [ngModel]=\"value\"\n         [appAutofocus]=\"focused\"\n         (focus)=\"focus()\"\n         (blur)=\"blur()\"\n         (ngModelChange)=\"change($event)\"/>\n\n  <div class=\"input__validator\" *ngIf=\"icon != null && inputErrors?.errors && inputErrors.submitted\">\n    <div *ngIf=\"inputErrors?.errors['required']\">To pole jest wymagane</div>\n    <div *ngIf=\"inputErrors?.errors['minlength']\">Pole musi zawierać co najmniej {{inputErrors?.errors?.minlength?.requiredLength}} znaków</div>\n    <div *ngIf=\"inputErrors?.errors['number']\">Pole musi być wartością numeryczną</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input {\n  position: relative;\n  width: 100%;\n  min-height: 60px;\n  color: #263238;\n  border: 2px solid #c3c3c3; }\n  .input input {\n    width: 100%;\n    height: 56px;\n    border: 0;\n    padding: 15px;\n    font-size: 16px;\n    background: #ffffff;\n    color: #263238; }\n  .input__wrapper {\n    position: relative;\n    width: 100%;\n    height: 60px;\n    border: 2px solid #c3c3c3;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    transition: 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83); }\n    .input__wrapper .fa {\n      position: relative;\n      height: 100%;\n      width: 60px;\n      text-align: center;\n      line-height: 58px;\n      font-size: 21px;\n      color: #c3c3c3; }\n      .input__wrapper .fa::after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        right: 0;\n        top: 25%;\n        height: 50%;\n        width: 2px;\n        background: #c3c3c3; }\n    .input__wrapper input {\n      width: calc(100% - 60px); }\n      .input__wrapper input::-webkit-input-placeholder {\n        color: #909090; }\n      .input__wrapper input::-moz-placeholder {\n        color: #909090; }\n      .input__wrapper input:-moz-placeholder {\n        color: #909090; }\n      .input__wrapper input:-ms-input-placeholder {\n        color: #909090; }\n  .input__validator {\n    padding: 5px 15px; }\n  .input--iconized {\n    border: 0;\n    margin: 10px 0; }\n  .input--active {\n    border-color: #2196F3; }\n    .input--active.input--iconized .input__wrapper {\n      border-color: #263238; }\n      .input--active.input--iconized .input__wrapper .fa {\n        color: #263238; }\n        .input--active.input--iconized .input__wrapper .fa::after {\n          background: #263238; }\n  .input--invalid .input__wrapper {\n    border-color: #FF5E5B; }\n    .input--invalid .input__wrapper .fa {\n      color: #FF5E5B; }\n      .input--invalid .input__wrapper .fa::after {\n        background: #FF5E5B; }\n  .input--invalid .input__validator {\n    color: #FF5E5B; }\n  .input--no-border {\n    border: none; }\n    .input--no-border input {\n      height: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputErrors__ = __webpack_require__("../../../../../src/app/components/input/InputErrors.ts");
/* unused harmony export INPUT_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var INPUT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return InputComponent; }),
    multi: true
};
var InputComponent = (function () {
    function InputComponent() {
        this.submitted = false;
        this.inputType = "text";
        this.label = "";
        this.inputErrors = new __WEBPACK_IMPORTED_MODULE_2__InputErrors__["a" /* InputErrors */]();
        this.noBorder = false;
        this.value = "";
        this.disabled = false;
        this.focused = false;
        this.onChange = function (_) { };
    }
    InputComponent.prototype.ngOnInit = function () { };
    InputComponent.prototype.change = function (value) {
        this.value = value;
        this.onChange(value);
    };
    InputComponent.prototype.focus = function () {
        this.focused = true;
    };
    InputComponent.prototype.blur = function () {
        this.focused = false;
    };
    InputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    InputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InputComponent.prototype.registerOnTouched = function (fn) { };
    InputComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    return InputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "submitted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], InputComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], InputComponent.prototype, "inputType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], InputComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__InputErrors__["a" /* InputErrors */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__InputErrors__["a" /* InputErrors */]) === "function" && _a || Object)
], InputComponent.prototype, "inputErrors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "noBorder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], InputComponent.prototype, "value", void 0);
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__("../../../../../src/app/components/input/input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/input/input.component.scss")],
        providers: [INPUT_VALUE_ACCESSOR],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].Default
    })
], InputComponent);

var _a;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\"\n     [ngClass]=\"{'modal--shown': shown}\">\n\n  <div class=\"modal__box\">\n    <div class=\"modal__header\">\n      <div class=\"modal__header__title\">{{title}}</div>\n      <div class=\"modal__header__close-btn\" (click)=\"hide()\">\n        <div class=\"fa fa-times\"></div>\n      </div>\n    </div>\n    <div *ngIf=\"content != null\" class=\"modal__content\" [innerHtml]=\"content | safeStyle\"></div>\n    <div *ngIf=\"content == null\" class=\"modal__content\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"modal__actions\">\n      <app-button [fluid]=\"true\" \n                  [large]=\"true\"\n                  (click)=\"approve()\">OK</app-button>\n                  \n      <app-button [primary]=\"false\" \n                  [fluid]=\"true\" \n                  [large]=\"true\" \n                  (click)=\"deny()\">Anuluj</app-button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9;\n  display: none;\n  background: rgba(38, 50, 56, 0.7);\n  color: #263238;\n  overflow: auto; }\n  .modal__box {\n    position: relative;\n    width: 425px;\n    margin: 70px auto;\n    background: #ffffff;\n    -webkit-transform: translateY(-200%);\n            transform: translateY(-200%);\n    transition: 0.4s cubic-bezier(0.16, 0.53, 0.38, 0.83); }\n    @media all and (max-width: 425px) {\n      .modal__box {\n        width: 100%; } }\n  .modal__header {\n    position: relative;\n    width: 100%; }\n  .modal__content {\n    position: relative;\n    width: 100%; }\n  .modal__actions {\n    position: relative;\n    width: 100%; }\n  .modal__header {\n    min-height: 70px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid rgba(195, 195, 195, 0.5); }\n    .modal__header__title {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      padding: 0 20px;\n      line-height: 70px;\n      font-size: 21px;\n      font-weight: 700; }\n    .modal__header__close-btn {\n      position: relative;\n      width: 70px;\n      height: 100%;\n      line-height: 70px;\n      font-size: 21px;\n      text-align: center;\n      cursor: pointer; }\n      .modal__header__close-btn:hover {\n        color: #FF5E5B; }\n  .modal__content {\n    padding: 20px; }\n    .modal__content table {\n      font-size: 16px; }\n      .modal__content table td {\n        border: 1px solid #c3c3c3;\n        padding: 15px; }\n        .modal__content table td.compact {\n          padding: 0; }\n        .modal__content table td:first-child {\n          font-weight: 900; }\n  .modal__actions {\n    border-top: 1px solid rgba(195, 195, 195, 0.5);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .modal__actions app-button {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto; }\n  .modal--shown {\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent(el) {
        this.el = el;
        this.body = {};
        this.modalBox = {};
        this.shown = false;
        this.title = "";
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onApprove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onDeny = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.body = document.querySelector("body");
        this.modalBox = this.el.nativeElement.querySelector(".modal__box");
    };
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.body.classList.add("modal--shown");
        setTimeout(function () {
            _this.modalBox.style.transform = "translateY(0)";
        }, 10);
        this.shown = true;
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.modalBox.style.transform = "translateY(-200%)";
        setTimeout(function () {
            _this.body.classList.remove("modal--shown");
            _this.shown = false;
            _this.onClose.emit(true);
        }, 200);
    };
    ModalComponent.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    ModalComponent.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    ModalComponent.prototype.approved = function (callback) {
        callback();
    };
    ModalComponent.prototype.denied = function (callback) {
        callback();
        this.deny();
        return this;
    };
    ModalComponent.prototype.approve = function () {
        this.onApprove.emit(true);
        this.hide();
    };
    ModalComponent.prototype.deny = function () {
        this.onDeny.emit(true);
        this.hide();
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], ModalComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], ModalComponent.prototype, "onApprove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _c || Object)
], ModalComponent.prototype, "onDeny", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'modal',
        template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal/modal.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _d || Object])
], ModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/switch/switch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"switch\" [ngClass]=\"{'switch--enabled': value}\" (click)=\"toggle()\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/switch/switch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch {\n  position: relative;\n  width: 40px;\n  height: 20px;\n  background: #c3c3c3;\n  border-radius: 20px;\n  cursor: pointer; }\n  .switch::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    width: 14px;\n    height: 14px;\n    background: #ffffff;\n    border-radius: 20px;\n    transition: 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83); }\n  .switch--enabled {\n    background: #9ae832; }\n    .switch--enabled::after {\n      left: 23px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/switch/switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* unused harmony export SWITCH_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SWITCH_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return SwitchComponent; }),
    multi: true
};
var SwitchComponent = (function () {
    function SwitchComponent() {
        this.disabled = false;
        this.propagateChange = function (_) { };
    }
    SwitchComponent.prototype.ngOnInit = function () { };
    SwitchComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    SwitchComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SwitchComponent.prototype.registerOnTouched = function (fn) { };
    SwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SwitchComponent.prototype.toggle = function () {
        this.value = !this.value;
        this.propagateChange(this.value);
    };
    return SwitchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], SwitchComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], SwitchComponent.prototype, "disabled", void 0);
SwitchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-switch',
        template: __webpack_require__("../../../../../src/app/components/switch/switch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/switch/switch.component.scss")],
        providers: [SWITCH_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], SwitchComponent);

//# sourceMappingURL=switch.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todo-list/TodoList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoList; });
var TodoList = (function () {
    function TodoList(values) {
        if (values === void 0) { values = {}; }
        this.todos = [];
        this.processing = false;
        Object.assign(this, values);
    }
    return TodoList;
}());

//# sourceMappingURL=TodoList.js.map

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-list\"\n     [ngClass]=\"\n     {\n      'todo-list--loading': todoList?.processing\n     }\">\n\n  <div class=\"todo-list__header\">\n    <div class=\"todo-list__header__title\">\n      <h2>\n        <a [routerLink]=\"['/todolist', todoList?.id]\">{{todoList?.name}}</a>\n      </h2>\n    </div>\n\n    <div class=\"todo-list__options\">\n      <div class=\"todo-list__button todo-list__button--edit\" (click)=\"edit()\">\n        <div class=\"fa fa-pencil\"></div>\n      </div>\n      <div class=\"todo-list__button todo-list__button--close\" (click)=\"delete()\">\n        <div class=\"fa fa-trash-o\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"todo-list__meta\">\n    <div class=\"todo-list__meta__item\">\n      <div class=\"fa fa-fw fa-calendar-o\"></div>\n      <span>{{todoList?.createdDate}}</span>\n    </div>\n    <div class=\"todo-list__meta__item\">\n      <div class=\"fa fa-fw fa-list-ul\"></div>\n      <span>{{todoList?.todos.length}}</span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.modal--shown {\n  overflow: hidden;\n  max-height: 100vh; }\n\n.loading, .todo-list--loading {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .loading::before, .todo-list--loading::before, .loading::after, .todo-list--loading::after {\n    content: \"\";\n    position: absolute;\n    display: block; }\n  .loading::before, .todo-list--loading::before {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.5);\n    z-index: 1; }\n  .loading::after, .todo-list--loading::after {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    border-top: 3px solid #263238;\n    border-left: 3px solid #263238;\n    border-right: 3px solid #263238;\n    border-bottom: 3px solid transparent;\n    border-radius: 40px;\n    -webkit-animation: rotate .5s linear infinite;\n            animation: rotate .5s linear infinite;\n    z-index: 2; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n.todo-list {\n  position: relative;\n  height: 100%;\n  background: #ffffff;\n  color: #263238;\n  box-shadow: none;\n  display: block;\n  transition: box-shadow 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83);\n  overflow: hidden; }\n  .todo-list:not(.todo-list--loading):hover {\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n    .todo-list:not(.todo-list--loading):hover .todo-list__button {\n      top: 0;\n      opacity: 1; }\n  .todo-list__header {\n    position: relative;\n    width: 100%;\n    min-height: 80px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .todo-list__header__title {\n      position: relative;\n      padding: 25px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .todo-list__header__title h2 {\n        position: relative; }\n        .todo-list__header__title h2 a {\n          color: inherit; }\n  .todo-list__options {\n    position: relative;\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 25px; }\n  .todo-list__button {\n    position: relative;\n    top: -40px;\n    width: 40px;\n    height: 100%;\n    font-size: 21px;\n    cursor: pointer;\n    text-align: center;\n    line-height: 40px;\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83), top 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83); }\n    .todo-list__button--edit:hover {\n      color: #2196F3; }\n    .todo-list__button--close {\n      transition-delay: .05s; }\n      .todo-list__button--close:hover {\n        color: #FF5E5B; }\n  .todo-list__meta {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    padding: 25px; }\n    .todo-list__meta__item {\n      display: inline-block;\n      margin-right: 10px;\n      font-size: 14px;\n      color: #c3c3c3; }\n      .todo-list__meta__item:last-child {\n        margin-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TodoList__ = __webpack_require__("../../../../../src/app/components/todo-list/TodoList.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = (function () {
    function TodoListComponent() {
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TodoListComponent.prototype.ngOnInit = function () { };
    TodoListComponent.prototype.edit = function () {
        this.onEdit.emit(this.todoList);
    };
    TodoListComponent.prototype.delete = function () {
        this.onDelete.emit(this.todoList);
    };
    return TodoListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__TodoList__["a" /* TodoList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__TodoList__["a" /* TodoList */]) === "function" && _a || Object)
], TodoListComponent.prototype, "todoList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], TodoListComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _c || Object)
], TodoListComponent.prototype, "onDelete", void 0);
TodoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'todo-list',
        template: __webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/todo-list/todo-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TodoListComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/todo/Todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.processing = false;
        Object.assign(this, values);
    }
    return Todo;
}());

//# sourceMappingURL=Todo.js.map

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todo\"\n     [ngClass]=\"\n     {\n      'todo--loading': todo?.processing\n     }\">\n\n  <h3 class=\"todo__content\">{{todo?.content}}</h3>\n\n  <div class=\"todo__options\">\n    <div class=\"todo__priority todo__priority--{{todo?.priority?.value | lowercase}}\">{{todo?.priority?.label}}</div>\n\n    <div class=\"todo__buttons\">\n      <div class=\"todo__button todo__button__edit\" (click)=\"edit()\">\n        <div class=\"fa fa-fw fa-pencil\"></div>\n      </div>\n      <div class=\"todo__button todo__button__info\" (click)=\"info()\">\n        <div class=\"fa fa-fw fa-info\"></div>\n      </div>\n      <div class=\"todo__button\"\n           [ngClass]=\"{\n          'todo__button__complete': !todo?.completed,\n          'todo__button__danger': todo?.completed\n         }\"\n           (click)=\"complete()\">\n\n        <div class=\"fa fa-fw\"\n             [ngClass]=\"{\n            'fa-check': !todo?.completed,\n            'fa-times': todo?.completed\n           }\"></div>\n      </div>\n      <div class=\"todo__button todo__button__danger\" (click)=\"delete()\">\n        <div class=\"fa fa-fw fa-trash-o\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.modal--shown {\n  overflow: hidden;\n  max-height: 100vh; }\n\n.loading, .todo--loading {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .loading::before, .todo--loading::before, .loading::after, .todo--loading::after {\n    content: \"\";\n    position: absolute;\n    display: block; }\n  .loading::before, .todo--loading::before {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.5);\n    z-index: 1; }\n  .loading::after, .todo--loading::after {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    border-top: 3px solid #263238;\n    border-left: 3px solid #263238;\n    border-right: 3px solid #263238;\n    border-bottom: 3px solid transparent;\n    border-radius: 40px;\n    -webkit-animation: rotate .5s linear infinite;\n            animation: rotate .5s linear infinite;\n    z-index: 2; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n.todo {\n  position: relative;\n  width: 100%;\n  height: 60px;\n  background: #ffffff;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden; }\n  .todo__content {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    line-height: 60px;\n    padding: 0 20px;\n    font-size: 21px;\n    white-space: nowrap; }\n    .todo__content::after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      width: 120px;\n      background: linear-gradient(to right, transparent, #ffffff); }\n  .todo__options {\n    position: relative;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .todo__priority {\n    position: relative;\n    padding: 0 20px;\n    line-height: 60px;\n    font-style: oblique;\n    font-weight: 900;\n    color: #ffffff; }\n    .todo__priority--low {\n      background: #9ae832; }\n    .todo__priority--medium {\n      background: #FED766; }\n    .todo__priority--high {\n      background: #FF5E5B; }\n  .todo__buttons {\n    position: relative;\n    width: 240px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .todo__button {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    display: inline-block;\n    line-height: 60px;\n    text-align: center;\n    cursor: pointer;\n    font-size: 21px; }\n    .todo__button:not(:last-child)::after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      right: 0;\n      top: 25%;\n      width: 2px;\n      height: 50%;\n      background: #c3c3c3; }\n    .todo__button__edit:hover {\n      color: #2196F3; }\n    .todo__button__info:hover {\n      color: #2196F3; }\n    .todo__button__complete:hover {\n      color: #9ae832; }\n    .todo__button__danger:hover {\n      color: #FF5E5B; }\n  @media all and (max-width: 768px) {\n    .todo {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      height: 120px; }\n      .todo__buttons {\n        width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Todo__ = __webpack_require__("../../../../../src/app/components/todo/Todo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent() {
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onInfo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TodoComponent.prototype.ngOnInit = function () { };
    TodoComponent.prototype.edit = function () {
        this.onEdit.emit(this.todo);
    };
    TodoComponent.prototype.info = function () {
        this.onInfo.emit(this.todo);
    };
    TodoComponent.prototype.complete = function () {
        this.onComplete.emit(this.todo);
    };
    TodoComponent.prototype.delete = function () {
        this.onDelete.emit(this.todo);
    };
    return TodoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Todo__["a" /* Todo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Todo__["a" /* Todo */]) === "function" && _a || Object)
], TodoComponent.prototype, "todo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], TodoComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _c || Object)
], TodoComponent.prototype, "onInfo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _d || Object)
], TodoComponent.prototype, "onComplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _e || Object)
], TodoComponent.prototype, "onDelete", void 0);
TodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'todo',
        template: __webpack_require__("../../../../../src/app/components/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/todo/todo.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/autofocus/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective(el) {
        this.el = el;
        this.appAutofocus = false;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        if (this.appAutofocus)
            this.el.nativeElement.focus();
    };
    return AutofocusDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], AutofocusDirective.prototype, "appAutofocus", void 0);
AutofocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Directive */])({
        selector: '[appAutofocus]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object])
], AutofocusDirective);

var _a;
//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        this.todoLists = [];
        Object.assign(this, values);
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container content__container\">\n  <div class=\"content__container__form\">\n    <form [formGroup]=\"addTodoListForm\" (ngSubmit)=\"addTodoList()\">\n      <app-input formControlName=\"name\"></app-input>\n      <app-button type=\"submit\" [loading]=\"!valid\" [disabled]=\"!valid\" [large]=\"true\" [fluid]=\"true\">Dodaj listę</app-button>\n    </form>\n  </div>\n\n\n\n\n  <h1 *ngIf=\"err != null\">{{err}}</h1>\n\n\n\n  <h1 class=\"centered\" *ngIf=\"user?.todoLists.length == 0\">\n    W tej chwili nie masz żadnych list.\n  </h1>\n\n\n\n  <div *ngIf=\"user?.todoLists.length > 0\"\n       class=\"content__container__grid\">\n    <todo-list *ngFor=\"let t of user?.todoLists\"\n               [todoList]=\"t\"\n               (onEdit)=\"openEditTodoListModal($event)\"\n               (onDelete)=\"removeTodoList(t.id)\"></todo-list>\n  </div>\n\n\n  <modal title=\"Edytuj obiekt\" (onApprove)=\"saveTodoList()\" #editTodoListModal>\n    <form [formGroup]=\"editTodoListForm\">\n      <table>\n        <tr>\n          <td>Nazwa listy</td>\n          <td class=\"compact\">\n            <input type=\"hidden\" formControlName=\"id\" />\n            <app-input [noBorder]=\"true\" formControlName=\"name\"></app-input>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </modal>\n\n\n\n</div>\n\n\n<app-alert #alert></app-alert>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content__container__grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 250px;\n  grid-gap: 20px; }\n  @media all and (max-width: 768px) {\n    .content__container__grid {\n      -ms-grid-columns: (1fr)[2];\n          grid-template-columns: repeat(2, 1fr); } }\n  @media all and (max-width: 425px) {\n    .content__container__grid {\n      -ms-grid-columns: (1fr)[1];\n          grid-template-columns: repeat(1, 1fr); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_home_service__ = __webpack_require__("../../../../../src/app/services/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__ = __webpack_require__("../../../../../src/app/components/alert/AlertType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    // -----------------------------------------------------------------------------------------
    function HomeComponent(homeService, title) {
        var _this = this;
        this.homeService = homeService;
        this.title = title;
        this.valid = true;
        this.homeService.getUserData()
            .subscribe(function (res) { return _this.user = res; }, function (err) { return _this.err = err; });
    }
    // -----------------------------------------------------------------------------------------
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle("TODO List - Strona główna");
        this.addTodoListForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required)
        });
        this.editTodoListForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](''),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]('')
        });
    };
    // -----------------------------------------------------------------------------------------
    HomeComponent.prototype.addTodoList = function () {
        var _this = this;
        this.err = null;
        if (!this.addTodoListForm.valid) {
            this.alert.setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].WARMING).show("Musisz wprowadzić nazwę listy");
        }
        else {
            this.valid = false;
            this.addTodoListForm.controls["name"].disable();
            this.homeService.addTodoList(this.addTodoListForm.value)
                .finally(function () {
                _this.valid = true;
                _this.addTodoListForm.controls["name"].enable();
                _this.addTodoListForm.reset();
            })
                .subscribe(function (res) {
                _this.user.todoLists.unshift(res);
                _this.alert.setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].SUCCESS).show("Lista została dodana pomyślnie");
            }, function (err) { return _this.handleError(err); });
        }
    };
    // -----------------------------------------------------------------------------------------
    HomeComponent.prototype.openEditTodoListModal = function (todoList) {
        this.editTodoList = todoList;
        this.editTodoListForm.controls["id"].setValue(todoList.id);
        this.editTodoListForm.controls["name"].setValue(todoList.name);
        this.editTodoListModal.show();
    };
    // -----------------------------------------------------------------------------------------
    HomeComponent.prototype.saveTodoList = function () {
        var _this = this;
        this.err = null;
        this.editTodoList.processing = true;
        this.homeService.editTodoList(this.editTodoListForm.value)
            .finally(function () { return _this.editTodoList.processing = false; })
            .subscribe(function (res) {
            var todoList = _this.user.todoLists.find(function (tl) { return tl.id == res.id; });
            todoList.name = res.name;
            _this.alert.setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].SUCCESS).show("Lista została zaktualizowana pomyślnie");
        }, function (err) { return _this.handleError(err); });
    };
    // -----------------------------------------------------------------------------------------
    HomeComponent.prototype.removeTodoList = function (todoListID) {
        var _this = this;
        this.err = null;
        this.homeService.removeTodoList(todoListID)
            .subscribe(function (res) {
            var todoList = _this.user.todoLists.find(function (tl) { return tl.id == todoListID; });
            _this.user.todoLists.splice(_this.user.todoLists.indexOf(todoList), 1);
            _this.alert.setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].SUCCESS).show(res.state);
        }, function (err) { return _this.handleError(err); });
    };
    HomeComponent.prototype.handleError = function (err) {
        this.alert.setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].WARMING).show(err.message);
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("alert"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_alert_alert_component__["a" /* AlertComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_alert_alert_component__["a" /* AlertComponent */]) === "function" && _a || Object)
], HomeComponent.prototype, "alert", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("editTodoListModal"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__components_modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__components_modal_modal_component__["a" /* ModalComponent */]) === "function" && _b || Object)
], HomeComponent.prototype, "editTodoListModal", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/home-page.scss"), __webpack_require__("../../../../../src/app/pages/home/home.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_home_home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_home_service__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["e" /* Title */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\" [ngClass]=\"{'form--loading': !valid}\">\n  <h1 class=\"form__title\">Zaloguj się</h1>\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n    <div class=\"form__content\">\n      <app-input formControlName=\"username\"\n               icon=\"user\"\n               [inputErrors]=\"{\n                 errors: loginForm?.controls['username']?.errors,\n                 submitted: submitted\n               }\"\n               label=\"Nazwa użytkownika...\" #username></app-input>\n\n      <app-input formControlName=\"password\"\n                inputType=\"password\"\n                icon=\"lock\"\n                [inputErrors]=\"{\n                  errors: loginForm?.controls['password']?.errors,\n                  submitted: submitted\n                }\"\n                label=\"Hasło...\"></app-input>\n    </div>\n\n    <app-button type=\"submit\" [fluid]=\"true\">Zaloguj się</app-button>\n  </form>\n\n  <hr />\n\n  <p>Jeśli nie posiadasz konta, <a [routerLink]=\"['/register']\">Zarejestruj się</a></p>\n</div>\n\n<app-alert #alert></app-alert>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.modal--shown {\n  overflow: hidden;\n  max-height: 100vh; }\n\n.loading, .form--loading {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .loading::before, .form--loading::before, .loading::after, .form--loading::after {\n    content: \"\";\n    position: absolute;\n    display: block; }\n  .loading::before, .form--loading::before {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.5);\n    z-index: 1; }\n  .loading::after, .form--loading::after {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    border-top: 3px solid #263238;\n    border-left: 3px solid #263238;\n    border-right: 3px solid #263238;\n    border-bottom: 3px solid transparent;\n    border-radius: 40px;\n    -webkit-animation: rotate .5s linear infinite;\n            animation: rotate .5s linear infinite;\n    z-index: 2; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n.form, .login-form {\n  position: relative;\n  width: 425px;\n  margin: 40px auto;\n  padding: 40px;\n  background: #ffffff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); }\n  .form__title {\n    position: relative;\n    font-size: 48px;\n    text-align: center;\n    color: #263238; }\n  .form__content {\n    position: relative;\n    width: 100%;\n    margin: 25px 0; }\n  .form hr, .login-form hr {\n    border: 1px solid #c3c3c3;\n    margin: 25px 0; }\n  .form p, .login-form p {\n    text-align: center; }\n    .form p a, .login-form p a {\n      color: #2196F3; }\n  @media all and (max-width: 425px) {\n    .form, .login-form {\n      width: 100%;\n      height: 100vh;\n      margin: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_input_input_component__ = __webpack_require__("../../../../../src/app/components/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alert_AlertType__ = __webpack_require__("../../../../../src/app/components/alert/AlertType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(loginService, router, title, fb) {
        this.loginService = loginService;
        this.router = router;
        this.title = title;
        this.fb = fb;
        this.submitted = false;
        this.valid = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.title.setTitle("TODO List - Zaloguj się");
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        this.username.focus();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.valid) {
            this.valid = false;
            this.loginService.login(this.loginForm.value)
                .then(function (res) {
                _this.router.navigate(["/home"]);
                _this.valid = false;
            })
                .catch(function (err) {
                _this.alert
                    .setAlertType(__WEBPACK_IMPORTED_MODULE_5__components_alert_AlertType__["a" /* AlertType */].WARMING)
                    .show("Nazwa użytkownika lub hasło jest nieprawidłowe");
                _this.loginForm.reset();
                _this.valid = true;
            });
        }
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])("alert"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__components_alert_alert_component__["a" /* AlertComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_alert_alert_component__["a" /* AlertComponent */]) === "function" && _a || Object)
], LoginComponent.prototype, "alert", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])("username"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__components_input_input_component__["a" /* InputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__components_input_input_component__["a" /* InputComponent */]) === "function" && _b || Object)
], LoginComponent.prototype, "username", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_login_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_login_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* Title */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-form\" [ngClass]=\"{'form--loading': !valid}\">\n  <h1 class=\"form__title\">Zarejestruj się</h1>\n\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n    \n    <div class=\"form__content\">\n      <app-input formControlName=\"username\"\n               icon=\"user\"\n               [inputErrors]=\"{\n                 errors: registerForm.controls['username']?.errors,\n                 submitted: submitted\n               }\"\n               label=\"Nazwa użytkownika...\" #username></app-input>\n\n      <app-input formControlName=\"password\"\n                inputType=\"password\"\n                icon=\"lock\"\n                [inputErrors]=\"{\n                  errors: registerForm.controls['password']?.errors,\n                  submitted: submitted\n                }\"\n                label=\"Hasło...\"></app-input>\n\n      <hr />\n\n      <app-input formControlName=\"firstName\"\n                icon=\"pencil\"\n                [inputErrors]=\"{\n                    errors: registerForm.controls['firstName']?.errors,\n                    submitted: submitted\n                  }\"\n                label=\"Imię...\"></app-input>\n\n      <app-input formControlName=\"lastName\"\n                icon=\"pencil\"\n                [inputErrors]=\"{\n                    errors: registerForm.controls['lastName']?.errors,\n                    submitted: submitted\n                  }\"\n                label=\"Nazwisko...\"></app-input>\n\n      <app-input formControlName=\"email\"\n                icon=\"envelope-o\"\n                [inputErrors]=\"{\n                    errors: registerForm.controls['email']?.errors,\n                    submitted: submitted\n                  }\"\n                label=\"Adres email...\"></app-input>\n    </div>\n\n    <app-button type=\"submit\" [fluid]=\"true\">Zarejestruj się</app-button>\n  </form>\n\n</div>\n\n<app-alert #alert></app-alert>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.modal--shown {\n  overflow: hidden;\n  max-height: 100vh; }\n\n.loading, .form--loading {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .loading::before, .form--loading::before, .loading::after, .form--loading::after {\n    content: \"\";\n    position: absolute;\n    display: block; }\n  .loading::before, .form--loading::before {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.5);\n    z-index: 1; }\n  .loading::after, .form--loading::after {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    border-top: 3px solid #263238;\n    border-left: 3px solid #263238;\n    border-right: 3px solid #263238;\n    border-bottom: 3px solid transparent;\n    border-radius: 40px;\n    -webkit-animation: rotate .5s linear infinite;\n            animation: rotate .5s linear infinite;\n    z-index: 2; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  to {\n    -webkit-transform: translate(-50%, -50%) rotate(360deg);\n            transform: translate(-50%, -50%) rotate(360deg); } }\n\n.form, .register-form {\n  position: relative;\n  width: 425px;\n  margin: 40px auto;\n  padding: 40px;\n  background: #ffffff;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); }\n  .form__title {\n    position: relative;\n    font-size: 48px;\n    text-align: center;\n    color: #263238; }\n  .form__content {\n    position: relative;\n    width: 100%;\n    margin: 25px 0; }\n  .form hr, .register-form hr {\n    border: 1px solid #c3c3c3;\n    margin: 25px 0; }\n  .form p, .register-form p {\n    text-align: center; }\n    .form p a, .register-form p a {\n      color: #2196F3; }\n  @media all and (max-width: 425px) {\n    .form, .register-form {\n      width: 100%;\n      height: 100vh;\n      margin: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_alert_AlertType__ = __webpack_require__("../../../../../src/app/components/alert/AlertType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_input_input_component__ = __webpack_require__("../../../../../src/app/components/input/input.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    // -----------------------------------------------------------------------------------
    function RegisterComponent(loginService, router, fb) {
        this.loginService = loginService;
        this.router = router;
        this.fb = fb;
        this.submitted = false;
        this.valid = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(7)])],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.username.focus();
    };
    // -----------------------------------------------------------------------------------
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.valid) {
            this.valid = false;
            this.loginService.register(this.registerForm.value)
                .then(function (res) {
                if (res.status == 201) {
                    _this.alert
                        .setAlertType(__WEBPACK_IMPORTED_MODULE_3__components_alert_AlertType__["a" /* AlertType */].SUCCESS)
                        .show("Rejestracja zakończyła się pomyślnie. Możesz się teraz zalogować");
                    setTimeout(function () { return _this.router.navigate(['/login']); }, 3000);
                }
                else {
                    _this.submitted = false;
                    _this.valid = true;
                    _this.registerForm.reset();
                    _this.alert
                        .setAlertType(__WEBPACK_IMPORTED_MODULE_3__components_alert_AlertType__["a" /* AlertType */].WARMING)
                        .show(res.content);
                }
            });
        }
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("alert"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__components_alert_alert_component__["a" /* AlertComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_alert_alert_component__["a" /* AlertComponent */]) === "function" && _a || Object)
], RegisterComponent.prototype, "alert", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("username"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__components_input_input_component__["a" /* InputComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_input_input_component__["a" /* InputComponent */]) === "function" && _b || Object)
], RegisterComponent.prototype, "username", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__["a" /* LoginService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_login_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/todo-list-page/todo-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div *ngIf=\"err == null\">\n\n  <div class=\"container content__container\">\n\n    <div class=\"todo-list-details\">\n      <h2>{{todoList?.name}}</h2>\n      <div class=\"todo-list-details__data\">\n        <div class=\"todo-list-details__data__item\">\n          <div class=\"fa fa-fw fa-calendar-o\"></div>\n          <span>{{todoList?.createdDate}}</span>\n        </div>\n        <div class=\"todo-list-details__data__item\">\n          <div class=\"fa fa-fw fa-list-ul\"></div>\n          <span>{{todoList?.todos.length}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content__container__form\">\n      <form [formGroup]=\"addTodoForm\" (ngSubmit)=\"addTodo()\">\n        <app-input formControlName=\"content\"></app-input>\n        <app-button type=\"submit\" [loading]=\"!valid\" [disabled]=\"!valid\" [large]=\"true\" [fluid]=\"true\">Dodaj</app-button>\n      </form>\n    </div>\n\n    <h1 class=\"centered\" *ngIf=\"todoList?.todos.length == 0\">W tej chwili nie masz żadnych elementów</h1>\n\n    <div *ngIf=\"todoList?.todos.length > 0\" class=\"content__container__list\">\n\n      <todo *ngFor=\"let todo of todoList?.todos\"\n            [todo]=\"todo\"\n            (onEdit)=\"openEditModal($event)\"\n            (onInfo)=\"info($event)\"\n            (onComplete)=\"completeTodo($event)\"\n            (onDelete)=\"removeTodo($event)\"></todo>\n    </div>\n\n\n    <modal title=\"Informacje\" #infoModal>\n      <table>\n        <tr>\n            <td>Treść</td>\n            <td>{{editedTodo?.content}}</td>\n        </tr>\n        <tr>\n            <td>Data utworzenia</td>\n            <td>{{editedTodo?.createdDate}}</td>\n        </tr>\n        <tr>\n            <td>Priorytet</td>\n            <td>{{editedTodo?.priority?.label}}</td>\n        </tr>\n        <tr>\n            <td>Zakończono</td>\n            <td>{{editedTodo?.completed ? \"Tak\" : \"Nie\"}}</td>\n        </tr>\n      </table>\n    </modal>\n    <modal title=\"Edytuj obiekt\" (onApprove)=\"editTodo()\" #editModal>\n      <form [formGroup]=\"editTodoForm\">\n        <input type=\"hidden\" formControlName=\"id\" [value]=\"editedTodo?.id\" />\n        <table>\n          <tr>\n            <td>Treść</td>\n            <td class=\"compact\">\n              <app-input formControlName=\"content\" \n                         [value]=\"editedTodo?.content\" \n                         [noBorder]=\"true\"></app-input>\n            </td>\n          </tr>\n          <tr>\n            <td>Priorytet</td>\n            <td class=\"compact\">\n              <app-dropdown formControlName=\"priority\"\n                            [fluid]=\"true\"\n                            [options]=\"priorities\"\n                            [value]=\"editedTodo?.priority\"\n                            [noBorder]=\"true\"></app-dropdown>\n            </td>\n          </tr>\n          <tr>\n            <td>Czy zakończony?</td>\n            <td>\n              <app-switch formControlName=\"completed\" [value]=\"editedTodo?.completed\"></app-switch>\n            </td>\n          </tr>\n        </table>\n      </form>\n    </modal>\n  </div>\n\n  <!-- <div class=\"controls\">\n    <a class=\"control control__prev\" *ngIf=\"todoList?.prev != null\" [routerLink]=\"['/todoList', todoList?.prev?.id]\">\n      <div class=\"control__button\">\n        <div class=\"fa fa-angle-left\"></div>\n      </div>\n      <div class=\"control__label\">\n        <span>{{todoList?.prev?.name}}</span>\n      </div>\n    </a>\n    <a class=\"control control__next\" *ngIf=\"todoList?.next != null\" [routerLink]=\"['/todoList', todoList?.next?.id]\">\n      <div class=\"control__button\">\n        <div class=\"fa fa-angle-right\"></div>\n      </div>\n      <div class=\"control__label\">\n        <span>{{todoList?.next?.name}}</span>\n      </div>\n    </a>\n  </div> -->\n\n  <app-alert #alert></app-alert>\n</div>\n\n\n\n<div *ngIf=\"err != null\" class=\"container content__container content__container--error\">\n  <h1>Błąd {{err.status}}</h1>\n  <p>{{err.message}}</p>\n  <a [routerLink]=\"['/home']\">Strona główna</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/todo-list-page/todo-list-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controls .control {\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border: 0;\n  background: #ffffff;\n  color: #263238;\n  font-size: 21px;\n  width: 70px;\n  height: 70px;\n  border-radius: 140px;\n  cursor: pointer;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83), border-radius 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83), width 0.2s cubic-bezier(0.16, 0.53, 0.38, 0.83);\n  overflow: hidden; }\n  .controls .control__prev {\n    left: 20px; }\n    .controls .control__prev .control__button {\n      left: 0; }\n    .controls .control__prev .control__label {\n      left: 70px; }\n  .controls .control__next {\n    right: 20px; }\n    .controls .control__next .control__button {\n      right: 0; }\n    .controls .control__next .control__label {\n      right: 70px;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  .controls .control__button {\n    position: absolute;\n    top: 0;\n    width: 70px;\n    height: 70px;\n    display: inline-block;\n    text-align: center;\n    line-height: 70px;\n    font-size: 21px; }\n  .controls .control__label {\n    position: absolute;\n    top: 0;\n    height: 70px;\n    width: 160px;\n    font-size: 16px;\n    font-weight: 900;\n    padding: 0 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .controls .control:hover {\n    width: 230px;\n    border-radius: 0;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }\n  @media all and (max-width: 1024px) {\n    .controls .control {\n      top: 100%;\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%);\n      border-radius: 0;\n      width: 50%;\n      box-shadow: none; }\n      .controls .control:hover {\n        width: 50%; }\n      .controls .control__prev {\n        left: 0; }\n      .controls .control__next {\n        right: 0; } }\n\n.todo-list-details {\n  position: relative;\n  width: 100%;\n  background: #ffffff;\n  margin-bottom: 30px;\n  padding: 20px; }\n  .todo-list-details h2 {\n    font-size: 32px; }\n  .todo-list-details__data {\n    position: relative;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 20px; }\n    .todo-list-details__data__item {\n      position: relative;\n      color: #c3c3c3;\n      margin-right: 15px; }\n      .todo-list-details__data__item:last-child {\n        margin-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/todo-list-page/todo-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__ = __webpack_require__("../../../../../src/app/components/alert/AlertType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_home_home_service__ = __webpack_require__("../../../../../src/app/services/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_todo_list_todo_list_service__ = __webpack_require__("../../../../../src/app/services/todo-list/todo-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TodoListPageComponent = (function () {
    // -----------------------------------------------------------------------------------------
    function TodoListPageComponent(todoListService, route, title, fb) {
        this.todoListService = todoListService;
        this.route = route;
        this.title = title;
        this.fb = fb;
        this.valid = true;
    }
    // -----------------------------------------------------------------------------------------
    TodoListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (r) {
            _this.todoListService.getTodoList(r.id)
                .subscribe(function (res) {
                _this.todoList = res;
                _this.title.setTitle("TODO List - " + res.name);
            }, function (err) { return _this.err = err; });
        });
        this.todoListService.getPriorities()
            .subscribe(function (res) { return _this.priorities = res; }, function (err) { return _this.err = err; });
        this.addTodoForm = this.fb.group({
            content: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.editTodoForm = this.fb.group({
            id: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            content: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            priority: {},
            completed: false
        });
    };
    // -----------------------------------------------------------------------------------------
    TodoListPageComponent.prototype.addTodo = function () {
        var _this = this;
        if (this.addTodoForm.valid) {
            this.valid = false;
            this.addTodoForm.controls["content"].disable();
            this.todoListService.addTodo(this.todoList.id, this.addTodoForm.value)
                .subscribe(function (res) {
                _this.todoList.todos.unshift(res);
                _this.valid = true;
                _this.addTodoForm.reset();
                _this.addTodoForm.controls["content"].enable();
                _this.alert
                    .setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].SUCCESS)
                    .show("Element Todo został dodany pomyślnie");
            }, function (err) { return _this.handleError(err); });
        }
        else {
            this.alert
                .setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].WARMING)
                .show("Musisz wprowadzić treść zdania");
        }
    };
    // -----------------------------------------------------------------------------------------
    TodoListPageComponent.prototype.openEditModal = function (todo) {
        this.editedTodo = todo;
        this.editTodoForm.setValue({
            id: todo.id,
            content: todo.content,
            priority: todo.priority,
            completed: todo.completed
        });
        this.editModal.show();
    };
    // -----------------------------------------------------------------------------------------
    TodoListPageComponent.prototype.editTodo = function () {
        var _this = this;
        var result = {
            id: this.editTodoForm.value.id,
            content: this.editTodoForm.value.content,
            priority: this.editTodoForm.value.priority.value,
            completed: this.editTodoForm.value.completed
        };
        this.editedTodo.processing = true;
        this.todoListService.updateTodo(result)
            .subscribe(function (res) {
            var todo = _this.todoList.todos.find(function (x) { return x.id == res.id; });
            todo.content = res.content;
            todo.priority = res.priority;
            todo.completed = res.completed;
            _this.editedTodo.processing = false;
            _this.alert
                .setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].SUCCESS)
                .show("Obiekt Todo został zaktualizowany pomyślnie");
            _this.editedTodo = null;
        }, function (err) { return _this.handleError(err); });
    };
    // -----------------------------------------------------------------------------------------
    TodoListPageComponent.prototype.info = function (todo) {
        this.editedTodo = todo;
        this.infoModal.show();
    };
    // -----------------------------------------------------------------------------------------
    // TODO: fix it
    TodoListPageComponent.prototype.completeTodo = function (todo) {
        var _this = this;
        var result = {
            id: todo.id,
            content: todo.content,
            priority: todo.priority.value,
            completed: !todo.completed
        };
        todo.processing = true;
        this.todoListService.updateTodo(result)
            .finally(function () { return todo.processing = false; })
            .subscribe(function (res) {
            todo.completed = res.completed;
            _this.alert
                .setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].SUCCESS)
                .show("Obiekt Todo został zaktualizowany pomyślnie");
        }, function (err) { return _this.handleError(err); });
    };
    // -----------------------------------------------------------------------------------------
    TodoListPageComponent.prototype.removeTodo = function (todo) {
        var _this = this;
        this.todoListService.removeTodo(todo.id)
            .subscribe(function (res) {
            _this.todoList.todos.splice(_this.todoList.todos.indexOf(todo), 1);
            _this.alert
                .setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].SUCCESS)
                .show("Obiekt Todo został usuniety pomyślnie");
        }, function (err) { return _this.handleError(err); });
    };
    TodoListPageComponent.prototype.handleError = function (err) {
        this.alert.setAlertType(__WEBPACK_IMPORTED_MODULE_4__components_alert_AlertType__["a" /* AlertType */].WARMING).show(err.message);
    };
    return TodoListPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("alert"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__components_alert_alert_component__["a" /* AlertComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__components_alert_alert_component__["a" /* AlertComponent */]) === "function" && _a || Object)
], TodoListPageComponent.prototype, "alert", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("infoModal"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__components_modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_modal_modal_component__["a" /* ModalComponent */]) === "function" && _b || Object)
], TodoListPageComponent.prototype, "infoModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("editModal"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__components_modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_modal_modal_component__["a" /* ModalComponent */]) === "function" && _c || Object)
], TodoListPageComponent.prototype, "editModal", void 0);
TodoListPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-todo-list-page',
        template: __webpack_require__("../../../../../src/app/pages/todo-list-page/todo-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/home-page.scss"), __webpack_require__("../../../../../src/app/pages/todo-list-page/todo-list-page.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_todo_list_todo_list_service__["a" /* TodoListService */], __WEBPACK_IMPORTED_MODULE_7__services_home_home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_todo_list_todo_list_service__["a" /* TodoListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_todo_list_todo_list_service__["a" /* TodoListService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* Title */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _g || Object])
], TodoListPageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=todo-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safe-style/safe-style.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeStylePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeStylePipe = (function () {
    function SafeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStylePipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    return SafeStylePipe;
}());
SafeStylePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'safeStyle'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], SafeStylePipe);

var _a;
//# sourceMappingURL=safe-style.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_todo_list_TodoList__ = __webpack_require__("../../../../../src/app/components/todo-list/TodoList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_User__ = __webpack_require__("../../../../../src/app/pages/home/User.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Authorization", localStorage.getItem("Token"));
    }
    HomeService.prototype.getUserData = function () {
        return this.http.get("/api/user/account", { headers: this.headers })
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_8__pages_home_User__["a" /* User */](res.json()); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json() || "Server error"); });
    };
    HomeService.prototype.addTodoList = function (todoList) {
        return this.http.post("api/todolist", JSON.stringify(todoList), {
            headers: this.headers
        })
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_7__components_todo_list_TodoList__["a" /* TodoList */](res.json()); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    HomeService.prototype.editTodoList = function (form) {
        return this.http.put("api/todolist", JSON.stringify(form), {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    HomeService.prototype.removeTodoList = function (todoListID) {
        return this.http.delete("/api/todolist/" + todoListID, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    return HomeService;
}());
HomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.tokenHelper = new __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["a" /* JwtHelperService */]();
        this.ITEM_STRING = "Token";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append("Content-Type", "application/json");
    }
    LoginService.prototype.isAuthenticated = function () {
        return localStorage.getItem(this.ITEM_STRING) != null;
    };
    LoginService.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post("/api/user/login", JSON.stringify(credentials), {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(res); })
            .toPromise()
            .then(function (res) {
            var tokenDecoded = _this.tokenHelper.decodeToken(res.access_token);
            localStorage.setItem(_this.ITEM_STRING, res.access_token);
            localStorage.setItem("fullName", tokenDecoded.firstName + " " + tokenDecoded.lastName);
            return res;
        });
    };
    LoginService.prototype.register = function (userData) {
        return this.http.post("/api/user/register", JSON.stringify(userData), {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem(this.ITEM_STRING);
        localStorage.removeItem("fullName");
        this.router.navigate(["/login"]);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo-list/todo-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_todo_list_TodoList__ = __webpack_require__("../../../../../src/app/components/todo-list/TodoList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dropdown_DropdownValue__ = __webpack_require__("../../../../../src/app/components/dropdown/DropdownValue.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoListService = (function () {
    function TodoListService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("Token")
        });
    }
    TodoListService.prototype.getTodoList = function (todoListId) {
        return this.http.get("/api/todolist/" + todoListId, { headers: this.headers })
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__components_todo_list_TodoList__["a" /* TodoList */](res.json()); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    TodoListService.prototype.getPriorities = function () {
        return this.http.get("/api/todo/priorities", { headers: this.headers })
            .map(function (res) { return res.json().map(function (p) { return new __WEBPACK_IMPORTED_MODULE_4__components_dropdown_DropdownValue__["a" /* DropdownValue */](p); }); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    TodoListService.prototype.addTodo = function (todoListID, todo) {
        return this.http.post("/api/todo/" + todoListID, JSON.stringify(todo), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    TodoListService.prototype.updateTodo = function (form) {
        return this.http.put("/api/todo", JSON.stringify(form), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    TodoListService.prototype.removeTodo = function (todoId) {
        return this.http.delete("api/todo/" + todoId, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json()); });
    };
    return TodoListService;
}());
TodoListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], TodoListService);

var _a;
//# sourceMappingURL=todo-list.service.js.map

/***/ }),

/***/ "../../../../../src/assets/home-page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content__container h1 {\n  font-size: 36px; }\n  .content__container h1.centered {\n    text-align: center;\n    color: #c3c3c3;\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n     -ms-user-select: none;\n         user-select: none; }\n\n.content__container__form {\n  position: relative;\n  width: 100%;\n  margin-bottom: 30px; }\n  .content__container__form form {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .content__container__form form app-input {\n      -webkit-box-flex: 4;\n          -ms-flex: 4;\n              flex: 4; }\n    .content__container__form form .button {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n    @media all and (max-width: 425px) {\n      .content__container__form form {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n\n.content__container--error {\n  text-align: center; }\n  .content__container--error h1 {\n    font-size: 60px !important; }\n  .content__container--error a {\n    line-height: 21px;\n    color: #2196F3; }\n\n@media all and (max-width: 1024px) {\n  .content__container {\n    margin: 0;\n    padding: 80px 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map