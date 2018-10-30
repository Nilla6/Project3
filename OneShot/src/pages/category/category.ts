import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details'
import { Category } from '../../models/categories';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";

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

  categoriesRef$: AngularFireList<Category[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.categoriesRef$ = this.db.list('categories-list');
    this.DatabaseInfo();
  }

  category = {} as Category;
  bars;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  DatabaseInfo(){
    this.db.list('/Bars/Bar/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.bars = data
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
