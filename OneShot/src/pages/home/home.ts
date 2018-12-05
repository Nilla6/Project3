import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginPage } from '../login/login';
import { UserProf } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userprof = {} as UserProf;
  user;
  infos;

  constructor(private db: AngularFireDatabase, private AFauth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.DatabaseInfo();
    this.ionViewWillLoad();
    
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
      this.user = data;
      if(data && data.email && data.uid){
        console.log('name', data)
        this.toast.create({
          message: `Welcome to OneShot, ${data.displayName}`,
          duration: 3000
        }).present();
      
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
