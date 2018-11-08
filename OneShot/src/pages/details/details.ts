import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from "@angular/fire/database";


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
infos;
  constructor(navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.infos = navParams.get('selectedBar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
