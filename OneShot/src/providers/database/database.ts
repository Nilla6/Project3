import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  public db : SQLiteObject;

  constructor(public http: HttpClient, public sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  public createDatabase() {
    this.sqlite.create({name: 'OneShot', location: 'default'})
    .then((db: SQLiteObject) => {
      this.db = db;
      })
      .catch(e => alert(e));
  }

  //création de la table `SIGNALEMENTS`
  public createTable() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `Categories` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT NOT NULL, `image` BLOB )', )
      .then(() => alert('SQL query executed'))
      .catch(e => alert(e));
  }

  public insertInto(signal_details){
    let insert_query = 'INSERT INTO `Categories` (id, name, image) VALUES (?, ?, ?, ?, ?)';
    this.db.executeSql(insert_query, [signal_details.id, 
                                       signal_details.name,
                                      ])
    .then((data) => alert("Data insertion executed"))
    .catch((e) => alert(e));
  }
 
  public getSignalements(){
    return this.db.executeSql('SELECT * FROM Categories', []);
  }

  //méthode de suppression de la table
  public dropDatabase(){
    this.sqlite.deleteDatabase({name: 'OneShot',      
                                location: 'default'
                              })
  }
  
}


