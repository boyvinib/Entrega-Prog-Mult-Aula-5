import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';
import { ContactPage } from '../contact/contact';
import { FilmePage } from '../filme/filme';

/**
 * Generated class for the CrudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud',
  templateUrl: 'crud.html',
  
})
export class CrudPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrudPage');
  }

  goToTabsPage (){
    this.navCtrl.push(ContactPage);
  }

  /*goToInserido (){
    this.navCtrl.push(CrudPage);
  }*/
  
  goToTabsFilme (){
    this.navCtrl.push(FilmePage);
  }

}