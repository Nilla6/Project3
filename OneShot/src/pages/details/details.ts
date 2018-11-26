import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import { storage } from 'firebase';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
//import { ParentPage } from './parent';
//import { StarRatingModule } from 'ionic3-star-rating';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {
bars;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.bars = navParams.get('selectedBar');
    console.log(this.bars);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  loadProfilePage(){
    this.navCtrl.push(ProfilePage);
  }
  
}