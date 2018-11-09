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

 // categoriesRef$: AngularFireList<Category[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    //this.categoriesRef$ = this.db.list('categories-list');
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
  }

<<<<<<< HEAD
  BarInfo(){
    this.db.list('/Categories/Bars/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.bars = data
=======
  CategoryInfo(){
    this.db.list('/Categories/category/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.infos = data
>>>>>>> ab4b3616fa06ac8591c5fc012987577b3cc0928e
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
