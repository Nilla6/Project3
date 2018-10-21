import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';

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
  user = {} as User;

  constructor(private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Alert() {
    let confirm = this.alertCtrl.create({
      title: 'Not Done Yet!',
      message: 'This feature has not yet been completed. Will be completed soon.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present()
  }

  GoToAnotherPage(): void {
    this.navCtrl.setRoot(HomePage);  
  }

  async login(user: User){
    try{
      const result = this.AFauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch(e){
      console.error(e);
    }
  }

  signUp(){
    this.navCtrl.push('SignupPage');
  }

}
