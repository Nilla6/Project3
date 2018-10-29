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

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.categoriesRef$ = this.database.list('categories-list');
  }

  category = {} as Category;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  items = [
    "The Library",
    "Roosters Blues House",
    "Snackbar",
    "The Growler",
    "Proud Larry's",
    "The Levee",
    "The Round Table",
    "Funky's Pizza and Daiquiri Bar",
    "El Mariachi Grill",
    "Kabuki",
    "Toyo Japanese Sushi Bar and Grill",
    "Chili's Grill & Bar",
    "El Agave",
    "Papito's Mexiacan Grill",
    "Pita Pit",
    "Buffalo Wild Wings",
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  DatabaseInfo(){
    this.db.list('/bars/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.bars = data
      }
    )
  }
  

}
