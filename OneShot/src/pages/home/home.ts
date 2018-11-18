import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserProfileComponent } from '../../components/user-profile/user-profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  infos;

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
    this.AFauth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to OneShot, ${data.email}`,
          duration: 3000
        }).present();
      } else{
        this.toast.create({
          message: `Could not find Authentication details`,
          duration: 3000
        }).present();
      }
    });
      
  }

  loadProfilePage(){
    this.navCtrl.push(UserProfileComponent);
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
