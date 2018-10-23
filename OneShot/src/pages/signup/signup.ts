import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth'
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async signUp(user: User){
    try{
     const result = await this.AFauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
     console.log(result);
     if(result){
      this.navCtrl.setRoot(LoginPage);
    }
    }
    catch(e){
      console.error(e);
    }
  }
   
}