import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/database";
import { storage } from 'firebase';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { Rating } from '../../models/rating';
import { Post } from '../../models/post';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {
bars;
infos;
ratings = {} as Rating;
posts = {} as Post;
profileDataRef: AngularFireObject<Profile>;
profileData: Observable<Profile>;

  constructor(private AFauth: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.bars = navParams.get('selectedBar');
    console.log(this.bars);
    this.PostInfo();
  }

  PostInfo(){
    
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
    this.AFauth.authState.subscribe(data => {
      this.profileDataRef = this.db.object(`profile/${data.uid}`);
      this.profileData = this.profileDataRef.valueChanges();
    })
  }

  loadProfilePage(){
    this.navCtrl.push(ProfilePage);
  }

  submitComments() {
    this.bars = this.navParams.get('selectedBar');
    this.AFauth.authState.take(1).subscribe(auth => {
      this.db.object(`posts/${this.bars.barname}/${auth.uid}`).set(this.posts)
        .then(res => {
          let confirm = this.alertCtrl.create({
            title: "Success",
            message: 'You have successfully created a new post.',
            buttons: [
              {
                text: 'Great!',
                handler: () => {
                  console.log('Great clicked');
                }
              }
            ]
          });
          confirm.present()
        }, err => {
          let confirm = this.alertCtrl.create({
            title: "Failed",
            message: 'something went wrong.',
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
        })
    })
    
    /*let confirm = this.alertCtrl.create({
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
    confirm.present()*/
  }
  
}