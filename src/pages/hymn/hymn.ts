import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HymnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-hymn',
  templateUrl: 'hymn.html',
})
export class HymnPage {

  public hymn;
  public lyrics = 'In Christ alone my hope is found <br>' +
    ' He is my light, my strength, my song <br> ' +
    'This Cornerstone, this solid ground <br> ' +
    'Firm through the fiercest drought and storm <br> ' +
    'What heights of love, what depths of peace <br> ' +
    'When fears are stilled, when strivings cease <br> ' +
    'My Comforter, my All in All <br> ' +
    'Here in the love of Christ I stand <br>'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.hymn = this.navParams['data'];
  }

}
