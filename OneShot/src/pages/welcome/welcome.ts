import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  
  user = {} as User;
  
  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  goToLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  signUp(){
    this.navCtrl.push(SignupPage);
  }

}
