import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {HttpClient} from "@angular/common/http";

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
  public lyrics: any[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseProvider: DatabaseProvider,
              private http: HttpClient) {
  }

  ionViewDidLoad() {
    this.hymn = this.navParams['data'];
    this.databaseProvider.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.getHymn(this.hymn.id);
      } else {
        this.http.get(`http://localhost:3000/hymns/${this.hymn.id}`).subscribe(res => {
          this.lyrics = res['data'];
        }, err => {
          console.log(err);
        })
      }
    })
  }

  public getHymn (hymn_id) {
    this.databaseProvider.getHymnLyrics(hymn_id).then(res => {
      console.log('lyrics', res);
      this.lyrics = res;
    }, err => console.log(err))
  }

}
