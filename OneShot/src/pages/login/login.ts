import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, fb: FormBuilder, private auth: AuthService) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
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

  login(){
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot(HomePage),
        error => this.loginError = error.message
      );
  }
}
