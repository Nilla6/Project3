import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
<<<<<<< HEAD
=======
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { ParentPage } from './parent';
//import { StarRatingModule } from 'ionic3-star-rating';
>>>>>>> f1a11925ea237973f60ee0c4a869bb83b586551a

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {
bars;

  constructor(navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.bars = navParams.get('selectedBar');
    console.log(this.bars);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  
}