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
infos;
  constructor(navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.infos = navParams.get('selectedbarname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
