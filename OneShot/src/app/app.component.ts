import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { CategoryPage } from '../pages/category/category';
import { WelcomePage } from '../pages/welcome/welcome';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProf } from '../models/user';
import * as firebase from 'firebase'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userprof = {} as UserProf; 
  rootPage = WelcomePage;
  pages: Array<{title: string, component: any}>;

  constructor(private AFauth: AngularFireAuth, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menu: MenuController) {
    this.AFauth.auth.onAuthStateChanged(function(user){
      if(user){
        this.rootPage = LoginPage;
      }
      else{
        this.rootPage = WelcomePage;
      }  
    });
    this.initializeApp();
    firebase.auth().onAuthStateChanged(function(userprof) {
      if (userprof) {
        // User is signed in.
        this.rootPage = HomePage;
        var displayName = userprof.displayName;
        var email = userprof.email;
        var photoURL = userprof.photoURL;
        var isAnonymous = userprof.isAnonymous;
        var uid = userprof.uid;
      } else {
        // User is signed out.
        this.rootPage = WelcomePage;
      }
    });
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Categories', component: CategoryPage }
    ];
      
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  signOut(){
    this.AFauth.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

}
