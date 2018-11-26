webpackJsonp([7],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\about\about.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n	</button>\n\n	<div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n		<ion-title >About</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n	<h1>About the Creators</h1>\n\n	<br>\n\n	<div text-center>\n\n			<img src = "assets/imgs/Kasey.jpg" width = "250" height = "200" class="rotateimg90" alt = "Kasey Powers">\n\n	</div>\n\n	<br>\n\n	<h3>Kasey Powers</h3>\n\n		<p>Kasey Powers is a graphic design major with a minor in digital media studies. She is planning to graduate at the end of the semester. </p>\n\n\n\n	<div text-center>\n\n		<img src = "assets/imgs/Nik.jpg" width = "auto" height = "auto" alt = "Nik Coleman">\n\n	</div>\n\n	<h3>Nik Coleman</h3>\n\n		<p>Nik Coleman is a computer science major. He is planning to graduate in a year or two. </p>\n\n	\n\n	<h3>Work Cited</h3>\n\n		<p> autentication: code from Paul Halliday(youtube video)\n\n				database: code from Learn It(youtube video)\n\n		</p>\n\n\n\n	</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ParentPage } from './parent';
//import { StarRatingModule } from 'ionic3-star-rating';
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, db) {
        this.navParams = navParams;
        this.db = db;
        this.bars = navParams.get('selectedBar');
        console.log(this.bars);
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    var _a, _b, _c;
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\details\details.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n    <ion-title>\n\n      <ion-label>{{bars.barname}}</ion-label>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="mainStyle">\n\n    <ion-card>\n\n        {{bars.barImage}}\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            {{bars.barname}}\n\n          </ion-card-title>\n\n          <p>\n\n            {{bars.description}}\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-content padding class="mainStyle">\n\n        <ion-card>\n\n          {{bars.drinkImage}}\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                Best Drink\n\n                </ion-card-title>\n\n              <p>\n\n                {{bars.drink}}\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Rating\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <!--<ionic3-star-rating \n\n            activeIcon = "ios-flame"\n\n            defaultIcon = "ios-flame-outline"\n\n            activeColor = "#488aff" \n\n            defaultColor = "#f4f4f4"\n\n            readonly="false"\n\n            [rating]="3">\n\n          </ionic3-star-rating>-->\n\n          <ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon>\n\n            <ion-icon name="flame" item-end></ion-icon>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-list>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Comments on Drinks or Bar</ion-label>\n\n            <ion-textarea type="text"></ion-textarea>\n\n          </ion-item>\n\n          <button ion-button block>Submit</button>\n\n        \n\n        </ion-list>\n\n        <!--https://forum.ionicframework.com/t/show-image-from-firebase-storage-by-retrieving-url-ionic/126905\n\n        https://www.npmjs.com/package/ionic3-star-rating-->\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _c : Object])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(90);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(db, AFauth, navCtrl, navParams) {
        this.db = db;
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {};
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.AFauth.authState.take(1).subscribe(function (auth) {
            _this.db.list("profile/" + auth.uid).push(_this.profile)
                .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating> Username </ion-label>\n\n    <ion-input [(ngModel)]="profile.un"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label floating> First Name </ion-label>\n\n    <ion-input [(ngModel)]="profile.fn"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating> Last Name </ion-label>\n\n    <ion-input [(ngModel)]="profile.ln"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button clear (click)="updateProfile()">Update Profile</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
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
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPage = /** @class */ (function () {
    function ResetPage(AFauth, navCtrl, navParams, alertCtrl) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPage');
    };
    ResetPage.prototype.resetPassword = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.AFauth.auth.sendPasswordResetEmail(this.user.email)
                                .then(function (res) {
                                var confirm = _this.alertCtrl.create({
                                    title: "Reset Password Email Sent",
                                    message: 'A email has been sent where you can reaet password. It may take up to 5 minutes to receive the email.',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                console.log('Okay clicked');
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                            }
                                        }
                                    ]
                                });
                                confirm.present();
                            }, function (err) {
                                var confirm = _this.alertCtrl.create({
                                    title: "Wrong Email",
                                    message: 'The email address you entered is not vaild. Please check your spelling and try again.',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                console.log('Okay clicked');
                                            }
                                        }
                                    ]
                                });
                                confirm.present();
                            })];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\reset\reset.html"*/'<!--\n\n  Generated template for the ResetPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button full type="submit" (click)="resetPassword(user)">Sign Up</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\reset\reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPage);
    return ResetPage;
}());

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_category_category__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_config__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__agm_core__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_profile_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_user_profile_user_profile__ = __webpack_require__(535);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__components_user_profile_user_profile__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset__["a" /* ResetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_18__app_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_21__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["e" /* ReactiveFormsModule */]
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
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__components_user_profile_user_profile__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset__["a" /* ResetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__services_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

var UserProfile = /** @class */ (function () {
    function UserProfile() {
        this.fn = "First Name";
        this.ln = "Last Name";
        this.img = "http://via.placeholder.com/350x150";
    }
    return UserProfile;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		539,
		6
	],
	"../pages/category/category.module": [
		545,
		5
	],
	"../pages/details/details.module": [
		540,
		4
	],
	"../pages/login/login.module": [
		541,
		3
	],
	"../pages/profile/profile.module": [
		542,
		2
	],
	"../pages/reset/reset.module": [
		543,
		1
	],
	"../pages/signup/signup.module": [
		544,
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
webpackAsyncContext.id = 257;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(99);
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
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\welcome\welcome.html"*/'<ion-content class="mainStyle">\n\n    <div class="middleofPage" text-center>\n\n        <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n        <p text-wrap>Welcome to OneShot. The Best Drink Review App you will ever find. We appreciate you downloading\n\n           our add and we hope it is an enriching experience.\n\n        </p>\n\n     </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-row>\n\n        <ion-col style="text-align: right">\n\n          <button ion-button clear (click)=\'goToLoginPage()\'>Log In</button>\n\n        </ion-col>\n\n        <ion-col style="text-align: left">\n\n          <button ion-button clear (click)=\'signUp()\'>\n\n            <ion-icon name="person-add"></ion-icon>\n\n            Sign Up\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(db) {
        this.db = db;
    }
    ProfileService.prototype.createProfile = function () {
        var profileDefault = new __WEBPACK_IMPORTED_MODULE_2__app_app_module__["b" /* UserProfile */]();
        var adKey = this.db.list('/profiles').push(profileDefault).key;
        return this.db.object('/profiles/' + adKey);
    };
    ProfileService.prototype.updateProfile = function (profile, data) {
        return profile.update(data);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_reset__ = __webpack_require__(181);
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
        this.token = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    result = this.AFauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
                        .then(function (res) {
                        _this.AFauth.auth.currentUser.getIdToken();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }, function (err) {
                        var confirm = _this.alertCtrl.create({
                            title: "Incorrect Username/Password",
                            message: 'The email/password you entered is incorrect. If you do not remeber your password click the link below to change your password',
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
                    });
                    console.log(result);
                    /*if(result){
                      
                      this.navCtrl.setRoot(HomePage);
                    } else {
                      let confirm = this.alertCtrl.create({
                        title: "Incorrect Username/Password",
                        message: 'The email/password you entered is incorrect. If you do not remeber your password click the link below to change your password',
                        buttons: [
                          {
                            text: 'Okay',
                            handler: () => {
                              console.log('Okay clicked');
                            }
                          }
                        ]
                      });
                      confirm.present()
                    }
                  */ }
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
            var result, confirm_1;
            return __generator(this, function (_a) {
                try {
                    result = this.AFauth.auth.signInAnonymously();
                    console.log(result);
                    if (result) {
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        confirm_1 = this.alertCtrl.create({
                            title: "Incorrect Username/Password",
                            message: 'The email/password you entered is incorrect. If you do not remeber your password click the link below to change your password',
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Okay clicked');
                                    }
                                }
                            ]
                        });
                        confirm_1.present();
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.failAlert = function () {
        var confirm = this.alertCtrl.create({
            title: 'Wrong Password',
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
    LoginPage.prototype.forgotPasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_reset__["a" /* ResetPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <div text-center>\n\n       <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n    </div>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n      </ion-item>\n\n        \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n		<button ion-button full type="submit" (click)="login(user)">Log in</button>\n\n  \n\n    <div class="login-footer">\n\n			<p>\n\n				<a (click)="forgotPasswordPage()">Forgot password?</a>\n\n				If you\'re a new user, please sign up.\n\n			</p>\n\n    </div>\n\n</ion-content>\n\n\n\n\n\n<ion-footer no-border>\n\n    <ion-row>\n\n        <ion-col style="text-align: right">\n\n          <button ion-button clear (click)=\'Anonymous(user)\'>Guests</button>\n\n        </ion-col>\n\n        <ion-col style="text-align: left">\n\n          <button ion-button clear (click)=\'signUp()\'>\n\n            <ion-icon name="person-add"></ion-icon>\n\n            Sign Up\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_category_category__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(44);
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
        this.user = {};
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */];
        this.AFauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */];
            }
        });
        this.initializeApp();
        this.menu = menu;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
            { title: 'Categories', component: __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */] }
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
    MyApp.prototype.signOut = function () {
        this.AFauth.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>    \n\n    <ion-list> \n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item *ngIf="">\n\n        \n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <button ion-button (click)="signOut()">Sign Out</button>\n\n  </ion-footer>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 523:
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

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__(329);
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
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(ps, fb) {
        this.ps = ps;
        this.fb = fb;
        console.log('Hello UserProfileComponent Component');
    }
    UserProfileComponent.prototype.startNewProfile = function () {
        this.profile = this.ps.createProfile();
        this.buildForm();
    };
    UserProfileComponent.prototype.saveProfileChanges = function () {
        if (this.profileForm.status != 'VALID') {
            console.log('Form Not Valid');
            return;
        }
        var data = this.profileForm.value;
        this.ps.updateProfile(this.profile, data);
    };
    UserProfileComponent.prototype.buildForm = function () {
        var _this = this;
        this.profileForm = this.fb.group({
            fn: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            ln: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            img: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.profile.subscribe(function (profile) {
            _this.profileForm.patchValue(profile);
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-profile',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\components\user-profile\user-profile.html"*/'<!-- Generated template for the UserProfileComponent component -->\n<h1>User Profile</h1>\n<div>\n  <form [formGroup]="profileForm" novalidate>\n    <label>First Name</label>\n    <input class="input" type="text"\n      formControlName="fn"\n      (change)="saveProfileChanges()"\n      [ngClass]="{\n                    \'secondary\': profileForm.get(\'fn\').valid && profileForm.get(\'fn\').dirty,\n                    \'danger\': !profileForm.get(\'fn\').valid\n                  }">\n    <p class="error danger"[hidden]="profileForm.get(\'fn\').valid">\n      First Name is required\n    </p>\n\n    <label>Last Name</label>\n    <input class="input" type="text"\n      formControlName="ln"\n      (change)="saveProfileChanges()"\n      [ngClass]="{\n                    \'secondary\': profileForm.get(\'ln\').valid && profileForm.get(\'ln\').dirty,\n                    \'danger\': !profileForm.get(\'ln\').valid\n                  }">\n    <p class="error danger"[hidden]="profileForm.get(\'ln\').valid">\n      First Name is required\n    </p>\n\n    <label>Profile Picture</label>\n    <input class="input" type="text"\n      formControlName="img"\n      (change)="saveProfileChanges()"\n      [ngClass]="{\n                    \'secondary\': profileForm.get(\'img\').valid && profileForm.get(\'img\').dirty,\n                    \'danger\': !profileForm.get(\'img\').valid\n                  }">\n    <p class="error danger"[hidden]="profileForm.get(\'img\').valid">\n      First Name is required\n    </p>\n  </form>\n</div>\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\components\user-profile\user-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(47);
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
    function HomePage(cam, db, AFauth, toast, navCtrl, alertCtrl) {
        this.cam = cam;
        this.db = db;
        this.AFauth = AFauth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.DatabaseInfo();
    }
    HomePage.prototype.GoToAnotherPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    HomePage.prototype.DatabaseInfo = function () {
        var _this = this;
        this.db.list('/Categories/category/').valueChanges().subscribe(function (data) {
            console.log(data);
            _this.infos = data;
        });
    };
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.AFauth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Welcome to OneShot, " + data.email,
                    duration: 3000
                }).present();
                _this.profileData = _this.db.object("profile/" + data.uid);
            }
            else {
                _this.toast.create({
                    message: "Welcome Anonymous User",
                    duration: 3000
                }).present();
            }
        });
    };
    HomePage.prototype.signOut = function () {
        this.AFauth.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.loadProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
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
    HomePage.prototype.takePhoto = function () {
        //Define Camera Options
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n       <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n    </div>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="loadProfilePage()">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="card-background-page">\n\n  <h3> Welcome to OneShot {{profileData?.un}}</h3>\n\n  <ion-card  *ngFor="let info of infos" (click) = "GoToAnotherPage()">\n\n    <img src="assets/imgs/test.jpeg"/>\n\n    <div class="card-title">{{info.name}}</div>\n\n    <div class="card-subtitle">{{info.listings}} Bars</div>\n\n   \n\n  </ion-card>\n\n   <button ion-button (click)="signOut()">Sign Out</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(55);
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
    function CategoryPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.barRef$ = this.db.list('bars-info');
        this.BarInfo();
        this.CategoryInfo();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.BarInfo = function () {
        var _this = this;
        this.db.list('/Bars/bar/').valueChanges().subscribe(function (data) {
            console.log(data);
            _this.bars = data;
        });
    };
    CategoryPage.prototype.CategoryInfo = function () {
        var _this = this;
        this.db.list('/Categories/category/').valueChanges().subscribe(function (data) {
            console.log(data);
            _this.infos = data;
        });
    };
    CategoryPage.prototype.itemSelected = function (bars) {
        console.log("Selected Item", bars);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], {
            selectedBar: bars
        });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\category\category.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n   		 <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n   	</div>\n\n    <ion-title>Categories</ion-title>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n\n\n<ion-content padding class=\'mainStyle\'>\n\n<!--\n\n		<div class="devsite-rating-container\n\n		"><div class="devsite-rating-stars"><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="1" data-category="Site-Wide Custom Events" data-label="Star Rating 1"\n\n track-metadata-score="1" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 1 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="2" data-category="Site-Wide Custom Events" data-label="Star Rating 2"\n\n track-metadata-score="2" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 2 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="3" data-category="Site-Wide Custom Events" data-label="Star Rating 3"\n\n track-metadata-score="3" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 3 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="4" data-category="Site-Wide Custom Events" data-label="Star Rating 4"\n\n track-metadata-score="4" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 4 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons"\n\n data-rating-val="5" data-category="Site-Wide Custom Events" data-label="Star Rating 5"\n\n track-metadata-score="5" track-type="feedback" track-name="rating"\n\n track-metadata-position="header"\n\n role="button"\n\n \n\n aria-label="Site content star ratings, rating 5 out of 5"></div></div><div class="devsite-rating-description"></div><div class="devsite-rating-internal"><span class="devsite-rating-stats"></span></div></div><script>\n\n$(document).ready(function() {\n\ndevsite.ratings.init(\n\ndocument.querySelectorAll(\'#devsite-feedback-project\'), false\n\n\n\n);\n\n});\n\n</script>\n\n-->\n\n\n\n	<div text-center>\n\n		<ion-list *ngFor="let info of infos">\n\n				<ion-list-header>\n\n					{{info.name}}\n\n				</ion-list-header>\n\n				<button ion-item *ngFor="let bar of bars" (click)="itemSelected(bar)">\n\n					{{bar.barname}}\n\n				</button>\n\n				<br>\n\n		</ion-list>\n\n	\n\n<!--\n\n		<ion-list>\n\n			<br>	\n\n		  <ion-list-header>\n\n		    Best Bars \n\n		  </ion-list-header>\n\n		  <ion-item class= "item">The Library<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon>\n\n			</ion-item>\n\n\n\n		  <ion-item>Roosters Blues House<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Snackbar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Growler<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Proud Larry\'s<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Levee<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Round Table<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Funky\'s Pizza & Daiquiri Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>\n\n		  <ion-list-header>\n\n		    Most Loved\n\n		  </ion-list-header>\n\n		  <ion-item>The Library<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Roosters Blues House<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>The Levee<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Round Table<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Mariachi Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Kabuki<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Toyo Japanese Sushi Bar & Hibachi<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Chili\'s Grill & Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n	    <ion-list>\n\n				<br>\n\n		<ion-list-header>\n\n		    Fine Dining  \n\n		  </ion-list-header>\n\n		  <ion-item>El Agave<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Papitos Mexican Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Mariachi Grill<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>El Milagro<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Pita Pit<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Buffalo Wild Wings<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Kabuki<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Toyo Japanese Sushi Bar & Hibachi<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Chili\'s Grill & Bar<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n\n\n		<ion-list>\n\n			<br>\n\n		<ion-list-header>\n\n		    Best Drinks Served \n\n		  </ion-list-header>\n\n		  <ion-item>Maragritas<ion-icon name="flame"item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Cocktails<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Wine<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Beer<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Whiskey<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n\n\n		  <ion-item>Tequilla<ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon><ion-icon name="flame" item-end></ion-icon></ion-item>\n\n		</ion-list>\n\n	-->	\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
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
    function SignupPage(AFauth, navCtrl, navParams, alertCtrl) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    SignupPage.prototype.signUp = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.AFauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
                                .then(function (res) {
                                var confirm = _this.alertCtrl.create({
                                    title: "Account Created",
                                    message: 'You have successfully created a new account.',
                                    buttons: [
                                        {
                                            text: 'Great!',
                                            handler: function () {
                                                console.log('Great clicked');
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                            }
                                        }
                                    ]
                                });
                                confirm.present();
                            }, function (err) {
                                var confirm = _this.alertCtrl.create({
                                    title: "Wrong Format",
                                    message: 'The email/password you entered is incorrectly formatted. The Password must have at least 8 characters and the email should have an "@" symbol',
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
                            })
                            /*
                             console.log(result);
                             if(result){
                              this.navCtrl.setRoot(LoginPage);
                            }*/
                        ];
                    case 1:
                        result = _a.sent();
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n      <div text-center>\n\n          <img src = "assets/imgs/OneShotLogo-white.jpg" width = "auto" height = "auto" alt = "OneShot">\n\n       </div>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n        </ion-item>\n\n          \n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n      <button ion-button full type="submit" (click)="signUp(user)">Sign Up</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ncoleman\Desktop\Project3\OneShot\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map