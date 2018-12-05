import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { UserProf } from '../../models/user';
import * as firebase from 'firebase';
import { Password } from '../../models/password';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userprof = {} as UserProf;
  password = {} as Password;
  user;
  constructor(private cam: Camera, private db: AngularFireDatabase, private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.AFauth.authState.subscribe(data => {
      this.user = data
    })
  }

}
