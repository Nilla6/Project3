import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

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
  }

}
