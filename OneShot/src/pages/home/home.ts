import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { UserProfileComponent } from '../../components/user-profile/user-profile';
import { Profile } from '../../models/profile';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  infos;
  profileData: AngularFireObject<Profile>

  constructor(private db: AngularFireDatabase, private AFauth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.DatabaseInfo();
    
  }

  GoToAnotherPage(): void {
    this.navCtrl.setRoot(CategoryPage);  
  }

  DatabaseInfo(){
    this.db.list('/Categories/category/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.infos = data
      }
    )
  }

  ionViewWillLoad(){
    this.AFauth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to OneShot, ${data.email}`,
          duration: 3000
        }).present();
      
        this.profileData = this.db.object(`profile/${data.uid}`).valueChanges()
      
      } else{
        this.toast.create({
          message: `Welcome Anonymous User`,
          duration: 3000
        }).present();
      }
    });

    
      
  }

  signOut(){
    this.AFauth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  loadProfilePage(){
    this.navCtrl.push(ProfilePage);
  }

  Alert() {
    let confirm = this.alertCtrl.create({
      title: 'Not Done Yet!',
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

}
