import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  
  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  goToLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  signUp(){
    this.navCtrl.push(SignupPage);
  }

}
