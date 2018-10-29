webpackJsonp([5],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(54);
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
    function HomePage(AFauth, toast, navCtrl, alertCtrl) {
        this.AFauth = AFauth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
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
    HomePage.prototype.Alert = function () {
        var confirm = this.alertCtrl.create({
            title: 'Not Done Yet!',
            message: 'This feature has not yet been completed. Will be completed soon.',
            buttons: [
                {
                    text: 'Okay',
                    handler: function () {
                        console.log('Okay clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n       <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n    </div>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="Alert()">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n  <a ion-item href="https://www.ionicframework.com">\n\n    Anchor Item\n\n  </a>\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test.jpeg"/>\n\n    <div class="card-title">Best Bars</div>\n\n    <div class="card-subtitle">8 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test2.png"/>\n\n    <div class="card-title">Most Loved</div>\n\n    <div class="card-subtitle">8 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test3.jpg"/>\n\n    <div class="card-title">Fine Dining</div>\n\n    <div class="card-subtitle">9 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test4.jpg"/>\n\n    <div class="card-title">Best Drinks Served</div>\n\n    <div class="card-subtitle">7 Listings</div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\pages\about\about.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n	</button>\n\n	<div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n		<ion-title >About</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n	<h1>About the Creators</h1>\n\n	<br>\n\n	<div text-center>\n\n			<img src = "assets/imgs/Kasey.jpg" width = "250" height = "200" class="rotateimg90" alt = "Kasey Powers">\n\n	</div>\n\n	<br>\n\n	<h3>Kasey Powers</h3>\n\n		<p>Kasey Powers is a graphic design major with a minor in digital media studies. She is planning to graduate at the end of the semester. In this app, Kasey has helped make the about and catagory page of the app. She also made the logo and app icon for the app. She had also done the research for the bars and drinks and put it in the database.</p>\n\n\n\n	<div text-center>\n\n		<img src = "assets/imgs/Nik.jpg" width = "auto" height = "auto" alt = "Nik Coleman">\n\n	</div>\n\n	<h3>Nik Coleman</h3>\n\n		<p>Nik Coleman is a computer science major. He is planning to graduate in a year or two. For the project, he committed to creating the login and home page. He helped do the startup of the app. He set up the database for the app. He also set up the authentication for the log in page. </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, db) {
        this.navParams = navParams;
        this.db = db;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    var _a, _b, _c;
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\pages\details\details.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n    <ion-title>\n\n      <ion-label>clicked</ion-label>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainStyle">\n\n    <ion-card>\n\n        <img src="assets/imgs/test.jpeg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            BarName\n\n          </ion-card-title>\n\n          <p>\n\n            description \n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-content padding class="mainStyle">\n\n        <ion-card>\n\n            <img src="assets/imgs/test.jpeg"/>\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                Best Drink\n\n                </ion-card-title>\n\n              <p>\n\n                drink name\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Rating\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon>\n\n            <ion-icon name="flame" item-end></ion-icon>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-list>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Comments on Drinks or Bar</ion-label>\n\n            <ion-textarea type="text"></ion-textarea>\n\n          </ion-item>\n\n          <button ion-button block>Submit</button>\n\n        \n\n        </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"]) === "function" ? _c : Object])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		532,
		4
	],
	"../pages/category/category.module": [
		533,
		3
	],
	"../pages/details/details.module": [
		534,
		2
	],
	"../pages/login/login.module": [
		535,
		1
	],
	"../pages/signup/signup.module": [
		536,
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
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(97);
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
    function WelcomePage(AFauth, navCtrl, navParams) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    WelcomePage.prototype.goToLoginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\pages\welcome\welcome.html"*/'<ion-content class="mainStyle">\n\n    <div class="middleofPage" text-center>\n\n        <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n        <p text-wrap>Welcome to OneShot. The Best Drink Review App you will ever find. We appreciate you downloading\n\n           our add and we hope it is an enriching experience.\n\n        </p>\n\n     </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-row>\n\n        <ion-col style="text-align: right">\n\n          <button ion-button clear (click)=\'goToLoginPage()\'>Log In</button>\n\n        </ion-col>\n\n        <ion-col style="text-align: left">\n\n          <button ion-button clear (click)=\'signUp()\'>\n\n            <ion-icon name="person-add"></ion-icon>\n\n            Sign Up\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(439);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_category_category__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_config__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_firestore__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__agm_core__ = __webpack_require__(527);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__app_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_18__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_firestore__["a" /* AngularFirestoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_category_category__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
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
    function MyApp(AFauth, platform, statusBar, splashScreen, menu) {
        this.AFauth = AFauth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */];
        this.user = {};
        this.initializeApp();
        this.menu = menu;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
            { title: 'Categories', component: __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
        this.AFauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */];
            }
        });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>    \n\n    <ion-list> \n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item *ngIf="">\n\n        \n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 519:
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(97);
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
    function LoginPage(AFauth, navCtrl, navParams) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.AFauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
                    this.AFauth.auth.currentUser.getIdToken();
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.Anonymous = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.AFauth.auth.signInAnonymously();
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <div text-center>\n\n       <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n    </div>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n      </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n		<button ion-button full type="submit" (click)="login(user)">Log in</button>\n\n  \n\n    <div class="login-footer">\n\n			<p>\n\n				<a href="#">Forgot password?</a>\n\n				If you\'re a new user, please sign up.\n\n			</p>\n\n    </div>\n\n</ion-content>\n\n\n\n\n\n<ion-footer no-border>\n\n    <ion-row>\n\n        <ion-col style="text-align: right">\n\n          <button ion-button clear (click)=\'Anonymous(user)\'>Guests</button>\n\n        </ion-col>\n\n        <ion-col style="text-align: left">\n\n          <button ion-button clear (click)=\'signUp()\'>\n\n            <ion-icon name="person-add"></ion-icon>\n\n            Sign Up\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(253);
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
    function CategoryPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.category = {};
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
        this.categoriesRef$ = this.database.list('categories-list');
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
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\pages\category\category.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n    <ion-title>Categories</ion-title>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n\n\n		<!--<div class="devsite-rating-container\n\n		"><div class="devsite-rating-stars"><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="1" data-category="Site-Wide Custom Events" data-label="Star Rating 1"\n\n track-metadata-score="1" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 1 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="2" data-category="Site-Wide Custom Events" data-label="Star Rating 2"\n\n track-metadata-score="2" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 2 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="3" data-category="Site-Wide Custom Events" data-label="Star Rating 3"\n\n track-metadata-score="3" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 3 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="4" data-category="Site-Wide Custom Events" data-label="Star Rating 4"\n\n track-metadata-score="4" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 4 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="5" data-category="Site-Wide Custom Events" data-label="Star Rating 5"\n\n track-metadata-score="5" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 5 out of 5"></div></div><div class="devsite-rating-description"></div><div class="devsite-rating-internal"><span class="devsite-rating-stats"></span></div></div><script>\n\n$(document).ready(function() {\n\ndevsite.ratings.init(\n\ndocument.querySelectorAll(\'#devsite-feedback-project\'), false\n\n\n\n);\n\n});\n\n</script>-->\n\n\n\n	<div text-center>\n\n		<ion-list>\n\n				<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n						{{ item }}\n\n					</button>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>	\n\n		  <ion-list-header>\n\n		    Best Bars \n\n		  </ion-list-header>\n\n		  <ion-item class= "item">The Library<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon>\n\n			</ion-item>\n\n\n\n		  <ion-item>Roosters Blues House<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Snackbar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Growler<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Proud Larry\'s<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Levee<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Round Table<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Funky\'s Pizza & Daiquiri Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>\n\n		  <ion-list-header>\n\n		    Most Loved\n\n		  </ion-list-header>\n\n		  <ion-item>The Library<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Roosters Blues House<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Levee<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Round Table<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Mariachi Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Kabuki<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Toyo Japanese Sushi Bar & Hibachi<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Chili\'s Grill & Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n	    <ion-list>\n\n				<br>\n\n		<ion-list-header>\n\n		    Fine Dining  \n\n		  </ion-list-header>\n\n		  <ion-item>El Agave<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Papitos Mexican Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Mariachi Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Milagro<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Pita Pit<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Buffalo Wild Wings<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Kabuki<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Toyo Japanese Sushi Bar & Hibachi<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Chili\'s Grill & Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>\n\n		<ion-list-header>\n\n		    Best Drinks Served \n\n		  </ion-list-header>\n\n		  <ion-item>Maragritas<ion-icon name="flame"item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Cocktails<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Wine<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Beer<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Whiskey<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Tequilla<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(73);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(AFauth, navCtrl, navParams) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    SignupPage.prototype.signUp = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.AFauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\kasey\desktop\project3\OneShot\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n      <div text-center>\n\n          <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n       </div>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n        </ion-item>\n\n          \n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n      <button ion-button full type="submit" (click)="signUp(user)">Sign Up</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kasey\desktop\project3\OneShot\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[325]);
//# sourceMappingURL=main.js.map