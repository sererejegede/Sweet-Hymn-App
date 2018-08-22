import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { HymnPage } from "../hymn/hymn";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private path = `../assets/data/countries.json`;
  public countries: any[] = [];
  public defaultCountries: any[] = [];
  public loader;

  constructor(public navCtrl: NavController,
              public loadingController: LoadingController,
              private http: HttpClient) {}

  ionViewDidLoad() {
    this.loader = this.loadingController.create({
      content: ''
    });
    this.loader.present();
    this.getCountries();
  }

  private getCountries() {
      this.http.get(this.path).subscribe(res => {
        this.defaultCountries = res['data'];
        this.countries = this.defaultCountries;
        this.loader.dismiss();
      }, err => {
        console.log(err);
      });
  }

  public filterCountry(search_value) {
    const search = search_value.trim().toLowerCase();
    if (search) {
      this.countries = this.countries.filter((country) => {
        return (country.name.toLowerCase().indexOf(search) > -1)
      })
    } else {
      return this.countries = this.defaultCountries;
    }
  }

  public goToHymn(country) {
    this.navCtrl.push(HymnPage, country);
  }

}
