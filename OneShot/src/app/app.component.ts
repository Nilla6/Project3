import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { CategoryPage } from '../pages/category/category';
import { WelcomePage } from '../pages/welcome/welcome';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = WelcomePage;
  rootPage;
  private menu: MenuController;  

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthService, menu: MenuController) {
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Categories', component: CategoryPage },
      { title: 'Login', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.auth.afAuth.authState
        .subscribe(
          user => {
           if(user){
              this.rootPage = HomePage;
           } else {
             this.rootPage = WelcomePage;
            }
          } 
        );
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  login(){
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HomePage);

  }
}
