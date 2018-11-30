import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/database";
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
//https://www.youtube.com/watch?v=nUb75jKF03E
export class DetailsPage {
  bars;
  infos;
  profile;
  ratings = {} as Rating;
  posts = {} as Post;
  profileDataRef: AngularFireObject<Profile>;
  profileData: Observable<Profile>;
  currentDate;
  

  constructor(private AFauth: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.bars = navParams.get('selectedBar');
    console.log(this.bars);
    this.PostInfo();
  }

  PostInfo(){
    this.bars = this.navParams.get('selectedBar');
    this.db.list(`/posts/${this.bars.barname}`).valueChanges().subscribe(
      data => {
        console.log('Post Info:', data)
        this.infos = data
      }
    )
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
    var dateObj = new Date();
    var year = dateObj.getFullYear().toString();
    var month = dateObj.getMonth().toString();
    var day = dateObj.getDate().toString();
    var monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    this.currentDate = year + '/' + monthOptions[month] + '/' + day;
    this.bars = this.navParams.get('selectedBar');
    this.AFauth.authState.take(1).subscribe(auth => {
      this.profileDataRef = this.db.object(`profile/${auth.uid}`);
        this.profileData = this.profileDataRef.valueChanges();
      this.db.object(`posts/${this.bars.barname}/${auth.uid}`).set({post: this.posts.message, date: this.currentDate, name: "Name goes here"})

      })
      
    }
  }
  