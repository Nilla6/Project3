import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  user = {} as User;

  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  async resetPassword(user: User){
    try{
      const result = await this.AFauth.auth.sendPasswordResetEmail(this.user.email)
        .then(res => {
          let confirm = this.alertCtrl.create({
            title: "Reset Password Email Sent",
            message: 'A email has been sent where you can reaet password. It may take up to 5 minutes to receive the email.',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('Okay clicked');
                  this.navCtrl.setRoot(LoginPage);
                }
              }
            ]
          });
          confirm.present()
        }, err => {
          let confirm = this.alertCtrl.create({
            title: "Wrong Email",
            message: 'The email address you entered is not vaild. Please check your spelling and try again.',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('Okay clicked');
                }
              }
            ]
          });
          confirm.present()
        })
      } catch (e){
        console.log(e);
      }
  }


}
