import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private AFauth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  GoToAnotherPage(): void {
    this.navCtrl.setRoot(CategoryPage);  
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
