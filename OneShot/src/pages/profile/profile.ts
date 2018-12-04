import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
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
  profile = {} as Profile;
  constructor(private cam: Camera, private db: AngularFireDatabase, private AFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  updateProfile(){
    this.AFauth.authState.take(1).subscribe(auth => {
      this.db.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.push(HomePage))
    })
  }

  async takePhoto(){
    //Define Camera Options
    try{
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.cam.DestinationType.DATA_URL,
        encodingType: this.cam.EncodingType.JPEG,
        mediaType: this.cam.MediaType.PICTURE,
        correctOrientation: true
      }
      
      const result = await this.cam.getPicture(options);
      const image = `data:image/jpeg;base64, ${result}`;
      const pictures = storage().ref('user-pics/');
      pictures.putString(image, 'data_url');
 
    } catch(e){
    console.error(e);
    } 
  }
  

}
