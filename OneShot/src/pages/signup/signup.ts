import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  async signUp(user: User){
    try{
     const result = await this.AFauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
     .then(res => {
      let confirm = this.alertCtrl.create({
        title: "Account Created",
        message: 'You have successfully created a new account.',
        buttons: [
          {
            text: 'Great!',
            handler: () => {
              console.log('Great clicked');
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ]
      });
      confirm.present()
    }, err => {
      let confirm = this.alertCtrl.create({
        title: "Wrong Format",
        message: 'The email/password you entered is incorrectly formatted. The Password must have at least 8 characters and the email should have an "@" symbol',
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
    })
    /*
     console.log(result);
     if(result){
      this.navCtrl.setRoot(LoginPage);
    }*/
    }
    catch(e){
      console.error(e);
    }
  }
   
}
