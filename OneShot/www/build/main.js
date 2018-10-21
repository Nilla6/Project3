webpackJsonp([5],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(AFauth, toast, navCtrl) {
        this.AFauth = AFauth;
        this.toast = toast;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.GoToAnotherPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.AFauth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Welcome to OneShot, " + data.email,
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: "Could not find Authentication details",
                    duration: 3000
                }).present();
            }
        });
    };
    var _a, _b, _c;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n       <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n    </div>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button>Account</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test.jpeg"/>\n\n    <div class="card-title">Best Bars</div>\n\n    <div class="card-subtitle">8 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test2.png"/>\n\n    <div class="card-title">Most Loved</div>\n\n    <div class="card-subtitle">8 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test3.jpg"/>\n\n    <div class="card-title">Fine Dining</div>\n\n    <div class="card-subtitle">9 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test4.jpg"/>\n\n    <div class="card-title">Best Drinks Served</div>\n\n    <div class="card-subtitle">7 Listings</div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" ? _c : Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\about\about.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n	</button>\n\n	<div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n		<ion-title >About</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n	<h1>About the Creators</h1>\n\n	<br>\n\n	<div text-center>\n\n			<img src = "assets/imgs/Kasey.jpg" width = "250" height = "200" class="rotateimg90" alt = "Kasey Powers">\n\n	</div>\n\n	<br>\n\n	<h3>Kasey Powers</h3>\n\n		<p>Kasey Powers is a graphic design major with a minor in digital media studies. She is planning to graduate at the end of the semester. In this app, Kasey has helped make the about and catagory page of the app. She also made the logo and app icon for the app.</p>\n\n\n\n	<div text-center>\n\n		<img src = "assets/imgs/Nik.jpg" width = "auto" height = "auto" alt = "Nik Coleman">\n\n	</div>\n\n	<h3>Nik Coleman</h3>\n\n		<p>Nik Coleman is a computer science major. He is planning to graduate in a year or two. For the project, he committed to creating the login and home page. He helped do the startup of the app.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\details\details.html"*/'<!--\n\n  Generated template for the DetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n    <ion-title>Whatever you clicked on</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainStyle">\n\n    <ion-card>\n\n        <img src="assets/imgs/test.jpeg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Test Bar\n\n            </ion-card-title>\n\n          <p>\n\n            description of bar or drink<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon>\n\n            <ion-icon name="flame" item-end></ion-icon></p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-list>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Comments go here</ion-label>\n\n            <ion-textarea type="text"></ion-textarea>\n\n          </ion-item>\n\n          <button ion-button block>Submit</button>\n\n        \n\n        </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(AFauth, navCtrl, navParams, alertCtrl) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Alert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Not Done Yet!',
            message: 'This feature has not yet been completed. Will be completed soon.',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    LoginPage.prototype.GoToAnotherPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.AFauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
                    console.log(result);
                    if (result) {
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push('SignupPage');
    };
    var _a, _b, _c, _d;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <div text-center>\n\n       <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n    </div>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n      </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n			<button ion-button full type="submit" (click)="login(user)">Log in</button>\n\n<!--  \n\n      <div class="login-footer">\n\n				<p>\n\n					<a href="#">Forgot password?</a>\n\n					If you\'re a new user, please sign up.\n\n				</p>\n\n      </div>\n\n\n\n  <ion-row>\n\n    <ion-col style="text-align: right">\n\n      <button ion-button round outline (click)=\'GoToAnotherPage()\'>Guests</button>\n\n    </ion-col>\n\n    <ion-col style="text-align: left">\n\n      <button ion-button round outline (click)=\'signup()\'>\n\n        <ion-icon name="person-add"></ion-icon>\n\n        Sign Up\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n    \n\n</ion-content>\n\n-->\n\n\n\n<ion-footer>\n\n  <button ion-button (click)="signUp()">Sign Up</button>\n\n  <div center class ="line">\n\n    <h1>test</h1>\n\n  </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _d : Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
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
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		522,
		4
	],
	"../pages/category/category.module": [
		523,
		3
	],
	"../pages/details/details.module": [
		524,
		2
	],
	"../pages/login/login.module": [
		525,
		1
	],
	"../pages/signup/signup.module": [
		526,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    WelcomePage_1 = WelcomePage;
    WelcomePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(WelcomePage_1, {
            item: item
        });
    };
    var WelcomePage_1;
    WelcomePage = WelcomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\welcome\welcome.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Welcome</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_category_category__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_details_details__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_database_database__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_config__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__agm_core__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_details_details__["a" /* DetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_17__app_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_details_details__["a" /* DetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_category_category__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //rootPage: any = WelcomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        this.menu = menu;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
            { title: 'Categories', component: __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.login = function () {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    var _a, _b, _c, _d, _e;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" ? _a : Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>    \n\n    <ion-list> \n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" ? _e : Object])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        this.sqlite.create({ name: 'OneShot', location: 'default' })
            .then(function (db) {
            _this.db = db;
        })
            .catch(function (e) { return alert(e); });
    };
    //création de la table `SIGNALEMENTS`
    DatabaseProvider.prototype.createTable = function () {
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Categories` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT NOT NULL, `image` BLOB )')
            .then(function () { return alert('SQL query executed'); })
            .catch(function (e) { return alert(e); });
    };
    DatabaseProvider.prototype.insertInto = function (signal_details) {
        var insert_query = 'INSERT INTO `Categories` (id, name, image) VALUES (?, ?, ?, ?, ?)';
        this.db.executeSql(insert_query, [signal_details.id,
            signal_details.name,
        ])
            .then(function (data) { return alert("Data insertion executed"); })
            .catch(function (e) { return alert(e); });
    };
    DatabaseProvider.prototype.getSignalements = function () {
        return this.db.executeSql('SELECT * FROM Categories', []);
    };
    //méthode de suppression de la table
    DatabaseProvider.prototype.dropDatabase = function () {
        this.sqlite.deleteDatabase({ name: 'OneShot',
            location: 'default'
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyCRNBSszA8qphsVrfiHphoj9uljskP4qdI",
    authDomain: "oneshot-fe19d.firebaseapp.com",
    databaseURL: "https://oneshot-fe19d.firebaseio.com",
    projectId: "oneshot-fe19d",
    storageBucket: "oneshot-fe19d.appspot.com",
    messagingSenderId: "67778012080"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            "The Library",
            "Roosters Blues House",
            "Snackbar",
            "The Growler",
            "Proud Larry's",
            "The Levee",
            "The Round Table",
            "Funky's Pizza and Daiquiri Bar",
            "El Mariachi Grill",
            "Kabuki",
            "Toyo Japanese Sushi Bar and Grill",
            "Chili's Grill & Bar",
            "El Agave",
            "Papito's Mexiacan Grill",
            "Pita Pit",
            "Buffalo Wild Wings",
        ];
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], {
            item: item
        });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\category\category.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n    <ion-title>Categories</ion-title>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n\n\n	<div text-center>\n\n		<ion-list>\n\n				<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n						{{ item }}\n\n					</button>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>		\n\n		  <ion-list-header>\n\n		    Best Bars \n\n		  </ion-list-header>\n\n		  <ion-item class= "item">The Library<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon>\n\n		  </ion-item>\n\n\n\n		  <ion-item>Roosters Blues House<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Snackbar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Growler<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Proud Larry\'s<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Levee<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Round Table<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Funky\'s Pizza & Daiquiri Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>\n\n		  <ion-list-header>\n\n		    Most Loved\n\n		  </ion-list-header>\n\n		  <ion-item>The Library<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Roosters Blues House<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Levee<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Round Table<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Mariachi Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Kabuki<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Toyo Japanese Sushi Bar & Hibachi<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Chili\'s Grill & Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n	    <ion-list>\n\n				<br>\n\n		<ion-list-header>\n\n		    Fine Dining  \n\n		  </ion-list-header>\n\n		  <ion-item>El Agave<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Papitos Mexican Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Mariachi Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Milagro<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Pita Pit<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Buffalo Wild Wings<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Kabuki<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Toyo Japanese Sushi Bar & Hibachi<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Chili\'s Grill & Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>\n\n		<ion-list-header>\n\n		    Best Drinks Served \n\n		  </ion-list-header>\n\n		  <ion-item>Maragritas<ion-icon name="flame"item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Sangrias<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Cocktails<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Wine<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Beer<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Whiskey<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Vodka<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Gin<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Tequilla<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\owner\Documents\CSCI 458\Project3\OneShot\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map