import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import { storage } from 'firebase';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { Rating } from '../../models/rating';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {
bars;
ratings = {} as Rating;

  constructor(private AFauth: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.bars = navParams.get('selectedBar');
    console.log(this.bars);
  }

  onModelChange(event){
    this.bars = this.navParams.get('selectedBar');
    this.AFauth.authState.take(1).subscribe(auth => {
      this.db.object(`rating/${this.bars.barname}/${auth.uid}`).set(this.ratings)
        .then()
    })
    
    this.ratings = event;
    console.log(event);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  loadProfilePage(){
    this.navCtrl.push(ProfilePage);
  }

  submitComments() {
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