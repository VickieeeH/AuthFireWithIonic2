import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Refs
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFire) {

  this.items = this.af.database.list('/items');
  }

}
