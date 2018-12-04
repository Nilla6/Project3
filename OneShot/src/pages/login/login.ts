import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProf } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';
import { ResetPage } from '../reset/reset';
import * as firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userprof = {} as UserProf;
  token = "";
  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(userprof: UserProf){
    try{
      const result = this.AFauth.auth.signInWithEmailAndPassword(this.userprof.email, this.userprof.password)
        .then(res =>{
          this.AFauth.auth.currentUser.getIdToken();
          this.navCtrl.setRoot(HomePage);
        }, err => {
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
        })
      console.log(result);
      }
    catch(e){
      console.error(e);
    }
  }

  signUp(){
    this.navCtrl.push(SignupPage);
  }

  async Anonymous(userprof: UserProf){
    try{
      const result = this.AFauth.auth.signInAnonymously();
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
      else{
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
    } catch(e){
      console.error(e);
    }
  }

  failAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Wrong Password',
      message: 'This feature has not yet been completed. Will be completed soon.',
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

  forgotPasswordPage(){
    this.navCtrl.push(ResetPage);
  }

}
