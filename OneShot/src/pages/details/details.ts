import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import { Bars } from '../../models/bars';

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

  BarInfo(){
    this.db.list('/Bars/bar/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.bars = data
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
