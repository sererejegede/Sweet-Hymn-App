import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SQLitePorter } from "@ionic-native/sqlite-porter";
import { Storage } from "@ionic/storage";
import { Platform } from "ionic-angular";
import "rxjs/add/operator/map";

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  public database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public http: HttpClient,
              private sqlitePorter: SQLitePorter,
              private sqlite: SQLite,
              private storage: Storage,
              private platform: Platform) {
    this.databaseReady = new BehaviorSubject<boolean>(false);
    this.initDatabase();
  }

  private initDatabase () {
    console.log('Database init start');
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'hymns.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.storage.get('database_filled').then(val => {
          (val) ? this.databaseReady.next(true) : this.fillDatabase();
        })
      })
    })
  }

  private fillDatabase () {
    this.http.get('../assets/sql/hymns.sql', {responseType: "text"}).subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql).then(data => {
        this.databaseReady.next(true);
        this.storage.set('database_filled', true);
      }).catch (err => console.log('Fill error', err));
    })
  }

  public getDatabaseState () {
    return this.databaseReady.asObservable();
  }

  public getAllHymns () {
    return this.database.executeSql('SELECT * FROM lyrics').then(data => {
      const hymns = [];
      console.log('Database data', data.rows.item);
      if (data.rows.length > 0) {
        data.rows.forEach((datum, i) => {
          hymns.push({
            id: datum.item(i).id,
            title: datum.item(i).title,
            chorus: datum.item(i).chorus
          })
        })
      }
      return hymns;
    }, err => {
      console.log(err);
      return [];
    });
  }

}
