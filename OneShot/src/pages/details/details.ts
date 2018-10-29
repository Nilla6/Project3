import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Bars} from "../../models/bars";

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
