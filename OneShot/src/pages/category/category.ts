import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details'
import { Bars } from '../../models/bars';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

 barRef$: AngularFireList<Bars[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    //this.barRef$ = this.db.list('bars-info');
    this.BarInfo();
    this.CategoryInfo();
  }


  infos;
  bars;
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  BarInfo(){
    this.db.list('/Bars/bar/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.bars = data
      }
    )
    //this.db.list('Bars/bar').update(data)
  }

  CategoryInfo(){
    this.db.list('/Categories/category/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.infos = data
      }
    )
  }

  itemSelected(bars) {
    console.log("Selected Item", bars);
    this.navCtrl.push(DetailsPage, {
      selectedBar : bars
    });
  }

}
