import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProf } from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth'
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

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

  userprof = {} as UserProf;

  constructor(private db: AngularFireDatabase, private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  async signUp(userprof: UserProf){
    
    try{
     const result = await this.AFauth.auth.createUserWithEmailAndPassword(this.userprof.email, this.userprof.password)
      .then(res => {
        this.updateProfile(userprof)
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

  updateProfile(userprof: UserProf){
    console.log('UpdateProfilestart', userprof);
    var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: userprof.displayName,
        photoURL: ""
      })
  }
   
}
