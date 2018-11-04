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
    //this.categoriesRef$ = this.db.list('categories-list');
    this.DatabaseInfo();
  }


  infos;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  DatabaseInfo(){
    this.db.list('/Categories/category/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.infos = data
      }
    )
  }

  itemSelected(infos) {
    console.log("Selected Item", infos);
    this.navCtrl.push(DetailsPage, {
      selectedBar : infos
    });
  }


}
