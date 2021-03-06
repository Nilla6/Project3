import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/database";
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { Rating } from '../../models/rating';
import { Post } from '../../models/post';
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

  /*ngOnInit() {
    this.profile = this.db.object(`profile/${auth.uid}`)
    this.bars = this.db.object('bars.barname')
    
    this.bars = this.db.valueChanges()
    this.profile = this.db.valueChanges()
  }
    
  get Bar() {
    return this.bars.ref.id
  }
    
  get userId() {
    return this.profile.ref.id
  }
    
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
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
      this.db.object(`posts/${this.bars.barname}/${auth.uid}`).set({post: this.posts.message, date: this.currentDate, name: auth.displayName, photo: auth.photoURL})
      })
      
    }
  }
  