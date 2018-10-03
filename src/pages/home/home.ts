import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { HymnPage } from "../hymn/hymn";
import { DatabaseProvider } from "../../providers/database/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public hymns: any[] = [];
  public defaultHymns: any[] = [];
  // private path = `../assets/data/countries.json`;
  public countries: any[] = [];
  public defaultCountries: any[] = [];
  public loader;

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              private databaseProvider: DatabaseProvider,
              private http: HttpClient) {}

  ionViewDidLoad() {
    this.loader = this.loadingController.create({
      content: ''
    });
    this.databaseProvider.getDatabaseState().subscribe(ready => {
      this.loader.present();
      if (ready) {
        this.getHymns();
      } else {
        this.http.get('http://localhost:3000/hymns').subscribe(res => {
          this.hymns = this.defaultHymns = res['data'];
          this.loader.dismiss();
        }, err => {
          console.log(err);
          // this.loader.dismiss();
        })
      }
    });
  }

  public getHymns () {
    this.databaseProvider.getAllHymns().then(res => {
      this.loader.dismiss();
      console.log('hymns', res);
      this.hymns = this.defaultHymns = res;
    }, err => {
      console.log(err);
      this.loader.dismiss();
    })
  }

  // private getCountries() {
  //     this.http.get(this.path).subscribe(res => {
  //       this.defaultCountries = res['data'];
  //       this.countries = this.defaultCountries;
  //       this.loader.dismiss();
  //     }, err => {
  //       console.log(err);
  //     });
  // }

  public filterHymn(search_value) {
    const search = search_value.trim().toLowerCase();
    if (search) {
      this.hymns = this.hymns.filter((hymn) => {
        return (hymn.title.toLowerCase().indexOf(search) > -1)
      })
    } else {
      return this.hymns = this.defaultHymns;
    }
  }

  public goToHymn(hymn) {
    this.navCtrl.push(HymnPage, hymn);
  }

}
